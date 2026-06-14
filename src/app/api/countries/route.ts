import localCountries from "@/data/data.json";
import { NextRequest, NextResponse } from "next/server";
import {
  SEARCH_PARAM_NAME,
  REGION_PARAM_NAME,
  OFFSET_PARAM_NAME,
  LIMIT,
} from "@/utils/searchParams";
import { Countries } from "@/utils/types";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request: NextRequest) {
  const randomDelay = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
  await sleep(randomDelay);

  let result: Countries = localCountries;

  const { searchParams } = request.nextUrl;
  const searchQuery = searchParams.get(SEARCH_PARAM_NAME);
  const regionQuery = searchParams.get(REGION_PARAM_NAME);
  const rawOffset = searchParams.get(OFFSET_PARAM_NAME);

  const parsedOffset = Number(rawOffset);

  const offset = !isNaN(parsedOffset) && parsedOffset > 0 ? parsedOffset : 1;

  if (regionQuery) {
    result = result.filter((country) => country.region.toLowerCase() === regionQuery.toLowerCase());
  }

  if (searchQuery) {
    result = result.filter((country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  const start = 0;
  const end = offset * LIMIT;

  const paginatedResult = result.slice(start, end);

  const hasMore = end < result.length;

  return NextResponse.json({
    countries: paginatedResult,
    hasMore: hasMore,
  });
}
