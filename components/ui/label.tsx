import { cn } from "@/lib/cn";
import * as React from "react";
import { Pressable, type PressableProps } from "react-native";

interface LabelProps extends PressableProps {
  textClass?: string;
}

const Label = React.forwardRef<React.ElementRef<typeof Pressable>, LabelProps>(
  ({ className, ...props }, ref) => (
    <Pressable
      ref={ref}
      className={cn("disabled:cursor-not-allowed", className)}
      accessible={true}
      accessibilityRole="text"
      {...props}
    />
  ),
);
Label.displayName = "Label";

export { Label };
