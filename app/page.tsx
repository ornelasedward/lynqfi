"use client";
import { CTA } from "@/components/landing/cta/CTA";
import { Customers } from "@/components/landing/customers/Customers";
import Carousel from "@/components/landing/features/carousel/Carousel";
import { CodeDemo } from "@/components/landing/features/code/CodeDemo";
import { FeatureGrid } from "@/components/landing/features/grid/FeatureGrid";
import { Stats } from "@/components/landing/features/stats/Stats";
import { Footer } from "@/components/landing/footer/Footer";
import { Hero } from "@/components/landing/hero/Hero";
import { Logos } from "@/components/landing/logos/Logos";
import { Pricing } from "@/components/landing/pricing/Pricing";


export default function LandingPage() {
  return (
    <>
    <head>
     <title>LynqFi – The Seamless Cross-Chain Trading Platform</title>
      <meta name="description" content="Trade any token across any chain with LynqFi. No bridges, no gas headaches—just instant, secure, chain-agnostic swaps powered by your Universal Account." />
      <meta name="keywords" content="LynqFi, DeFi, cross-chain, crypto trading, universal account, bridge-less, blockchain, swap, liquidity, Web3, instant swaps, multi-chain, crypto platform" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {/* Open Graph example */}
      <meta property="og:title" content="LynqFi – The Seamless Cross-Chain Trading Platform" />
      <meta property="og:description" content="Trade any token across any chain with LynqFi. No bridges, no gas headaches—just instant, secure, chain-agnostic swaps powered by your Universal Account." />
      <meta property="og:type" content="website" />
    </head>
    <main className="bg-zinc-950 text-zinc-200 selection:bg-zinc-600">
    <Hero />
    <Logos />
    <FeatureGrid />
    <CodeDemo />
    <Carousel />
    <Customers />
    <Stats />
    <Pricing />
    <CTA />
    <Footer />
    </main>
    </>
  );
}