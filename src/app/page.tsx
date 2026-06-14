import Link from "next/link";
import CountryCard from "@/components/country-card";
import SelectRegion from "@/components/select-region";
import SearchInput from "@/components/search-input";
import { fetchCountries } from "@/utils/fetch";
import DataNotFound from "@/components/data-not-found";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filters = await searchParams;
  const countries = fetchCountries(filters);

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
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-18 lg:grid-cols-3 xl:grid-cols-4">
            {countries.map((country, i) => (
              <li
                key={country.alpha3Code}
                className="mx-auto h-full w-full max-w-65.5">
                <Link
                  href={`/${country.alpha3Code.toLowerCase()}`}
                  className="block h-full rounded-card focus-visible:outline-offset-4">
                  <CountryCard
                    name={country.name}
                    flagUrl={country.flags.svg}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    flagPriority={i === 0}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
