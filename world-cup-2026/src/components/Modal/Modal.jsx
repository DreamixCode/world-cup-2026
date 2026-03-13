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
  header,
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
          "w-full max-w-none p-0 overflow-hidden",
          contentClassName,
        )}
      >
        {header && (
          <DialogHeader className="px-4 pt-4">
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}
        <div className="no-scrollbar max-h-[85vh] overflow-y-auto">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
