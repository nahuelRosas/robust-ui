import { generateUniqueId } from "@robust-ui/cryptography";
import React from "react";

export function generateUniqueClassName({
  object,
}: {
  object: { [k: string]: string };
}): string {
  const CountChildren = object["children"]
    ? React.Children.count(object["children"])
    : 0;

  const { children, ...objectWithoutChildren } = object;

  try {
    return generateUniqueId({
      object: {
        objectWithoutChildren,
        CountChildren,
      },
      prefix: `Robust-CSS-${object["elementName"]}`,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        `Error while generating unique class name for ${object["elementName"]}: ${error.message}`,
      );
    } else {
      console.error(
        `Unknown error while generating unique class name for ${object["elementName"]}`,
      );
    }
    return "Error";
  }
}
