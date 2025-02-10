import React from "react";
import feature_1 from "../../../assets/feature_1.svg";
import feature_2 from "../../../assets/feature_2.svg";
import feature_3 from "../../../assets/feature_3.svg";
import feature_4 from "../../../assets/feature_4.svg";
import { motion } from "framer-motion";

const features = [
  {
    image: feature_1,
    title: "AI-Powered Task Management",
    description:
      "Leverage AI to automate task prioritization and streamline workflows, boosting team efficiency.",
  },
  {
    image: feature_2,
    title: "Real-Time Code Insights",
    description:
      "AI-driven analysis provides instant feedback and optimization suggestions to improve code quality.",
  },
  {
    image: feature_3,
    title: "Seamless Collaboration Hub",
    description:
      "A centralized workspace with real-time communication and project tracking for cohesive teamwork.",
  },
  {
    image: feature_4,
    title: "Data-Driven Performance Metrics",
    description:
      "Advanced analytics offer deep insights into productivity, efficiency, and workflow bottlenecks.",
  },
];

const Features = () => {
  return (
    <section className="bg-slate-800 flex-col h-auto w-full py-12 flex">
       <h3 className="text-white text-5xl leading-tight px-28 font-medium">
          Boost Your <br/>Team’s Efficiency
       </h3>
       <p className="text-gray-300 px-28 py-4 font-extralight max-w-4xl">
          A task management platform for remote software teams, QUBIQ combines AI-driven insights, real-time code analysis, 
          and productivity tracking to streamline collaboration and enhance code quality.
       </p>
    </section>
  );
};

export default Features;
