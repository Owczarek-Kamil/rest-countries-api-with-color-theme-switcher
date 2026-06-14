import { IoMoonOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="bg-card px-4 py-7.5 shadow-card transition duration-300 md:px-10 xl:px-20 xl:py-6">
      <div className="mx-auto flex max-w-7xl justify-between">
        <h1 className="text-[clamp(0.875rem,0.6667rem+1.0417vw,1.5rem)] font-extrabold text-ink-primary">
          Where in the world?
        </h1>
        <button className="flex cursor-pointer items-center gap-2 text-ink-primary transition-opacity hover:opacity-75 focus-visible:outline-offset-4">
          <IoMoonOutline className="size-4 xl:size-5" />
          <span className="text-[clamp(0.75rem,0.6667rem+0.4167vw,1rem)] font-semibold capitalize">
            Dark Mode
          </span>
        </button>
      </div>
    </header>
  );
}
