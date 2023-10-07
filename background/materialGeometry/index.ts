import {
  Color,
  DodecahedronGeometry,
  ShaderMaterial,
  UniformsUtils,
} from "three";
import SubsurfaceScatteringShader from "../config/SubsurfaceScatteringShader";
import { CustomUniforms } from "../types";

export const defaultUniforms = UniformsUtils.clone(
  SubsurfaceScatteringShader.uniforms,
);

export const DodecahedronGeometryInstance = new DodecahedronGeometry(5, 0);

export const customUniforms: CustomUniforms = {
  diffuse: new Color("#ffffff"),
  thicknessColor: new Color("#ffffff"),
  thicknessDistortion: 0.4,
  thicknessAmbient: 0.01,
  thicknessAttenuation: 0.7,
  thicknessPower: 2,
  thicknessScale: 4,
};

export const subsurfaceMaterial = new ShaderMaterial({
  ...SubsurfaceScatteringShader,
  lights: true,
  uniforms: { ...customUniforms, ...defaultUniforms },
  vertexColors: true,
});
