"use client";

import { SEARCH_PARAM_NAME } from "@/utils/searchParams";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentSearchQuery = searchParams.get(SEARCH_PARAM_NAME);

  const [value, setValue] = useState(currentSearchQuery ?? "");

  useEffect(() => {
    if (value === (currentSearchQuery ?? "")) return;

    const timeoutId = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set(SEARCH_PARAM_NAME, value);
      } else {
        params.delete(SEARCH_PARAM_NAME);
      }

      router.push(`/?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [value, currentSearchQuery, router, searchParams]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get(SEARCH_PARAM_NAME)?.toString();

    const params = new URLSearchParams(searchParams.toString());

    if (searchValue) {
      params.set(SEARCH_PARAM_NAME, searchValue);
    } else {
      params.delete(SEARCH_PARAM_NAME);
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full items-center xl:max-w-120">
      <input
        name={SEARCH_PARAM_NAME}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for a country…"
        className="peer w-full rounded-card bg-card py-4 pl-18 text-xs/[1.35] shadow-card transition placeholder:text-ink-muted md:py-4.5 md:text-sm/[1.45]"
      />
      <IoSearch className="pointer-events-none absolute left-8 size-4 text-ink-muted transition-colors peer-focus-visible:text-ink-primary md:size-4.5" />{" "}
    </form>
  );
}
