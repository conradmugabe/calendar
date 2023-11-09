import mongodbClientPromise from "@/db/mongodb";

export type TCalendarSettings = {
  view: string;
  userId: string;
};

export class CalendarSettingsService {
  create = async (settings: TCalendarSettings): Promise<TCalendarSettings> => {
    const client = await mongodbClientPromise;
    const db = client.db();
    const users = db.collection("users");
    const user = await users.findOne({ email: settings.userId });

    const settingsCollection = db.collection("settings");
    const result = await settingsCollection.findOne({ userId: user?._id });

    return {
      userId: user?._id.toString() || settings.userId,
      view: result?.view || "month",
    };
  };

  get = async ({ userId }: { userId: string }): Promise<TCalendarSettings> => {
    const client = await mongodbClientPromise;
    const db = client.db();
    const users = db.collection("users");
    const user = await users.findOne({ email: userId });

    const settings = db.collection("settings");
    const result = await settings.findOne({ userId: user?._id });
    return {
      userId: user?._id.toString() || userId,
      view: result?.view || "month",
    };
  };
}
