import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-red-600 px-6">
      <div className="flex h-screen w-full flex-col items-center justify-center">
        {/* LOGO E TITULO */}
        <div className="flex flex-col items-center gap-2">
          <Image
            src="https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQvcNP9rHlEJu1vCY5kLqzjf29HKaeN78Z6pRy"
            alt="McDonald's"
            height={82}
            width={82}
          />
          <h1 className="font-semibold text-yellow-500">McDonald&apos;s</h1>
        </div>
        {/* SEJA BEM-VINDO */}
        <div className="space-y-2 pt-24 text-center">
          <h3 className="text-2xl font-semibold text-yellow-400">
            Seja bem-vindo ao FSW-Donald&apos;s!
          </h3>
          <p className="text-white opacity-80">
            Bem-vindo ao McDonald&apos;s, onde sabor, qualidade e tradição se
            encontram para transformar cada momento em uma experiência
            deliciosa!
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-14">
        <Button variant="secondary" className="rounded-full" asChild>
          <Link href={`/fsw-donalds`}>Começar</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
