import { normalizeInputKey } from "@/normalize-input-key";
export function FunctionRecoverer({
  inputProp,
  commands,
}: {
  inputProp: string;
  commands: Record<string, unknown>;
}): { propFunction: Function; functionRaw: boolean; correctPropName: string } {
  const { isKeywordPresent, output } = normalizeInputKey({
    inputKey: inputProp,
  });
  const propFunction = commands[output as keyof typeof commands] as Function;
  return propFunction
    ? { propFunction, functionRaw: isKeywordPresent, correctPropName: output }
    : {
        propFunction: (propValue: unknown) => `${output}: ${propValue};`,
        functionRaw: isKeywordPresent,
        correctPropName: output,
      };
}
