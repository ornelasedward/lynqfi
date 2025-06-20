import React from "react";
import { Content } from "./Content";
import { CornerBlur } from "@/components/landing/utils/CornerBlur";
import { CornerGrid } from "@/components/landing/utils/CornerGrid";

export const FeatureGrid = () => {
  return (
    <div id="features" className="relative overflow-hidden">
      <Content />
      <CornerBlur />
      <CornerGrid />
    </div>
  );
};
