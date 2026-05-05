import { NextResponse } from "next/server";

function validateContact(body) {
  if (!body.name || !body.email || !body.phone || !body.message) {
    return "Name, email, phone, and message are required.";
  }
  return null;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const error = validateContact(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: "Contact request submitted successfully.",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
