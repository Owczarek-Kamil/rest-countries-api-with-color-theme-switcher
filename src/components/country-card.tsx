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
    <article className="flex h-full flex-col overflow-hidden rounded-card bg-card shadow-card transition">
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
        <h2 className="text-lg/[1.45] font-extrabold">{props.name}</h2>
        <dl className="flex flex-col gap-2 text-sm/[1]">
          <div className="flex gap-1">
            <dt className="font-semibold">Population:</dt>
            <dd className="font-light">{formatPopulation(props.population)}</dd>
          </div>
          <div className="flex gap-1">
            <dt className="font-semibold">Region:</dt>
            <dd className="font-light">{props.region}</dd>
          </div>
          <div className="flex gap-1">
            <dt className="font-semibold">Capital:</dt>
            <dd className="font-light">{props.capital ?? "-"}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
