import { ForwardRefExoticMenu, MenuProps, MenuPropsClean } from "./types";
import { StyledText } from "@robust-ui/nested-styled-text";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { CreateComponent } from "@robust-ui/constructor";
import React, { Ref, forwardRef, useState } from "react";
import { Icon } from "@robust-ui/icon";
import { Flex } from "@robust-ui/flex";
const Factory: React.ForwardRefExoticComponent<ForwardRefExoticMenu> =
  forwardRef<unknown, MenuProps>(function MenuComponent(
    { ...props }: MenuProps,
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const Component = CreateComponent({
      ComponentType: "menu",
    });

    const { propsButton, ...rest } = useCleanValue({
      props,
    }) as MenuPropsClean;
    const [isOpen, setIsOpen] = useState(false);
    const {
      sizeIcon,
      fontSize,
      fontSizeRaw,
      iconMenu,
      heading,
      color,
      colorRaw,
      backgroundColor,
      backgroundColorRaw,
      fontWeight,
      fontWeightRaw,
      textTransform,
      textTransformRaw,
    } = propsButton || {};
    return (
      <>
        {(heading || iconMenu) && (
          <Component
            m="0"
            p="0"
            cursor="pointer"
            display={isOpen ? "none" : "flex"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {heading && (
              <StyledText
                multiLanguageSupport={
                  typeof heading !== "string" ? heading : undefined
                }
                color={color}
                colorRaw={colorRaw}
                backgroundColor={backgroundColor}
                backgroundColorRaw={backgroundColorRaw}
                fontSize={fontSize}
                fontSizeRaw={fontSizeRaw}
                fontWeights={fontWeight && [fontWeight]}
                fontWeightsRaw={fontWeightRaw}
                textTransform={textTransform}
                textTransformRaw={textTransformRaw}
              >
                {typeof heading === "string" ? heading : undefined}
              </StyledText>
            )}
            {iconMenu && (
              <Icon
                icon={iconMenu}
                size={sizeIcon}
                color={color}
                colorRaw={colorRaw}
                backgroundColor={backgroundColor}
                backgroundColorRaw={backgroundColorRaw}
              />
            )}
          </Component>
        )}
        {!heading && !iconMenu && (
          <Component
            m="0"
            cursor="pointer"
            p="0"
            display={isOpen ? "none" : "flex"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <StyledText
              color={color}
              colorRaw={colorRaw}
              backgroundColor={backgroundColor}
              backgroundColorRaw={backgroundColorRaw}
              fontSize={fontSize}
              fontSizeRaw={fontSizeRaw}
              fontWeights={fontWeight && [fontWeight]}
              fontWeightsRaw={fontWeightRaw}
              textTransform={textTransform}
              textTransformRaw={textTransformRaw}
            >
              Menu
            </StyledText>
          </Component>
        )}
        {
          <Flex
            display={isOpen ? "flex" : "none"}
            flexDirection="column"
            onClick={() => setIsOpen(!isOpen)}
            {...rest}
          >
            {props.children}
          </Flex>
        }
      </>
    );
  });

export const Menu = React.memo(Factory);
