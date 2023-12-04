import { useGlobalContext, notification } from "@robust-ui/use-global-context";
import { ForwardRefExotic } from "@robust-ui/constructor";
import React, { forwardRef, lazy } from "react";
import { ToastManagerProps } from "./types";
import { Toast } from "@robust-ui/toast";

const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({ default: module.Flex })),
);

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<ToastManagerProps>
> = forwardRef(function ToastManagerComponent(
  { notificationPlacement = "bottomRight", ...props },
  ref,
) {
  const notification = useGlobalContext({
    key: "notifications",
  }) as Record<string, notification>;

  const notificationArray = Object.values(notification);

  const Placement = {
    topRight: {
      topRaw: "0",
      rightRaw: "0",
    },
    top: {
      topRaw: "0",
      leftRaw: "50%",
      transformRaw: "translateX(-50%)",
    },
    topLeft: {
      topRaw: "0",
      leftRaw: "0",
    },
    bottomRight: {
      bottomRaw: "0",
      rightRaw: "0",
    },
    bottom: {
      bottomRaw: "0",
      leftRaw: "50%",
      transformRaw: "translateX(-50%)",
    },
    bottomLeft: {
      bottomRaw: "0",
      leftRaw: "0",
    },
  };

  return (
    <Flex
      display={notificationArray.length > 0 ? "flex" : "none"}
      justifyContent="flexEnd"
      flexDirection="column"
      alignItems="flexEnd"
      position="fixed"
      zIndexRaw="9999"
      gap="4"
      p="4"
      ref={ref}
      {...Placement[notificationPlacement]}
      {...props}
    >
      {Object.entries(notification).map(([key, value]) => {
        return <Toast key={key} {...value} subkey={key} />;
      })}
    </Flex>
  );
});

export const ToastManager = React.memo(Factory);
