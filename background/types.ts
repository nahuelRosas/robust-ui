import { Vector3, Color } from "three";

export interface Instance {
  position: Vector3;
  scale: number;
  velocity: Vector3;
  attraction: number;
  vlimit: number;
}

export interface CustomUniforms {
  diffuse: Color;
  thicknessColor: Color;
  thicknessDistortion: number;
  thicknessAmbient: number;
  thicknessAttenuation: number;
  thicknessPower: number;
  thicknessScale: number;
}
