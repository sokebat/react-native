import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { View, type ViewProps } from "react-native";

import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary",
        secondary: "border-transparent bg-secondary",
        destructive: "border-transparent bg-destructive",
        outline: "border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BadgeProps extends ViewProps, VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<React.ElementRef<typeof View>, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <View
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  ),
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
export type { BadgeProps };
