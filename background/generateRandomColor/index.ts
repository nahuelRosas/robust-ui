import chroma from "chroma-js";
import { InstancedMesh } from "three";
import { updateInstanceColors } from "../updateInstanceColors";

export function generateRandomColor({ mesh }: { mesh: InstancedMesh }) {
  const scale = chroma.scale([chroma.random(), chroma.random()]);
  updateInstanceColors({ mesh, scale });
}
