export function evaluateExpression({
  expression,
}: {
  expression: string;
}): any {
  try {
    const calculatedResult = new Function(`return ${expression}`)();
    return calculatedResult;
  } catch (e) {
    throw e;
  }
}
