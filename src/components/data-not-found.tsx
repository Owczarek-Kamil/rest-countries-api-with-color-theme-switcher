export default function DataNotFound({ plural }: { plural?: boolean }) {
  return (
    <h2 className="text-center text-2xl/snug font-extrabold md:text-[2rem]/snug">
      {`${plural ? "Countries" : "Country"}`} not found
    </h2>
  );
}
