import { NextRequest, NextResponse } from "next/server";

import { z } from "zod";

import { calendarSettingsService } from "@/calendar";

const settingsSchema = z.object({
  userId: z.string(),
  view: z.string(),
});

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const validatedBody = settingsSchema.safeParse(body);
  if (!validatedBody.success) {
    return new Response(validatedBody.error.errors[0].message, { status: 400 });
  }
  const { userId, view } = validatedBody.data;
  const response = await calendarSettingsService.update({ userId, view });
  return NextResponse.json(response, { status: 200 });
}
