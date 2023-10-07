import {
  EnhancedElementProps,
} from "@robust-ui/constructor";
import {
  notification,
} from "@robust-ui/use-global-context";
export interface ToastManagerProps extends EnhancedElementProps<HTMLDivElement> {
 notification: notification[]
}


export type ForwardRefExoticToastManager = Omit<ToastManagerProps, "ref"> &
  React.RefAttributes<unknown> &
  ToastManagerProps;
