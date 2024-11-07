"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0",
        orientation === "horizontal"
          ? "h-[1px] w-full my-2"
          : "h-full w-[1px] mx-2",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(${
          orientation === "horizontal" ? "90deg" : "0deg"
        },
         hsl(var(--border)) 45%, transparent 45%, transparent 100%)`,
        backgroundSize: orientation === "horizontal" ? "9px 1px" : "1px 9px",
      }}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
