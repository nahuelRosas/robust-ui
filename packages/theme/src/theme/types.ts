import { TNumbers } from "@/numbers";
import { TColor } from "./colors";
import { TSizes } from "@/sizes";

/**
 * Common props for the theme.
 */
export type TCommonProps = {
  inherit: string;
  initial: string;
  revert: string;
  unset: string;
};

/**
 * Represents the display values for CSS properties.
 */
export type TDisplay = {
  block: string;
  contents: string;
  flex: string;
  flowRoot: string;
  grid: string;
  inline: string;
  inlineBlock: string;
  inlineFlex: string;
  inlineGrid: string;
  inlineTable: string;
  listItem: string;
  none: string;
  table: string;
  tableCaption: string;
  tableCell: string;
  tableColumn: string;
  tableColumnGroup: string;
  tableFooterGroup: string;
  tableHeaderGroup: string;
  tableRow: string;
  tableRowGroup: string;
  webkitBox: string;
  webkitInlineBox: string;
};

/**
 * Represents the size properties for a component.
 */
export type TSizeProps = TCommonProps &
  TSizes & {
    fitContent: string;
    maxContent: string;
    minContent: string;
    webkitFillAvailable: string;
    mozAvailable: string;
  };

/**
 * Represents a type that includes additional properties for optimized width and height,
 * in addition to the properties defined in TSizeProps.
 */
export type TSizePropsOptimizedIncluded = TSizeProps & {
  optimizedWidth?: string;
  optimizedHeight?: string;
};

/**
 * Represents the default theme for the application.
 */
