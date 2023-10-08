import chroma from "chroma-js";
import {
  Color,
  DodecahedronGeometry,
  InstancedBufferAttribute,
  InstancedMesh,
} from "three";
import { MathUtils } from "three";
import { NUM_INSTANCES } from "../config";

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

  const geometry = mesh.geometry as DodecahedronGeometry;
  geometry.setAttribute(
    "color",
    new InstancedBufferAttribute(new Float32Array(colors), 3),
  );
}
