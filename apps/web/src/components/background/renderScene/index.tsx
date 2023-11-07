import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { useThree, useFrame } from "@react-three/fiber";
import {
  DodecahedronGeometryInstance,
  subsurfaceMaterial,
} from "../materialGeometry";
import {
  Color,
  InstancedMesh,
  Vector3,
  Matrix4,
  DodecahedronGeometry,
  PointLight,
  Vector2,
  Object3D,
  MathUtils,
  InstancedBufferAttribute,
} from "three";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import chroma from "chroma-js";
import { Instance } from "../types";
const NUM_INSTANCES = 500;

function debounce<T extends (...args: any[]) => any>(fn: T, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  } as T;
}

export function updateInstanceColors({
  mesh,
  scale,
}: {
  mesh: InstancedMesh;
  scale?: chroma.Scale<chroma.Color>;
}): void {
  let colorScale = scale || chroma.scale(["#10B981", "#6366F1"]);
  const randFloat = MathUtils.randFloat;
  const colors: number[] = [];
  for (let i = 0; i < NUM_INSTANCES; i++) {
    const color = new Color(colorScale(randFloat(0, 1)).hex());
    colors.push(color.r, color.g, color.b);
  }
  const geometry = mesh.geometry;
  geometry.setAttribute(
    "color",
    new InstancedBufferAttribute(new Float32Array(colors), 3)
  );
}

export function generateRandomColor({ mesh }: { mesh: InstancedMesh }) {
  const scale = chroma.scale([chroma.random(), chroma.random()]);
  updateInstanceColors({ mesh, scale });
}

export function SceneRenderer() {
  const meshRef = useRef<InstancedMesh>(null);
  const lightRef = useRef<PointLight>(null);
  const { camera, scene, gl } = useThree();
  const dummyVector = new Vector3();
  const targetVector = new Vector3();
  const mousePosition = new Vector3(0, 0, -1);
  const mouseColor = new Color(0xffc0c0);
  const randFloatSpread = MathUtils.randFloatSpread;
  const randFloat = MathUtils.randFloat;
  const dummyObject = useMemo(() => new Object3D(), []);
  const instances = useMemo(() => {
    const instancesArr: Instance[] = [];
    for (let i = 0; i < NUM_INSTANCES; i++) {
      instancesArr.push({
        position: new Vector3(
          randFloatSpread(200),
          randFloatSpread(200),
          randFloatSpread(400)
        ),
        scale: randFloat(0.2, 1),
        velocity: new Vector3(
          randFloatSpread(2),
          randFloatSpread(2),
          randFloatSpread(2)
        ),
        attraction: 0.0025 + randFloat(0, 0.01),
        vlimit: 0.3 + randFloat(0, 0.2),
      });
    }
    return instancesArr;
  }, [randFloat, randFloatSpread]);
  const composer = useMemo(() => new EffectComposer(gl), [gl]);
  const renderPass = useMemo(
    () => new RenderPass(scene, camera),
    [scene, camera]
  );
  const FXAA = useMemo(() => new ShaderPass(FXAAShader), []);
  const unrealBloomPass = useMemo(
    () =>
      new UnrealBloomPass(
        new Vector2(window.innerWidth, window.innerHeight),
        0.5,
        10.4,
        10.85
      ),
    []
  );
  const dummyObjectMatrix = new InstancedMesh(
    new DodecahedronGeometry(),
    subsurfaceMaterial,
    0
  ).matrix as Matrix4;
  const onMouseMove = (event: THREE.Event) => {
    debounce(() => {
      if (event.target === null) {
        return;
      }
      const { clientX, clientY } = event as MouseEvent;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
      if (mousePosition.x === x && mousePosition.y === y) {
        return;
      }
      mousePosition.set(x, y, -1);
    }, 0)();
  };
  const generateRandomColorOnClick = useCallback(() => {
    generateRandomColor({ mesh: meshRef.current! });
  }, []);
  useEffect(() => {
    composer.addPass(renderPass);
    composer.addPass(FXAA);
    composer.addPass(unrealBloomPass);
    return () => {
      composer.removePass(FXAA);
      composer.removePass(renderPass);
      composer.removePass(unrealBloomPass);
    };
  }, [composer, renderPass, FXAA, unrealBloomPass]);

  const updateMesh = useCallback(() => {
    for (let i = 0; i < NUM_INSTANCES; i++) {
      const instance = instances[i];
      if (!instance) {
        continue;
      }
      const { position, scale } = instance;
      dummyObject.position.copy(position);
      dummyObject.scale.set(scale, scale, scale);
      dummyObject.updateMatrix();
      dummyObjectMatrix.copy(dummyObject.matrix);
      meshRef.current!.setMatrixAt(i, dummyObjectMatrix);
    }
    updateInstanceColors({ mesh: meshRef.current! });
    meshRef.current!.instanceMatrix.needsUpdate = true;
  }, [dummyObject, dummyObjectMatrix, instances]);

  useEffect(() => {
    updateMesh();
  }, [updateMesh]);

  const onMouseMoveCB = useCallback(onMouseMove, [onMouseMove]);

  useLayoutEffect(() => {
    window.addEventListener("pointermove", onMouseMoveCB);
    window.addEventListener("click", generateRandomColorOnClick);
    return () => {
      window.removeEventListener("pointermove", onMouseMoveCB);
      window.removeEventListener("click", generateRandomColorOnClick);
    };
  }, [generateRandomColorOnClick, onMouseMoveCB]);

  useFrame(() => {
    targetVector.copy(mousePosition);
    targetVector.multiplyScalar(100);
    targetVector.add(camera.position);
    lightRef.current!.position.copy(targetVector);
    for (let i = 0; i < NUM_INSTANCES; i++) {
      const instance = instances[i];
      if (!instance) {
        continue;
      }
      const { position, scale, velocity, attraction, vlimit } = instance;
      dummyVector
        .copy(targetVector)
        .sub(position)
        .normalize()
        .multiplyScalar(attraction);
      velocity.add(dummyVector).clampScalar(-vlimit, vlimit);
      position.add(velocity);
      dummyObject.position.copy(position);
      dummyObject.scale.set(scale, scale, scale);
      dummyObject.lookAt(dummyVector.copy(position).add(velocity));
      dummyObject.updateMatrix();
      dummyObjectMatrix.copy(dummyObject.matrix);
      meshRef.current!.setMatrixAt(i, dummyObjectMatrix);
    }
    meshRef.current!.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh
        args={[DodecahedronGeometryInstance, subsurfaceMaterial, NUM_INSTANCES]}
        ref={meshRef}
      />
      <pointLight
        ref={lightRef}
        power={100000}
        color={mouseColor}
        intensity={30000}
      />
    </>
  );
}
