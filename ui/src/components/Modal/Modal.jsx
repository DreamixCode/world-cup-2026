import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { SegmentedBorder } from "../SegmentedBorder";

export function Modal({
  header = true,
  title,
  description,
  children,
  trigger,
  contentClassName,
  closeButtonClassName,
  overlayClassName,
  open,
  onOpenChange,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : <></>}
      <DialogContent
        className={cn(
          "w-full max-w-none p-0 flex! flex-col max-h-[calc(100dvh-1rem)] sm:max-h-[92vh] gap-0 bg-transparent ring-0 border-0 shadow-none",
          contentClassName,
        )}
        closeButtonClassName={closeButtonClassName}
        overlayClassName={overlayClassName}
      >
        <SegmentedBorder
          className="flex min-h-0 flex-1 flex-col"
          innerClassName="flex min-h-0 flex-1 flex-col bg-dec-primary"
        >
          {header && title != null && (
            <DialogHeader className="flex shrink-0 px-4 pt-4">
              <DialogTitle>{title}</DialogTitle>
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
            </DialogHeader>
          )}
          <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain no-scrollbar">
            {children}
          </div>
        </SegmentedBorder>
      </DialogContent>
    </Dialog>
  );
}
