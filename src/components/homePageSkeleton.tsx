import { Skeleton } from "@/components/ui/skeleton";

const HomePageSkeleton = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-red-600 px-6">
      <div className="flex h-screen w-full flex-col items-center justify-center">
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
      </div>
      <div className="flex items-center flex-col space-y-6 p-14">
        <Skeleton className="h-10 w-20 rounded-full" />
        <Skeleton className="h-10 w-40 rounded-full" />
      </div>
    </div>
  );
};

export default HomePageSkeleton;
