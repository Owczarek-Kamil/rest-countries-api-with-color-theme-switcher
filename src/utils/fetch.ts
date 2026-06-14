import localCountries from "@/data/data.json";
import { Countries } from "./types";
import { SEARCH_PARAM_NAME, REGION_PARAM_NAME } from "./searchParams";

const localCountriesData: Countries = localCountries;

export function fetchCountries(filters: {
  [key: string]: string | string[] | undefined;
}): Countries {
  let result = localCountriesData;

  const searchQuery = Array.isArray(filters[SEARCH_PARAM_NAME])
    ? filters[SEARCH_PARAM_NAME][0]
    : filters[SEARCH_PARAM_NAME];

  const regionQuery = Array.isArray(filters[REGION_PARAM_NAME])
    ? filters[REGION_PARAM_NAME][0]
    : filters[REGION_PARAM_NAME];

  if (regionQuery) {
    const lowerCaseRegion = regionQuery.toLowerCase();
    result = result.filter((country) => country.region.toLowerCase() === lowerCaseRegion);
  }

  if (searchQuery) {
    const lowerCaseSearch = searchQuery.toLowerCase();
    result = result.filter((country) => country.name.toLowerCase().includes(lowerCaseSearch));
  }

  return result;
}
