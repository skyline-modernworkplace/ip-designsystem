import { ComponentDocumentation, ComponentDemo } from "./docs";
import React, { useState } from "react";
import DateRangeText from "ui-toolkit/components/DateRangeText/DateRangeText";
import PropsTable from "./PropsTable";
import { addDays, startOfDay } from "date-fns";
let documentation: ComponentDocumentation = {
  title: "Date Range Text",
  id: "DateRangeText",
  description: (
    <>
      <p>
        Takes in a two dates and displays them as a string. Useful for displaying an Event's start
        and end dates as a single string.
      </p>
      <PropsTable
        props={[
          { name: "start", type: "Date", isRequired: true, description: "The event start date." },
          { name: "end", type: "Date", isRequired: false, description: "The event end date." },
        ]}
      />
    </>
  ),
  demos: [
    {
      title: "Single Day",
      description: "For a single day date range",
      slug: "single-day",
      code: `<h1>
  <DateRangeText
    start={new Date("December 17, 2019 14:00:00")}
    end={new Date("December 17, 2019 16:00:00")}
  />
</h1>`,
      scope: {
        DateRangeText: DateRangeText,
        addDays: addDays,
        startOfDay,
      },
    },
    {
      title: "Single Day - All Day",
      description: "For a single day date range on an all day event.",
      slug: "single-day-all-day",
      code: `<h1>
  <DateRangeText start={new Date("11/12/2019")} />
</h1>`,
      scope: {
        DateRangeText: DateRangeText,
        addDays: addDays,
        startOfDay,
      },
    },
    {
      title: "Multi Day",
      description: "For a multi-day date range, with explicit start and end times.",
      slug: "multi-day",
      code: `<h1>
  <DateRangeText
    start={new Date("December 17, 2019 14:00:00")}
    end={new Date("December 19, 2019 16:00:00")}
  />
</h1>`,
      scope: {
        DateRangeText: DateRangeText,
        addDays: addDays,
      },
    },
    {
      title: "Multi Day - All Day",
      description: "For a multi-day date range, on an all day event",
      slug: "multi-day-all-day",
      code: `<h1>
  <DateRangeText
    start={new Date("11/12/2019")}
    end={new Date("11/15/2019")}
  />
</h1>`,
      scope: {
        DateRangeText: DateRangeText,
        addDays: addDays,
      },
    },
  ],
};

export default documentation;
