type CalendarSettings = {
  view: string;
};

export class CalendarSettingsService {
  getCalendarView = async (): Promise<CalendarSettings> => {
    const response = await fetch(process.env.CALENDAR_API_URL || "");
    return response.json();
  };
}
