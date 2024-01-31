export * from "./colors";
export * from "./numbers";
export * from "./sizes";
import { sizes, TSizes } from "./sizes";
import { colors, TColor } from "./colors";
import { numbers, TNumbers } from "./numbers";

const commonProps = {
  inherit: "inherit",
  initial: "initial",
  revert: "revert",
  unset: "unset",
};

type TCommonProps = typeof commonProps;
type TDisplay = {
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

const sizeProps: TCommonProps &
  TSizes & {
    fitContent: string;
    maxContent: string;
    minContent: string;
    webkitFillAvailable: string;
    mozAvailable: string;
  } = {
  ...commonProps,
  fitContent: "fit-content",
  maxContent: "max-content",
  minContent: "min-content",
  webkitFillAvailable: "-webkit-fill-available",
  mozAvailable: "-moz-available",
  ...sizes,
};

type TSizeProps = typeof sizeProps;

type TSizePropsOptimizedIncluded = TSizeProps & {
  optimizedWidth?: string;
  optimizedHeight?: string;
};

export const defaultTheme: {
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
} = {
  linearColor: Object.assign({}, colors),
  colorInterpolation: Object.assign({}, colors),
  colorRendering: Object.assign({}, colors),
  textFillColor: Object.assign({}, colors),
  marginLeft: Object.assign({}, sizeProps),
  marginRight: Object.assign({}, sizeProps),
  marginTop: Object.assign({}, sizeProps),
  marginBottom: Object.assign({}, sizeProps),
  paddingLeft: Object.assign({}, sizeProps),
  paddingRight: Object.assign({}, sizeProps),
  paddingTop: Object.assign({}, sizeProps),
  paddingBottom: Object.assign({}, sizeProps),
  background: Object.assign({}, colors),
  fontColor: Object.assign({}, colors),
  backgroundColor: Object.assign({}, colors),
  padding: Object.assign({}, sizeProps),
  margin: Object.assign({}, sizeProps),
  left: Object.assign({}, sizeProps),
  right: Object.assign({}, sizeProps),
  top: Object.assign({}, sizeProps),
  bottom: Object.assign({}, sizeProps),
  color: Object.assign({}, colors),
  mx: Object.assign({}, sizeProps),
  my: Object.assign({}, sizeProps),
  px: Object.assign({}, sizeProps),
  py: Object.assign({}, sizeProps),
  pb: Object.assign({}, sizeProps),
  pr: Object.assign({}, sizeProps),
  mb: Object.assign({}, sizeProps),
  pl: Object.assign({}, sizeProps),
  mr: Object.assign({}, sizeProps),
  ml: Object.assign({}, sizeProps),
  pt: Object.assign({}, sizeProps),
  mt: Object.assign({}, sizeProps),
  bg: Object.assign({}, colors),
  p: Object.assign({}, sizeProps),
  m: Object.assign({}, sizeProps),
  minW: Object.assign({}, sizeProps),
  minH: Object.assign({}, sizeProps),
  maxHeight: Object.assign({}, sizeProps),
  maxWidth: Object.assign({}, sizeProps),
  minHeight: Object.assign({}, sizeProps),
  minWidth: Object.assign({}, sizeProps),
  maxH: Object.assign({}, sizeProps),
  maxW: Object.assign({}, sizeProps),
  placeHolderColor: Object.assign({}, colors),
  borderColor: Object.assign({}, colors),
  textDecorationColor: Object.assign({}, colors),
  textEmphasisColor: Object.assign({}, colors),
  borderRadius: {
    ...commonProps,
    ...sizes,
  },
  gap: {
    ...commonProps,
    ...sizes,
  },
  scrollbarColor: {
    ...commonProps,
    ...colors,
  },
  boxSizing: {
    ...commonProps,
    borderBox: "border-box",
    contentBox: "content-box",
  },
  scrollbarWidth: {
    ...commonProps,
    auto: "auto",
    thin: "thin",
    none: "none",
    revertLayer: "revert-layer",
  },
  objectFit: {
    ...commonProps,
    none: "none",
    contain: "contain",
    cover: "cover",
    fill: "fill",
    scaleDown: "scale-down",
  },
  position: {
    ...commonProps,
    absolute: "absolute",
    fixed: "fixed",
    relative: "relative",
    static: "static",
    sticky: "sticky",
  },
  flexDirection: {
    ...commonProps,
    row: "row",
    rowReverse: "row-reverse",
    column: "column",
    columnReverse: "column-reverse",
  },
  width: {
    ...commonProps,
    fitContent: "fit-content",
    maxContent: "max-content",
    minContent: "min-content",
    webkitFillAvailable: "-webkit-fill-available",
    mozAvailable: "-moz-available",
    optimizedWidth: `-moz-available;width: -webkit-fill-available`,
    ...sizes,
  },
  height: {
    ...commonProps,
    fitContent: "fit-content",
    maxContent: "max-content",
    minContent: "min-content",
    webkitFillAvailable: "-webkit-fill-available",
    mozAvailable: "-moz-available",
    optimizedHeight: `-moz-available;height: -webkit-fill-available`,
    ...sizes,
  },
  textIndent: {
    ...sizeProps,
    revertLayer: "revert-layer",
  },
  display: {
    ...commonProps,
    block: "block",
    contents: "contents",
    flex: "flex",
    flowRoot: "flow-root",
    grid: "grid",
    inline: "inline",
    inlineBlock: "inline-block",
    inlineFlex: "inline-flex",
    inlineGrid: "inline-grid",
    inlineTable: "inline-table",
    listItem: "list-item",
    none: "none",
    table: "table",
    tableCaption: "table-caption",
    tableCell: "table-cell",
    tableColumn: "table-column",
    tableColumnGroup: "table-column-group",
    tableFooterGroup: "table-footer-group",
    tableHeaderGroup: "table-header-group",
    tableRow: "table-row",
    tableRowGroup: "table-row-group",
    webkitBox: "-webkit-box",
    webkitInlineBox: "-webkit-inline-box",
  },
  fontSize: {
    ...sizeProps,
    large: "large",
    medium: "medium",
    small: "small",
    smaller: "smaller",
    xLarge: "x-large",
    xSmall: "x-small",
    xxLarge: "xx-large",
    xxSmall: "xx-small",
    xxxLarge: "xxx-large",
    webkitXxxLarge: "-webkit-xxx-large",
  },
  fontWeight: {
    ...sizeProps,
    "100": "100",
    "200": "200",
    "300": "300",
    "400": "400",
    "500": "500",
    "600": "600",
    "700": "700",
    "800": "800",
    "900": "900",
    bold: "bold",
    bolder: "bolder",
    lighter: "lighter",
    normal: "normal",
  },
  textAlign: {
    ...commonProps,
    center: "center",
    end: "end",
    justify: "justify",
    left: "left",
    right: "right",
    start: "start",
    webkitAuto: "-webkit-auto",
    webkitCenter: "-webkit-center",
    webkitLeft: "-webkit-left",
    webkitMatchParent: "-webkit-match-parent",
    webkitRight: "-webkit-right",
  },
  flexShrink: {
    ...commonProps,
    revertLayer: "revert-layer",
  },
  zIndex: {
    ...commonProps,
    auto: "auto",
    ...numbers,
  },
  fontStyle: {
    ...commonProps,
    italic: "italic",
    normal: "normal",
    oblique: "oblique",
  },
  alignContent: {
    ...commonProps,
    baseline: "baseline",
    center: "center",
    end: "end",
    flexEnd: "flex-end",
    flexStart: "flex-start",
    normal: "normal",
    spaceAround: "space-around",
    spaceBetween: "space-between",
    spaceEvenly: "space-evenly",
    start: "start",
    stretch: "stretch",
  },
  alignItems: {
    ...commonProps,
    baseline: "baseline",
    center: "center",
    end: "end",
    flexEnd: "flex-end",
    flexStart: "flex-start",
    normal: "normal",
    selfEnd: "self-end",
    selfStart: "self-start",
    start: "start",
    stretch: "stretch",
  },
  overflowY: {
    ...commonProps,
    auto: "auto",
    clip: "clip",
    hidden: "hidden",
    revertLayer: "revertLayer",
    scroll: "scroll",
    visible: "visible",
  },
  overflowX: {
    ...commonProps,
    auto: "auto",
    clip: "clip",
    hidden: "hidden",
    revertLayer: "revertLayer",
    scroll: "scroll",
    visible: "visible",
  },
  overflow: {
    ...commonProps,
    auto: "auto",
    clip: "clip",
    hidden: "hidden",
    revertLayer: "revertLayer",
    scroll: "scroll",
    visible: "visible",
  },
  flexWrap: {
    ...commonProps,
    noWrap: "nowrap",
    wrap: "wrap",
    wrapReverse: "wrap-reverse",
  },
  gridTemplateColumns: {
    ...commonProps,
    auto: "auto",
    maxContent: "max-content",
    minContent: "min-content",
    none: "none",
  },
  gridTemplateRows: {
    ...commonProps,
    auto: "auto",
    maxContent: "max-content",
    minContent: "min-content",
    none: "none",
  },
  cursor: {
    ...commonProps,
    alias: "alias",
    allScroll: "all-scroll",
    auto: "auto",
    cell: "cell",
    colResize: "col-resize",
    contextMenu: "context-menu",
    copy: "copy",
    crosshair: "crosshair",
    default: "default",
    eResize: "e-resize",
    ewResize: "ew-resize",
    grab: "grab",
    grabbing: "grabbing",
    help: "help",
    move: "move",
    nResize: "n-resize",
    neResize: "ne-resize",
    neswResize: "nesw-resize",
    noDrop: "no-drop",
    none: "none",
    notAllowed: "not-allowed",
    nsResize: "ns-resize",
    nwResize: "nw-resize",
    nwseResize: "nwse-resize",
    pointer: "pointer",
    progress: "progress",
    rowResize: "row-resize",
    sResize: "s-resize",
    seResize: "se-resize",
    swResize: "sw-resize",
    text: "text",
    verticalText: "vertical-text",
    wResize: "w-resize",
    wait: "wait",
    zoomIn: "zoom-in",
    zoomOut: "zoom-out",
    webkitGrab: "-webkit-grab",
    webkitGrabbing: "-webkit-grabbing",
    webkitZoomIn: "-webkit-zoom-in",
    webkitZoomOut: "-webkit-zoom-out",
  },
  alignSelf: {
    ...commonProps,
    auto: "auto",
    baseline: "baseline",
    center: "center",
    end: "end",
    flexEnd: "flex-end",
    flexStart: "flex-start",
    normal: "normal",
    selfEnd: "self-end",
    selfStart: "self-start",
    start: "start",
    stretch: "stretch",
  },
  textWrap: {
    ...commonProps,
    balance: "balance",
    noWrap: "nowrap",
    pretty: "pretty",
    wrap: "wrap",
  },
  justifyContent: {
    ...commonProps,
    center: "center",
    end: "end",
    flexEnd: "flex-end",
    flexStart: "flex-start",
    left: "left",
    normal: "normal",
    right: "right",
    spaceAround: "space-around",
    spaceBetween: "space-between",
    spaceEvenly: "space-evenly",
    start: "start",
    stretch: "stretch",
  },
  textTransform: {
    ...commonProps,
    capitalize: "capitalize",
    lowercase: "lowercase",
    mathAuto: "math-auto",
    none: "none",
    upset: "unset",
    uppercase: "uppercase",
  },
  objectPosition: {
    ...commonProps,
    bottom: "bottom",
    center: "center",
    left: "left",
    right: "right",
    top: "top",
  },
  textDecorationStyle: {
    ...commonProps,
    solid: "solid",
    double: "double",
    dotted: "dotted",
    dashed: "dashed",
    wavy: "wavy",
  },
  textUnderlineOffset: {
    ...commonProps,
    auto: "auto",
  },
  textEmphasis: {
    ...commonProps,
    none: "none",
    accent: "accent",
    dot: "dot",
    circle: "circle",
    disc: "disc",
  },
  borderImageOutset: {
    ...commonProps,
  },
  borderImageRepeat: {
    ...commonProps,
    stretch: "stretch",
    repeat: "repeat",
    round: "round",
    space: "space",
  },
  borderImageSlice: {
    ...commonProps,
  },
  borderImageSource: {
    ...commonProps,
  },
  borderImageWidth: {
    ...commonProps,
    auto: "auto",
  },
  borderBlock: {
    ...commonProps,
    start: "start",
    end: "end",
  },
  textDecorationLine: {
    ...commonProps,
    lineThrough: "line-through",
    overline: "overline",
    underline: "underline",
    blink: "blink",
  },
  transformStyle: {
    ...commonProps,
    flat: "flat",
    preserve3d: "preserve-3d",
  },
  justifyItems: {
    ...commonProps,
    auto: "auto",
    baseline: "baseline",
    center: "center",
    end: "end",
    start: "start",
    stretch: "stretch",
  },
  whiteSpace: {
    ...commonProps,
    breakSpaces: "break-spaces",
    normal: "normal",
    nowrap: "nowrap",
    pre: "pre",
    preLine: "pre-line",
    preWrap: "pre-wrap",
    revertLayer: "revert-layer",
    mozPreSpace: "-moz-pre-space",
  },
  lineHeight: {
    ...commonProps,
    normal: "normal",
    revertLayer: "revert-layer",
    mozBlockHeight: "-moz-block-height",
    ...sizes,
  },
  textRendering: {
    ...commonProps,
    auto: "auto",
    geometricPrecision: "geometricprecision",
    optimizeLegibility: "optimizelegibility",
    optimizeSpeed: "optimizespeed",
    revertLayer: "revert-layer",
  },
  textDecoration: {
    auto: "auto",
    blink: "blink",
    dashed: "dashed",
    double: "double",
    lineThrough: "line-through",
    none: "none",
    overline: "overline",
    solid: "solid",
    underline: "underline",
    wavy: "wavy",
    revertLayer: "revert-layer",
    ...commonProps,
  },
  transition: Object.assign({}, commonProps),
  opacity: Object.assign({}, commonProps),
  backgroundClipText: Object.assign({}, commonProps),
  boxShadow: Object.assign({}, commonProps),
  backgroundTranslucent: Object.assign({}, commonProps),
  filter: Object.assign({}, commonProps),
  bTopRadius: Object.assign({}, commonProps),
  bBottomRadius: Object.assign({}, commonProps),
  bRadius: Object.assign({}, commonProps),
  bLeftRadius: Object.assign({}, commonProps),
  bRightRadius: Object.assign({}, commonProps),
  bRadiusTop: Object.assign({}, commonProps),
  bRadiusBottom: Object.assign({}, commonProps),
  bRadiusLeft: Object.assign({}, commonProps),
  bRadiusRight: Object.assign({}, commonProps),
  bRadiusTopLeft: Object.assign({}, commonProps),
  bRadiusTopRight: Object.assign({}, commonProps),
  bRadiusBottomLeft: Object.assign({}, commonProps),
  bRadiusBottomRight: Object.assign({}, commonProps),
  flexGrow: Object.assign({}, commonProps),
  gridColumnGap: Object.assign({}, commonProps),
  gridRowGap: Object.assign({}, commonProps),
  gridGap: Object.assign({}, commonProps),
  gridAutoFlow: Object.assign({}, commonProps),
  gridAutoColumns: Object.assign({}, commonProps),
  gridAutoRows: Object.assign({}, commonProps),
  gridColumnStart: Object.assign({}, commonProps),
  gridColumnEnd: Object.assign({}, commonProps),
  gridRowStart: Object.assign({}, commonProps),
  gridRowEnd: Object.assign({}, commonProps),
  gridRow: Object.assign({}, commonProps),
  gridColumn: Object.assign({}, commonProps),
  gridColumnStartEnd: Object.assign({}, commonProps),
  gridRowStartEnd: Object.assign({}, commonProps),
  justifySelf: Object.assign({}, commonProps),
  placeItems: Object.assign({}, commonProps),
  placeContent: Object.assign({}, commonProps),
  placeSelf: Object.assign({}, commonProps),
  userDrag: Object.assign({}, commonProps),
  userResize: Object.assign({}, commonProps),
  transitionProperty: Object.assign({}, commonProps),
  transitionDuration: Object.assign({}, commonProps),
  transitionTimingFunction: Object.assign({}, commonProps),
  transitionDelay: Object.assign({}, commonProps),
  animation: Object.assign({}, commonProps),
  transform: Object.assign({}, commonProps),
  transformOrigin: Object.assign({}, commonProps),
  perspective: Object.assign({}, commonProps),
  perspectiveOrigin: Object.assign({}, commonProps),
  backfaceVisibility: Object.assign({}, commonProps),
  willChange: Object.assign({}, commonProps),
  letterSpacing: Object.assign({}, commonProps),
  wordSpacing: Object.assign({}, commonProps),
  textOverflow: {
    ellipsis: "ellipsis",
    clip: "clip",
    revertLayer: "revert-layer",
    ...commonProps,
  },
  columnCount: Object.assign({}, commonProps),
  columnGap: Object.assign({}, commonProps),
  columnRule: Object.assign({}, commonProps),
  columnWidth: Object.assign({}, commonProps),
  scrollSnapType: Object.assign({}, commonProps),
  scrollBehavior: Object.assign({}, commonProps),
  scrollSnapAlign: Object.assign({}, commonProps),
  animationDelay: Object.assign({}, commonProps),
  animationDirection: Object.assign({}, commonProps),
  animationDuration: Object.assign({}, commonProps),
  animationFillMode: Object.assign({}, commonProps),
  animationIterationCount: Object.assign({}, commonProps),
  animationName: Object.assign({}, commonProps),
  animationPlayState: Object.assign({}, commonProps),
  animationTimingFunction: Object.assign({}, commonProps),
  boxShadowInset: Object.assign({}, commonProps),
  userFocus: Object.assign({}, commonProps),
  userSelectText: Object.assign({}, commonProps),
  userSelectNone: Object.assign({}, commonProps),
  userSelectAll: Object.assign({}, commonProps),
  userSelectAuto: Object.assign({}, commonProps),
  mixBlendMode: Object.assign({}, commonProps),
  clipPath: Object.assign({}, commonProps),
  backdropFilter: Object.assign({}, commonProps),
  backdropBlur: Object.assign({}, commonProps),
  backdropBrightness: Object.assign({}, commonProps),
  backdropContrast: Object.assign({}, commonProps),
  backdropGrayscale: Object.assign({}, commonProps),
  backdropHueRotate: Object.assign({}, commonProps),
  backdropInvert: Object.assign({}, commonProps),
  backdropOpacity: Object.assign({}, commonProps),
  backdropSaturate: Object.assign({}, commonProps),
  backdropSepia: Object.assign({}, commonProps),
  backdropDropShadow: Object.assign({}, commonProps),
  borderImage: Object.assign({}, commonProps),
  textEmphasisStyle: Object.assign({}, commonProps),
  textEmphasisPosition: Object.assign({}, commonProps),
  scrollSnapPointsX: Object.assign({}, commonProps),
  scrollSnapPointsY: Object.assign({}, commonProps),
  columnSpan: Object.assign({}, commonProps),
  hyphens: Object.assign({}, commonProps),
  textAlignLast: Object.assign({}, commonProps),
  textJustify: Object.assign({}, commonProps),
  fontVariant: Object.assign({}, commonProps),
  fontFeatureSettings: Object.assign({}, commonProps),
  wordBreak: Object.assign({}, commonProps),
  wordWrap: Object.assign({}, commonProps),
  overscrollBehavior: Object.assign({}, commonProps),
  overscrollBehaviorX: Object.assign({}, commonProps),
  overscrollBehaviorY: Object.assign({}, commonProps),
  clipRule: Object.assign({}, commonProps),
  fillRule: Object.assign({}, commonProps),
  isolation: Object.assign({}, commonProps),
  pointerEvents: {
    ...commonProps,
    all: "all",
    auto: "auto",
    boundingBox: "bounding-box",
    fill: "fill",
    none: "none",
    painted: "painted",
    stroke: "stroke",
    visible: "visible",
    visibleFill: "visiblefill",
    visiblePainted: "visiblepainted",
    visibleStroke: "visiblestroke",
  },
  resize: Object.assign({}, commonProps),
  shapeOutside: Object.assign({}, commonProps),
  listStyleType: Object.assign({}, commonProps),
  listStylePosition: Object.assign({}, commonProps),
  listStyleImage: Object.assign({}, commonProps),
  userZoom: Object.assign({}, commonProps),
  maxLines: Object.assign({}, commonProps),
  textDecorationSkipInk: Object.assign({}, commonProps),
  transitionTiming: Object.assign({}, commonProps),
  transitionDurationTiming: Object.assign({}, commonProps),
  scrollMargin: Object.assign({}, commonProps),
  scrollMarginBlock: Object.assign({}, commonProps),
  scrollMarginBlockStart: Object.assign({}, commonProps),
  scrollMarginBlockEnd: Object.assign({}, commonProps),
  scrollMarginInline: Object.assign({}, commonProps),
  scrollMarginInlineStart: Object.assign({}, commonProps),
  scrollMarginInlineEnd: Object.assign({}, commonProps),
  maskImage: Object.assign({}, commonProps),
  maskSize: Object.assign({}, commonProps),
  maskRepeat: Object.assign({}, commonProps),
  maskPosition: Object.assign({}, commonProps),
  maskClip: Object.assign({}, commonProps),
  maskOrigin: Object.assign({}, commonProps),
  maskComposite: Object.assign({}, commonProps),
  maskType: Object.assign({}, commonProps),
  maskBorder: Object.assign({}, commonProps),
  maskBorderOutset: Object.assign({}, commonProps),
  maskBorderRepeat: Object.assign({}, commonProps),
  maskBorderSlice: Object.assign({}, commonProps),
  maskBorderSource: Object.assign({}, commonProps),
  maskBorderWidth: Object.assign({}, commonProps),
  maskBorderRepeatX: Object.assign({}, commonProps),
  maskBorderRepeatY: Object.assign({}, commonProps),
  scrollSnapStop: Object.assign({}, commonProps),
  scrollSnapAlignY: Object.assign({}, commonProps),
  scrollSnapAlignX: Object.assign({}, commonProps),
  scrollSnapStopX: Object.assign({}, commonProps),
  scrollSnapStopY: Object.assign({}, commonProps),
  boxShadowX: Object.assign({}, commonProps),
  boxShadowY: Object.assign({}, commonProps),
  backdropBlendMode: Object.assign({}, commonProps),
  backdropDropShadowX: Object.assign({}, commonProps),
  backdropDropShadowY: Object.assign({}, commonProps),
  backdropDropShadowBlur: Object.assign({}, commonProps),
  backdropDropShadowSpread: Object.assign({}, commonProps),
  gridAutoRowsMin: Object.assign({}, commonProps),
  gridAutoRowsMax: Object.assign({}, commonProps),
  gridAutoColumnsMin: Object.assign({}, commonProps),
  gridAutoColumnsMax: Object.assign({}, commonProps),
  gridColumnStartMin: Object.assign({}, commonProps),
  gridColumnStartMax: Object.assign({}, commonProps),
  gridColumnEndMin: Object.assign({}, commonProps),
  gridColumnEndMax: Object.assign({}, commonProps),
  gridRowStartMin: Object.assign({}, commonProps),
  gridRowStartMax: Object.assign({}, commonProps),
  gridRowEndMin: Object.assign({}, commonProps),
  gridRowEndMax: Object.assign({}, commonProps),
  shapeMargin: Object.assign({}, commonProps),
  shapeImageThreshold: Object.assign({}, commonProps),
  filterBlur: Object.assign({}, commonProps),
  filterBrightness: Object.assign({}, commonProps),
  filterContrast: Object.assign({}, commonProps),
  filterGrayscale: Object.assign({}, commonProps),
  filterHueRotate: Object.assign({}, commonProps),
  filterInvert: Object.assign({}, commonProps),
  filterOpacity: Object.assign({}, commonProps),
  filterSaturate: Object.assign({}, commonProps),
  filterSepia: Object.assign({}, commonProps),
  filterDropShadow: Object.assign({}, commonProps),
  willChangeProperty: Object.assign({}, commonProps),
  backgroundClip: Object.assign({}, commonProps),
  imageRendering: Object.assign({}, commonProps),
  shapeRendering: Object.assign({}, commonProps),
  userSelect: {
    all: "all",
    auto: "auto",
    none: "none",
    text: "text",
    contain: "contain",
    revertLayer: "revert-layer",
    ...commonProps,
  },
  border: Object.assign({}, commonProps),
  textShadow: Object.assign({}, commonProps),
};
