import * as React from "react";
import {
  Platform,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  type KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps
} from "react-native";
import { cn } from "../../libs/cn";

interface KeyboardAvoidingViewProps extends Omit<RNKeyboardAvoidingViewProps, "behavior"> {
  behavior?: RNKeyboardAvoidingViewProps["behavior"];
}

const KeyboardAvoidingView = React.forwardRef<
  React.ElementRef<typeof RNKeyboardAvoidingView>,
  KeyboardAvoidingViewProps
>(({ className, behavior, ...props }, ref) => {
  // Platform-specific behavior
  const defaultBehavior = behavior || Platform.select({
    ios: "padding",
    android: "height",
    default: "padding",
  });

  return (
    <RNKeyboardAvoidingView
      ref={ref}
      behavior={defaultBehavior}
      className={cn("flex-1", className)}
      {...props}
    />
  );
});
KeyboardAvoidingView.displayName = "KeyboardAvoidingView";

export { KeyboardAvoidingView };
export type { KeyboardAvoidingViewProps };

