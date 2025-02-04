import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const geo = req.geo?.country;
    return NextResponse.json(
      {
        geo,
        message: `${req.geo?.latitude as string} is your country`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
