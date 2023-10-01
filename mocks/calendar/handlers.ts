import { rest } from "msw";

export const calendarSettingsHandlers = [
  rest.get(process.env.CALENDAR_API_URL || "", async (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        view: "day",
      }),
    );
  }),
];
