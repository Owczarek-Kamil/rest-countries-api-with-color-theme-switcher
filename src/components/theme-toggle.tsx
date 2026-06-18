"use client";

import { ThemeProp } from "@/utils/types";
import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function ThemeToggle({ theme }: ThemeProp) {
  const [isDark, setIsDark] = useState(theme === "dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);

    if (!theme) {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);

    document.documentElement.classList.toggle("dark");
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-75 focus-visible:outline-offset-4">
      {!mounted ? (
        <div className="size-4 xl:size-5" />
      ) : isDark ? (
        <IoSunnyOutline className="size-4 xl:size-5" />
      ) : (
        <IoMoonOutline className="size-4 xl:size-5" />
      )}
      <span className="text-[clamp(0.75rem,0.6667rem+0.4167vw,1rem)] font-semibold capitalize">
        {isDark ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}
