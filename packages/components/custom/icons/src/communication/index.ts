import { fill } from "./fill";
import { line } from "./line";
export const communication = {
  ...fill,
  ...line,
  send: "M10 14l11 -11 M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5",
  sendOff:
    "M10 14l2 -2m2 -2l7 -7 M10.718 6.713l10.282 -3.713l-3.715 10.289m-1.063 2.941l-1.722 4.77a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l4.772 -1.723 M3 3l18 18",
  messages:
    "M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10 M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2",
  messagesOff:
    "M3 3l18 18 M11 11a1 1 0 0 1 -1 -1m0 -3.968v-2.032a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10l-3 -3h-3 M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2",
  message:
    "M8 9h8 M8 13h6 M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",
  messageX:
    "M8 9h8 M8 13h6 M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6 M22 22l-5 -5 M17 22l5 -5",
  messageUp:
    "M8 9h8 M8 13h6 M11.99 18.606l-3.99 2.394v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5 M19 22v-6 M22 19l-3 -3l-3 3",
  messageStar:
    "M8 9h8 M8 13h4.5 M10.325 19.605l-2.325 1.395v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5 M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z",
  messageShare:
    "M8 9h8 M8 13h6 M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6 M16 22l5 -5 M21 21.5v-4.5h-4.5",
  messageSearch:
    "M8 9h8 M8 13h5 M11.008 19.195l-3.008 1.805v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5 M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M20.2 20.2l1.8 1.8",
  messageReport:
    "M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4 M12 8l0 3 M12 14l0 .01",
  messageQuestion:
    "M8 9h8 M8 13h6 M14 18h-1l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5 M19 22v.01 M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483",
  messagePlus:
    "M8 9h8 M8 13h6 M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5 M16 19h6 M19 16v6",
  messagePin:
    "M8 9h8 M8 13h6 M12.007 18.596l-4.007 2.404v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5 M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z M19 18v.01",
  messagePause:
    "M8 9h8 M8 13h6 M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6 M17 17v5 M21 17v5",
  messageOff:
    "M8 9h1m4 0h3 M8 13h5 M8 4h10a3 3 0 0 1 3 3v8c0 .577 -.163 1.116 -.445 1.573m-2.555 1.427h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8c0 -1.085 .576 -2.036 1.439 -2.562 M3 3l18 18",
  messageMinus:
    "M8 9h8 M8 13h6 M11.976 18.614l-3.976 2.386v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8 M16 19h6",
  messageLanguage:
    "M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4 M10 14v-4a2 2 0 1 1 4 0v4 M14 12h-4",
  messageHeart:
    "M8 9h8 M8 13h3.5 M10.48 19.512l-2.48 1.488v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4 M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z",
  messageForward:
    "M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4 M13 9l2 2l-2 2 M15 11h-6",
  messageExclamation:
    "M8 9h8 M8 13h6 M15 18h-2l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5 M19 16v3 M19 22v.01",
  messageDown:
    "M8 9h8 M8 13h6 M11.998 18.601l-3.998 2.399v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5 M19 16v6 M22 19l-3 3l-3 -3",
  messageDots:
    "M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4 M12 11l0 .01 M8 11l0 .01 M16 11l0 .01",
  messageDollar:
    "M8 9h8 M8 13h6 M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v3.5 M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5 M19 21v1m0 -8v1",
  messageCog:
    "M8 9h8 M8 13h6 M12.031 18.581l-4.031 2.419v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5 M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M19.001 15.5v1.5 M19.001 21v1.5 M22.032 17.25l-1.299 .75 M17.27 20l-1.3 .75 M15.97 17.25l1.3 .75 M20.733 20l1.3 .75",
  messageCode:
    "M8 9h8 M8 13h6 M11.012 19.193l-3.012 1.807v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6 M20 21l2 -2l-2 -2 M17 17l-2 2l2 2",
  messageCircle:
    "M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1",
  messageCircleX:
    "M13.593 19.855a9.96 9.96 0 0 1 -5.893 -.855l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.128 1.816 3.053 4.363 2.693 6.813 M22 22l-5 -5 M17 22l5 -5",
  messageCircleUp:
    "M12.004 19.98a9.869 9.869 0 0 1 -4.304 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.994 1.701 2.932 4.045 2.746 6.349 M19 22v-6 M22 19l-3 -3l-3 3",
  messageCircleStar:
    "M10.517 19.869a9.757 9.757 0 0 1 -2.817 -.869l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.666 1.421 2.594 3.29 2.747 5.21 M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z",
  messageCircleShare:
    "M12.58 19.963a9.906 9.906 0 0 1 -4.88 -.963l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.13 1.817 3.055 4.368 2.692 6.82 M16 22l5 -5 M21 21.5v-4.5h-4.5",
  messageCircleSearch:
    "M11.303 19.955a9.818 9.818 0 0 1 -3.603 -.955l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.73 1.476 2.665 3.435 2.76 5.433 M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M20.2 20.2l1.8 1.8",
  messageCircleQuestion:
    "M15.02 19.52c-2.341 .736 -5 .606 -7.32 -.52l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.649 1.407 2.575 3.253 2.742 5.152 M19 22v.01 M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483",
  messageCirclePlus:
    "M12.007 19.98a9.869 9.869 0 0 1 -4.307 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.992 1.7 2.93 4.04 2.747 6.34 M16 19h6 M19 16v6",
  messageCirclePin:
    "M12.337 19.974a9.891 9.891 0 0 1 -4.637 -.974l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.63 1.39 2.554 3.21 2.736 5.085 M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z M19 18v.01",
  messageCirclePause:
    "M12.989 19.932a9.93 9.93 0 0 1 -5.289 -.932l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.131 1.818 3.056 4.37 2.692 6.824 M17 17v5 M21 17v5",
  messageCircleOff:
    "M8.595 4.577c3.223 -1.176 7.025 -.61 9.65 1.63c2.982 2.543 3.601 6.523 1.636 9.66m-1.908 2.109c-2.787 2.19 -6.89 2.666 -10.273 1.024l-4.7 1l1.3 -3.9c-2.229 -3.296 -1.494 -7.511 1.68 -10.057 M3 3l18 18",
  messageCircleMinus:
    "M12.023 19.98a9.87 9.87 0 0 1 -4.323 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.718 2.319 3.473 5.832 2.096 8.811 M16 19h6",
  messageCircleHeart:
    "M10.59 19.88a9.763 9.763 0 0 1 -2.89 -.88l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.565 1.335 2.479 3.065 2.71 4.861 M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z",
  messageCircleExclamation:
    "M15.02 19.52c-2.34 .736 -5 .606 -7.32 -.52l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.96 1.671 2.898 3.963 2.755 6.227 M19 16v3 M19 22v.01",
  messageCircleDown:
    "M12.006 19.98a9.869 9.869 0 0 1 -4.306 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.993 1.7 2.93 4.041 2.746 6.344 M19 16v6 M22 19l-3 3l-3 -3",
  messageCircleDollar:
    "M13.16 19.914a9.94 9.94 0 0 1 -5.46 -.914l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.384 1.181 2.26 2.672 2.603 4.243 M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5 M19 21v1m0 -8v1",
  messageCircleCog:
    "M11.996 19.98a9.868 9.868 0 0 1 -4.296 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.842 1.572 2.783 3.691 2.77 5.821 M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M19.001 15.5v1.5 M19.001 21v1.5 M22.032 17.25l-1.299 .75 M17.27 20l-1.3 .75 M15.97 17.25l1.3 .75 M20.733 20l1.3 .75",
  messageCircleCode:
    "M11.036 19.933a9.798 9.798 0 0 1 -3.336 -.933l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.128 1.815 3.053 4.361 2.694 6.81 M20 21l2 -2l-2 -2 M17 17l-2 2l2 2",
  messageCircleCheck:
    "M11.042 19.933a9.798 9.798 0 0 1 -3.342 -.933l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.127 1.814 3.052 4.36 2.694 6.808 M15 19l2 2l4 -4",
  messageCircleCancel:
    "M12.015 19.98a9.87 9.87 0 0 1 -4.315 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.927 1.644 2.867 3.887 2.761 6.114 M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M17 21l4 -4",
  messageCircleBolt:
    "M13.038 19.927a9.933 9.933 0 0 1 -5.338 -.927l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.993 1.7 2.93 4.043 2.746 6.346 M19 16l-2 3h4l-2 3",
  messageCircle2: "M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1",
  messageCheck:
    "M8 9h8 M8 13h6 M10.99 19.206l-2.99 1.794v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6 M15 19l2 2l4 -4",
  messageChatbot:
    "M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4 M9.5 9h.01 M14.5 9h.01 M9.5 13a3.5 3.5 0 0 0 5 0",
  messageCancel:
    "M8 9h8 M8 13h6 M11.995 18.603l-3.995 2.397v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5 M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M17 21l4 -4",
  messageBolt:
    "M8 9h8 M8 13h6 M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5 M19 16l-2 3h4l-2 3",
  message2:
    "M8 9h8 M8 13h6 M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z",
  message2X:
    "M8 9h8 M8 13h6 M13.5 19.5l-1.5 1.5l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6 M22 22l-5 -5 M17 22l5 -5",
  message2Up:
    "M8 9h8 M8 13h6 M12.354 20.646l-.354 .354l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5 M19 22v-6 M22 19l-3 -3l-3 3",
  message2Star:
    "M8 9h8 M8 13h4.5 M10 19l-1 -1h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5 M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z",
  message2Share:
    "M8 9h8 M8 13h6 M12 21l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6 M16 22l5 -5 M21 21.5v-4.5h-4.5",
  message2Search:
    "M8 9h8 M8 13h5 M12 21l-.5 -.5l-2.5 -2.5h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5 M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M20.2 20.2l1.8 1.8",
  message2Question:
    "M8 9h8 M8 13h6 M14.5 18.5l-2.5 2.5l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5 M19 22v.01 M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483",
  message2Plus:
    "M8 9h8 M8 13h6 M12.5 20.5l-.5 .5l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5 M16 19h6 M19 16v6",
  message2Pin:
    "M8 9h8 M8 13h6 M12.5 20.5l-.5 .5l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4 M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z M19 18v.01",
  message2Pause:
    "M8 9h8 M8 13h6 M13 20l-1 1l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6 M17 17v5 M21 17v5",
  message2Off:
    "M8 9h1m4 0h3 M8 13h5 M8 4h10a3 3 0 0 1 3 3v8c0 .57 -.16 1.104 -.436 1.558m-2.564 1.442h-3l-3 3l-3 -3h-3a3 3 0 0 1 -3 -3v-8c0 -1.084 .575 -2.034 1.437 -2.561 M3 3l18 18",
  message2Minus:
    "M8 9h8 M8 13h6 M12 21l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8 M16 19h6",
  message2Heart:
    "M8 9h8 M8 13h3.5 M10.5 19.5l-1.5 -1.5h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4 M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z",
  message2Exclamation:
    "M8 9h8 M8 13h6 M15 18l-3 3l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5 M19 16v3 M19 22v.01",
  message2Down:
    "M8 9h8 M8 13h6 M12.5 20.5l-.5 .5l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5 M19 16v6 M22 19l-3 3l-3 -3",
  message2Dollar:
    "M8 9h8 M8 13h6 M13.5 19.5l-1.5 1.5l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v3.5 M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5 M19 21v1m0 -8v1",
  message2Cog:
    "M8 9h8 M8 13h6 M12 21l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5 M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M19.001 15.5v1.5 M19.001 21v1.5 M22.032 17.25l-1.299 .75 M17.27 20l-1.3 .75 M15.97 17.25l1.3 .75 M20.733 20l1.3 .75",
  message2Code:
    "M8 9h8 M8 13h6 M12 21l-1 -1l-2 -2h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6 M20 21l2 -2l-2 -2 M17 17l-2 2l2 2",
  message2Check:
    "M8 9h8 M8 13h6 M12 21l-1 -1l-2 -2h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6 M15 19l2 2l4 -4",
  message2Cancel:
    "M8 9h8 M8 13h6 M12 21l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5 M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M17 21l4 -4",
  message2Bolt:
    "M8 9h8 M8 13h6 M13 20l-1 1l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5 M19 16l-2 3h4l-2 3",
  mailbox:
    "M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5 M12 11v-8h4l2 2l-2 2h-4 M6 15h1",
  mailboxOff:
    "M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18m0 -4v-2a4 4 0 0 0 -4 -4h-2m-4 0h-4.5 M12 8v-5h4l2 2l-2 2h-4 M6 15h1 M3 3l18 18",
  mail: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z M3 7l9 6l9 -6",
  mailX:
    "M13.5 19h-8.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6 M3 7l9 6l9 -6 M22 22l-5 -5 M17 22l5 -5",
  mailUp:
    "M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5 M19 22v-6 M22 19l-3 -3l-3 3 M3 7l9 6l9 -6",
  mailStar:
    "M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4.5 M3 7l9 6l9 -6 M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z",
  mailShare:
    "M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6 M3 7l9 6l9 -6 M16 22l5 -5 M21 21.5v-4.5h-4.5",
  mailSearch:
    "M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4.5 M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M20.2 20.2l1.8 1.8 M3 7l9 6l9 -6",
  mailQuestion:
    "M15 19h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4.5 M19 22v.01 M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483 M3 7l9 6l9 -6",
  mailPlus:
    "M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5 M16 19h6 M19 16v6 M3 7l9 6l9 -6",
  mailPin:
    "M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4.5 M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z M19 18v.01 M3 7l9 6l9 -6",
  mailPause:
    "M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6 M3 7l9 6l9 -6 M17 17v5 M21 17v5",
  mailOpened:
    "M3 9l9 6l9 -6l-9 -6l-9 6 M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10 M3 19l6 -6 M15 13l6 6",
  mailOff:
    "M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2 M3 7l9 6l.565 -.377m2.435 -1.623l6 -4 M3 3l18 18",
  mailMinus:
    "M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8 M16 19h6 M3 7l9 6l9 -6",
  mailHeart:
    "M10.5 19h-5.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4 M3 7l9 6l2.983 -1.989l6.017 -4.011 M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z",
  mailForward:
    "M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5 M3 6l9 6l9 -6 M15 18h6 M18 15l3 3l-3 3",
  mailFast:
    "M3 7h3 M3 11h2 M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801z M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982",
  mailExclamation:
    "M15 19h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5 M3 7l9 6l9 -6 M19 16v3 M19 22v.01",
  mailDown:
    "M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5 M19 16v6 M22 19l-3 3l-3 -3 M3 7l9 6l9 -6",
  mailDollar:
    "M13.5 19h-8.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v3.5 M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5 M19 21v1m0 -8v1 M3 7l9 6l9 -6",
  mailCog:
    "M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5 M3 7l9 6l9 -6 M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M19.001 15.5v1.5 M19.001 21v1.5 M22.032 17.25l-1.299 .75 M17.27 20l-1.3 .75 M15.97 17.25l1.3 .75 M20.733 20l1.3 .75",
  mailCode:
    "M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6 M3 7l9 6l9 -6 M20 21l2 -2l-2 -2 M17 17l-2 2l2 2",
  mailCheck:
    "M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6 M3 7l9 6l9 -6 M15 19l2 2l4 -4",
  mailCancel:
    "M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5 M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M17 21l4 -4 M3 7l9 6l9 -6",
  mailBolt:
    "M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5 M3 7l9 6l9 -6 M19 16l-2 3h4l-2 3",
  mailAi:
    "M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4 M3 7l8 5.345m4 -1.345l6 -4 M14 21v-4a2 2 0 1 1 4 0v4 M14 19h4 M21 15v6",
};
