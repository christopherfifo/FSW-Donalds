import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ConsumptionMethod } from "@prisma/client"; //importa o tipo ConsumptionMethod do prisma comer aqui ou levar

interface ConsumptionMethodOptionProps {
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
  slug: string;
}

const ConsumptionMethodOption = ({
  imageUrl,
  imageAlt,
  buttonText,
  option,
  slug,
}: ConsumptionMethodOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>
        <Button variant="secondary" className="rounded-full">
          <Link href={`/${slug}/menu?consumptionMethod=${option}`}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodOption;
