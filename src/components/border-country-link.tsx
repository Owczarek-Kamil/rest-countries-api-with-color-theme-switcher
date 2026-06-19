"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BorderCountryLink({
  countryName,
  alpha3Code,
}: {
  countryName: string;
  alpha3Code: string;
}) {
  const searchParams = useSearchParams();

  return (
    <Link
      href={`/${alpha3Code.toLowerCase()}?${searchParams.toString()}`}
      className="grid min-h-7 min-w-24 place-items-center rounded-md bg-card px-4 text-xs/[1.35] text-ink-primary shadow-card transition-colors hover:bg-ink-primary/5 focus-visible:outline-offset-4 md:text-sm">
      {countryName}
    </Link>
  );
}
