import { sizes } from "@robust-ui/theme";

/**
 * Generates the structure for a section aside component.
 *
 * @param options - The options for generating the structure.
 * @param options.size - The size of the section aside. Defaults to "sm".
 * @param options.placement - The placement of the section aside. Defaults to "right".
 * @param options.isOpen - Whether the section aside is open. Defaults to undefined.
 *
 * @returns The generated structure for the section aside.
 */
export function generateStructure({
  size = "sm",
  placement = "right",
  isOpen,
}: {
  size?: keyof typeof sizes;
  placement?: "left" | "right" | "top" | "bottom";
  isOpen?: boolean;
}):
  | {
      topRaw: string;
      leftRaw: string;
      rightRaw: string;
      bottomRaw: string;
      heightRaw: string;
      widthRaw: string;
      transitionRaw: string;
      transformRaw: string;
    }
  | {
      topRaw: string;
      rightRaw: string;
      bottomRaw: string;
      leftRaw: string;
      heightRaw: string;
      widthRaw: string;
      transitionRaw: string;
      transformRaw: string;
    }
  | {
      topRaw: string;
      rightRaw: string;
      bottomRaw: string;
      leftRaw: string;
      heightRaw: string;
      widthRaw: string;
      transitionRaw: string;
      transformRaw: string;
    }
  | {
      topRaw: string;
      rightRaw: string;
      bottomRaw: string;
      leftRaw: string;
      heightRaw: string;
      widthRaw: string;
      transitionRaw: string;
      transformRaw: string;
    } {
  const partialSize = (size: string, orientation: "DVH" | "DVW") => {
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
      topRaw: "0",
      leftRaw: "0",
      rightRaw: "0",
      bottomRaw: "auto",
    },
    right: {
      topRaw: "0",
      rightRaw: "0",
      bottomRaw: "0",
      leftRaw: "auto",
    },
    bottom: {
      topRaw: "auto",
      rightRaw: "0",
      bottomRaw: "0",
      leftRaw: "0",
    },
    left: {
      topRaw: "0",
      rightRaw: "auto",
      bottomRaw: "0",
      leftRaw: "0",
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
        ? "100dvh"
        : partialSize(size, "DVH"),
    widthRaw:
      (placement === "left" || placement === "right") && size
        ? partialSize(size, "DVW")
        : "auto",
    transitionRaw: "transform 0.75s cubic-bezier(1, 0.43, 0, 1.04)",
    transformRaw: isOpen ? "none" : transformDirection[placement],
    ...Placement[placement],
  };
}
