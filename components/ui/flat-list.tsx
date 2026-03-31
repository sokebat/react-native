import { cn } from "@/lib/cn";
import * as React from "react";
import {
  FlatList as RNFlatList,
  type FlatListProps as RNFlatListProps,
} from "react-native";

export interface FlatListProps<ItemT> extends RNFlatListProps<ItemT> {
  className?: string;
  contentContainerClassName?: string;
}

function FlatListInner<ItemT>(
  { className, contentContainerClassName, contentContainerStyle, style, ...rest }: FlatListProps<ItemT>,
  ref: React.ForwardedRef<RNFlatList<ItemT>>,
) {
  return (
    <RNFlatList
      ref={ref}
      className={cn(className)}
      contentContainerClassName={cn(contentContainerClassName)}
      contentContainerStyle={contentContainerStyle}
      style={style}
      {...rest}
    />
  );
}

export const FlatList = React.forwardRef(FlatListInner) as <ItemT = any>(
  props: FlatListProps<ItemT> & React.RefAttributes<RNFlatList<ItemT>>,
) => React.ReactElement;

(FlatList as any).displayName = "FlatList";
