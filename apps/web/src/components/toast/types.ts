import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/nextjs-components";

export interface ToastProps extends EnhancedElementProps<HTMLDivElement> {
  status?: GenericProperty<
    "info" | "warning" | "success" | "error" | "default"
  >;
  isClosable?: GenericProperty<boolean>;
  onClose?: GenericProperty<() => void>;
  description?: GenericProperty<string>;
  label?: GenericProperty<string>;
}

export interface ToastPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {
  status?: "info" | "warning" | "success" | "error" | "default";
  isClosable?: boolean;
  onClose?: () => void;
  description?: string;
  label?: string;
}
