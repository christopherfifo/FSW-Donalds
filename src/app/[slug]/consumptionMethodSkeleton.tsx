import { Skeleton } from "@/components/ui/skeleton";

const ConsumptionMethodSkeleton = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* LOGO E TITULO */}
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="h-[82px] w-[82px] rounded-full" />
        <Skeleton className="h-6 w-40 mt-2" />
      </div>

      {/* SEJA BEM-VINDO */}
      <div className="space-y-2 pt-24 text-center">
        <Skeleton className="h-8 w-60 mx-auto" />
        <Skeleton className="h-4 w-72 mx-auto" />
        <Skeleton className="h-4 w-64 mx-auto" />
      </div>

      {/* OPÇÕES */}
      <div className="grid grid-cols-2 gap-4 pt-14">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center gap-8 py-8">
            <Skeleton className="h-[80px] w-[80px]" />
            <Skeleton className="h-10 w-40 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsumptionMethodSkeleton;
