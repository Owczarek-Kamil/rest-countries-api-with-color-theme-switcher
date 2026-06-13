import Link from "next/link";
import CountryCard from "@/components/country-card";
import { Countries } from "@/utils/types";
import localCountries from "@/data/data.json";

const localCountriesData: Countries = localCountries;

export default async function Home() {
  return (
    <main className="px-14 pt-8 pb-16 md:px-21 md:pt-12 md:pb-14.5 xl:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Search input and region picker will be here  */}
        {/* <nav></nav> */}
        <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-18 lg:grid-cols-3 xl:grid-cols-4">
          {localCountriesData.map((country, i) => (
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
      </div>
    </main>
  );
}
