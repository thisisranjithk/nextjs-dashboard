import { fetchRevenue } from "../data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const revenue = await fetchRevenue();
    return NextResponse.json(revenue);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch revenue data" },
      { status: 500 }
    );
  }
}
