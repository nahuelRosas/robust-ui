export interface Sphere {
  radius: number;
  center: number[];
}

export interface RNG {
  value(): number;
}

export interface isSphereProps {
  buffer: number[] | Float32Array;
  sphere: Partial<Sphere>;
  rng?: RNG;
}
