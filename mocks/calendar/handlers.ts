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

  rest.post(process.env.CALENDAR_API_URL || "", async (req, res, ctx) => {
    const { view } = req.body as { view: string };
    return res(
      ctx.status(200),
      ctx.json({
        view,
      }),
    );
  }),
];
