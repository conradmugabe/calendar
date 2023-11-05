import { CalendarSettings } from "@/calendar/models/calendar-settings";
import { User } from "@/calendar/models/user";
import mongodbClientPromise from "@/db/mongodb";

export type TCalendarSettings = {
  view: string;
  userId: string;
};

export class CalendarSettingsService {
  create = async (settings: TCalendarSettings): Promise<TCalendarSettings> => {
    try {
      (await mongodbClientPromise).connect();
      const collections = (await mongodbClientPromise)
        .db("test")
        .collection("calendar-settings");
      await collections.insertOne(settings);
      return settings;
    } finally {
      (await mongodbClientPromise).close();
    }
  };

  get = async ({ userId }: { userId: string }): Promise<TCalendarSettings> => {
    return new Promise((resolve) => {
      resolve({ userId, view: "month" });
    });

    // (await mongodbClientPromise).connect();
    // const userCollection = (await mongodbClientPromise)
    //   .db("test")
    //   .collection("users");
    // const user = await userCollection.findOne({ email: userId });
    // console.log("user", user);
    // if (!user) throw Error("Not Found");

    // const collection = (await mongodbClientPromise)
    //   .db("test")
    //   .collection("calendar-settings");
    // const result = await collection.findOne({ userId: user._id });

    // return {
    //   userId: user?._id.toString() || userId,
    //   view: result?.view || "month",
    // };
  };
}
