"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { cn } from "@/lib/utils";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("bg-background p-3", className)}
      classNames={{
        root: "w-fit",

        months: "flex flex-col",
        month: "space-y-4",

        /* ✅ HEADER WRAPPER */
        caption:
          "relative flex items-center justify-center h-8",

        caption_label:
          "text-sm font-medium",

        /* ✅ FORCE NAV INTO HEADER */
        nav:
          "absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1",

        nav_button:
          "h-7 w-7 rounded-md hover:bg-muted flex items-center justify-center",

        /* DAYS */
        table: "w-full border-collapse",
        weekdays: "flex",
        weekday:
          "flex-1 text-xs text-center text-muted-foreground",
        week: "flex w-full",
        day: "flex-1 aspect-square flex items-center justify-center",
        day_button:
          "h-9 w-9 rounded-md text-sm hover:bg-muted",

        day_selected:
          "bg-primary text-primary-foreground",
        day_today:
          "border border-primary",
        day_outside:
          "text-muted-foreground opacity-50",

        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}

export { Calendar };
