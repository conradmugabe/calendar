export type CalendarSettings = {
  view: string;
};

export class CalendarSettingsService {
  create = async (settings: CalendarSettings): Promise<CalendarSettings> => {
    const response = await fetch(process.env.CALENDAR_API_URL || "", {
      method: "POST",
      body: JSON.stringify(settings),
    });
    return response.json();
  };

  get = async (): Promise<CalendarSettings> => {
    const response = await fetch(process.env.CALENDAR_API_URL || "");
    return response.json();
  };
}
