"use client";

import { useState } from "react";
import { Countries, CountriesApiResponse } from "@/utils/types";
import Link from "next/link";
import CountryCard from "./country-card";
import { IoSyncOutline } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import { OFFSET_PARAM_NAME } from "@/utils/searchParams";

export default function CountryList({
  initialCountries,
  initialHasMore,
}: {
  initialCountries: Countries;
  initialHasMore: boolean;
}) {
  const [countries, setCountries] = useState<Countries>(initialCountries);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);

  const searchParams = useSearchParams();

  const loadMore = async () => {
    setLoading(true);
    const nextOffset = offset + 1;

    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(OFFSET_PARAM_NAME, nextOffset.toString());

    const res = await fetch(`/api/countries?${newParams.toString()}`, { cache: "no-store" });
    const data: CountriesApiResponse = await res.json();

    setCountries(data.countries);
    setHasMore(data.hasMore);
    setOffset(nextOffset);
    setLoading(false);
  };

  return (
    <>
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-18 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country, i) => (
          <li
            key={country.alpha3Code}
            className="block h-full rounded-card transition-all hover:-translate-y-2 hover:shadow-lg focus-visible:outline-offset-4">
            <Link
              href={`/${country.alpha3Code.toLowerCase()}?${searchParams.toString()}`}
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
      {hasMore && (
        <button
          onClick={loadMore}
          disabled={loading}
          className={`${
            loading ? "cursor-not-allowed" : "cursor-pointer"
          } mx-auto flex min-h-8 w-fit items-center justify-center gap-2 rounded-xs bg-card px-6 text-sm/[2.25] font-semibold text-ink-primary shadow-card transition-all hover:bg-ink-primary/5 focus-visible:outline-offset-4 md:min-h-10 md:px-8 md:text-base/loose`}>
          {loading ? (
            <>
              <IoSyncOutline className="size-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            "Load More"
          )}
        </button>
      )}
    </>
  );
}
