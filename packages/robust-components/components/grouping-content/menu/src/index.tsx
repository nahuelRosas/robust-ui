import { MenuProps, MenuPropsNoGeneric } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { extractStrings } from "@robust-ui/utils";
export * from "./types";
import React, {
  startTransition,
  forwardRef,
  Suspense,
  useState,
  useMemo,
  lazy,
  Ref,
} from "react";

const Button = lazy(() =>
  import("@robust-ui/button").then((module) => ({ default: module.Button }))
);

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<MenuProps>> =
  forwardRef(function MenuComponent({ ...props }, ref): React.JSX.Element {
    const Component = CreateComponent({
      componentType: "menu",
    });

    const cleanedProps = useCleanValue({
      props,
    });

    const { children, multiLanguageSupport, propsButton, ...rest } =
      cleanedProps as MenuPropsNoGeneric;
    const [isOpen, setIsOpen] = useState(false);

    const { otherComponents, strings } = useMemo(
      () =>
        extractStrings({
          children,
          multiLanguageSupport,
        }),
      [children, multiLanguageSupport]
    );

    return (
      <>
        <Suspense>
          <Button
            onClick={() => startTransition(() => setIsOpen(!isOpen))}
            display={isOpen ? "none" : "flex"}
            elementName="MenuButton"
            position="relative"
            fontSizeRaw="3vh"
            cursor="pointer"
            variant="link"
            multiLanguageSupport={{
              en: "Menu",
              es: "Menú",
            }}
            {...propsButton}>
            {strings}
          </Button>
        </Suspense>
        <Component
          onClick={() => startTransition(() => setIsOpen(!isOpen))}
          display={isOpen ? "flex" : "none"}
          position="relative"
          elementName="Menu"
          cursor="pointer"
          p="0"
          m="0"
          ref={ref}
          {...rest}>
          {otherComponents}
        </Component>
      </>
    );
  });

export const Menu = React.memo(Factory);
