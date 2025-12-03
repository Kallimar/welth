"use client";

import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("bg-background p-3", className)}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),

        /* MONTH CONTAINER */
        months: "flex flex-col",

        month: "space-y-4",

        /* ✅ HEADER LINE */
        caption: "flex items-center justify-between px-2",

        caption_label:
          "text-sm font-medium text-foreground",

        nav: "flex items-center gap-1",

        nav_button:
          "h-7 w-7 p-0 rounded-md hover:bg-muted",

        nav_button_previous: "",
        nav_button_next: "",

        /* DAYS */
        table: "w-full border-collapse",
        weekdays: "flex",
        weekday:
          "text-muted-foreground flex-1 text-xs text-center",
        week: "flex w-full",
        day: "flex-1 aspect-square flex items-center justify-center",
        day_button:
          "h-9 w-9 rounded-md text-sm hover:bg-muted",

        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary",
        day_today:
          "border border-primary text-primary",
        day_outside:
          "text-muted-foreground opacity-50",

        ...classNames,
      }}
      components={{
        /* ✅ Custom navigation icons */
        IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}

export { Calendar };
