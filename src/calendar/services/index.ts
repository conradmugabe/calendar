export type TCalendarSettings = {
  view: string;
  userId: string;
};

export class CalendarSettingsService {
  create = async ({
    userId,
    view,
  }: TCalendarSettings): Promise<TCalendarSettings> => {
    return { userId, view };
  };

  get = async ({ userId }: { userId: string }): Promise<TCalendarSettings> => {
    return { userId, view: "month" };
  };
}
