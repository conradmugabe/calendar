import { CalendarSettings } from "@/calendar/models/calendar-settings";
import { User } from "@/calendar/models/user";

export type TCalendarSettings = {
  view: string;
  userId: string;
};

export class CalendarSettingsService {
  create = async (settings: TCalendarSettings): Promise<TCalendarSettings> => {
    const _settings = new CalendarSettings(settings);
    await _settings.save();
    return settings;
  };

  get = async ({ userId }: { userId: string }): Promise<TCalendarSettings> => {
    const user = await User.findOne({ email: userId });
    if (!user) throw new Error("Not Found");
    const result = await CalendarSettings.findOne({ userId: user._id });

    return { userId, view: result?.view || "month" };
  };
}
