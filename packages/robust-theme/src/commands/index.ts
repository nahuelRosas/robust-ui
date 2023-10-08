export type LinearColorArguments = {
  colors: string[];
  deg: string;
};

export type ShadowArguments = {
  color: string;
  x: string;
  y: string;
  blur: string;
};

export type BorderArguments = {
  width: string | number;
  style: string;
  color: string;
};

export type Arguments =
  | string
  | number
  | string[]
  | number[]
  | boolean
  | null
  | undefined
  | Record<string, unknown>
  | Record<string, unknown>[]
  | unknown;

export const commands = {
  optimizedWidth: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `width: 100%;\nwidth: -moz-available;\nwidth: -webkit-fill-available;`;
    return "";
  },
  optimizedHeight: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `height: 100%;\nheight: -moz-available;\nheight: -webkit-fill-available;`;
    return "";
  },
  borderRadius: (propValue: Arguments) => {
    if (typeof propValue === "string")
      return `border-radius: ${propValue};\n-webkit-border-radius: ${propValue};`;
    return "";
  },
  userSelect: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `user-select: none;\n-webkit-user-select: none;\n-moz-user-select: none;`;
    else if (typeof propValue === "string" && propValue)
      return `user-select: ${propValue};\n-webkit-user-select: ${propValue};\n-moz-user-select: ${propValue};`;
    return "";
  },
  border: (propValue: Arguments) => {
    if (typeof propValue === "object") {
      const { color, style, width } = propValue as BorderArguments;
      return `border: ${width} ${style} ${color};`;
    } else if (typeof propValue === "boolean" && propValue)
      return `border: 1px solid black;`;
    else if (typeof propValue === "string" && propValue)
      return `border: ${propValue};`;
    return "";
  },
  boxSizing: (propValue: Arguments) => {
    if (typeof propValue === "string")
      return `box-sizing: ${propValue};\n-moz-box-sizing: ${propValue};\n-webkit-box-sizing: ${propValue};`;
    return "";
  },
  scrollbarColor: (propValue: Arguments) => {
    if (typeof propValue === "object") {
      const { thumb, track } = propValue as Record<string, string>;
      return `scrollbar-color: ${thumb} ${track};`;
    } else if (typeof propValue === "string" && propValue)
      return `scrollbar-color: ${propValue};`;
    return "";
  },
  scrollbarWidth: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `scrollbar-width: thin;`;
    else if (typeof propValue === "string" && propValue)
      return `scrollbar-width: ${propValue};`;
    return "";
  },
  borderColor: (propValue: Arguments) => {
    if (typeof propValue === "string") return `border-color: ${propValue};`;
    return "";
  },
  fontFamily: (propValue: Arguments) => {
    if (typeof propValue === "string") return `font-family: ${propValue};`;
    return "";
  },
  gap: (propValue: Arguments) => {
    if (typeof propValue === "string") return `gap: ${propValue};`;
  },
  whiteSpace: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `white-space: nowrap;`;
    else if (typeof propValue === "string" && propValue)
      return `white-space: ${propValue};`;
    return "";
  },
  textIndent: (propValue: Arguments) => {
    if (typeof propValue === "string")
      return `text-indent: ${propValue};\n-moz-text-indent: ${propValue};`;
    return "";
  },
  textShadow: (propValue: Arguments) => {
    const { blur, color, x, y } = propValue as ShadowArguments;
    if (typeof propValue === "object")
      return `text-shadow: ${x} ${y} ${blur} ${color};`;
    else if (typeof propValue === "boolean" && propValue)
      return `text-shadow: 0 0 5px rgba(0,0,0,0.3);`;
    else if (typeof propValue === "string" && propValue)
      return `text-shadow: ${propValue};`;
    return "";
  },
  boxShadow: (propValue: Arguments) => {
    const { blur, color, x, y } = propValue as ShadowArguments;
    if (typeof propValue === "object")
      return `box-shadow: ${x} ${y} ${blur} ${color};`;
    else if (typeof propValue === "boolean" && propValue)
      return `box-shadow: 0 0 5px rgba(0,0,0,0.3);`;
    else if (typeof propValue === "string" && propValue)
      return `box-shadow: ${propValue};`;
    return "";
  },
  linearColor: (propValue: Arguments) => {
    const { colors, deg } = propValue as LinearColorArguments;
    if (colors && colors.length)
      return `background: linear-gradient(${deg || "90deg"},${colors.join(
        ", ",
      )});`;
    else if (typeof propValue === "string") return `background: ${propValue};`;
    return "";
  },
  backgroundClipText: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `-webkit-background-clip: text;\n-moz-background-clip: text;\nbackground-clip: text;`;
    return "";
  },
  backgroundTranslucent: (propValue: Arguments) => {
    if (typeof propValue === "boolean" && propValue)
      return `background-color: transparent;\n-webkit-background-clip: text;\n-moz-background-clip: text;\n-webkit-text-fill-color: transparent;\n-moz-text-fill-color: transparent;`;
    return "";
  },
  textFillColor: (propValue: Arguments) => {
    if (typeof propValue === "string")
      return `-webkit-text-fill-color: ${propValue};\n-moz-text-fill-color: ${propValue};`;
    else if (typeof propValue === "boolean" && propValue)
      return `-webkit-text-fill-color: transparent;\n-moz-text-fill-color: transparent;`;
    return "";
  },

  mx: (propValue: Arguments) => {
    const value = propValue?.toString();
    return `margin-left: ${value}; margin-right: ${value};`;
  },
  my: (propValue: Arguments) => {
    const value = propValue?.toString();
    return `margin-top: ${value}; margin-bottom: ${value};`;
  },
  px: (propValue: Arguments) => {
    const value = propValue?.toString();
    return `padding-left: ${value}; padding-right: ${value};`;
  },
  py: (propValue: Arguments) => {
    const value = propValue?.toString();
    return `padding-top: ${value}; padding-bottom: ${value};`;
  },

  overflowY: (propValue: Arguments) =>
    typeof propValue === "string" ? `overflow-y: ${propValue};` : "",
  overflowX: (propValue: Arguments) =>
    typeof propValue === "string" ? `overflow-x: ${propValue};` : "",
  overflow: (propValue: Arguments) =>
    typeof propValue === "string" ? `overflow: ${propValue};` : "",
  maxHeight: (propValue: Arguments) => `max-height: ${propValue};`,
  maxWidth: (propValue: Arguments) => `max-width: ${propValue};`,
  minHeight: (propValue: Arguments) => `min-height: ${propValue};`,
  minWidth: (propValue: Arguments) => `min-width: ${propValue};`,
  maxH: (propValue: Arguments) => `max-height: ${propValue};`,
  maxW: (propValue: Arguments) => `max-width: ${propValue};`,
  flexWrap: (propValue: Arguments) => `flex-wrap: ${propValue};`,
  br: (propValue: Arguments) => `border-right: ${propValue};`,
  bl: (propValue: Arguments) => `border-left: ${propValue};`,
  bt: (propValue: Arguments) => `border-top: ${propValue};`,
  bb: (propValue: Arguments) => `border-bottom: ${propValue};`,
  bTopRadius: (propValue: Arguments) =>
    `border-top-right-radius: ${propValue}; border-top-left-radius: ${propValue};`,
  bBottomRadius: (propValue: Arguments) =>
    `border-bottom-right-radius: ${propValue}; border-bottom-left-radius: ${propValue};`,
  bRadius: (propValue: Arguments) => `border-radius: ${propValue};`,
  bLeftRadius: (propValue: Arguments) =>
    `border-top-left-radius: ${propValue}; border-bottom-left-radius: ${propValue};`,
  bRightRadius: (propValue: Arguments) =>
    `border-top-right-radius: ${propValue}; border-bottom-right-radius: ${propValue};`,
  bRadiusTop: (propValue: Arguments) =>
    `border-top-left-radius: ${propValue}; border-top-right-radius: ${propValue};`,
  bRadiusBottom: (propValue: Arguments) =>
    `border-bottom-left-radius: ${propValue}; border-bottom-right-radius: ${propValue};`,
  bRadiusLeft: (propValue: Arguments) =>
    `border-top-left-radius: ${propValue}; border-bottom-left-radius: ${propValue};`,
  bRadiusRight: (propValue: Arguments) =>
    `border-top-right-radius: ${propValue}; border-bottom-right-radius: ${propValue};`,
  bRadiusTopLeft: (propValue: Arguments) =>
    `border-top-left-radius: ${propValue};`,
  bRadiusTopRight: (propValue: Arguments) =>
    `border-top-right-radius: ${propValue};`,
  bRadiusBottomLeft: (propValue: Arguments) =>
    `border-bottom-left-radius: ${propValue};`,
  bRadiusBottomRight: (propValue: Arguments) =>
    `border-bottom-right-radius: ${propValue};`,
  flexGrow: (propValue: Arguments) => `flex-grow: ${propValue};`,
  gridTemplateColumns: (propValue: Arguments) =>
    `grid-template-columns: ${propValue};`,
  gridTemplateRows: (propValue: Arguments) =>
    `grid-template-rows: ${propValue};`,
  gridColumnGap: (propValue: Arguments) => `grid-column-gap: ${propValue};`,
  gridRowGap: (propValue: Arguments) => `grid-row-gap: ${propValue};`,
  gridGap: (propValue: Arguments) => `grid-gap: ${propValue};`,
  gridAutoFlow: (propValue: Arguments) => `grid-auto-flow: ${propValue};`,
  gridAutoColumns: (propValue: Arguments) => `grid-auto-columns: ${propValue};`,
  gridAutoRows: (propValue: Arguments) => `grid-auto-rows: ${propValue};`,
  pb: (propValue: Arguments) => `padding-bottom: ${propValue?.toString()};`,
  pr: (propValue: Arguments) => `padding-right: ${propValue?.toString()};`,
  mb: (propValue: Arguments) => `margin-bottom: ${propValue?.toString()};`,
  pl: (propValue: Arguments) => `padding-left: ${propValue?.toString()};`,
  mr: (propValue: Arguments) => `margin-right: ${propValue?.toString()};`,
  ml: (propValue: Arguments) => `margin-left: ${propValue?.toString()};`,
  pt: (propValue: Arguments) => `padding-top: ${propValue?.toString()};`,
  mt: (propValue: Arguments) => `margin-top: ${propValue?.toString()};`,
  bg: (propValue: Arguments) => `background: ${propValue?.toString()};`,
  p: (propValue: Arguments) => `padding: ${propValue?.toString()};`,
  m: (propValue: Arguments) => `margin: ${propValue?.toString()};`,
  objectFit: (propValue: Arguments) => `object-fit: ${propValue};`,
  filter: (propValue: Arguments) => `filter: ${propValue};`,
  position: (propValue: Arguments) => `position: ${propValue};`,
  marginLeft: (propValue: Arguments) => `margin-left: ${propValue};`,
  marginRight: (propValue: Arguments) => `margin-right: ${propValue};`,
  marginTop: (propValue: Arguments) => `margin-top: ${propValue};`,
  marginBottom: (propValue: Arguments) => `margin-bottom: ${propValue};`,
  paddingLeft: (propValue: Arguments) => `padding-left: ${propValue};`,
  paddingRight: (propValue: Arguments) => `padding-right: ${propValue};`,
  flexDirection: (propValue: Arguments) => `flex-direction: ${propValue};`,
  paddingTop: (propValue: Arguments) => `padding-top: ${propValue};`,
  paddingBottom: (propValue: Arguments) => `padding-bottom: ${propValue};`,
  background: (propValue: Arguments) => `background: ${propValue};`,
  fontColor: (propValue: Arguments) => `color: ${propValue};`,
  backgroundColor: (propValue: Arguments) => `background-color: ${propValue};`,
  opacity: (propValue: Arguments) => `opacity: ${propValue};`,
  padding: (propValue: Arguments) => `padding: ${propValue};`,
  margin: (propValue: Arguments) => `margin: ${propValue};`,
  left: (propValue: Arguments) => `left: ${propValue};`,
  right: (propValue: Arguments) => `right: ${propValue};`,
  top: (propValue: Arguments) => `top: ${propValue};`,
  bottom: (propValue: Arguments) => `bottom: ${propValue};`,
  color: (propValue: Arguments) => `color: ${propValue};`,
  width: (propValue: Arguments) => `width: ${propValue};`,
  height: (propValue: Arguments) => `height: ${propValue};`,
  transition: (propValue: Arguments) => `transition: ${propValue};`,
  display: (propValue: Arguments) => `display: ${propValue};`,
  fontSize: (propValue: Arguments) => `font-size: ${propValue};`,
  fontWeight: (propValue: Arguments) => `font-weight: ${propValue};`,
  textAlign: (propValue: Arguments) => `text-align: ${propValue};`,
  textDecoration: (propValue: Arguments) => `text-decoration: ${propValue};`,
  flexShrink: (propValue: Arguments) => `flex-shrink: ${propValue};`,
  zIndex: (propValue: Arguments) => `z-index: ${propValue};`,
  fontStyle: (propValue: Arguments) => `font-style: ${propValue};`,
  alignContent: (propValue: Arguments) => `align-content: ${propValue};`,
  alignItems: (propValue: Arguments) => `align-items: ${propValue};`,
  minW: (propValue: Arguments) => `min-width: ${propValue};`,
  minH: (propValue: Arguments) => `min-height: ${propValue};`,
  gridColumnStart: (propValue: Arguments) =>
    typeof propValue === "string" ? `grid-column-start: ${propValue};` : "",
  gridColumnEnd: (propValue: Arguments) =>
    typeof propValue === "string" ? `grid-column-end: ${propValue};` : "",
  gridRowStart: (propValue: Arguments) =>
    typeof propValue === "string" ? `grid-row-start: ${propValue};` : "",
  gridRowEnd: (propValue: Arguments) =>
    typeof propValue === "string" ? `grid-row-end: ${propValue};` : "",
  gridRow: (propValue: Arguments) =>
    typeof propValue === "string" ? `grid-row: ${propValue};` : "",
  gridColumn: (propValue: Arguments) =>
    typeof propValue === "string" ? `grid-column: ${propValue};` : "",
  gridColumnStartEnd: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `grid-column-start: ${propValue}; grid-column-end: ${propValue};`
      : "",
  gridRowStartEnd: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `grid-row-start: ${propValue}; grid-row-end: ${propValue};`
      : "",
  cursor: (propValue: Arguments) =>
    typeof propValue === "string" ? `cursor: ${propValue};` : "",
  alignSelf: (propValue: Arguments) =>
    typeof propValue === "string" ? `align-self: ${propValue};` : "",
  justifyItems: (propValue: Arguments) =>
    typeof propValue === "string" ? `justify-items: ${propValue};` : "",
  justifyContent: (propValue: Arguments) =>
    typeof propValue === "string" ? `justify-content: ${propValue};` : "",
  justifySelf: (propValue: Arguments) =>
    typeof propValue === "string" ? `justify-self: ${propValue};` : "",
  placeItems: (propValue: Arguments) =>
    typeof propValue === "string" ? `place-items: ${propValue};` : "",
  placeContent: (propValue: Arguments) =>
    typeof propValue === "string" ? `place-content: ${propValue};` : "",
  placeSelf: (propValue: Arguments) =>
    typeof propValue === "string" ? `place-self: ${propValue};` : "",
  userDrag: (propValue: Arguments) => {
    if (typeof propValue === "string") {
      return `-webkit-user-drag: ${propValue};\n-moz-user-drag: ${propValue};\nuser-drag: ${propValue};`;
    }
    return "";
  },
  userResize: (propValue: Arguments) => {
    if (typeof propValue === "string") {
      return `-webkit-user-resize: ${propValue};\n-moz-user-resize: ${propValue};\nuser-resize: ${propValue};`;
    }
    return "";
  },
  transitionProperty: (propValue: Arguments) =>
    typeof propValue === "string" ? `transition-property: ${propValue};` : "",
  transitionDuration: (propValue: Arguments) =>
    typeof propValue === "string" ? `transition-duration: ${propValue};` : "",
  transitionTimingFunction: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `transition-timing-function: ${propValue};`
      : "",
  transitionDelay: (propValue: Arguments) =>
    typeof propValue === "string" ? `transition-delay: ${propValue};` : "",
  animation: (propValue: Arguments) =>
    typeof propValue === "string" ? `animation: ${propValue};` : "",
  transform: (propValue: Arguments) =>
    typeof propValue === "string" ? `transform: ${propValue};` : "",
  transformOrigin: (propValue: Arguments) =>
    typeof propValue === "string" ? `transform-origin: ${propValue};` : "",
  perspective: (propValue: Arguments) =>
    typeof propValue === "string" ? `perspective: ${propValue};` : "",
  perspectiveOrigin: (propValue: Arguments) =>
    typeof propValue === "string" ? `perspective-origin: ${propValue};` : "",
  backfaceVisibility: (propValue: Arguments) =>
    typeof propValue === "string" ? `backface-visibility: ${propValue};` : "",
  willChange: (propValue: Arguments) =>
    typeof propValue === "string" ? `will-change: ${propValue};` : "",
  letterSpacing: (propValue: Arguments) =>
    typeof propValue === "string" ? `letter-spacing: ${propValue};` : "",
  wordSpacing: (propValue: Arguments) =>
    typeof propValue === "string" ? `word-spacing: ${propValue};` : "",
  lineHeight: (propValue: Arguments) =>
    typeof propValue === "string" ? `line-height: ${propValue};` : "",
  textTransform: (propValue: Arguments) =>
    typeof propValue === "string" ? `text-transform: ${propValue};` : "",
  textOverflow: (propValue: Arguments) =>
    typeof propValue === "string" ? `text-overflow: ${propValue};` : "",
  columnCount: (propValue: Arguments) =>
    typeof propValue === "string" ? `column-count: ${propValue};` : "",
  columnGap: (propValue: Arguments) =>
    typeof propValue === "string" ? `column-gap: ${propValue};` : "",
  columnRule: (propValue: Arguments) =>
    typeof propValue === "string" ? `column-rule: ${propValue};` : "",
  columnWidth: (propValue: Arguments) =>
    typeof propValue === "string" ? `column-width: ${propValue};` : "",
  scrollSnapType: (propValue: Arguments) =>
    typeof propValue === "string" ? `scroll-snap-type: ${propValue};` : "",
  scrollBehavior: (propValue: Arguments) =>
    typeof propValue === "string" ? `scroll-behavior: ${propValue};` : "",
  scrollSnapAlign: (propValue: Arguments) =>
    typeof propValue === "string" ? `scroll-snap-align: ${propValue};` : "",
  animationDelay: (propValue: Arguments) =>
    typeof propValue === "string" ? `animation-delay: ${propValue};` : "",
  animationDirection: (propValue: Arguments) =>
    typeof propValue === "string" ? `animation-direction: ${propValue};` : "",
  animationDuration: (propValue: Arguments) =>
    typeof propValue === "string" ? `animation-duration: ${propValue};` : "",
  animationFillMode: (propValue: Arguments) =>
    typeof propValue === "string" ? `animation-fill-mode: ${propValue};` : "",
  animationIterationCount: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `animation-iteration-count: ${propValue};`
      : "",
  animationName: (propValue: Arguments) =>
    typeof propValue === "string" ? `animation-name: ${propValue};` : "",
  animationPlayState: (propValue: Arguments) =>
    typeof propValue === "string" ? `animation-play-state: ${propValue};` : "",
  animationTimingFunction: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `animation-timing-function: ${propValue};`
      : "",
  objectPosition: (propValue: Arguments) =>
    typeof propValue === "string" ? `object-position: ${propValue};` : "",
  transformStyle: (propValue: Arguments) =>
    typeof propValue === "string" ? `transform-style: ${propValue};` : "",
  placeHolderColor: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `::placeholder { color: ${propValue}; }`
      : "",
  boxShadowInset: (propValue: Arguments) =>
    typeof propValue === "boolean" && propValue
      ? `box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.3);`
      : "",
  userFocus: (propValue: Arguments) =>
    typeof propValue === "boolean" && propValue ? `outline: none;` : "",

  userSelectText: (propValue: Arguments) =>
    typeof propValue === "boolean" && propValue
      ? `user-select: text;\n-webkit-user-select: text;\n-moz-user-select: text;`
      : "",
  userSelectNone: (propValue: Arguments) =>
    typeof propValue === "boolean" && propValue
      ? `user-select: none;\n-webkit-user-select: none;\n-moz-user-select: none;`
      : "",
  userSelectAll: (propValue: Arguments) =>
    typeof propValue === "boolean" && propValue
      ? `user-select: all;\n-webkit-user-select: all;\n-moz-user-select: all;`
      : "",
  userSelectAuto: (propValue: Arguments) =>
    typeof propValue === "boolean" && propValue
      ? `user-select: auto;\n-webkit-user-select: auto;\n-moz-user-select: auto;`
      : "",
  mixBlendMode: (propValue: Arguments) =>
    typeof propValue === "string" ? `mix-blend-mode: ${propValue};` : "",
  clipPath: (propValue: Arguments) =>
    typeof propValue === "string" ? `clip-path: ${propValue};` : "",
  backdropFilter: (propValue: Arguments) =>
    typeof propValue === "string" ? `backdrop-filter: ${propValue};` : "",
  backdropBlur: (propValue: Arguments) =>
    typeof propValue === "string" ? `backdrop-filter: blur(${propValue});` : "",
  backdropBrightness: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `backdrop-filter: brightness(${propValue});`
      : "",
  backdropContrast: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `backdrop-filter: contrast(${propValue});`
      : "",
  backdropGrayscale: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `backdrop-filter: grayscale(${propValue});`
      : "",
  backdropHueRotate: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `backdrop-filter: hue-rotate(${propValue});`
      : "",
  backdropInvert: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `backdrop-filter: invert(${propValue});`
      : "",
  backdropOpacity: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `backdrop-filter: opacity(${propValue});`
      : "",
  backdropSaturate: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `backdrop-filter: saturate(${propValue});`
      : "",
  backdropSepia: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `backdrop-filter: sepia(${propValue});`
      : "",
  backdropDropShadow: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `backdrop-filter: drop-shadow(${propValue});`
      : "",
  textEmphasisPosition: (propValue: Arguments) =>
    typeof propValue === "string"
      ? `text-emphasis-position: ${propValue};`
      : "",
  borderImage: (propValue: Arguments) =>
    typeof propValue === "string" ? `border-image: ${propValue};` : "",
  borderImageOutset: (propValue: Arguments) =>
    typeof propValue === "string" ? `border-image-outset: ${propValue};` : "",
  borderImageRepeat: (propValue: Arguments) =>
    typeof propValue === "string" ? `border-image-repeat: ${propValue};` : "",
  borderImageSlice: (propValue: Arguments) =>
    typeof propValue === "string" ? `border-image-slice: ${propValue};` : "",
  borderImageSource: (propValue: Arguments) =>
    typeof propValue === "string" ? `border-image-source: ${propValue};` : "",
  borderImageWidth: (propValue: Arguments) =>
    typeof propValue === "string" ? `border-image-width: ${propValue};` : "",
  borderBlock: (propValue: Arguments) =>
    typeof propValue === "string" ? `border-block: ${propValue};` : "",
  textDecorationLine: (propValue: Arguments) =>
    typeof propValue === "string" ? `text-decoration-line: ${propValue};` : "",
  textDecorationColor: (propValue: Arguments) =>
    typeof propValue === "string" ? `text-decoration-color: ${propValue};` : "",
  textDecorationStyle: (propValue: Arguments) =>
    typeof propValue === "string" ? `text-decoration-style: ${propValue};` : "",
  textUnderlineOffset: (propValue: Arguments) =>
    typeof propValue === "string" ? `text-underline-offset: ${propValue};` : "",
  textEmphasis: (propValue: Arguments) =>
    typeof propValue === "string" ? `text-emphasis: ${propValue};` : "",
  textEmphasisColor: (propValue: Arguments) =>
    typeof propValue === "string" ? `text-emphasis-color: ${propValue};` : "",
  textEmphasisStyle: (propValue: Arguments) =>
    typeof propValue === "string" ? `text-emphasis-style: ${propValue};` : "",
  scrollSnapPointsX: (propValue: Arguments) =>
    typeof propValue === "string" ? `scroll-snap-points-x: ${propValue};` : "",
  scrollSnapPointsY: (propValue: Arguments) =>
    typeof propValue === "string" ? `scroll-snap-points-y: ${propValue};` : "",
  columnSpan: (propValue: Arguments) =>
    typeof propValue === "string" ? `column-span: ${propValue};` : "",
  hyphens: (propValue: Arguments) =>
    typeof propValue === "string" ? `hyphens: ${propValue};` : "",
  textAlignLast: (propValue: Arguments) =>
    typeof propValue === "string" ? `text-align-last: ${propValue};` : "",
  textJustify: (propValue: Arguments) =>
    typeof propValue === "string" ? `text-justify: ${propValue};` : "",
  fontVariant: (propValue: Arguments) =>
    typeof propValue === "string" ? `font-variant: ${propValue};` : "",
  fontFeatureSettings: (propValue: Arguments) =>
    typeof propValue === "string" ? `font-feature-settings: ${propValue};` : "",
  wordBreak: (propValue: Arguments) =>
    typeof propValue === "string" ? `word-break: ${propValue};` : "",
  wordWrap: (propValue: Arguments) =>
    typeof propValue === "string" ? `word-wrap: ${propValue};` : "",
  overscrollBehavior: (propValue: Arguments) =>
    typeof propValue === "string" ? `overscroll-behavior: ${propValue};` : "",
  overscrollBehaviorX: (propValue: Arguments) =>
    typeof propValue === "string" ? `overscroll-behavior-x: ${propValue};` : "",
  overscrollBehaviorY: (propValue: Arguments) =>
    typeof propValue === "string" ? `overscroll-behavior-y: ${propValue};` : "",
  clipRule: (propValue: Arguments) =>
    typeof propValue === "string" ? `clip-rule: ${propValue};` : "",
  fillRule: (propValue: Arguments) =>
    typeof propValue === "string" ? `fill-rule: ${propValue};` : "",
  isolation: (propValue: Arguments) =>
    typeof propValue === "string" ? `isolation: ${propValue};` : "",
  backdropBlendMode: (propValue: Arguments) =>
    typeof propValue === "string" ? `backdrop-blend-mode: ${propValue};` : "",
  shapeOutside: (propValue: Arguments) =>
    typeof propValue === "string" ? `shape-outside: ${propValue};` : "",
  shapeMargin: (propValue: Arguments) =>
    typeof propValue === "string" ? `shape-margin: ${propValue};` : "",
  shapeImageThreshold: (propValue: Arguments) =>
    typeof propValue === "string" ? `shape-image-threshold: ${propValue};` : "",
  filterBlur: (propValue: Arguments) =>
    typeof propValue === "string" ? `filter: blur(${propValue});` : "",
  filterBrightness: (propValue: Arguments) =>
    typeof propValue === "string" ? `filter: brightness(${propValue});` : "",
  filterContrast: (propValue: Arguments) =>
    typeof propValue === "string" ? `filter: contrast(${propValue});` : "",
  filterGrayscale: (propValue: Arguments) =>
    typeof propValue === "string" ? `filter: grayscale(${propValue});` : "",
  filterHueRotate: (propValue: Arguments) =>
    typeof propValue === "string" ? `filter: hue-rotate(${propValue});` : "",
  filterInvert: (propValue: Arguments) =>
    typeof propValue === "string" ? `filter: invert(${propValue});` : "",
  filterOpacity: (propValue: Arguments) =>
    typeof propValue === "string" ? `filter: opacity(${propValue});` : "",
  filterSaturate: (propValue: Arguments) =>
    typeof propValue === "string" ? `filter: saturate(${propValue});` : "",
  filterSepia: (propValue: Arguments) =>
    typeof propValue === "string" ? `filter: sepia(${propValue});` : "",
  filterDropShadow: (propValue: Arguments) =>
    typeof propValue === "string" ? `filter: drop-shadow(${propValue});` : "",
  willChangeProperty: (propValue: Arguments) =>
    typeof propValue === "string" ? `will-change: ${propValue};` : "",
  maskImage: (propValue: Arguments) =>
    typeof propValue === "string" ? `mask-image: ${propValue};` : "",
  maskSize: (propValue: Arguments) =>
    typeof propValue === "string" ? `mask-size: ${propValue};` : "",
  maskRepeat: (propValue: Arguments) =>
    typeof propValue === "string" ? `mask-repeat: ${propValue};` : "",
  maskPosition: (propValue: Arguments) =>
    typeof propValue === "string" ? `mask-position: ${propValue};` : "",
  maskClip: (propValue: Arguments) =>
    typeof propValue === "string" ? `mask-clip: ${propValue};` : "",
  maskOrigin: (propValue: Arguments) =>
    typeof propValue === "string" ? `mask-origin: ${propValue};` : "",
  maskComposite: (propValue: Arguments) =>
    typeof propValue === "string" ? `mask-composite: ${propValue};` : "",
  backgroundClip: (propValue: Arguments) =>
    typeof propValue === "string" ? `background-clip: ${propValue};` : "",
  imageRendering: (propValue: Arguments) =>
    typeof propValue === "string" ? `image-rendering: ${propValue};` : "",
  shapeRendering: (propValue: Arguments) =>
    typeof propValue === "string" ? `shape-rendering: ${propValue};` : "",
  textRendering: (propValue: Arguments) =>
    typeof propValue === "string" ? `text-rendering: ${propValue};` : "",
  colorInterpolation: (propValue: Arguments) =>
    typeof propValue === "string" ? `color-interpolation: ${propValue};` : "",
  colorRendering: (propValue: Arguments) =>
    typeof propValue === "string" ? `color-rendering: ${propValue};` : "",
};

export type TCommands = typeof commands;
