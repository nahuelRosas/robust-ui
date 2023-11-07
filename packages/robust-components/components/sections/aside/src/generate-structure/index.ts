import { sizes } from "@robust-ui/theme";

export function generateStructure({
  size = "sm",
  placement = "right",
  isOpen,
}: {
  size?: keyof typeof sizes;
  placement?: "left" | "right" | "top" | "bottom";
  isOpen?: boolean;
}) {
  const partialSize = (size: string, orientation: "VH" | "VW") => {
    const sizesArray = ["full", "xl", "lg", "md", "sm", "xs"];
    const index = sizesArray.indexOf(size);
    if (index === -1) {
      if (sizes[size as keyof typeof sizes])
        return sizes[size as keyof typeof sizes];
      else return size;
    } else {
      return size + orientation;
    }
  };
  const Placement = {
    top: {
      top: "0",
      left: "0",
      right: "0",
      bottom: "auto",
    },
    right: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "auto",
    },
    bottom: {
      top: "auto",
      right: "0",
      bottom: "0",
      left: "0",
    },
    left: {
      top: "0",
      right: "auto",
      bottom: "0",
      left: "0",
    },
  };
  const transformDirection = {
    top: `translateY(calc(-100% - 5rem))`,
    bottom: `translateY(calc(100% + 5rem))`,
    left: `translateX(calc(-100% - 5rem))`,
    right: `translateX(calc(100% + 5rem))`,
  };

  return {
    heightRaw:
      size && !(placement === "top" || placement === "bottom")
        ? "100vh"
        : partialSize(size, "VH"),
    widthRaw:
      (placement === "left" || placement === "right") && size
        ? partialSize(size, "VW")
        : "0",
    transition: isOpen ? "transform 0.25s ease-in-out" : "none",
    transform: isOpen ? "none" : transformDirection[placement],
    ...Placement[placement],
  };
}
