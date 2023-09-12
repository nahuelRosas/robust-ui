import { AboutPage } from "./aboutPage";
import { WelcomePage } from "./welcome";
import { ContactPage } from "./contact";
import { CalcPage } from "./calc";
import { HelpPage } from "./help";
import { Command } from "../types";
export const commands: Command = [
  { cmd: "about", description: "about Robust", component: AboutPage },
  { cmd: "welcome", description: "welcome to Robust", component: WelcomePage },
  { cmd: "clear", description: "clear the terminal", component: null },
  { cmd: "cls", description: "clear the terminal", component: null },
  {
    cmd: "contact",
    description: "contact information",
    component: ContactPage,
  },
  {
    cmd: "calc",
    description: "calculate an expression",
    component: CalcPage,
  },
  { cmd: "help", description: "list available commands", component: HelpPage },
];
