"use client";

import { REGIONS } from "@/utils/regions";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { OFFSET_PARAM_NAME, REGION_PARAM_NAME } from "@/utils/searchParams";

export default function SelectRegion() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const currentRegionParam = searchParams.get(REGION_PARAM_NAME);

  const currentRegionName = REGIONS.find((r) => r.param === currentRegionParam)?.name;

  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const buildLink = (regionValue: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (regionValue) {
      params.set(REGION_PARAM_NAME, regionValue);
    } else {
      params.delete(REGION_PARAM_NAME);
    }

    params.set(OFFSET_PARAM_NAME, "1");

    return `/?${params.toString()}`;
  };

  return (
    <div
      className="relative w-fit text-xs/[1.35] md:text-sm/[1.45]"
      ref={dropdownRef}>
      <button
        onClick={toggle}
        className="flex min-w-50 cursor-pointer items-center justify-between rounded-card bg-card px-6 py-4 shadow-card transition hover:opacity-75 focus-visible:outline-offset-4 md:py-4.5">
        <span>{currentRegionName || "Filter by Region"}</span>
        <IoChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute z-50 flex w-full origin-top flex-col gap-2 rounded-card bg-card px-6 py-4 shadow-card transition-all ease-in-out ${
          isOpen
            ? "visible translate-y-2 scale-100 opacity-100"
            : "invisible translate-y-0 scale-95 opacity-0"
        }`}>
        {currentRegionParam && (
          <Link
            href={buildLink(null)}
            onClick={() => setIsOpen(false)}
            className="transition-opacity hover:opacity-75 focus-visible:outline-offset-4">
            All
          </Link>
        )}

        {REGIONS.map((region) => (
          <Link
            key={region.name}
            href={buildLink(region.param)}
            onClick={() => setIsOpen(false)}
            className="transition-opacity hover:opacity-75 focus-visible:outline-offset-4">
            {region.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
