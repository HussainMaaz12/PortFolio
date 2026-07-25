import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Name, email, and message are required." }, { status: 400 });
    }

    // Delivery will be connected later; this endpoint deliberately persists nothing.
    return NextResponse.json({ message: "Thanks — your message has been received." });
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }
}
