"use client";

import React from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { DayPicker, getDefaultClassNames, DayButton } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters = {},
  components = {},
  ...props
}) {
  const defaults = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      className={cn("bg-background p-3", className)}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaults.root),
        months: cn("flex flex-col gap-4", defaults.months),
        month: cn("space-y-3", defaults.month),
        nav: cn(
          "absolute inset-x-0 flex justify-between px-1 top-0",
          defaults.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-7 p-0",
          defaults.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-7 p-0",
          defaults.button_next
        ),
        month_caption: cn(
          "flex justify-center mt-2 text-sm font-medium",
          defaults.month_caption
        ),
        weekdays: cn("flex", defaults.weekdays),
        weekday: cn(
          "flex-1 text-xs text-center text-muted-foreground",
          defaults.weekday
        ),
        week: cn("flex", defaults.week),
        day: cn(
          "flex-1 aspect-square flex items-center justify-center",
          defaults.day
        ),
        day_button: cn(
          "h-9 w-9 rounded-md text-sm hover:bg-muted",
          defaults.day_button
        ),
        day_selected: cn(
          "bg-primary text-primary-foreground",
          defaults.day_selected
        ),
        day_outside: cn(
          "text-muted-foreground opacity-50",
          defaults.outside
        ),
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
        DayButton: CalendarDayButton,
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({ modifiers, day, ...buttonProps }) {
  const ref = React.useRef();

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-selected={modifiers.selected}
      className={cn(
        "aspect-square w-full rounded-md data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
      )}
      {...buttonProps}
    />
  );
}

export { Calendar };
