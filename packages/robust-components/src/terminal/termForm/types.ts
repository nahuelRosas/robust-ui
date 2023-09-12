import { Command } from "../types";

type TermFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  state: {
    lastCommand: {
      command: string;
      date: Date;
    };
    inputValue: string;
    inputCommand: string;
    inputArgs: string[];
    isValidCommand: boolean;
    suggestedCommands: string[];
  };
  allCommands: Command;
  inputRef: React.RefObject<HTMLInputElement>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default TermFormProps;
