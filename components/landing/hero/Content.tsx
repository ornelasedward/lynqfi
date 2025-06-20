"use client";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { motion } from "framer-motion";
import { SplashButton } from "../buttons/SplashButton";
import { GhostButton } from "../buttons/GhostButton";
import { GlowingChip } from "../utils/GlowingChip";
import { useRouter } from "next/navigation";
import { LampContainer } from "../LampContainer";

export const Content = () => {
  const router = useRouter();
  return (
    <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-48 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-8xl"
      >
        LynqFi <br /> <span className="text-cyan-500 text-5xl font-thin">Swap anything. Anywhere. Instantly.</span>
      </motion.h1>
    </LampContainer>
    </MaxWidthWrapper>
  );
};
