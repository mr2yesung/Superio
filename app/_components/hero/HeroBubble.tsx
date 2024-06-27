import React from "react";
import ScrollEffect from "../scroll-effect/ScrollEffect";

type HeroBubbleProps = {
  positionClassName: string;
  animationClassName: `animate-${string}`;
  children: React.ReactNode;
};

function HeroBubble({
  positionClassName,
  animationClassName,
  children,
}: HeroBubbleProps) {
  return (
    <ScrollEffect
      className={`${positionClassName} shadow-[0_46px_35px_#19192e0a] absolute -z-10 py-5 pr-10 pl-5 flex justify-between gap-x-5 items-center bg-white rounded-lg`}
      animationClassName={animationClassName}
    >
      {children}
    </ScrollEffect>
  );
}

export default HeroBubble;
