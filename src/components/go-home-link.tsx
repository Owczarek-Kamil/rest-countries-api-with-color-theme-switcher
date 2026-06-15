import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

export default function GoHomeLink() {
  return (
    <Link
      href={"/"}
      className="flex min-h-8 w-fit cursor-pointer items-center gap-2 rounded-xs bg-card px-6 text-sm/[2.25] font-light text-ink-primary shadow-card transition-all hover:opacity-75 focus-visible:outline-offset-4 md:min-h-10 md:px-8 md:py-1 md:text-base/loose">
      <IoArrowBackOutline className="size-4" />
      <span>Back</span>
    </Link>
  );
}
