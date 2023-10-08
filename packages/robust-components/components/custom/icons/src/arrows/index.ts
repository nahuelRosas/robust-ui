import { fill } from "./fill";
import { line } from "./line";

export const arrows = {
  ...line,
  ...fill,
  upload: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2 M7 9l5 -5l5 5 M12 4l0 12",
  trendingUp: "M3 17l6 -6l4 4l8 -8 M14 7l7 0l0 7",
  trendingUp3:
    "M18 5l3 3l-3 3 M3 18h2.397a5 5 0 0 0 4.096 -2.133l4.014 -5.734a5 5 0 0 1 4.096 -2.133h3.397",
  trendingUp2: "M18 5l3 3l-3 3 M3 18h5l7 -10h6",
  trendingDown: "M3 7l6 6l4 -4l8 8 M21 10l0 7l-7 0",
  trendingDown3:
    "M3 6h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397 M18 19l3 -3l-3 -3",
  trendingDown2: "M3 6h5l7 10h6 M18 19l3 -3l-3 -3",
  transitionTop:
    "M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3 M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6z M12 15v-8 M9 10l3 -3l3 3",
  transitionRight:
    "M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3 M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0z M9 12h8 M14 15l3 -3l-3 -3",
  transitionLeft:
    "M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3 M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0z M15 12h-8 M10 9l-3 3l3 3",
  transitionBottom:
    "M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3 M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z M12 9v8 M9 14l3 3l3 -3",
  switch:
    "M15 4l4 0l0 4 M14.75 9.25l4.25 -5.25 M5 19l4 -4 M15 19l4 0l0 -4 M5 5l14 14",
  switchVertical: "M3 8l4 -4l4 4 M7 4l0 9 M13 16l4 4l4 -4 M17 10l0 10",
  switchHorizontal: "M16 3l4 4l-4 4 M10 7l10 0 M8 13l-4 4l4 4 M4 17l9 0",
  switch3:
    "M3 17h2.397a5 5 0 0 0 4.096 -2.133l.177 -.253m3.66 -5.227l.177 -.254a5 5 0 0 1 4.096 -2.133h3.397 M18 4l3 3l-3 3 M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397 M18 20l3 -3l-3 -3",
  switch2:
    "M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6 M18 4l3 3l-3 3 M3 7h5l7 10h6 M18 20l3 -3l-3 -3",
  stepOut:
    "M12 3l0 12 M16 7l-4 -4 M8 7l4 -4 M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
  stepInto:
    "M12 3l0 12 M16 11l-4 4 M8 11l4 4 M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
  squareRoundedChevronsUp:
    "M9 15l3 -3l3 3 M9 11l3 -3l3 3 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
  squareRoundedChevronsRight:
    "M9 9l3 3l-3 3 M13 9l3 3l-3 3 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
  squareRoundedChevronsLeft:
    "M15 15l-3 -3l3 -3 M11 15l-3 -3l3 -3 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
  squareRoundedChevronsDown:
    "M15 9l-3 3l-3 -3 M15 13l-3 3l-3 -3 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
  squareRoundedChevronUp:
    "M9 13l3 -3l3 3 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
  squareRoundedChevronRight:
    "M11 9l3 3l-3 3 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
  squareRoundedChevronLeft:
    "M13 15l-3 -3l3 -3 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
  squareRoundedChevronDown:
    "M15 11l-3 3l-3 -3 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
  squareRoundedArrowUp:
    "M16 12l-4 -4l-4 4 M12 16v-8 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
  squareRoundedArrowRight:
    "M12 16l4 -4l-4 -4 M8 12h8 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
  squareRoundedArrowLeft:
    "M12 8l-4 4l4 4 M16 12h-8 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
  squareRoundedArrowDown:
    "M8 12l4 4l4 -4 M12 8v8 M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
  squareChevronsUp:
    "M9 16l3 -3l3 3 M9 11l3 -3l3 3 M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
  squareChevronsRight:
    "M8 9l3 3l-3 3 M13 9l3 3l-3 3 M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
  squareChevronsLeft:
    "M16 15l-3 -3l3 -3 M11 15l-3 -3l3 -3 M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
  squareChevronsDown:
    "M15 8l-3 3l-3 -3 M15 13l-3 3l-3 -3 M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
  squareChevronUp:
    "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z M9 13l3 -3l3 3",
  squareChevronRight:
    "M11 9l3 3l-3 3 M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
  squareChevronLeft:
    "M13 15l-3 -3l3 -3 M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
  squareChevronDown:
    "M15 11l-3 3l-3 -3 M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
  squareArrowUp:
    "M16 12l-4 -4l-4 4 M12 16v-8 M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
  squareArrowRight:
    "M12 16l4 -4l-4 -4 M8 12h8 M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
  squareArrowLeft:
    "M12 8l-4 4l4 4 M16 12h-8 M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
  squareArrowDown:
    "M8 12l4 4l4 -4 M12 8v8 M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
  share3:
    "M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z",
  share2:
    "M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1 M12 14v-11 M9 6l3 -3l3 3",
  selector: "M8 9l4 -4l4 4 M16 15l-4 4l-4 -4",
  select:
    "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z M9 11l3 3l3 -3",
  sTurnUp:
    "M7 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z M5 17v-9.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0v-13.5 M16 6l3 -3l3 3",
  sTurnRight:
    "M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M7 5h9.5a3.5 3.5 0 0 1 0 7h-9a3.5 3.5 0 0 0 0 7h13.5 M18 16l3 3l-3 3",
  sTurnLeft:
    "M19 7a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z M17 5h-9.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7h-13.5 M6 16l-3 3l3 3",
  sTurnDown:
    "M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z M5 7v9.5a3.5 3.5 0 0 0 7 0v-9a3.5 3.5 0 0 1 7 0v13.5 M16 18l3 3l3 -3",
  rotate: "M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5",
  rotateRectangle:
    "M10.09 4.01l.496 -.495a2 2 0 0 1 2.828 0l7.071 7.07a2 2 0 0 1 0 2.83l-7.07 7.07a2 2 0 0 1 -2.83 0l-7.07 -7.07a2 2 0 0 1 0 -2.83l3.535 -3.535h-3.988 M7.05 11.038v-3.988",
  rotateDot:
    "M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5 M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
  rotateClockwise: "M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5",
  rotateClockwise2:
    "M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5 M5.63 7.16l0 .01 M4.06 11l0 .01 M4.63 15.1l0 .01 M7.16 18.37l0 .01 M11 19.94l0 .01",
  rotate360:
    "M12 16h4v4 M19.458 11.042c.86 -2.366 .722 -4.58 -.6 -5.9c-2.272 -2.274 -7.185 -1.045 -10.973 2.743c-3.788 3.788 -5.017 8.701 -2.744 10.974c2.227 2.226 6.987 1.093 10.74 -2.515",
  rotate2:
    "M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5 M18.37 7.16l0 .01 M13 19.94l0 .01 M16.84 18.37l0 .01 M19.37 15.1l0 .01 M19.94 11l0 .01",
  reload:
    "M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747 M20 4v5h-5",
  refresh:
    "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4 M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",
  refreshOff:
    "M20 11a8.1 8.1 0 0 0 -11.271 -6.305m-2.41 1.624a8.083 8.083 0 0 0 -1.819 2.681m-.5 -4v4h4 M4 13a8.1 8.1 0 0 0 13.671 4.691m2.329 -1.691v-1h-1 M3 3l18 18",
  refreshDot:
    "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4 M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4 M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
  refreshAlert:
    "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4 M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4 M12 9l0 3 M12 15l.01 0",
  login:
    "M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2 M21 12h-13l3 -3 M11 15l-3 -3",
  fold: "M12 3v6l3 -3m-6 0l3 3 M12 21v-6l3 3m-6 0l3 -3 M4 12l1 0 M9 12l1 0 M14 12l1 0 M19 12l1 0",
  foldUp: "M12 13v-8l-3 3m6 0l-3 -3 M9 17l1 0 M14 17l1 0 M19 17l1 0 M4 17l1 0",
  foldDown: "M12 11v8l3 -3m-6 0l3 3 M9 7l1 0 M14 7l1 0 M19 7l1 0 M4 7l1 0",
  download:
    "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2 M7 11l5 5l5 -5 M12 4l0 12",
  downloadOff:
    "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 1.83 -1.19 M7 11l5 5l2 -2m2 -2l1 -1 M12 4v4m0 4v4 M3 3l18 18",
  cornerUpRight: "M6 18v-6a3 3 0 0 1 3 -3h10l-4 -4m0 8l4 -4",
  cornerUpRightDouble:
    "M4 18v-6a3 3 0 0 1 3 -3h7 M10 13l4 -4l-4 -4m5 8l4 -4l-4 -4",
  cornerUpLeft: "M18 18v-6a3 3 0 0 0 -3 -3h-10l4 -4m0 8l-4 -4",
  cornerUpLeftDouble:
    "M19 18v-6a3 3 0 0 0 -3 -3h-7 M13 13l-4 -4l4 -4m-5 8l-4 -4l4 -4",
  cornerRightUp: "M6 18h6a3 3 0 0 0 3 -3v-10l-4 4m8 0l-4 -4",
  cornerRightUpDouble:
    "M5 19h6a3 3 0 0 0 3 -3v-7 M10 13l4 -4l4 4m-8 -5l4 -4l4 4",
  cornerRightDown: "M6 6h6a3 3 0 0 1 3 3v10l-4 -4m8 0l-4 4",
  cornerRightDownDouble: "M5 4h6a3 3 0 0 1 3 3v7 M10 10l4 4l4 -4m-8 5l4 4l4 -4",
  cornerLeftUp: "M18 18h-6a3 3 0 0 1 -3 -3v-10l-4 4m8 0l-4 -4",
  cornerLeftUpDouble:
    "M18 19h-6a3 3 0 0 1 -3 -3v-7 M13 13l-4 -4l-4 4m8 -5l-4 -4l-4 4",
  cornerLeftDown: "M18 6h-6a3 3 0 0 0 -3 3v10l-4 -4m8 0l-4 4",
  cornerLeftDownDouble:
    "M18 4h-6a3 3 0 0 0 -3 3v7 M13 10l-4 4l-4 -4m8 5l-4 4l-4 -4",
  cornerDownRight: "M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4",
  cornerDownRightDouble: "M4 5v6a3 3 0 0 0 3 3h7 M10 10l4 4l-4 4m5 -8l4 4l-4 4",
  cornerDownLeft: "M18 6v6a3 3 0 0 1 -3 3h-10l4 -4m0 8l-4 -4",
  cornerDownLeftDouble:
    "M19 5v6a3 3 0 0 1 -3 3h-7 M13 10l-4 4l4 4m-5 -8l-4 4l4 4",
  circleChevronsUp:
    "M9 15l3 -3l3 3 M9 11l3 -3l3 3 M12 21a9 9 0 1 0 -.265 0l.265 0z",
  circleChevronsRight:
    "M9 9l3 3l-3 3 M13 9l3 3l-3 3 M3 12a9 9 0 1 0 0 -.265l0 .265z",
  circleChevronsLeft:
    "M15 15l-3 -3l3 -3 M11 15l-3 -3l3 -3 M21 12a9 9 0 1 0 0 .265l0 -.265z",
  circleChevronsDown:
    "M15 9l-3 3l-3 -3 M15 13l-3 3l-3 -3 M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z",
  circleChevronUp: "M9 13l3 -3l3 3 M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
  circleChevronRight: "M11 9l3 3l-3 3 M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z",
  circleChevronLeft: "M13 15l-3 -3l3 -3 M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z",
  circleChevronDown: "M15 11l-3 3l-3 -3 M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z",
  circleCaretUp: "M12 9l4 4h-8z M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
  circleCaretRight:
    "M15 12l-4 -4v8z M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
  circleCaretLeft: "M9 12l4 -4v8z M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z",
  circleCaretDown: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 15l-4 -4h8z",
  circleArrowUp:
    "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0 M12 8l-4 4 M12 8v8 M16 12l-4 -4",
  circleArrowUpRight:
    "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0 M15 9l-6 6 M15 15v-6h-6",
  circleArrowUpLeft: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0 M9 9l6 6 M15 9h-6v6",
  circleArrowRight:
    "M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18 M16 12l-4 -4 M16 12h-8 M12 16l4 -4",
  circleArrowLeft:
    "M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18 M8 12l4 4 M8 12h8 M12 8l-4 4",
  circleArrowDown:
    "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0 M8 12l4 4 M12 8v8 M16 12l-4 4",
  circleArrowDownRight:
    "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0 M15 15h-6 M15 9v6l-6 -6",
  circleArrowDownLeft:
    "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0 M15 9l-6 6 M15 15h-6v-6",
  chevronsUp: "M7 11l5 -5l5 5 M7 17l5 -5l5 5",
  chevronsUpRight: "M9 7h8v8 M5 11h8v8",
  chevronsUpLeft: "M7 15v-8h8 M11 19v-8h8",
  chevronsRight: "M7 7l5 5l-5 5 M13 7l5 5l-5 5",
  chevronsLeft: "M11 7l-5 5l5 5 M17 7l-5 5l5 5",
  chevronsDown: "M7 7l5 5l5 -5 M7 13l5 5l5 -5",
  chevronsDownRight: "M13 5v8h-8 M17 9v8h-8",
  chevronsDownLeft: "M11 5v8h8 M7 9v8h8",
  chevronUp: "M6 15l6 -6l6 6",
  chevronUpRight: "M8 8h8v8",
  chevronUpLeft: "M8 16v-8h8",
  chevronRight: "M9 6l6 6l-6 6",
  chevronRightPipe: "M6 6l6 6l-6 6 M17 5v13",
  chevronLeft: "M15 6l-6 6l6 6",
  chevronLeftPipe: "M7 6v12 M18 6l-6 6l6 6",
  chevronDown: "M6 9l6 6l6 -6",
  chevronDownRight: "M16 8v8h-8",
  chevronDownLeft: "M8 8v8h8",
  chevronCompactUp: "M4 13l8 -3l8 3",
  chevronCompactRight: "M11 4l3 8l-3 8",
  chevronCompactLeft: "M13 20l-3 -8l3 -8",
  chevronCompactDown: "M4 11l8 3l8 -3",
  caretUp: "M18 14l-6 -6l-6 6h12",
  caretRight: "M10 18l6 -6l-6 -6v12",
  caretLeft: "M14 6l-6 6l6 6v-12",
  caretDown: "M6 10l6 6l6 -6h-12",
  axisY: "M11 20h-.01 M15 20h-.01 M19 20h-.01 M4 7l3 -3l3 3 M7 20v-16",
  axisX: "M4 13v.01 M4 9v.01 M4 5v.01 M17 20l3 -3l-3 -3 M4 17h16",
  arrowsVertical: "M8 7l4 -4l4 4 M8 17l4 4l4 -4 M12 3l0 18",
  arrowsUp: "M17 3l0 18 M4 6l3 -3l3 3 M20 6l-3 -3l-3 3 M7 3l0 18",
  arrowsUpRight:
    "M17 21l4 -4l-4 -4 M21 17h-11a3 3 0 0 1 -3 -3v-11 M11 7l-4 -4l-4 4",
  arrowsUpLeft: "M21 7l-4 -4l-4 4 M17 3v11a3 3 0 0 1 -3 3h-11 M7 13l-4 4l4 4",
  arrowsUpDown: "M7 3l0 18 M10 6l-3 -3l-3 3 M20 18l-3 3l-3 -3 M17 21l0 -18",
  arrowsTransferUp:
    "M7 21v-6 M20 6l-3 -3l-3 3 M17 3v18 M10 18l-3 3l-3 -3 M7 3v2 M7 9v2",
  arrowsTransferDown:
    "M17 3v6 M10 18l-3 3l-3 -3 M7 21v-18 M20 6l-3 -3l-3 3 M17 21v-2 M17 15v-2",
  arrowsSplit:
    "M21 17h-8l-3.5 -5h-6.5 M21 7h-8l-3.495 5 M18 10l3 -3l-3 -3 M18 20l3 -3l-3 -3",
  arrowsSplit2:
    "M21 17h-5.397a5 5 0 0 1 -4.096 -2.133l-.514 -.734a5 5 0 0 0 -4.096 -2.133h-3.897 M21 7h-5.395a5 5 0 0 0 -4.098 2.135l-.51 .73a5 5 0 0 1 -4.097 2.135h-3.9 M18 10l3 -3l-3 -3 M18 20l3 -3l-3 -3",
  arrowsSort: "M3 9l4 -4l4 4m-4 -4v14 M21 15l-4 4l-4 -4m4 4v-14",
  arrowsShuffle:
    "M18 4l3 3l-3 3 M18 20l3 -3l-3 -3 M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5 M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3",
  arrowsShuffle2:
    "M18 4l3 3l-3 3 M18 20l3 -3l-3 -3 M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5 M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5",
  arrowsRight: "M21 17l-18 0 M18 4l3 3l-3 3 M18 20l3 -3l-3 -3 M21 7l-18 0",
  arrowsRightLeft: "M21 7l-18 0 M18 10l3 -3l-3 -3 M6 20l-3 -3l3 -3 M3 17l18 0",
  arrowsRightDown:
    "M3 17l4 4l4 -4 M7 21v-11a3 3 0 0 1 3 -3h11 M17 11l4 -4l-4 -4",
  arrowsRandom:
    "M20 21h-4v-4 M16 21l5 -5 M6.5 9.504l-3.5 -2l2 -3.504 M3 7.504l6.83 -1.87 M4 16l4 -1l1 4 M8 15l-3.5 6 M21 5l-.5 4l-4 -.5 M20.5 9l-4.5 -5.5",
  arrowsMove:
    "M18 9l3 3l-3 3 M15 12h6 M6 9l-3 3l3 3 M3 12h6 M9 18l3 3l3 -3 M12 15v6 M15 6l-3 -3l-3 3 M12 3v6",
  arrowsMoveVertical: "M9 18l3 3l3 -3 M12 15v6 M15 6l-3 -3l-3 3 M12 3v6",
  arrowsMoveHorizontal: "M18 9l3 3l-3 3 M15 12h6 M6 9l-3 3l3 3 M3 12h6",
  arrowsMinimize:
    "M5 9l4 0l0 -4 M3 3l6 6 M5 15l4 0l0 4 M3 21l6 -6 M19 9l-4 0l0 -4 M15 9l6 -6 M19 15l-4 0l0 4 M15 15l6 6",
  arrowsMaximize:
    "M16 4l4 0l0 4 M14 10l6 -6 M8 20l-4 0l0 -4 M4 20l6 -6 M16 20l4 0l0 -4 M14 14l6 6 M8 4l-4 0l0 4 M4 4l6 6",
  arrowsLeft: "M3 7l18 0 M6 20l-3 -3l3 -3 M6 4l-3 3l3 3 M3 17l18 0",
  arrowsLeftRight: "M21 17l-18 0 M6 10l-3 -3l3 -3 M3 7l18 0 M18 20l3 -3l-3 -3",
  arrowsLeftDown: "M7 3l-4 4l4 4 M3 7h11a3 3 0 0 1 3 3v11 M13 17l4 4l4 -4",
  arrowsJoin: "M3 7h5l3.5 5h9.5 M3 17h5l3.495 -5 M18 15l3 -3l-3 -3",
  arrowsJoin2:
    "M3 7h1.948c1.913 0 3.705 .933 4.802 2.5a5.861 5.861 0 0 0 4.802 2.5h6.448 M3 17h1.95a5.854 5.854 0 0 0 4.798 -2.5a5.854 5.854 0 0 1 4.798 -2.5h5.454 M18 15l3 -3l-3 -3",
  arrowsHorizontal: "M7 8l-4 4l4 4 M17 8l4 4l-4 4 M3 12l18 0",
  arrowsExchange: "M7 10h14l-4 -4 M17 14h-14l4 4",
  arrowsExchange2: "M17 10h-14l4 -4 M7 14h14l-4 4",
  arrowsDown: "M7 21l0 -18 M20 18l-3 3l-3 -3 M4 18l3 3l3 -3 M17 21l0 -18",
  arrowsDownUp: "M17 3l0 18 M10 18l-3 3l-3 -3 M7 21l0 -18 M20 6l-3 -3l-3 3",
  arrowsDoubleSwNe: "M14 3l-11 11 M3 10v4h4 M17 10h4v4 M10 21l11 -11",
  arrowsDoubleSeNw: "M3 10l11 11 M14 17v4h-4 M14 3h-4v4 M21 14l-11 -11",
  arrowsDoubleNwSe: "M14 21l-11 -11 M3 14v-4h4 M17 14h4v-4 M10 3l11 11",
  arrowsDoubleNeSw: "M3 14l11 -11 M10 3h4v4 M10 17v4h4 M21 10l-11 11",
  arrowsDiff:
    "M11 16h10 M11 16l4 4 M11 16l4 -4 M13 8h-10 M13 8l-4 4 M13 8l-4 -4",
  arrowsDiagonal: "M16 4l4 0l0 4 M14 10l6 -6 M8 20l-4 0l0 -4 M4 20l6 -6",
  arrowsDiagonalMinimize: "M6 10h4v-4 M4 4l6 6 M18 14h-4v4 M14 14l6 6",
  arrowsDiagonalMinimize2: "M18 10h-4v-4 M20 4l-6 6 M6 14h4v4 M10 14l-6 6",
  arrowsDiagonal2: "M16 20l4 0l0 -4 M14 14l6 6 M8 4l-4 0l0 4 M4 4l6 6",
  arrowsCross: "M16 4h4v4 M15 9l5 -5 M4 20l5 -5 M16 20h4v-4 M4 4l16 16",
  arrowZigZag: "M6 20v-10l10 6v-12 M13 7l3 -3l3 3",
  arrowWaveRightUp:
    "M17 10h4v4 M3 12c.887 -1.284 2.48 -2.033 4 -2c1.52 -.033 3.113 .716 4 2s2.48 2.033 4 2c1.52 .033 3 -1 4 -2l2 -2",
  arrowWaveRightDown:
    "M17 14h4v-4 M3 12c.887 1.284 2.48 2.033 4 2c1.52 .033 3.113 -.716 4 -2s2.48 -2.033 4 -2c1.52 -.033 3 1 4 2l2 2",
  arrowWaveLeftUp:
    "M7 10h-4v4 M21 12c-.887 -1.285 -2.48 -2.033 -4 -2c-1.52 -.033 -3.113 .715 -4 2c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3 -1 -4 -2l-2 -2",
  arrowWaveLeftDown:
    "M7 14h-4v-4 M21 12c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3.113 -.716 -4 -2s-2.48 -2.033 -4 -2c-1.52 -.033 -3 1 -4 2l-2 2",
  arrowUp: "M12 5l0 14 M18 11l-6 -6 M6 11l6 -6",
  arrowUpTail: "M12 18l0 -15 M15 6l-3 -3l-3 3 M15 21l-3 -3l-3 3",
  arrowUpSquare: "M12 17l0 -14 M15 6l-3 -3l-3 3 M10 21v-4h4v4z",
  arrowUpRight: "M17 7l-10 10 M8 7l9 0l0 9",
  arrowUpRightCircle:
    "M8.464 15.536l9.536 -9.536 M18 10v-4h-4 M8.414 15.586a2 2 0 1 0 -2.828 2.828a2 2 0 0 0 2.828 -2.828",
  arrowUpRhombus:
    "M12 16v-13 M15 6l-3 -3l-3 3 M14.5 18.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5z",
  arrowUpLeft: "M7 7l10 10 M16 7l-9 0l0 9",
  arrowUpLeftCircle:
    "M15.536 15.536l-9.536 -9.536 M10 6h-4v4 M15.586 15.586a2 2 0 1 0 2.828 2.828a2 2 0 0 0 -2.828 -2.828",
  arrowUpCircle:
    "M12 17v-14 M15 6l-3 -3l-3 3 M12 17a2 2 0 1 0 0 4a2 2 0 0 0 0 -4",
  arrowUpBar: "M12 21l0 -18 M15 6l-3 -3l-3 3 M9 21l6 0",
  arrowSharpTurnRight:
    "M7 18v-11.31a.7 .7 0 0 1 1.195 -.495l9.805 9.805 M13 16h5v-5",
  arrowSharpTurnLeft:
    "M17 18v-11.31a.7 .7 0 0 0 -1.195 -.495l-9.805 9.805 M11 16h-5v-5",
  arrowRoundaboutRight: "M21 9h-8a5 5 0 1 0 -5 5v7 M17 5l4 4l-4 4",
  arrowRoundaboutLeft: "M3 9h8a5 5 0 1 1 5 5v7 M7 5l-4 4l4 4",
  arrowRotaryStraight:
    "M13 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M13 16v5 M13 3v7 M9 7l4 -4l4 4",
  arrowRotaryRight:
    "M8 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M8 10v10 M17 11l4 -4l-4 -4 M11 7h10",
  arrowRotaryLeft:
    "M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z M16 10v10 M13 7h-10 M7 11l-4 -4l4 -4",
  arrowRotaryLastRight:
    "M9 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M9 15v6 M11.5 9.5l6.5 -6.5 M13 3h5v5",
  arrowRotaryLastLeft:
    "M15 15a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z M15 15v6 M12.5 9.5l-6.5 -6.5 M11 3h-5v5",
  arrowRotaryFirstRight:
    "M8 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M8 10v10 M10.5 9.5l8.5 8.5 M14 18h5v-5",
  arrowRotaryFirstLeft:
    "M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z M16 10v10 M13.5 9.5l-8.5 8.5 M10 18h-5v-5",
  arrowRight: "M5 12l14 0 M13 18l6 -6 M13 6l6 6",
  arrowRightTail: "M18 15l3 -3l-3 -3 M3 15l3 -3l-3 -3 M6 12l15 0",
  arrowRightSquare: "M7 12l14 0 M18 15l3 -3l-3 -3 M3 10h4v4h-4z",
  arrowRightRhombus:
    "M8 12h13 M18 9l3 3l-3 3 M5.5 9.5l-2.5 2.5l2.5 2.5l2.5 -2.5z",
  arrowRightCircle:
    "M18 15l3 -3l-3 -3 M5 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M7 12h14",
  arrowRightBar: "M18 15l3 -3l-3 -3 M3 12h18 M3 9v6",
  arrowRampRight:
    "M7 3l0 8.707 M11 7l-4 -4l-4 4 M17 14l4 -4l-4 -4 M7 21a11 11 0 0 1 11 -11h3",
  arrowRampRight3: "M6 3v6 M16 16l4 -4l-4 -4 M6 21v-6a3 3 0 0 1 3 -3h11",
  arrowRampRight2:
    "M6 3v8.707 M16 14l4 -4l-4 -4 M6 21c0 -6.075 4.925 -11 11 -11h3",
  arrowRampLeft:
    "M17 3l0 8.707 M13 7l4 -4l4 4 M7 14l-4 -4l4 -4 M17 21a11 11 0 0 0 -11 -11h-3",
  arrowRampLeft3: "M18 3v6 M8 16l-4 -4l4 -4 M18 21v-6a3 3 0 0 0 -3 -3h-11",
  arrowRampLeft2:
    "M18 3v8.707 M8 14l-4 -4l4 -4 M18 21c0 -6.075 -4.925 -11 -11 -11h-3",
  arrowNarrowUp: "M12 5l0 14 M16 9l-4 -4 M8 9l4 -4",
  arrowNarrowRight: "M5 12l14 0 M15 16l4 -4 M15 8l4 4",
  arrowNarrowLeft: "M5 12l14 0 M5 12l4 4 M5 12l4 -4",
  arrowNarrowDown: "M12 5l0 14 M16 15l-4 4 M8 15l4 4",
  arrowMoveUp: "M12 13v-10 M9 6l3 -3l3 3 M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z",
  arrowMoveRight:
    "M11 12h10 M18 9l3 3l-3 3 M7 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z",
  arrowMoveLeft:
    "M13 12h-10 M6 15l-3 -3l3 -3 M17 12a2 2 0 1 1 4 0a2 2 0 0 1 -4 0z",
  arrowMoveDown:
    "M12 11v10 M9 18l3 3l3 -3 M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
  arrowMerge:
    "M8 7l4 -4l4 4 M12 3v5.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v1.394 M12 3v5.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v1.394",
  arrowMergeRight:
    "M16 8l-4 -4l-4 4 M12 20v-16 M18 18c-4 -1.333 -6 -4.667 -6 -10",
  arrowMergeLeft: "M8 8l4 -4l4 4 M12 20v-16 M6 18c4 -1.333 6 -4.667 6 -10",
  arrowMergeBoth:
    "M16 8l-4 -4l-4 4 M12 20v-16 M18 18c-4 -1.333 -6 -4.667 -6 -10 M6 18c4 -1.333 6 -4.667 6 -10",
  arrowLoopRight: "M12 21v-13a4 4 0 1 0 -4 4h13 M17 16l4 -4l-4 -4",
  arrowLoopRight2: "M12 21v-6m0 -6v-1a4 4 0 1 0 -4 4h13 M17 16l4 -4l-4 -4",
  arrowLoopLeft: "M13 21v-13a4 4 0 1 1 4 4h-13 M8 16l-4 -4l4 -4",
  arrowLoopLeft2: "M13 21v-6m0 -6v-1a4 4 0 1 1 4 4h-13 M8 16l-4 -4l4 -4",
  arrowLeft: "M5 12l14 0 M5 12l6 6 M5 12l6 -6",
  arrowLeftTail: "M18 12h-15 M6 9l-3 3l3 3 M21 9l-3 3l3 3",
  arrowLeftSquare: "M17 12h-14 M6 9l-3 3l3 3 M21 14h-4v-4h4z",
  arrowLeftRight:
    "M17 13l4 -4l-4 -4 M7 13l-4 -4l4 -4 M12 14a5 5 0 0 1 5 -5h4 M12 19v-5a5 5 0 0 0 -5 -5h-4",
  arrowLeftRhombus:
    "M16 12h-13 M6 9l-3 3l3 3 M18.5 9.5l2.5 2.5l-2.5 2.5l-2.5 -2.5z",
  arrowLeftCircle:
    "M17 12h-14 M6 9l-3 3l3 3 M19 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
  arrowLeftBar: "M21 12h-18 M6 9l-3 3l3 3 M21 9v6",
  arrowIteration: "M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5 M3 16h18 M18 13l3 3l-3 3",
  arrowGuide:
    "M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M7 19h3a2 2 0 0 0 2 -2v-8a2 2 0 0 1 2 -2h7 M18 4l3 3l-3 3",
  arrowForward: "M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1",
  arrowForwardUp: "M15 14l4 -4l-4 -4 M19 10h-11a4 4 0 1 0 0 8h1",
  arrowForwardUpDouble:
    "M11 14l4 -4l-4 -4 M16 14l4 -4l-4 -4 M15 10h-7a4 4 0 1 0 0 8h1",
  arrowFork:
    "M16 3h5v5 M8 3h-5v5 M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93 M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v.93",
  arrowElbowRight: "M21 14v-6h-6 M21 8l-9 9l-9 -9",
  arrowElbowLeft: "M3 14v-6h6 M3 8l9 9l9 -9",
  arrowDown: "M12 5l0 14 M18 13l-6 6 M6 13l6 6",
  arrowDownTail: "M12 6v15 M9 18l3 3l3 -3 M9 3l3 3l3 -3",
  arrowDownSquare: "M12 7v14 M9 18l3 3l3 -3 M14 3v4h-4v-4z",
  arrowDownRight: "M7 7l10 10 M17 8l0 9l-9 0",
  arrowDownRightCircle:
    "M8.464 8.464l9.536 9.536 M14 18h4v-4 M8.414 8.414a2 2 0 1 0 -2.828 -2.828a2 2 0 0 0 2.828 2.828",
  arrowDownRhombus:
    "M12 8v13 M15 18l-3 3l-3 -3 M14.5 5.5l-2.5 -2.5l-2.5 2.5l2.5 2.5z",
  arrowDownLeft: "M17 7l-10 10 M16 17l-9 0l0 -9",
  arrowDownLeftCircle:
    "M15.536 8.464l-9.536 9.536 M6 14v4h4 M15.586 8.414a2 2 0 1 0 2.828 -2.828a2 2 0 0 0 -2.828 2.828",
  arrowDownCircle: "M12 7v14 M9 18l3 3l3 -3 M12 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4",
  arrowDownBar: "M12 3v18 M9 18l3 3l3 -3 M9 3h6",
  arrowCurveRight:
    "M10 7l4 -4l4 4 M14 3v4.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v2.394",
  arrowCurveLeft:
    "M14 7l-4 -4l-4 4 M10 3v4.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v2.394",
  arrowCapsule: "M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2 M15 8l3 3l3 -3",
  arrowBounce:
    "M10 18h4 M3 8a9 9 0 0 1 9 9v1l1.428 -4.285a12 12 0 0 1 6.018 -6.938l.554 -.277 M15 6h5v5",
  arrowBigUp:
    "M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
  arrowBigUpLines:
    "M9 12h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v3h-6v-3z M9 21h6 M9 18h6",
  arrowBigUpLine:
    "M9 12h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v6h-6v-6z M9 21h6",
  arrowBigRight:
    "M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z",
  arrowBigRightLines:
    "M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3z M3 9v6 M6 9v6",
  arrowBigRightLine:
    "M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-6v-6h6z M3 9v6",
  arrowBigLeft:
    "M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z",
  arrowBigLeftLines:
    "M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h3v6h-3z M21 15v-6 M18 15v-6",
  arrowBigLeftLine:
    "M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h6v6h-6z M21 15v-6",
  arrowBigDown:
    "M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z",
  arrowBigDownLines:
    "M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3z M15 3h-6 M15 6h-6",
  arrowBigDownLine:
    "M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-6h6v6z M15 3h-6",
  arrowBearRight: "M12 3h5v5 M17 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93",
  arrowBearRight2:
    "M15 3h5v5 M20 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93 M4 5l4.5 4.5",
  arrowBearLeft: "M13 3h-5v5 M8 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93",
  arrowBearLeft2:
    "M9 3h-5v5 M4 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93 M20 5l-4.5 4.5",
  arrowBarUp: "M12 4l0 10 M12 4l4 4 M12 4l-4 4 M4 20l16 0",
  arrowBarToUp: "M12 10l0 10 M12 10l4 4 M12 10l-4 4 M4 4l16 0",
  arrowBarToRight: "M14 12l-10 0 M14 12l-4 4 M14 12l-4 -4 M20 4l0 16",
  arrowBarToLeft: "M10 12l10 0 M10 12l4 4 M10 12l4 -4 M4 4l0 16",
  arrowBarToDown: "M4 20l16 0 M12 14l0 -10 M12 14l4 -4 M12 14l-4 -4",
  arrowBarRight: "M20 12l-10 0 M20 12l-4 4 M20 12l-4 -4 M4 4l0 16",
  arrowBarLeft: "M4 12l10 0 M4 12l4 4 M4 12l4 -4 M20 4l0 16",
  arrowBarDown: "M12 20l0 -10 M12 20l4 -4 M12 20l-4 -4 M4 4l16 0",
  arrowBarBoth:
    "M8 12h-6 M5 15l-3 -3l3 -3 M22 12h-6 M19 15l3 -3l-3 -3 M12 4v16",
  arrowBadgeUp: "M17 11v6l-5 -4l-5 4v-6l5 -4z",
  arrowBadgeRight: "M13 7h-6l4 5l-4 5h6l4 -5z",
  arrowBadgeLeft: "M11 17h6l-4 -5l4 -5h-6l-4 5z",
  arrowBadgeDown: "M17 13v-6l-5 4l-5 -4v6l5 4z",
  arrowBack: "M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1",
  arrowBackUp: "M9 14l-4 -4l4 -4 M5 10h11a4 4 0 1 1 0 8h-1",
  arrowBackUpDouble:
    "M13 14l-4 -4l4 -4 M8 14l-4 -4l4 -4 M9 10h7a4 4 0 1 1 0 8h-1",
  arrowAutofitWidth:
    "M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6 M10 18h-7 M21 18h-7 M6 15l-3 3l3 3 M18 15l3 3l-3 3",
  arrowAutofitUp:
    "M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8 M18 20v-17 M15 6l3 -3l3 3",
  arrowAutofitRight:
    "M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8 M4 18h17 M18 15l3 3l-3 3",
  arrowAutofitLeft:
    "M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8 M20 18h-17 M6 15l-3 3l3 3",
  arrowAutofitHeight:
    "M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6 M18 14v7 M18 3v7 M15 18l3 3l3 -3 M15 6l3 -3l3 3",
  arrowAutofitDown:
    "M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8 M18 4v17 M15 18l3 3l3 -3",
  arrowAutofitContent:
    "M6 4l-3 3l3 3 M18 4l3 3l-3 3 M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z M10 7h-7 M21 7h-7",
};
