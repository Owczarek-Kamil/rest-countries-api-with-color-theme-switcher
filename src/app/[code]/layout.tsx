import GoBackButton from "@/components/go-back-button";
import React from "react";

export default function CountryPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-1 px-7 pt-10 pb-14 md:px-25 md:pb-16 xl:p-20">
      <div className="mx-auto flex max-w-80 flex-1 flex-col gap-16 md:max-w-xl md:gap-14 xl:max-w-7xl xl:gap-20">
        <GoBackButton />
        {children}
      </div>
    </main>
  );
}
