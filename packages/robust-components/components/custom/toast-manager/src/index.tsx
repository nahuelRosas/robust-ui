import { ForwardRefExoticToastManager, ToastManagerProps } from "./types";
import { useGlobalContext, notification } from "@robust-ui/use-global-context";
import React, { Ref, forwardRef, useEffect } from "react";
import { Toast, ToastProps } from "@robust-ui/toast";
import { Flex } from "@robust-ui/flex";
const Factory: React.ForwardRefExoticComponent<ForwardRefExoticToastManager> =
  forwardRef<unknown, ToastManagerProps>(function ToastManagerComponent(
    { notification }: ToastManagerProps,
    ref: Ref<unknown>
  ) {
    const { removeNotificationState } = useGlobalContext({ key: "devTools" });
    const [notifications, setNotifications] = React.useState<
      ToastManagerProps["notification"]
    >([]);

    useEffect(() => {
      if (notification && notification.length > 0) {
        const uniqueNotifications = Array.from(
          new Set(notification.map((item) => item.id))
        )
          .map((uniqueId) =>
            notification.find((item) => item && item.id === uniqueId)
          )
          .filter((item) => item !== undefined) as notification[];

        setNotifications(uniqueNotifications);

        uniqueNotifications.forEach((item) => {
          if (item) {
            const { duration, id } = item;

            const removeToast = () => {
              setNotifications((prev) =>
                prev.filter((toast) => toast.id !== id)
              );
              removeNotificationState(id);
            };

            const timer = setTimeout(removeToast, duration);

            return () => {
              clearTimeout(timer);
            };
          }
        });
      }
    }, [notification, removeNotificationState]);

    return (
      <Flex
        ref={ref}
        position="fixed"
        bottom="0"
        right="0"
        zIndex="9999"
        flexDirection="column"
        alignItems="flexEnd"
        justifyContent="flexEnd"
        gap="4"
        p="4">
        {notifications.map(({ textProps, ...rest }, index) => {
          const removeToast = () => {
            setNotifications((prev) =>
              prev.filter((toast) => toast.id !== rest.id)
            );
            removeNotificationState(rest.id);
          };
          const propsText = textProps as ToastProps["textProps"];

          return <Toast key={index} onClose={removeToast} {...rest} />;
        })}
      </Flex>
    );
  });

export const ToastManager = React.memo(Factory);
