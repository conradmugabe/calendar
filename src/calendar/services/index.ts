import { getXataClient } from "@/db";

export type TCalendarSettings = {
  view: string;
  userId: string;
};

export class CalendarSettingsService {
  update = async ({
    userId,
    view,
  }: TCalendarSettings): Promise<TCalendarSettings> => {
    const client = getXataClient();
    const filter = client.db.settings.filter({ userId });
    const userSettings = await filter.getFirst();

    return { userId, view };
  };

  get = async ({ userId }: { userId: string }): Promise<TCalendarSettings> => {
    const defaultView = "month";
    const client = getXataClient();
    const userSettings = await client.db.settings.filter({ userId }).getFirst();
    if (!userSettings) {
      await client.db.settings.create({ userId, view: defaultView });
    }
    return { userId, view: userSettings?.view || defaultView };
  };
}
