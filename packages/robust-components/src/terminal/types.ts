import { BaseProps } from "@/types";

export type Command = (
  | {
      cmd: string;
      description: string;
      component: null;
    }
  | {
      cmd: string;
      description: string;
      component:
        | React.MemoExoticComponent<
            ({ args }: { args: string[] }) => React.JSX.Element
          >
        | (({ args }: { args: string[] }) => React.JSX.Element)
        | null;
    }
)[];

export interface TerminalProps extends BaseProps {
  customCommands?: Command;
}

export default TerminalProps;
