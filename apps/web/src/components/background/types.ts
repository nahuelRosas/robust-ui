import { Vector3, IUniform } from "three";

export interface Instance {
  position: Vector3;
  scale: number;
  velocity: Vector3;
  attraction: number;
  vlimit: number;
}

export interface CustomUniforms {
  [uniform: string]: IUniform<any>;
}
