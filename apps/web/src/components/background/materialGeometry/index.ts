import {
  UniformsUtils,
  DodecahedronGeometry,
  ShaderMaterial,
  Color,
} from "three";
import SubsurfaceScatteringShader from "./SubsurfaceScatteringShader";
import { CustomUniforms } from "../types";
export interface SubSurfaceMaterialUniformsInterface {
  diffuse?: string | number;
  thicknessColor?: string | number;
  thicknessDistortion?: number;
  thicknessAmbient?: number;
  thicknessAttenuation?: number;
  thicknessPower?: number;
  thicknessScale?: number;
}

export const defaultUniforms = UniformsUtils.clone(
  SubsurfaceScatteringShader.uniforms,
);

export const DodecahedronGeometryInstance = new DodecahedronGeometry(5, 0);

export const customUniforms: CustomUniforms = {
  diffuse: new Color(0xff00ff),
  thicknessColor: new Color(0xff00ff),
  thicknessDistortion: 0.4,
  thicknessAmbient: 0.01,
  thicknessAttenuation: 0.7,
  thicknessPower: 2,
  thicknessScale: 4,
};

const params = SubsurfaceScatteringShader;
const uniforms = UniformsUtils.clone(params.uniforms);

export const subsurfaceMaterial = new ShaderMaterial({
  ...params,
  lights: true,
  uniforms: {
    ...customUniforms,
    ...uniforms,
  },
  vertexColors: true,
});
