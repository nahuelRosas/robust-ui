import { Sphere, RNG, isSphereProps } from "./types";

const defaultSphere: Sphere = {
  radius: 1,
  center: [0, 0, 0],
};

const defaultGen: RNG = {
  value: () => Math.random(),
};

export function inSphere({
  buffer,
  sphere: { radius = defaultSphere.radius, center = defaultSphere.center },
  rng = defaultGen,
}: isSphereProps): Float32Array {
  const length = buffer.length;
  const result = new Float32Array(length);

  for (let i = 0; i < length; i += 3) {
    let u = Math.pow(rng.value(), 1 / 3);
    let x, y, z, mag;

    do {
      x = rng.value() * 2 - 1;
      y = rng.value() * 2 - 1;
      z = rng.value() * 2 - 1;
      mag = Math.sqrt(x * x + y * y + z * z);
    } while (mag === 0);

    const scaledX = (u * x) / mag;
    const scaledY = (u * y) / mag;
    const scaledZ = (u * z) / mag;

    result[i] = scaledX * radius + center[0];
    result[i + 1] = scaledY * radius + center[1];
    result[i + 2] = scaledZ * radius + center[2];
  }

  return result;
}
