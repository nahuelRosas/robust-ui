import { Command } from "../types";

export type TermOutputProps = {
  state: {
    outputHistory: string[];
  };
  allCommands: Command;
};

export default TermOutputProps;
