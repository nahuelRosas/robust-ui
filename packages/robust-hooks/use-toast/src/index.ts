import { useGlobalContext } from "@robust-ui/use-global-context";
import { generateUniqueId } from "@robust-ui/cryptography";
import { notificationPropsHook } from "./types";

export function useToast() {
  const DevTools = useGlobalContext({ key: "devTools" });
  function createNotification(props: notificationPropsHook) {
    const time = new Date().getTime();
    const id = generateUniqueId({
      object: {
        time,
        ...props,
      },
    });
    const duration = props.duration || 5000;
    DevTools.setNotificationState({
      id,
      duration,
      ...props,
    });
  }
  return createNotification;
}
