import {
  Arguments,
  BorderArguments,
  LinearColorArguments,
  ShadowArguments,
} from "./types";

export type {
  Arguments,
  ArgumentMappings,
  BorderArguments,
  LinearColorArguments,
  ShadowArguments,
} from "./types";

export const cssGenerators = {
  optimizedWidth: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `width: 100%;
    width: -moz-available;
  width: -webkit-fill-available;`;
  },

  optimizedHeight: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `height: 100%;
      height: -moz-available;
  height: -webkit-fill-available;`;
  },

  userSelect: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `user-select:none;
      -webkit-user-select: none;
  -moz-user-select: none;`;
    else if (typeof propValue === "string" && propValue)
      return `user-select:${propValue};
      -webkit-user-select: ${propValue};
      -moz-user-select: ${propValue};`;
  },

  border: (propValue: Arguments) => {
    const { color, style, width } = propValue as BorderArguments;

    if (typeof propValue === "object")
      return `border: ${width} ${style} ${color};`;
    else if (typeof propValue === "boolean" && propValue)
      return `border: 1px solid black;`;
    else if (typeof propValue === "string" && propValue)
      return `border: ${propValue};`;
  },

  whiteSpace: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `white-space: nowrap;`;
    else if (typeof propValue === "string" && propValue)
      return `white-space: ${propValue};`;
  },

  textShadow: (propValue: Arguments) => {
    const { blur, color, x, y } = propValue as ShadowArguments;
    if (typeof propValue === "object")
      return `text-shadow: ${x} ${y} ${blur} ${color};`;
    else if (typeof propValue === "boolean" && propValue)
      return `text-shadow: 0 0 5px rgba(0,0,0,0.3);`;
    else if (typeof propValue === "string" && propValue)
      return `text-shadow: ${propValue};`;
  },

  objectFit: (propValue: Arguments) => {
    return `object-fit: ${propValue};`;
  },

  boxShadow: (propValue: Arguments) => {
    const { blur, color, x, y } = propValue as ShadowArguments;
    if (typeof propValue === "object")
      return `box-shadow: ${x} ${y} ${blur} ${color};`;
    else if (typeof propValue === "boolean" && propValue)
      return `box-shadow: 0 0 5px rgba(0,0,0,0.3);`;
    else if (typeof propValue === "string" && propValue)
      return `box-shadow: ${propValue};`;
  },
  linearColor: (propValue: Arguments) => {
    const { colors, deg } = propValue as LinearColorArguments;
    if (colors && colors.length)
      return `background: linear-gradient(${deg || "90deg"}, ${colors.join(
        ", ",
      )});`;
    else if (typeof propValue === "string") return `background: ${propValue};`;
  },

  backgroundClipText: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `-webkit-background-clip: text;
      -moz-background-clip: text;
    `;
  },

  backgroundTranslucent: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `
      background-color: transparent;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
      `;
  },

  textFillColor: (propValue: Arguments) => {
    if (typeof propValue === "string")
      return `-webkit-text-fill-color: ${propValue};
    -moz-text-fill-color: ${propValue};`;
    else if (typeof propValue === "boolean" && propValue)
      return `-webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;`;
  },

  filter: (propValue: Arguments): string => `filter: ${propValue};`,
  position: (propValue: Arguments): string => `position: ${propValue};`,
  marginLeft: (propValue: Arguments): string => `margin-left: ${propValue};`,
  marginRight: (propValue: Arguments): string => `margin-right: ${propValue};`,
  marginTop: (propValue: Arguments): string => `margin-top: ${propValue};`,
  marginBottom: (propValue: Arguments): string =>
    `margin-bottom: ${propValue};`,
  paddingLeft: (propValue: Arguments): string => `padding-left: ${propValue};`,
  paddingRight: (propValue: Arguments): string =>
    `padding-right: ${propValue};`,
  flexDirection: (propValue: Arguments): string =>
    `flex-direction: ${propValue};`,
  paddingTop: (propValue: Arguments): string => `padding-top: ${propValue};`,
  paddingBottom: (propValue: Arguments): string =>
    `padding-bottom: ${propValue};`,
  background: (propValue: Arguments): string => `background: ${propValue};`,
  fontColor: (propValue: Arguments): string => `color: ${propValue};`,
  backgroundColor: (propValue: Arguments): string =>
    `background-color: ${propValue};`,
  opacity: (propValue: Arguments): string => `opacity: ${propValue};`,
  padding: (propValue: Arguments): string => `padding: ${propValue};`,
  margin: (propValue: Arguments): string => `margin: ${propValue};`,
  left: (propValue: Arguments): string => `left: ${propValue};`,
  right: (propValue: Arguments): string => `right: ${propValue};`,
  top: (propValue: Arguments): string => `top: ${propValue};`,
  bottom: (propValue: Arguments): string => `bottom: ${propValue};`,
  color: (propValue: Arguments): string => `color: ${propValue};`,
  width: (propValue: Arguments): string => `width: ${propValue};`,
  height: (propValue: Arguments): string => `height: ${propValue};`,
  transition: (propValue: Arguments): string => `transition: ${propValue};`,
  display: (propValue: Arguments): string => `display: ${propValue};`,
  fontSize: (propValue: Arguments): string => `font-size: ${propValue};`,
  fontWeight: (propValue: Arguments): string => `font-weight: ${propValue};`,
  textAlign: (propValue: Arguments): string => `text-align: ${propValue};`,
  textDecoration: (propValue: Arguments): string =>
    `text-decoration: ${propValue};`,
  mx: (propValue: Arguments): string =>
    `margin-left: ${propValue?.toString()}; margin-right: ${propValue?.toString()};`,
  my: (propValue: Arguments): string =>
    `margin-top: ${propValue?.toString()}; margin-bottom: ${propValue?.toString()};`,
  px: (propValue: Arguments): string =>
    `padding-left: ${propValue?.toString()}; padding-right: ${propValue?.toString()};`,
  py: (propValue: Arguments): string =>
    `padding-top: ${propValue?.toString()}; padding-bottom: ${propValue?.toString()};`,
  pb: (propValue: Arguments): string =>
    `padding-bottom: ${propValue?.toString()};`,
  pr: (propValue: Arguments): string =>
    `padding-right: ${propValue?.toString()};`,
  mb: (propValue: Arguments): string =>
    `margin-bottom: ${propValue?.toString()};`,
  pl: (propValue: Arguments): string =>
    `padding-left: ${propValue?.toString()};`,
  mr: (propValue: Arguments): string =>
    `margin-right: ${propValue?.toString()};`,
  ml: (propValue: Arguments): string =>
    `margin-left: ${propValue?.toString()};`,
  pt: (propValue: Arguments): string =>
    `padding-top: ${propValue?.toString()};`,
  mt: (propValue: Arguments): string => `margin-top: ${propValue?.toString()};`,
  bg: (propValue: Arguments): string => `background: ${propValue?.toString()};`,
  p: (propValue: Arguments): string => `padding: ${propValue?.toString()};`,
  m: (propValue: Arguments): string => `margin: ${propValue?.toString()};`,
  flexShrink: (propValue: Arguments): string => `flex-shrink: ${propValue};`,
  zIndex: (propValue: Arguments): string => `z-index: ${propValue};`,
  fontStyle: (propValue: Arguments): string => `font-style: ${propValue};`,
  alignContent: (propValue: Arguments): string =>
    `align-content: ${propValue};`,
  alignItems: (propValue: Arguments): string => `align-items: ${propValue};`,
  minW: (propValue: Arguments): string => `min-width: ${propValue};`,
  minH: (propValue: Arguments): string => `min-height: ${propValue};`,
  overflowY: (propValue: Arguments): string => `overflow-y: ${propValue};`,
  overflowX: (propValue: Arguments): string => `overflow-x: ${propValue};`,
  overflow: (propValue: Arguments): string => `overflow: ${propValue};`,
  maxHeight: (propValue: Arguments): string => `max-height: ${propValue};`,
  maxWidth: (propValue: Arguments): string => `max-width: ${propValue};`,
  minHeight: (propValue: Arguments): string => `min-height: ${propValue};`,
  maxH: (propValue: Arguments): string => `max-height: ${propValue};`,
  maxW: (propValue: Arguments): string => `max-width: ${propValue};`,
  flexWrap: (propValue: Arguments): string => `flex-wrap: ${propValue};`,
  br: (propValue: Arguments): string => `border-right: ${propValue};`,
  bl: (propValue: Arguments): string => `border-left: ${propValue};`,
  bt: (propValue: Arguments): string => `border-top: ${propValue};`,
  bb: (propValue: Arguments): string => `border-bottom: ${propValue};`,
  bTopRadius: (propValue: Arguments): string =>
    `border-top-right-radius: ${propValue}; border-top-left-radius: ${propValue};`,
  bBottomRadius: (propValue: Arguments): string =>
    `border-bottom-right-radius: ${propValue}; border-bottom-left-radius: ${propValue};`,
  bRadius: (propValue: Arguments): string =>
    `border-radius: ${propValue}; border-radius: ${propValue};`,
  bLeftRadius: (propValue: Arguments): string =>
    `border-top-left-radius: ${propValue}; border-bottom-left-radius: ${propValue};`,
  bRightRadius: (propValue: Arguments): string =>
    `border-top-right-radius: ${propValue}; border-bottom-right-radius: ${propValue};`,
  bRadiusTop: (propValue: Arguments): string =>
    `border-top-left-radius: ${propValue}; border-top-right-radius: ${propValue};`,
  bRadiusBottom: (propValue: Arguments): string =>
    `border-bottom-left-radius: ${propValue}; border-bottom-right-radius: ${propValue};`,
  bRadiusLeft: (propValue: Arguments): string =>
    `border-top-left-radius: ${propValue}; border-bottom-left-radius: ${propValue};`,
  bRadiusRight: (propValue: Arguments): string =>
    `border-top-right-radius: ${propValue}; border-bottom-right-radius: ${propValue};`,
  bRadiusTopLeft: (propValue: Arguments): string =>
    `border-top-left-radius: ${propValue};`,
  bRadiusTopRight: (propValue: Arguments): string =>
    `border-top-right-radius: ${propValue};`,
  bRadiusBottomLeft: (propValue: Arguments): string =>
    `border-bottom-left-radius: ${propValue};`,
  bRadiusBottomRight: (propValue: Arguments): string =>
    `border-bottom-right-radius: ${propValue};`,
  flexGrow: (propValue: Arguments): string => `flex-grow: ${propValue};`,
  gridTemplateColumns: (propValue: Arguments): string =>
    `grid-template-columns: ${propValue};`,
  gridTemplateRows: (propValue: Arguments): string =>
    `grid-template-rows: ${propValue};`,
  gridColumnGap: (propValue: Arguments): string =>
    `grid-column-gap: ${propValue};`,
  gridRowGap: (propValue: Arguments): string => `grid-row-gap: ${propValue};`,
  gridGap: (propValue: Arguments): string => `grid-gap: ${propValue};`,
  gridAutoFlow: (propValue: Arguments): string =>
    `grid-auto-flow: ${propValue};`,
  gridAutoColumns: (propValue: Arguments): string =>
    `grid-auto-columns: ${propValue};`,
  gridAutoRows: (propValue: Arguments): string =>
    `grid-auto-rows: ${propValue};`,
  gridColumnStart: (propValue: Arguments): string =>
    `grid-column-start: ${propValue};`,
  gridColumnEnd: (propValue: Arguments): string =>
    `grid-column-end: ${propValue};`,
  overFlow: (propValue: Arguments): string => `overflow: ${propValue};`,

  gridRowStart: (propValue: Arguments): string =>
    `grid-row-start: ${propValue};`,
  gridRowEnd: (propValue: Arguments): string => `grid-row-end: ${propValue};`,
  gridColumn: (propValue: Arguments): string => `grid-column: ${propValue};`,
  gridRow: (propValue: Arguments): string => `grid-row: ${propValue};`,
  gridArea: (propValue: Arguments): string => `grid-area: ${propValue};`,
  justifyItems: (propValue: Arguments): string =>
    `justify-items: ${propValue};`,
  justifyContent: (propValue: Arguments): string =>
    `justify-content: ${propValue};`,
  justifySelf: (propValue: Arguments): string => `justify-self: ${propValue};`,
  placeItems: (propValue: Arguments): string => `place-items: ${propValue};`,
  placeContent: (propValue: Arguments): string =>
    `place-content: ${propValue};`,
  placeSelf: (propValue: Arguments): string => `place-self: ${propValue};`,
  alignSelf: (propValue: Arguments): string => `align-self: ${propValue};`,
  order: (propValue: Arguments): string => `order: ${propValue};`,
  flexBasis: (propValue: Arguments): string => `flex-basis: ${propValue};`,
  flex: (propValue: Arguments): string => `flex: ${propValue};`,
  gap: (propValue: Arguments): string => `gap: ${propValue};`,
  justify: (propValue: Arguments): string => `justify-content: ${propValue};`,
  scrollBehavior: (propValue: Arguments): string =>
    `scroll-behavior: ${propValue};`,
  scrollSnapType: (propValue: Arguments): string =>
    `scroll-snap-type: ${propValue};`,
  scrollSnapAlign: (propValue: Arguments): string =>
    `scroll-snap-align: ${propValue};`,
  scrollSnapStop: (propValue: Arguments): string =>
    `scroll-snap-stop: ${propValue};`,
  scrollSnapCoordinate: (propValue: Arguments): string =>
    `scroll-snap-coordinate: ${propValue};`,
  scrollSnapDestination: (propValue: Arguments): string =>
    `scroll-snap-destination: ${propValue};`,
  scrollSnapPointsX: (propValue: Arguments): string =>
    `scroll-snap-points-x: ${propValue};`,
  scrollSnapPointsY: (propValue: Arguments): string =>
    `scroll-snap-points-y: ${propValue};`,
  animationName: (propValue: Arguments): string =>
    `animation-name: ${propValue};`,
  animationDuration: (propValue: Arguments): string =>
    `animation-duration: ${propValue};`,
  animationTimingFunction: (propValue: Arguments): string =>
    `animation-timing-function: ${propValue};`,
  animationDelay: (propValue: Arguments): string =>
    `animation-delay: ${propValue};`,
  animationIterationCount: (propValue: Arguments): string =>
    `animation-iteration-count: ${propValue};`,
  transform: (propValue: Arguments): string => `transform: ${propValue};`,
  textWrap: (propValue: Arguments): string => `text-wrap: ${propValue};`,
  gridTemplateAreas: (propValue: Arguments): string =>
    `grid-template-areas: ${propValue};`,
  textRendering: (propValue: Arguments): string =>
    `text-rendering: ${propValue};`,
  scrollbarWidth: (propValue: Arguments): string =>
    `scrollbar-width: ${propValue};`,
  scrollbarColor: (propValue: Arguments): string =>
    `scrollbar-color: ${propValue};`,
};
