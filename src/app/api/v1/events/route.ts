import { NextRequest, NextResponse } from "next/server";

import { calendarEventService } from "@/calendar";

import { z } from "zod";

const calendarEvent = z.object({
  title: z.string(),
  description: z.string(),
  userId: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatedBody = calendarEvent.safeParse(body);
  if (!validatedBody.success)
    return new Response("Bad Request", { status: 400 });

  const event = calendarEventService.create(validatedBody.data);
  return NextResponse.json(event, { status: 201 });
}
