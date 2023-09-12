/**
 * Generates a random color based on a given seed string and return format.
 *
 * @param options The options object containing the seed string and the return format.
 * @returns A random color in the specified format.
 */
export function randomColor(
  { seed, format }: { seed?: string; format?: "hex" | "hsl" } = {
    format: "hsl",
  }
): string {
  // XORShift random number generator
  function xorShift(seed: string) {
    let x = 123456789;
    let y = 362436069;
    let z = 521288629;
    let w = hashStringToInt(seed);

    function hashStringToInt(str: string) {
      let hash = 0;
      if (str.length === 0) return hash;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    }

    return function () {
      const t = x ^ (x << 11);
      x = y;
      y = z;
      z = w;
      w = w ^ (w >>> 19) ^ (t ^ (t >>> 8));
      return w / 0x7fffffff; // Normalize to [0, 1]
    };
  }

  const random = xorShift(seed || "default_seed");

  if (format === "hsl") {
    // Use the random number generator to determine the hue value of the color
    const hue = Math.floor(random() * 360);

    // Return the HSL color string
    return `hsl(${hue}, 100%, 70%)`;
  } else {
    // Generate a random color in hexadecimal format
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const component = Math.floor(random() * 16).toString(16); // Generate valid hex component
      color += component.replace(/[^a-f0-9]/gi, ""); // Remove invalid characters
    }
    return color.toUpperCase();
  }
}
