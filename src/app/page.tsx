import SelectRegion from "@/components/select-region";
import SearchInput from "@/components/search-input";
import DataNotFound from "@/components/data-not-found";
import { getValidatedParams, OFFSET_PARAM_NAME } from "@/utils/searchParams";
import { redirect } from "next/navigation";
import CountryList from "@/components/country-list";
import { CountriesApiResponse } from "@/utils/types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filters = await searchParams;
  const { params, isValidOffset } = getValidatedParams(filters);

  if (!isValidOffset) {
    params.set(OFFSET_PARAM_NAME, "1");
    redirect(`/?${params.toString()}`);
  }

  const currentOffset = Number(params.get(OFFSET_PARAM_NAME)) || 1;

  const baseUrl = process.env.APP_URL;
  const res = await fetch(`${baseUrl}/api/countries?${params.toString()}`);
  const data: CountriesApiResponse = await res.json();

  const countries = data.countries;
  const hasMore = data.hasMore;

  return (
    <main className="px-4 pt-6 pb-16 md:px-21 md:pt-12 md:pb-14.5 xl:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:gap-12">
        <nav className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-2">
          <SearchInput />
          <SelectRegion />
        </nav>
        {countries.length === 0 ? (
          <DataNotFound plural />
        ) : (
          <CountryList
            key={JSON.stringify(filters)}
            initialCountries={countries}
            initialHasMore={hasMore}
            offsetParam={currentOffset}
          />
        )}
      </div>
    </main>
  );
}
