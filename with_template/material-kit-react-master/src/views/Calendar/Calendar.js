import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Scheduler, AgendaView } from "@progress/kendo-react-scheduler";
import { sampleDataWithResources, displayDate } from "./events-utc.js";

const Calendar = () => {
  return (
    <Scheduler
      data={sampleDataWithResources}
      defaultDate={displayDate}
      group={{
        resources: ["Rooms", "Persons"],
      }}
      resources={[
        {
          name: "Rooms",
          data: [
            { text: "Meeting Room 101", value: 1, color: "red" },
            { text: "Meeting Room 201", value: 2, color: "green" },
          ],
          field: "roomId",
          valueField: "value",
          textField: "text",
          colorField: "color",
        },
        {
          name: "Persons",
          data: [
            { text: "Peter", value: 1 },
            { text: "Alex", value: 2 },
          ],
          field: "personId",
          valueField: "value",
          textField: "text",
          colorField: "color",
        },
      ]}
    >
      <AgendaView title="Compact View" />
    </Scheduler>
  );
};

export default Calendar;
