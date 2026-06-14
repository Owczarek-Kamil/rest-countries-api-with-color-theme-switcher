import { NextRequest, NextResponse } from "next/server";
import { OFFSET_PARAM_NAME } from "@/utils/searchParams";
import { fetchData } from "@/utils/fetchData";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request: NextRequest) {
  const randomDelay = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);

  await sleep(randomDelay);

  const { searchParams } = request.nextUrl;
  const offset = Number(searchParams.get(OFFSET_PARAM_NAME)) || 1;

  const filters = Object.fromEntries(searchParams.entries());

  const data = fetchData(filters, offset);

  return NextResponse.json(data);
}
