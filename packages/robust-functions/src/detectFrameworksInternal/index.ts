export function detectFrameworksInternal(): string[] {
  const detectedFrameworks: string[] = [];

  try {
    const { React, ReactDOM, next, Vue } = window as any;

    if (React && ReactDOM) {
      detectedFrameworks.push("React");
    }

    if (next) {
      detectedFrameworks.push("Next.js");
    }

    if (Vue) {
      detectedFrameworks.push("Vue.js");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error while detecting frameworks: " + error.message);
    } else {
      throw new Error("An unknown error occurred while detecting frameworks.");
    }
  }

  return detectedFrameworks;
}
