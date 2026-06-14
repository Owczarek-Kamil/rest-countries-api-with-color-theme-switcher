import localCountries from "@/data/data.json";
import { Countries, CountriesApiResponse } from "./types";
import { SEARCH_PARAM_NAME, REGION_PARAM_NAME, LIMIT } from "./searchParams";

export function fetchData(
  filters: { [key: string]: string | string[] | undefined },
  offset: number,
): CountriesApiResponse {
  let result: Countries = localCountries;

  const searchQuery = Array.isArray(filters[SEARCH_PARAM_NAME])
    ? filters[SEARCH_PARAM_NAME][0]
    : filters[SEARCH_PARAM_NAME];
  const regionQuery = Array.isArray(filters[REGION_PARAM_NAME])
    ? filters[REGION_PARAM_NAME][0]
    : filters[REGION_PARAM_NAME];

  if (regionQuery) {
    result = result.filter((c) => c.region.toLowerCase() === regionQuery.toLowerCase());
  }
  if (searchQuery) {
    result = result.filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  const end = offset * LIMIT;
  const paginatedResult = result.slice(0, end);

  return {
    countries: paginatedResult,
    hasMore: end < result.length,
  };
}
