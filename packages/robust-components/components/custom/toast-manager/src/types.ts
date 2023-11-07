import { EnhancedElementProps } from "@robust-ui/constructor";
export interface ToastManagerProps
  extends EnhancedElementProps<HTMLDivElement> {
  notificationPlacement?:
    | "topRight"
    | "topLeft"
    | "bottomRight"
    | "bottomLeft"
    | "top"
    | "bottom";
}

export type ForwardRefExoticToastManager = Omit<ToastManagerProps, "ref"> &
  React.RefAttributes<unknown> &
  ToastManagerProps;
