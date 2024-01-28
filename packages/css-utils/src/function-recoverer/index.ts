import { normalizeInputKey } from "@robust-ui/tools";
type CommandFunction = (arg: unknown) => string;

/**
 * Recovers a function based on the input property and commands.
 * @param inputProp The input property.
 * @param commands The commands.
 * @returns An object containing the recovered function, a flag indicating if the function is raw, and the correct property name.
 */
export function functionRecoverer({
  inputProp,
  commands,
}: {
  inputProp: string;
  commands: Record<string, unknown>;
}): {
  propFunction: CommandFunction;
  functionRaw: boolean;
  correctPropName: string;
} {
  const { isKeywordPresent, output } = normalizeInputKey({
    inputKey: inputProp,
  });

  const propFunction = commands[output as keyof typeof commands] as
    | CommandFunction
    | undefined;
  return propFunction
    ? { propFunction, functionRaw: isKeywordPresent, correctPropName: output }
    : {
        propFunction: (propValue: unknown) => `${output}: ${propValue};`,
        functionRaw: isKeywordPresent,
        correctPropName: output,
      };
}
