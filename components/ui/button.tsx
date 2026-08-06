import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_10px_30px_-10px_rgba(212,175,55,0.7)] hover:bg-gold-300 hover:shadow-[0_14px_36px_-10px_rgba(212,175,55,0.85)] hover:-translate-y-0.5",
        secondary:
          "bg-ink-800 text-ivory-100 hover:bg-ink-700 dark:bg-muted dark:text-foreground dark:hover:bg-ink-600",
        outline:
          "border border-border bg-transparent text-foreground hover:border-gold-400/60 hover:text-gold-400 hover:bg-gold-400/5",
        goldOutline:
          "border border-gold-400/60 bg-transparent text-gold-400 hover:bg-gold-400 hover:text-ink-950 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.7)]",
        ghost: "text-foreground hover:bg-muted hover:text-foreground",
        link: "text-gold-400 underline-offset-4 hover:underline",
        whatsapp:
          "bg-[#25D366] text-ink-950 hover:bg-[#20bd5a] hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)]",
      },
      size: {
        default: "h-11 px-6 py-2 [&_svg]:size-4",
        sm: "h-9 rounded-md px-3 [&_svg]:size-3.5",
        lg: "h-13 rounded-xl px-8 text-base [&_svg]:size-5",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
