import SelectRegion from "@/components/select-region";
import SearchInput from "@/components/search-input";
import DataNotFound from "@/components/data-not-found";
import CountryList from "@/components/country-list";
import { fetchData } from "@/utils/fetchData";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filters = await searchParams;

  const data = fetchData(filters, 1);

  return (
    <main className="px-4 pt-6 pb-16 md:px-21 md:pt-12 md:pb-14.5 xl:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:gap-12">
        <nav className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-2">
          <SearchInput />
          <SelectRegion />
        </nav>
        {data.countries.length === 0 ? (
          <DataNotFound plural />
        ) : (
          <CountryList
            key={JSON.stringify(filters)}
            initialCountries={data.countries}
            initialHasMore={data.hasMore}
          />
        )}
      </div>
    </main>
  );
}
