import React from "react";
import BallCanvas from "./canvas/Ball";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants/constant";

const Tech = () => (
  <div className="flex flex-wrap justify-center gap-10">
    {technologies.map(({ name, icon }) => (
      <div className="w-28 h-28" key={name}>
        <BallCanvas icon={icon} />
      </div>
    ))}
  </div>
);

export default SectionWrapper(Tech, "");
