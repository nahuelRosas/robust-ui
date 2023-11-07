import { ForwardRefExoticToastManager, ToastManagerProps } from "./types";
import { useGlobalContext, notification } from "@robust-ui/use-global-context";
import React, { Ref, Suspense, forwardRef, lazy } from "react";
import { Toast } from "@robust-ui/toast";

const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({ default: module.Flex }))
);

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticToastManager> =
  forwardRef<unknown, ToastManagerProps>(function ToastManagerComponent(
    { notificationPlacement = "bottomRight", ...props }: ToastManagerProps,
    ref
  ) {
    const notification = useGlobalContext({
      key: "notifications",
    }) as Record<string, notification>;

    const notificationArray = Object.values(notification);

    const Placement = {
      topRight: {
        top: "0",
        right: "0",
      },
      top: {
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
      },
      topLeft: {
        top: "0",
        left: "0",
      },
      bottomRight: {
        bottom: "0",
        right: "0",
      },
      bottom: {
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
      },
      bottomLeft: {
        bottom: "0",
        left: "0",
      },
    };

    return (
      <Suspense>
        <Flex
          display={notificationArray.length > 0 ? "flex" : "none"}
          justifyContent="flexEnd"
          flexDirection="column"
          alignItems="flexEnd"
          position="fixed"
          zIndex="9999"
          gap="4"
          p="4"
          ref={ref}
          {...Placement[notificationPlacement]}
          {...props}>
          {Object.entries(notification).map(([key, value]) => {
            return (
              <Suspense key={key}>
                <Toast {...value} />
              </Suspense>
            );
          })}
        </Flex>
      </Suspense>
    );
  });

export const ToastManager = React.memo(Factory);
