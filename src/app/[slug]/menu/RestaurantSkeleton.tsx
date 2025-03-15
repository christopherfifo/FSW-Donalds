import { Skeleton } from "@/components/ui/skeleton";

const RestaurantSkeleton = () => {
  return (
    <div>
      {/* Header Skeleton */}
      <div className="relative h-[250px] w-full">
        <Skeleton className="absolute left-4 top-4 h-10 w-10 rounded-full" />
        <Skeleton className="h-full w-full" />
        <Skeleton className="absolute right-4 top-4 h-10 w-10 rounded-full" />
      </div>

      {/* Products Skeleton */}
      <div className="space-y-3 px-5 py-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-10 border-b py-3"
          >
            {/* Left Side */}
            <div className="space-y-2 w-full max-w-[70%]">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-5 w-1/3 mt-3" />
            </div>

            {/* Right Side */}
            <div className="relative min-h-[82px] min-w-[120px]">
              <Skeleton className="h-full w-full rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantSkeleton;
