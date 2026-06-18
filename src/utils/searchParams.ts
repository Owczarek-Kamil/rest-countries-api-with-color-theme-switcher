export const SEARCH_PARAM_NAME = "search";
export const REGION_PARAM_NAME = "region";
export const OFFSET_PARAM_NAME = "offset";

export const LIMIT = 12;

export const getValidatedParams = (filters: Record<string, string | string[] | undefined>) => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(filters)) {
    if (value) params.append(key, Array.isArray(value) ? value[0] : value);
  }

  const rawOffset = params.get(OFFSET_PARAM_NAME);
  const parsedOffset = Number(rawOffset);
  const isValidOffset = !isNaN(parsedOffset) && parsedOffset > 0;

  return {
    params,
    isValidOffset: !!rawOffset && isValidOffset,
  };
};
