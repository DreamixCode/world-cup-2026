import { cn } from "@/lib/utils";
import { SEGMENTED_MODAL_BORDER_BACKGROUND } from "../groupColors";

export const SEGMENTED_BORDER_WIDTH_PX = 10;

export function SegmentedBorder({
  children,
  className,
  innerClassName,
  borderRadius = "0.75rem",
}) {
  const outerRadius = borderRadius === "0" ? 0 : borderRadius;
  const innerRadius =
    borderRadius === "0"
      ? 0
      : `calc(${borderRadius} - ${SEGMENTED_BORDER_WIDTH_PX}px)`;

  return (
    <div
      className={cn(className)}
      style={{
        padding: SEGMENTED_BORDER_WIDTH_PX,
        background: SEGMENTED_MODAL_BORDER_BACKGROUND,
        borderRadius: outerRadius,
      }}
    >
      <div
        className={cn("overflow-hidden", innerClassName)}
        style={{ borderRadius: innerRadius }}
      >
        {children}
      </div>
    </div>
  );
}
