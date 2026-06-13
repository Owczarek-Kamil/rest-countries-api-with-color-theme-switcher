import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import CountryCard from "@/components/country-card";
import { Countries } from "@/utils/types";
import localCountries from "@/data/data.json";

const localCountriesData: Countries = localCountries;

export default async function Home() {
  return (
    <div>
      <header className="bg-card px-4 py-7.5 shadow-card transition duration-300 md:px-10 xl:px-20 xl:py-6">
        <div className="mx-auto flex max-w-7xl justify-between">
          <h1 className="text-[clamp(0.875rem,0.6667rem+1.0417vw,1.5rem)] font-extrabold text-ink-primary">
            Where in the world?
          </h1>
          <button className="flex cursor-pointer items-center gap-2 text-ink-primary transition-opacity hover:opacity-75 focus-visible:outline-offset-4">
            <FontAwesomeIcon
              icon={faMoon}
              className="size-4 xl:size-5"
            />
            <span className="text-[clamp(0.75rem,0.6667rem+0.4167vw,1rem)] font-semibold capitalize">
              Dark Mode
            </span>
          </button>
        </div>
      </header>

      <main className="px-14 md:px-21">
        <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-18 lg:grid-cols-3 xl:grid-cols-4">
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
      </main>
    </div>
  );
}