export type TDefaultTheme = {
  linearColor: TColor;
  colorInterpolation: TColor;
  colorRendering: TColor;
  textFillColor: TColor;
  marginLeft: TSizeProps;
  marginRight: TSizeProps;
  marginTop: TSizeProps;
  marginBottom: TSizeProps;
  paddingLeft: TSizeProps;
  paddingRight: TSizeProps;
  paddingTop: TSizeProps;
  paddingBottom: TSizeProps;
  background: TColor;
  fontColor: TColor;
  backgroundColor: TColor;
  padding: TSizeProps;
  margin: TSizeProps;
  left: TSizeProps;
  right: TSizeProps;
  top: TSizeProps;
  bottom: TSizeProps;
  color: TColor;
  mx: TSizeProps;
  my: TSizeProps;
  px: TSizeProps;
  py: TSizeProps;
  pb: TSizeProps;
  pr: TSizeProps;
  mb: TSizeProps;
  pl: TSizeProps;
  mr: TSizeProps;
  ml: TSizeProps;
  pt: TSizeProps;
  mt: TSizeProps;
  bg: TColor;
  p: TSizeProps;
  m: TSizeProps;
  minW: TSizeProps;
  minH: TSizeProps;
  maxHeight: TSizeProps;
  maxWidth: TSizeProps;
  minHeight: TSizeProps;
  minWidth: TSizeProps;
  maxH: TSizeProps;
  maxW: TSizeProps;
  placeHolderColor: TColor;
  borderColor: TColor;
  textDecorationColor: TColor;
  textEmphasisColor: TColor;
  borderRadius: TCommonProps & TSizes;
  gap: TCommonProps & TSizes;
  scrollbarColor: TColor;
  boxSizing: TCommonProps & {
    borderBox: string;
    contentBox: string;
  };
  scrollbarWidth: TCommonProps & {
    auto: string;
    thin: string;
    none: string;
    revertLayer: string;
  };
  objectFit: TCommonProps & {
    none: string;
    contain: string;
    cover: string;
    fill: string;
    scaleDown: string;
  };
  position: TCommonProps & {
    absolute: string;
    fixed: string;
    relative: string;
    static: string;
    sticky: string;
  };
  flexDirection: TCommonProps & {
    row: string;
    rowReverse: string;
    column: string;
    columnReverse: string;
  };
  width: TSizePropsOptimizedIncluded;
  height: TSizePropsOptimizedIncluded;
  textIndent: TSizeProps & TCommonProps & { revertLayer: string };
  display: TDisplay;
  fontSize: TSizeProps & {
    large: string;
    medium: string;
    small: string;
    smaller: string;
    xLarge: string;
    xSmall: string;
    xxLarge: string;
    xxSmall: string;
    xxxLarge: string;
    webkitXxxLarge: string;
  };
  fontWeight: TSizeProps & {
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
    bold: string;
    bolder: string;
    lighter: string;
    normal: string;
  };
  textAlign: TCommonProps & {
    center: string;
    end: string;
    justify: string;
    left: string;
    right: string;
    start: string;
    webkitAuto: string;
    webkitCenter: string;
    webkitLeft: string;
    webkitMatchParent: string;
    webkitRight: string;
  };
  flexShrink: TCommonProps & {
    revertLayer: string;
  };
  zIndex: TCommonProps &
    TNumbers & {
      auto: string;
    };
  fontStyle: TCommonProps & {
    italic: string;
    normal: string;
    oblique: string;
  };
  alignContent: TCommonProps & {
    baseline: string;
    center: string;
    end: string;
    flexEnd: string;
    flexStart: string;
    normal: string;
    spaceAround: string;
    spaceBetween: string;
    spaceEvenly: string;
    start: string;
    stretch: string;
  };
  alignItems: TCommonProps & {
    baseline: string;
    center: string;
    end: string;
    flexEnd: string;
    flexStart: string;
    normal: string;
    selfEnd: string;
    selfStart: string;
    start: string;
    stretch: string;
  };
  overflowY: TCommonProps & {
    auto: string;
    clip: string;
    hidden: string;
    revertLayer: string;
    scroll: string;
    visible: string;
  };
  overflowX: TCommonProps & {
    auto: string;
    clip: string;
    hidden: string;
    revertLayer: string;
    scroll: string;
    visible: string;
  };
  overflow: TCommonProps & {
    auto: string;
    clip: string;
    hidden: string;
    revertLayer: string;
    scroll: string;
    visible: string;
  };
  flexWrap: TCommonProps & {
    noWrap: string;
    wrap: string;
    wrapReverse: string;
  };
  gridTemplateColumns: TCommonProps & {
    auto: string;
    maxContent: string;
    minContent: string;
    none: string;
  };
  gridTemplateRows: TCommonProps & {
    auto: string;
    maxContent: string;
    minContent: string;
    none: string;
  };
  cursor: TCommonProps & {
    alias: string;
    allScroll: string;
    auto: string;
    cell: string;
    colResize: string;
    contextMenu: string;
    copy: string;
    crosshair: string;
    default: string;
    eResize: string;
    ewResize: string;
    grab: string;
    grabbing: string;
    help: string;
    move: string;
    nResize: string;
    neResize: string;
    neswResize: string;
    noDrop: string;
    none: string;
    notAllowed: string;
    nsResize: string;
    nwResize: string;
    nwseResize: string;
    pointer: string;
    progress: string;
    rowResize: string;
    sResize: string;
    seResize: string;
    swResize: string;
    text: string;
    verticalText: string;
    wResize: string;
    wait: string;
    zoomIn: string;
    zoomOut: string;
    webkitGrab: string;
    webkitGrabbing: string;
    webkitZoomIn: string;
    webkitZoomOut: string;
  };
  alignSelf: TCommonProps & {
    auto: string;
    baseline: string;
    center: string;
    end: string;
    flexEnd: string;
    flexStart: string;
    normal: string;
    selfEnd: string;
    selfStart: string;
    start: string;
    stretch: string;
  };
  textWrap: TCommonProps & {
    balance: string;
    noWrap: string;
    pretty: string;
    wrap: string;
  };
  justifyContent: TCommonProps & {
    center: string;
    end: string;
    flexEnd: string;
    flexStart: string;
    left: string;
    normal: string;
    right: string;
    spaceAround: string;
    spaceBetween: string;
    spaceEvenly: string;
    start: string;
    stretch: string;
  };
  textTransform: TCommonProps & {
    capitalize: string;
    lowercase: string;
    mathAuto: string;
    none: string;
    upset: string;
    uppercase: string;
  };
  objectPosition: TCommonProps & {
    bottom: string;
    center: string;
    left: string;
    right: string;
    top: string;
  };
  textDecorationStyle: TCommonProps & {
    solid: string;
    double: string;
    dotted: string;
    dashed: string;
    wavy: string;
  };
  textUnderlineOffset: TCommonProps & {
    auto: string;
  };
  textEmphasis: TCommonProps & {
    none: string;
    accent: string;
    dot: string;
    circle: string;
    disc: string;
  };
  borderImageOutset: TCommonProps;
  borderImageRepeat: TCommonProps & {
    stretch: string;
    repeat: string;
    round: string;
    space: string;
  };
  borderImageSlice: TCommonProps;
  borderImageSource: TCommonProps;
  borderImageWidth: TCommonProps & {
    auto: string;
  };
  borderBlock: TCommonProps & {
    start: string;
    end: string;
  };
  textDecorationLine: TCommonProps & {
    lineThrough: string;
    overline: string;
    underline: string;
    blink: string;
  };
  transformStyle: TCommonProps & {
    flat: string;
    preserve3d: string;
  };
  justifyItems: TCommonProps & {
    auto: string;
    baseline: string;
    center: string;
    end: string;
    start: string;
    stretch: string;
  };
  whiteSpace: TCommonProps & {
    breakSpaces: string;
    normal: string;
    nowrap: string;
    pre: string;
    preLine: string;
    preWrap: string;
    revertLayer: string;
    mozPreSpace: string;
  };
  lineHeight: TCommonProps & {
    normal: string;
    revertLayer: string;
    mozBlockHeight: string;
  } & TSizes;
  textRendering: TCommonProps & {
    auto: string;
    geometricPrecision: string;
    optimizeLegibility: string;
    optimizeSpeed: string;
    revertLayer: string;
  };
  textDecoration: TCommonProps & {
    auto: string;
    blink: string;
    dashed: string;
    double: string;
    lineThrough: string;
    none: string;
    overline: string;
    solid: string;
    underline: string;
    wavy: string;
    revertLayer: string;
  };
  transition: TCommonProps;
  opacity: TCommonProps;
  backgroundClipText: TCommonProps;
  boxShadow: TCommonProps;
  backgroundTranslucent: TCommonProps;
  filter: TCommonProps;
  bTopRadius: TCommonProps;
  bBottomRadius: TCommonProps;
  bRadius: TCommonProps;
  bLeftRadius: TCommonProps;
  bRightRadius: TCommonProps;
  bRadiusTop: TCommonProps;
  bRadiusBottom: TCommonProps;
  bRadiusLeft: TCommonProps;
  bRadiusRight: TCommonProps;
  bRadiusTopLeft: TCommonProps;
  bRadiusTopRight: TCommonProps;
  bRadiusBottomLeft: TCommonProps;
  bRadiusBottomRight: TCommonProps;
  flexGrow: TCommonProps;
  gridColumnGap: TCommonProps;
  gridRowGap: TCommonProps;
  gridGap: TCommonProps;
  gridAutoFlow: TCommonProps;
  gridAutoColumns: TCommonProps;
  gridAutoRows: TCommonProps;
  gridColumnStart: TCommonProps;
  gridColumnEnd: TCommonProps;
  gridRowStart: TCommonProps;
  gridRowEnd: TCommonProps;
  gridRow: TCommonProps;
  gridColumn: TCommonProps;
  gridColumnStartEnd: TCommonProps;
  gridRowStartEnd: TCommonProps;
  justifySelf: TCommonProps;
  placeItems: TCommonProps;
  placeContent: TCommonProps;
  placeSelf: TCommonProps;
  userDrag: TCommonProps;
  userResize: TCommonProps;
  transitionProperty: TCommonProps;
  transitionDuration: TCommonProps;
  transitionTimingFunction: TCommonProps;
  transitionDelay: TCommonProps;
  animation: TCommonProps;
  transform: TCommonProps;
  transformOrigin: TCommonProps;
  perspective: TCommonProps;
  perspectiveOrigin: TCommonProps;
  backfaceVisibility: TCommonProps;
  willChange: TCommonProps;
  letterSpacing: TCommonProps;
  wordSpacing: TCommonProps;
  textOverflow: TCommonProps & {
    ellipsis: string;
    clip: string;
    revertLayer: string;
  };
  columnCount: TCommonProps;
  columnGap: TCommonProps;
  columnRule: TCommonProps;
  columnWidth: TCommonProps;
  scrollSnapType: TCommonProps;
  scrollBehavior: TCommonProps;
  scrollSnapAlign: TCommonProps;
  animationDelay: TCommonProps;
  animationDirection: TCommonProps;
  animationDuration: TCommonProps;
  animationFillMode: TCommonProps;
  animationIterationCount: TCommonProps;
  animationName: TCommonProps;
  animationPlayState: TCommonProps;
  animationTimingFunction: TCommonProps;
  boxShadowInset: TCommonProps;
  userFocus: TCommonProps;
  userSelectText: TCommonProps;
  userSelectNone: TCommonProps;
  userSelectAll: TCommonProps;
  userSelectAuto: TCommonProps;
  mixBlendMode: TCommonProps;
  clipPath: TCommonProps;
  backdropFilter: TCommonProps;
  backdropBlur: TCommonProps;
  backdropBrightness: TCommonProps;
  backdropContrast: TCommonProps;
  backdropGrayscale: TCommonProps;
  backdropHueRotate: TCommonProps;
  backdropInvert: TCommonProps;
  backdropOpacity: TCommonProps;
  backdropSaturate: TCommonProps;
  backdropSepia: TCommonProps;
  backdropDropShadow: TCommonProps;
  borderImage: TCommonProps;
  textEmphasisStyle: TCommonProps;
  textEmphasisPosition: TCommonProps;
  scrollSnapPointsX: TCommonProps;
  scrollSnapPointsY: TCommonProps;
  columnSpan: TCommonProps;
  hyphens: TCommonProps;
  textAlignLast: TCommonProps;
  textJustify: TCommonProps;
  fontVariant: TCommonProps;
  fontFeatureSettings: TCommonProps;
  wordBreak: TCommonProps;
  wordWrap: TCommonProps;
  overscrollBehavior: TCommonProps;
  overscrollBehaviorX: TCommonProps;
  overscrollBehaviorY: TCommonProps;
  clipRule: TCommonProps;
  fillRule: TCommonProps;
  isolation: TCommonProps;
  pointerEvents: TCommonProps & {
    all: string;
    auto: string;
    boundingBox: string;
    fill: string;
    none: string;
    painted: string;
    stroke: string;
    visible: string;
    visibleFill: string;
    visiblePainted: string;
    visibleStroke: string;
  };
  resize: TCommonProps;
  shapeOutside: TCommonProps;
  listStyleType: TCommonProps;
  listStylePosition: TCommonProps;
  listStyleImage: TCommonProps;
  userZoom: TCommonProps;
  maxLines: TCommonProps;
  textDecorationSkipInk: TCommonProps;
  transitionTiming: TCommonProps;
  transitionDurationTiming: TCommonProps;
  scrollMargin: TCommonProps;
  scrollMarginBlock: TCommonProps;
  scrollMarginBlockStart: TCommonProps;
  scrollMarginBlockEnd: TCommonProps;
  scrollMarginInline: TCommonProps;
  scrollMarginInlineStart: TCommonProps;
  scrollMarginInlineEnd: TCommonProps;
  maskImage: TCommonProps;
  maskSize: TCommonProps;
  maskRepeat: TCommonProps;
  maskPosition: TCommonProps;
  maskClip: TCommonProps;
  maskOrigin: TCommonProps;
  maskComposite: TCommonProps;
  maskType: TCommonProps;
  maskBorder: TCommonProps;
  maskBorderOutset: TCommonProps;
  maskBorderRepeat: TCommonProps;
  maskBorderSlice: TCommonProps;
  maskBorderSource: TCommonProps;
  maskBorderWidth: TCommonProps;
  maskBorderRepeatY: TCommonProps;
  maskBorderRepeatX: TCommonProps;
  scrollSnapStop: TCommonProps;
  scrollSnapAlignX: TCommonProps;
  scrollSnapAlignY: TCommonProps;
  scrollSnapStopX: TCommonProps;
  scrollSnapStopY: TCommonProps;
  boxShadowX: TCommonProps;
  boxShadowY: TCommonProps;
  backdropBlendMode: TCommonProps;
  backdropDropShadowX: TCommonProps;
  backdropDropShadowY: TCommonProps;
  backdropDropShadowBlur: TCommonProps;
  backdropDropShadowSpread: TCommonProps;
  gridAutoRowsMin: TCommonProps;
  gridAutoRowsMax: TCommonProps;
  gridAutoColumnsMin: TCommonProps;
  gridAutoColumnsMax: TCommonProps;
  gridColumnStartMin: TCommonProps;
  gridColumnStartMax: TCommonProps;
  gridColumnEndMin: TCommonProps;
  gridColumnEndMax: TCommonProps;
  gridRowStartMin: TCommonProps;
  gridRowStartMax: TCommonProps;
  gridRowEndMin: TCommonProps;
  gridRowEndMax: TCommonProps;
  shapeMargin: TCommonProps;
  shapeImageThreshold: TCommonProps;
  filterBlur: TCommonProps;
  filterBrightness: TCommonProps;
  filterContrast: TCommonProps;
  filterGrayscale: TCommonProps;
  filterHueRotate: TCommonProps;
  filterInvert: TCommonProps;
  filterOpacity: TCommonProps;
  filterSaturate: TCommonProps;
  filterSepia: TCommonProps;
  filterDropShadow: TCommonProps;
  willChangeProperty: TCommonProps;
  backgroundClip: TCommonProps;
  imageRendering: TCommonProps;
  shapeRendering: TCommonProps;
  userSelect: TCommonProps & {
    all: string;
    auto: string;
    none: string;
    text: string;
    contain: string;
    revertLayer: string;
  };
  border: TCommonProps;
  textShadow: TCommonProps;
};
