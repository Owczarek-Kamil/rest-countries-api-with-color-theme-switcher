import localCountries from "@/data/data.json";
import formatPopulation from "@/utils/formatter";
import { Countries } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const localCountriesData: Countries = localCountries;

export default async function CountryPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;

  const countryData = localCountriesData.find(
    (country) => country.alpha3Code.toLowerCase() === code.toLowerCase(),
  );

  if (!countryData) {
    notFound();
  }

  function fetchBorders() {
    if (!countryData?.borders) return [];

    return countryData.borders.flatMap((code) => {
      const borderCountry = localCountriesData.find((c) => c.alpha3Code === code);

      return borderCountry
        ? [{ name: borderCountry.name, alpha3Code: borderCountry.alpha3Code }]
        : [];
    });
  }

  return (
    <article className="flex flex-col gap-12 md:gap-14 xl:flex-row xl:gap-30">
      <div className="relative h-57.25 w-full shrink-0 overflow-hidden rounded-card shadow-card md:h-102 xl:w-140">
        <Image
          src={countryData.flags.svg}
          alt={`${countryData.name} flag`}
          fill
          priority
          className="object-contain p-2"
        />
      </div>
      <div className="flex w-full flex-col gap-4 md:gap-6">
        <h2 className="text-2xl/snug font-extrabold text-ink-primary md:text-[2rem]/snug">
          {countryData.name}
        </h2>
        <div className="flex flex-col gap-8 md:gap-6.5 xl:gap-16">
          <div className="flex flex-col gap-8 text-sm/[2rem] text-ink-primary md:flex-row md:justify-between md:text-base/[2rem]">
            <dl>
              <div className="flex gap-1">
                <dt className="font-semibold capitalize">Native name:</dt>
                <dd className="font-light">{countryData.nativeName}</dd>
              </div>
              <div className="flex gap-1">
                <dt className="font-semibold capitalize">Population:</dt>
                <dd className="font-light">{formatPopulation(countryData.population)}</dd>
              </div>
              <div className="flex gap-1">
                <dt className="font-semibold capitalize">Region:</dt>
                <dd className="font-light">{countryData.region}</dd>
              </div>
              <div className="flex gap-1">
                <dt className="font-semibold capitalize">Sub region:</dt>
                <dd className="font-light">{countryData.subregion}</dd>
              </div>
              <div className="flex gap-1">
                <dt className="font-semibold capitalize">Capitals:</dt>
                <dd className="font-light">{countryData.capital ?? "-"}</dd>
              </div>
            </dl>
            <dl>
              <div className="flex gap-1">
                <dt className="font-semibold capitalize">Top level domain:</dt>
                <dd className="font-light">{countryData.topLevelDomain.join(", ")}</dd>
              </div>
              <div className="flex gap-1">
                <dt className="font-semibold capitalize">Currencies:</dt>
                <dd className="font-light">
                  {countryData.currencies?.map((currency) => currency.name).join(", ") ?? "-"}
                </dd>
              </div>
              <div className="flex gap-1">
                <dt className="font-semibold capitalize">Languages:</dt>
                <dd className="font-light">
                  {countryData.languages.map((language) => language.name).join(", ")}
                </dd>
              </div>
            </dl>
          </div>
          <section className="flex flex-col gap-4 md:flex-row">
            <h3 className="shrink-0 text-base/[1.75rem] font-semibold text-ink-primary">
              Border Countries:
            </h3>
            <ul className="flex flex-wrap gap-4">
              {fetchBorders().map((borderCountry) => (
                <li key={borderCountry.name}>
                  <Link
                    href={`/${borderCountry.alpha3Code.toLowerCase()}`}
                    className="grid min-h-7 min-w-24 place-items-center rounded-xs bg-card px-1.5 text-xs/[1.35] text-ink-primary shadow-card transition-opacity hover:opacity-75 focus-visible:outline-offset-4 md:text-sm">
                    {borderCountry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
