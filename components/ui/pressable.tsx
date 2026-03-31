import { cn } from "@/lib/cn";
import * as React from "react";
import {
  Pressable as RNPressable,
  type PressableProps as RNPressableProps,
} from "react-native";

export interface PressableProps extends RNPressableProps {
  className?: string;
}

const Pressable = React.forwardRef<
  React.ElementRef<typeof RNPressable>,
  PressableProps
>(({ className, style, ...props }, ref) => {
  return (
    <RNPressable ref={ref} className={cn(className)} style={style} {...props} />
  );
});

Pressable.displayName = "Pressable";

export { Pressable };

