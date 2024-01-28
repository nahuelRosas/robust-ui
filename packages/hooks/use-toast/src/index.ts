import { notification, useGlobalContext } from "@robust-ui/use-global-context";
import { generateUniqueId } from "@robust-ui/tools";

/**
 * Returns a function that can be used to create toast notifications.
 * The created notifications will be displayed using the global context.
 *
 * @returns A function that accepts a `notification` object and creates a toast notification.
 */
export function useToast(): (props: notification) => void {
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
