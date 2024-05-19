import arcadeSVG from "../assets/images/icon-arcade.svg";
import advancedSVG from "../assets/images/icon-advanced.svg";
import proSVG from "../assets/images/icon-pro.svg";

export const PLANS = [
  { type: "Arcade", monthlyPrice: 9, svg: arcadeSVG },
  { type: "Advanced", monthlyPrice: 12, svg: advancedSVG },
  { type: "Pro", monthlyPrice: 15, svg: proSVG },
];

// Months free when on the yearly plan
export const MONTHS_FREE = 2;

export const ADD_ONS = [
  {
    type: "Online service",
    descr: "Access to multiplayer games",
    monthlyPrice: 1,
  },
  { type: "Larger storage", descr: "Extra 1TB of cloud save", monthlyPrice: 2 },
  {
    type: "Customizable profile",
    descr: "Custom theme on your profile",
    monthlyPrice: 2,
  },
];
