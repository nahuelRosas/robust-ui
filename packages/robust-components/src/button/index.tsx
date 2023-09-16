import { Constructor } from "@robust-ui/constructor";
import { defaultTheme } from "@robust-ui/theme";
import React from "react";
import { Spinner, TextMultiStyle } from "..";

const Component = Constructor({
  Component: "button",
});

function Factory({
  children,
  onClick,
  isDisabled,
  colorSchema = "red",
  isLoading,
  variant = "normal",
  ...props
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  colorSchema?: string;
  isLoading?: boolean;
  variant?: string;
  [key: string]: unknown;
}): JSX.Element {
  const templateButton =
    defaultTheme["colorSchemaTheme"][
      colorSchema as keyof (typeof defaultTheme)["colorSchemaTheme"]
    ];

  // const templateSpinner =
  //   defaultTheme["colorSchemaTheme"][
  //     colorSchema as keyof (typeof defaultTheme)["colorSchemaTheme"]
  //   ].spinner[
  //     variant as keyof (typeof defaultTheme)["colorSchemaTheme"]["red"]["spinner"]
  //   ];

  return (
    <Component
      backgroundRaw={
        templateButton[variant as keyof typeof templateButton].backgroundRaw
      }
      colorRaw={templateButton[variant as keyof typeof templateButton].colorRaw}
      borderRaw={templateButton[variant as keyof typeof templateButton].border}
      disabled={isDisabled}
      onClick={onClick}
      justifyContent="center"
      componentName="Button"
      alignItems="center"
      cursor="pointer"
      // hover={{
      //   background: templateButton[variant as keyof typeof templateButton].
      // }}
      fontWeight="600"
      display="flex"
      outline="none"
      mx="0.5rem"
      borderRadius="0.3rem"
      boxShadow={`inset 0 -1px 0 ${defaultTheme.colors.black}, 0 1px 30px ${
        defaultTheme.colors.black
      }, 1px 1px 7px ${
        templateButton[variant as keyof typeof templateButton].backgroundRaw
      }`}
      p="0.7rem"
      {...props}
    >
      {isLoading && (
        <Spinner
          size="1.5rem"
          margin="auto"
          position="relative"
          display={isLoading ? "flex" : "none"}
          model="A"
          // colorRaw={templateSpinner.color}
          // altColor={templateSpinner.altColor as keyof typeof colors}
        />
      )}
      {!isLoading && (
        <TextMultiStyle
          display={!isLoading ? "flex" : "none"}
          position="relative"
        >
          {children}
        </TextMultiStyle>
      )}
    </Component>
  );
}

export const Button = React.memo(Factory);
