import { ForwardRefExotic } from "@robust-ui/constructor";
import { usePathname } from "next/navigation";
import { LoaderStyleProps } from "./types";

import React, { forwardRef, useRef } from "react";
import { useSSR } from "@robust-ui/use-ssr";

export * from "./types";

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<LoaderStyleProps>
> = forwardRef(function LoaderStyleComponent(ref): React.JSX.Element {
  const { isServer } = useSSR();

  const elementCSS = useRef<React.ReactElement | null>(null);
  const Pathname = usePathname();

  if (isServer) {
    (async () => {
      try {
        const fs = require("fs");
        const path = require("path");
        const publicFolder = path.join(process.cwd(), "public");
        const pathLog = path.join(publicFolder, "path.log");
        let status: "START" | "END" | "WORKING" | "NONE" = "NONE";
        if (fs.existsSync(pathLog)) {
          const log = fs.readFileSync(pathLog, "utf8");
          if (log.includes(Pathname) && log.includes("END")) {
            status = "END";
          }
        }

        const nameFile = Pathname.toString().split("/");
        const cssFile = path.join(
          publicFolder,
          `${
            !nameFile[nameFile.length - 1]
              ? "root"
              : nameFile[nameFile.length - 1]
          }-document.css`
        );

        if (fs.existsSync(cssFile)) {
          const cssFileContent = fs.readFileSync(cssFile, "utf8");
          elementCSS.current = React.createElement(
            "style",
            {
              className: "robust-ui",
            },
            cssFileContent
          );
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }

  return <>{elementCSS.current ? elementCSS.current : null}</>;
});

export const LoaderStyle = React.memo(Factory);
