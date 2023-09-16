import React, { useMemo } from "react";
import { Constructor } from "@robust-ui/constructor";
import { LinkProps } from "./types";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { GetRecoveryFramework } from "@robust-ui/tools";

const Component = Constructor({
  Component: "a",
});

function Factory({
  children,
  colors,
  backgroundColors,
  href,
  color,
  background,
  useColors,
  ...props
}: LinkProps): React.JSX.Element {
  const framework = GetRecoveryFramework();
  const router = useRouter();

  const validation = useMemo(() => {
    return router.pathname === href;
  }, [router.pathname, href]);

  const ComponentToRender = useMemo(() => {
    return framework === "Next.js" ? NextLink : "a";
  }, [framework]);

  const colorization = useMemo(() => {
    return colors || backgroundColors ? true : false;
  }, [colors, backgroundColors]);

  return (
    <Component
      as={ComponentToRender}
      componentName={framework === "Next.js" ? "NextLink" : "Link"}
      display="flex"
      flexDirection="row"
      alignItems="center"
      textDecoration="none"
      optimizedWidth
      aria-label={
        typeof children === "string"
          ? children.replace(/\s/g, "")
          : href || "Link"
      }
      href={href}
      color={
        useColors && colorization && colors
          ? validation
            ? colors["primary"]
            : colors["secondary"]
          : color
      }
      background={
        useColors && colorization && backgroundColors
          ? validation
            ? backgroundColors["primary"]
            : backgroundColors["secondary"]
          : background
      }
      variant={useColors && colorization ? true : false}
      {...props}
    >
      {children}
    </Component>
  );
}

export const Link = React.memo(Factory);
