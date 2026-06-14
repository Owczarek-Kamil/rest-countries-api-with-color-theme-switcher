import { ThemeProp } from "@/utils/types";
import ThemeToggle from "./theme-toggle";

export default function Header({ theme }: ThemeProp) {
  return (
    <header className="bg-card px-4 py-7.5 shadow-card transition md:px-10 xl:px-20 xl:py-6">
      <div className="mx-auto flex max-w-7xl justify-between">
        <h1 className="text-[clamp(0.875rem,0.6667rem+1.0417vw,1.5rem)] font-extrabold">
          Where in the world?
        </h1>
        <ThemeToggle theme={theme} />
      </div>
    </header>
  );
}
