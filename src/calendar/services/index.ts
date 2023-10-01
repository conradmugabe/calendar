import axios from "axios";

export type CalendarSettings = {
  view: string;
};

export class CalendarSettingsService {
  create = async (settings: CalendarSettings): Promise<CalendarSettings> => {
    const response = await axios.post<CalendarSettings>(
      process.env.CALENDAR_API_URL || "",
      settings,
    );
    return response.data;
  };

  get = async (): Promise<CalendarSettings> => {
    const response = await axios.get<CalendarSettings>(
      process.env.CALENDAR_API_URL || "",
    );
    return response.data;
  };
}
