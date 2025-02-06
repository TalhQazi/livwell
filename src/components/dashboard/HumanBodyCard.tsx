import { ArrowIcon } from "@/assets";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

export default function HumanBodyCard() {
  const [activeTab, setActiveTab] = useState("chest");

  return (
    <Card className="bg-background p-2 md:p-6 relative flex-1">
      <Tabs defaultValue="chest" className="mb-8">
        <TabsList className="gap-2 bg-transparent flex-wrap">
          <TabsTrigger
            value="chest"
            className={cn(
              activeTab === "chest" && "!bg-muted",
              "rounded-full !px-6"
            )}
            onClick={() => setActiveTab("chest")}
          >
            Chest
          </TabsTrigger>
          <TabsTrigger
            value="shoulder"
            className={cn(
              activeTab === "shoulder" && "!bg-muted",
              "rounded-full !px-6"
            )}
            onClick={() => setActiveTab("shoulder")}
          >
            Shoulder
          </TabsTrigger>
          <TabsTrigger
            value="abs"
            className={cn(
              activeTab === "abs" && "!bg-muted",
              "rounded-full !px-6"
            )}
            onClick={() => setActiveTab("abs")}
          >
            Abs
          </TabsTrigger>
          <TabsTrigger
            value="legs"
            className={cn(
              activeTab === "legs" && "!bg-muted",
              "rounded-full !px-6"
            )}
            onClick={() => setActiveTab("legs")}
          >
            Legs
          </TabsTrigger>
          <TabsTrigger
            value="butt"
            className={cn(
              activeTab === "butt" && "!bg-muted",
              "rounded-full !px-6"
            )}
            onClick={() => setActiveTab("butt")}
          >
            Butt
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex gap-4 flex-col-reverse md:flex-row">
        <div className="flex sm:flex-col gap-4 sm:justify-end p-4">
          <div>
            <p className="text-sm text-muted-foreground">Protien</p>
            <p className="font-semibold">{130} Col</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Protien</p>
            <p className="font-semibold">{130} Col</p>
          </div>
        </div>
        <CardContent className="h-64 w-80 md:h-128 md:w-156 p-0 my-4 mx-auto relative">
          <Image
            mx-auto
            src={"/dashboard/human-body.png"}
            alt="Human Body"
            width={900}
            height={900}
            className="w-full h-full"
          />
          <div
            className={cn(
              "absolute",
              positions[activeTab as keyof typeof positions]?.arrow
            )}
          >
            <span
              className={cn(
                "absolute",
                positions[activeTab as keyof typeof positions]?.label
              )}
            >
              {activeTab}
            </span>
            <ArrowIcon />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

const positions = {
  chest: {
    arrow:
      "-top-[12px] -left-[10px] rotate-[30deg] md:top-[50px] md:left-[32px] md:rotate-[30deg]",
    label: "top-0 -left-[20px] -rotate-[30deg]",
  },
  shoulder: {
    arrow:
      "-top-[36px] -left-[24px] rotate-[20deg] md:-top-[2px] md:left-[18px] md:rotate-[30deg]",
    label: "-top-2 -left-[20px] -rotate-[20deg] md:-rotate-[30deg]",
  },
  abs: {
    arrow:
      "top-[40px] left-[80px] rotate-[50deg] scale-x-[-1] md:top-[106px] md:left-[152px] md:rotate-[50deg] md:scale-x-[-1]",
    label: "-top-2 -left-[18px] scale-x-[-1] rotate-[50deg]",
  },
  legs: {
    arrow:
      "bottom-[12px] left-[86px] rotate-[60deg] scale-x-[-1] md:bottom-[88px] md:left-[166px] md:rotate-[60deg] md:scale-x-[-1]",
    label: "-top-2 -left-[18px] scale-x-[-1] rotate-[60deg]",
  },
  butt: {
    arrow:
      "bottom-[52px] right-[26px] rotate-[75deg] scale-x-[-1] md:bottom-[172px] md:right-[114px] md:rotate-[75deg] md:scale-x-[-1]",
    label: "-top-2 -left-[12px] scale-x-[-1] rotate-[75deg]",
  },
};
