import { NextResponse } from "next/server";

function validateLead(body) {
  if (!body.name || !body.email || !body.phone) {
    return "Name, email, and phone are required.";
  }
  return null;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const error = validateLead(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully.",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
