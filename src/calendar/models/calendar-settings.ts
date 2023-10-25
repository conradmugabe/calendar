import mongoose from "mongoose";

const calendarSettingsSchema = new mongoose.Schema({
  view: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const CalendarSettings = mongoose.model(
  "CalendarSettings",
  calendarSettingsSchema,
);
