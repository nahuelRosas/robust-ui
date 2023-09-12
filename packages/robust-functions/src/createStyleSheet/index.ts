export function createStyleSheet({ rules }: { rules?: unknown[] }): string {
  if (!rules) {
    throw new Error("Rules are required");
  }
  return `{${rules.join("\n")}}`;
}
