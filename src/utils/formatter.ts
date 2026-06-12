const formatter = new Intl.NumberFormat("en-US");

export default function formatPopulation(population: number) {
  return formatter.format(population);
}
