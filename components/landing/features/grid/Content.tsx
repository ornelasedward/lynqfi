import { MaxWidthWrapper } from "@/components/landing/utils/MaxWidthWrapper";
import React from "react";
import { Tower } from "./Tower";
import { MiniCard1 } from "./MiniCard1";
import { MiniCard2 } from "./MiniCard2";
import { LongCard } from "./LongCard";
import { SimpleGrid } from "./SimpleGrid";
import { SectionHeading } from "@/components/landing/utils/SectionHeading";
import { SectionSubheading } from "@/components/landing/utils/SectionSubheading";
import { SectionHeadingSpacing } from "@/components/landing/utils/SectionHeadingSpacing";

export const Content = () => {
  return (
    <section>
      <MaxWidthWrapper className="relative z-20 pb-20 pt-20 md:pb-28 md:pt-40">
        <SectionHeadingSpacing>
          <SectionHeading>
            All Chains. One Account.<br />
            <span className="bg-gradient-to-br from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              No Friction.
            </span>
          </SectionHeading>
          <SectionSubheading>
            LynqFi lets you swap any token across any blockchain—instantly and securely. No bridges, no gas confusion, no fragmented wallets. Just seamless, chain-agnostic DeFi with true ownership and unified liquidity.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <Grid />
        <div className="my-12 h-[1px] w-full bg-gradient-to-r from-blue-800/0 via-blue-400/50 to-blue-800/0 md:my-20" />
        <SimpleGrid />
      </MaxWidthWrapper>
    </section>
  );
};

const Grid = () => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
    <Tower />
    <div className="col-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2">
      <MiniCard1 />
      <MiniCard2 />
      <LongCard />
    </div>
  </div>
);
