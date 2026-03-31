import { cn } from "@/lib/cn";
import { Check, ChevronDown } from "lucide-react-native";
import * as React from "react";
import { Modal, Text } from "react-native";

import { Pressable } from "./pressable";
import { ScrollView } from "./scroll-view";
import { View } from "./view";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  value?: SelectOption;
  onValueChange?: (option: SelectOption | undefined) => void;
  options?: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function Select({
  value,
  onValueChange,
  options = [],
  placeholder = "Select...",
  disabled = false,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownPosition, setDropdownPosition] = React.useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const triggerRef = React.useRef<React.ElementRef<typeof View>>(null);

  const close = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = React.useCallback(() => {
    if (disabled || !triggerRef.current) {
      return;
    }

    triggerRef.current.measure((_, __, width, height, pageX, pageY) => {
      setDropdownPosition({
        top: pageY + height + 2,
        left: pageX,
        width: Math.max(width, 120),
      });
      setIsOpen(true);
    });
  }, [disabled]);

  const handleSelect = React.useCallback(
    (option: SelectOption) => {
      onValueChange?.(option);
      close();
    },
    [close, onValueChange],
  );

  return (
    <View className={className}>
      <Pressable
        ref={triggerRef}
        onPress={open}
        className={cn(
          "flex-row items-center justify-between rounded-md border border-input bg-background px-2 py-1",
          disabled && "opacity-50",
        )}
      >
        <Text
          className={cn("mr-1 text-sm text-foreground", !value && "text-muted-foreground")}
        >
          {value?.label || placeholder}
        </Text>
        <ChevronDown className="h-3 w-3 opacity-50" />
      </Pressable>

      {isOpen && (
        <Modal
          transparent
          visible={isOpen}
          onRequestClose={close}
          animationType="fade"
        >
          <Pressable
            className="flex-1"
            style={{ backgroundColor: "transparent" }}
            onPress={close}
          >
            <View
              className="absolute overflow-hidden rounded-md border border-border bg-popover shadow-lg"
              style={{
                top: dropdownPosition.top,
                left: dropdownPosition.left,
                width: dropdownPosition.width,
                maxHeight: 200,
              }}
            >
              <ScrollView>
                {options.map((option) => (
                  <Pressable
                    key={option.value}
                    onPress={() => handleSelect(option)}
                    className="flex-row items-center px-2 py-1.5 active:bg-accent"
                  >
                    <View className="mr-1 w-4">
                      {value?.value === option.value && (
                        <Check className="h-3 w-3" />
                      )}
                    </View>
                    <Text className="text-sm text-foreground">{option.label}</Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
}

export const SelectTrigger = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <View className={className}>{children}</View>;
};

export const SelectContent = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  return null;
};

export const SelectItem = ({
  children,
}: {
  value: string;
  label: string;
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};
