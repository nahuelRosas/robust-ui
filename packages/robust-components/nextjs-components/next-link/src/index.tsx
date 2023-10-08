import React, { Ref, forwardRef, useEffect, useState } from "react";
import { NextLinkProps, ForwardRefExoticNextLink } from "./types";
import { CreateComponent } from "@robust-ui/constructor";
import { Spinner } from "@robust-ui/spinner";
import Link from "next/link";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticNextLink> =
  forwardRef<unknown, NextLinkProps>(function NextLinkComponent(
    { children, href, ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const Component = CreateComponent<NextLinkProps>({
      ComponentType: "a",
    });

    const arialLabel: string = props["aria-label"]
      ? props["aria-label"]
      : typeof children === "string"
      ? children
      : "Link";

    return (
      <Component
        aria-label={arialLabel}
        ElementType={Link}
        elementName="NextLink"
        display="flex"
        flexDirection="row"
        alignItems="center"
        textDecoration="none"
        href={href}
        textRendering="optimizeLegibility"
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  });
export const NextLink = React.memo(Factory);
