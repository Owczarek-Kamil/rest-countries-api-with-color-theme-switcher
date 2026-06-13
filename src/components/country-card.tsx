import formatPopulation from "@/utils/formatter";
import Image from "next/image";

export type CountryCardProps = {
  name: string;
  flagUrl: string;
  population: number;
  region: string;
  capital?: string;
  flagPriority?: boolean;
};

export default function CountryCard(props: CountryCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card bg-card shadow-card">
      <div className="relative h-40 w-full shrink-0">
        <Image
          src={props.flagUrl}
          alt={`${props.name} flag`}
          fill
          priority={props.flagPriority}
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 pt-5.5 pb-12">
        <h2 className="text-lg/[1.45] font-extrabold text-ink-primary">{props.name}</h2>
        <div className="flex flex-col gap-2">
          <div className="text-sm/[1] text-ink-primary">
            <span className="font-semibold">Population: </span>
            <span className="font-light">{formatPopulation(props.population)}</span>
          </div>
          <div className="text-sm/[1] font-semibold text-ink-primary">
            <span className="font-semibold">Region: </span>
            <span className="font-light">{props.region}</span>
          </div>
          <div className="text-sm/[1] font-semibold text-ink-primary">
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{props.capital ?? "-"}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
