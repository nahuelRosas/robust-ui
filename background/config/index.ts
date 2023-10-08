import chroma from "chroma-js";
import { Object3D, Vector3 } from "three";
import { Instance } from "../types";
import { MathUtils } from "three";
let colorScale = chroma.scale([chroma.random(), chroma.random()]);
const target = new Vector3();
const dummyObject = new Object3D();
const dummyVector = new Vector3();
const NUM_INSTANCES = 500;
const instances: Instance[] = [];

const randFloatSpread = MathUtils.randFloatSpread;
const randFloat = MathUtils.randFloat;

for (let i = 0; i < NUM_INSTANCES; i++) {
  instances.push({
    position: new Vector3(
      randFloatSpread(200),
      randFloatSpread(200),
      randFloatSpread(400),
    ),
    scale: randFloat(0.2, 1),
    velocity: new Vector3(
      randFloatSpread(2),
      randFloatSpread(2),
      randFloatSpread(2),
    ),
    attraction: 0.0025 + randFloat(0, 0.01),
    vlimit: 0.3 + randFloat(0, 0.2),
  });
}

export {
  colorScale,
  target,
  dummyObject,
  dummyVector,
  NUM_INSTANCES,
  instances,
};
