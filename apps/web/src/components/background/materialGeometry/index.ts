import {
  UniformsUtils,
  DodecahedronGeometry,
  ShaderMaterial,
  Color,
} from "three";
import SubsurfaceScatteringShader from "./SubsurfaceScatteringShader";
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
  SubsurfaceScatteringShader.uniforms
);

export const DodecahedronGeometryInstance = new DodecahedronGeometry(5, 0);

export const customUniforms = {
  diffuse: { value: new Color(0xff00ff) },
  thicknessColor: { value: new Color(0xff00ff) },
  thicknessDistortion: { value: 0.4 },
  thicknessAmbient: { value: 0.01 },
  thicknessAttenuation: { value: 0.7 },
  thicknessPower: { value: 2 },
  thicknessScale: { value: 4 },
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
