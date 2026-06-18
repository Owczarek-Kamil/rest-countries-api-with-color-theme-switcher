"use client";

import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();

  const handleBack = () => router.back();

  return (
    <button
      onClick={handleBack}
      className="flex min-h-8 w-fit items-center gap-2 rounded-xs bg-card px-6 text-sm/[2.25] font-semibold text-ink-primary shadow-card transition-colors hover:bg-ink-primary/5 focus-visible:outline-offset-4 md:min-h-10 md:px-8 md:text-base/loose">
      <IoArrowBackOutline className="size-4" />
      <span>Back</span>
    </button>
  );
}
