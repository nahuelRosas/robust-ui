import { notification, useGlobalContext } from "@robust-ui/use-global-context";
import { generateUniqueId } from "@robust-ui/cryptography";

export function useToast() {
  const { setNotificationState, removeNotificationState } = useGlobalContext({
    key: "devTools",
  });

  function createNotification(props: notification) {
    const date = new Date().getTime();
    const id = generateUniqueId({
      object: {
        date,
        ...props,
      },
    });

    const notification = {
      ...props,
      onClose: () => removeNotificationState(id),
      duration: props.duration || 5000,
      id,
    };
    setNotificationState(notification);

    setTimeout(() => {
      removeNotificationState(id);
    }, notification.duration);
  }

  return createNotification;
}
