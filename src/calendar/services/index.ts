import { getXataClient } from "@/db";

export type TCalendarSettings = {
  view: string;
  userId: string;
};

export type NewEvent = {
  userId: string;
  title: string;
  description: string;
};

export type Event = {
  id: string;
  userId: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export class CalendarSettingsService {
  update = async ({
    userId,
    view,
  }: TCalendarSettings): Promise<TCalendarSettings> => {
    const client = getXataClient();
    const filter = client.db.settings.filter({ userId });
    const userSettings = await filter.getFirst();
    const updatedUserSettings = await userSettings?.update({ view });

    return { userId, view: updatedUserSettings?.view || view };
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

export class CalendarEventService {
  create = async (event: NewEvent): Promise<Event> => {
    const client = getXataClient();
    const newEvent = await client.db.events.create(event);
    return {
      id: newEvent.id,
      userId: newEvent.userId || "",
      title: newEvent.title || "",
      description: newEvent.description || "",
      createdAt: newEvent.xata.createdAt,
      updatedAt: newEvent.xata.updatedAt,
    };
  };
}
