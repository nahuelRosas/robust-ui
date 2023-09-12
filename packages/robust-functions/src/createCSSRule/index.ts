export function createCSSRule({
  selector,
  styles,
}: {
  selector: string;
  styles: string;
}): string {
  if (!selector) {
    throw new Error("Selector is required");
  } else if (!styles) {
    throw new Error("Styles are required");
  }

  return `.${selector} {\n${styles}\n}`;
}
