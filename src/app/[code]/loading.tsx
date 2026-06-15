export default function Loading() {
  return (
    <div className="flex w-full animate-pulse flex-col gap-12 rounded-card bg-card px-4 pt-4 pb-6 shadow-card transition-colors md:gap-14 md:px-6 md:pt-6 md:pb-8 xl:flex-row xl:items-center xl:gap-16 xl:px-6 xl:pt-8">
      {/* Image Skeleton */}
      <div className="h-57.25 w-full shrink-0 rounded-card bg-skeleton transition-colors md:h-102 xl:w-140" />

      <div className="flex w-full flex-col gap-4 py-8 md:gap-6">
        {/* Country name  */}
        <div className="h-8 w-1/2 rounded bg-skeleton transition-colors md:h-11" />

        <div className="mt-4 flex flex-col gap-8 md:mt-6 md:gap-6.5 xl:mt-10 xl:gap-16">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-0.5">
              <div className="h-8 w-3/4 rounded bg-skeleton transition-colors" />
              <div className="h-8 w-5/6 rounded bg-skeleton transition-colors" />
              <div className="h-8 w-2/3 rounded bg-skeleton transition-colors" />
              <div className="h-8 w-4/5 rounded bg-skeleton transition-colors" />
              <div className="h-8 w-3/4 rounded bg-skeleton transition-colors" />
            </div>

            <div className="flex w-full flex-col gap-0.5">
              <div className="h-8 w-4/5 rounded bg-skeleton transition-colors" />
              <div className="h-8 w-3/4 rounded bg-skeleton transition-colors" />
              <div className="h-8 w-2/3 rounded bg-skeleton transition-colors" />
            </div>
          </div>

          <section className="mt-6 flex flex-col gap-4 md:mt-2 md:flex-row">
            {/* Border countries */}
            <div className="h-7 w-32 shrink-0 rounded bg-skeleton transition-colors" />

            <div className="flex flex-wrap gap-4">
              <div className="h-7 w-24 rounded-xs bg-skeleton shadow-card transition-colors" />
              <div className="h-7 w-20 rounded-xs bg-skeleton shadow-card transition-colors" />
              <div className="h-7 w-28 rounded-xs bg-skeleton shadow-card transition-colors" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
