import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsPageSkeleton() {
  return (
    <div className="flex h-full flex-col">
      <div className="min-h-300 relative h-[300px] w-full">
        <Skeleton className="absolute left-4 top-4 h-10 w-10 rounded-full" />
        <Skeleton className="h-full w-full" />
        <Skeleton className="absolute right-4 top-4 h-10 w-10 rounded-full" />
      </div>
      <div className="relative z-50 mt-[-1.5rem] flex flex-auto flex-col space-y-4 overflow-hidden rounded-t-3xl p-5">
        <div className="flex items-center gap-1.5">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-6 w-3/4" />
        <div className="mt-3 flex items-center justify-between">
          <Skeleton className="h-6 w-20" />
          <div className="flex items-center gap-3 text-center">
            <Skeleton className="h-8 w-8 rounded-xl" />
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-8 w-8 rounded-xl" />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-20 w-full" />
        </div>
        <div className="mt-6 space-y-3 pb-24">
          <div className="flex items-center gap-1.5">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-4 w-1/4" />
          </div>
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-3/4" />
            ))}
          </div>
        </div>
        <Skeleton className="h-12 w-full rounded-full" />
      </div>
    </div>
  );
}
