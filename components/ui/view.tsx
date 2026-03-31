import { cn } from "@/lib/cn";
import * as React from "react";
import { View as RNView, type ViewProps as RNViewProps } from "react-native";

export interface ViewProps extends RNViewProps {
  className?: string;
}

const View = React.forwardRef<RNView, ViewProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <RNView ref={ref} className={cn(className)} style={style} {...props} />
    );
  },
);

View.displayName = "View";

export { View };

