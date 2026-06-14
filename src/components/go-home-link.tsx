import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function GoHomeLink() {
  return (
    <Link
      href={"/"}
      className="flex min-h-8 w-fit cursor-pointer items-center gap-2 rounded-xs px-6 text-sm/[2.25] font-light text-ink-primary shadow-card transition-opacity hover:opacity-75 focus-visible:outline-offset-4 md:min-h-10 md:px-8 md:py-1 md:text-base/loose">
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        className="size-4"
      />
      <span>Back</span>
    </Link>
  );
}
