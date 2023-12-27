import { Vector3 } from "three";

export interface Instance {
  position: Vector3;
  scale: number;
  velocity: Vector3;
  attraction: number;
  vlimit: number;
}
