
"use client";
import React from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { SplashButton } from "../buttons/SplashButton";
import { FiArrowRight } from "react-icons/fi";
import { GhostButton } from "../buttons/GhostButton";
import { motion } from "framer-motion";
import { GlowingChip } from "../utils/GlowingChip";
import { useRouter } from "next/navigation";

export const CTA = () => {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden border-t border-zinc-700 bg-gradient-to-b from-zinc-900/30 to-zinc-950 py-20">
      <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center">
        <motion.div
          initial={{
            y: 25,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.25,
            ease: "easeInOut",
          }}
          className="relative mb-3"
        >
          <GlowingChip>Seamless Cross-Chain Trading</GlowingChip>
        </motion.div>
        <motion.h1
          initial={{
            y: 25,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.25,
            delay: 0.25,
            ease: "easeInOut",
          }}
          className="mb-9 max-w-xl text-center text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
        >
          Trade any token across any chain with LynqFi
        </motion.h1>
        <motion.div
          initial={{
            y: 25,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.25,
            delay: 0.75,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <SplashButton
            onClick={() => router.push("/signin")}
            className="flex items-center gap-2"
          >
            Get Started – It's Free
            <FiArrowRight />
          </SplashButton>
          <GhostButton
            onClick={() => router.push("/#features")}
            className="rounded-md px-4 py-2 text-lg text-zinc-100"
          >
            How it works
          </GhostButton>
        </motion.div>
        <p className="mt-8 text-zinc-400 text-center max-w-2xl mx-auto text-lg">
          LynqFi is the bridge-less way to trade crypto. No bridges, no gas headaches—just instant, secure, chain-agnostic swaps powered by your Universal Account.
        </p>
      </MaxWidthWrapper>
      <div className="absolute inset-0 z-0 bg-grid-zinc-700/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 to-zinc-950" />
    </section>
  );
};
