import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function Modal({
  header = true,
  title,
  description,
  children,
  trigger,
  contentClassName,
  open,
  onOpenChange,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {trigger ?? <Button variant="outline">Open</Button>}
      </DialogTrigger>
      <DialogContent
        className={cn(
          "w-full max-w-none p-0 flex! flex-col max-h-[calc(100dvh-1rem)] sm:max-h-[92vh] gap-0",
          contentClassName,
        )}
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
      </DialogContent>
    </Dialog>
  );
}
