import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { NUM_INSTANCES, instances, dummyObject, dummyVector } from "../config";
import { generateRandomColor } from "../generateRandomColor";
import {
  DodecahedronGeometryInstance,
  subsurfaceMaterial,
} from "../materialGeometry";
import { updateInstanceColors } from "../updateInstanceColors";
import {
  Color,
  InstancedMesh,
  Vector3,
  Matrix4,
  DodecahedronGeometry,
  PointLight,
  Vector2,
} from "three";

const mousePosition = new Vector3(0, 0, -1);
const targetVector = new Vector3();
const mouseColor = new Color(0xffc0c0);
const dummyObjectMatrix = new InstancedMesh(
  new DodecahedronGeometry(),
  subsurfaceMaterial,
  0,
).matrix as Matrix4;

function debounce<T extends (...args: any[]) => any>(fn: T, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  } as T;
}

export function SceneRenderer() {
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

  const meshRef = useRef<InstancedMesh>(null);
  const lightRef = useRef<PointLight>(null);
  const { camera, scene, gl } = useThree();
  const composer = useMemo(() => new EffectComposer(gl), [gl]);
  const renderPass = useMemo(
    () => new RenderPass(scene, camera),
    [scene, camera],
  );
  const FXAA = useMemo(() => new ShaderPass(FXAAShader), []);
  const unrealBloomPass = useMemo(
    () =>
      new UnrealBloomPass(
        new Vector2(window.innerWidth, window.innerHeight),
        0.5,
        10.4,
        10.85,
      ),
    [],
  );

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
      const { position, scale } = instances[i];
      dummyObject.position.copy(position);
      dummyObject.scale.set(scale, scale, scale);
      dummyObject.updateMatrix();
      dummyObjectMatrix.copy(dummyObject.matrix);
      meshRef.current!.setMatrixAt(i, dummyObjectMatrix);
    }
    updateInstanceColors({ mesh: meshRef.current! });
    meshRef.current!.instanceMatrix.needsUpdate = true;
  }, []);

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
      const { position, scale, velocity, attraction, vlimit } = instances[i];

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
        ref={meshRef}
        args={[DodecahedronGeometryInstance, subsurfaceMaterial, NUM_INSTANCES]}
      />
      <pointLight
        ref={lightRef}
        power={100000}
        color={mouseColor}
        intensity={3000}
      />
    </>
  );
}
