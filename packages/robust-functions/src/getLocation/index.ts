interface LocationInfo {
  fullPath: string | null;
  path: string | null;
  file: string | null;
  fileNoExt: string | undefined;
}

export function getLocation(): LocationInfo {
  let pathParts: RegExpMatchArray | null = null;

  try {
    throw new Error();
  } catch (e) {
    const error = e as Error;
    const stackLines = error.stack!.split("\n");
    const callerIndex = stackLines.findIndex((line) =>
      line.match(/http[s]?:\/\//)
    );

    if (callerIndex !== -1) {
      pathParts = stackLines[callerIndex].match(
        /((http[s]?:\/\/.+\/)([^\/]+\.js)):/
      );
    }
  }

  return {
    fullPath: pathParts && pathParts[1],
    path: pathParts && pathParts[2],
    file: pathParts && pathParts[3],
    fileNoExt: (() => {
      const file = pathParts && pathParts[3];
      if (!file) return undefined;
      const parts = file.split(".");
      return parts.slice(0, -1).join(".");
    })(),
  };
}
