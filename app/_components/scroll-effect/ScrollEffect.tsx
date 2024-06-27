"use client";

import { useEffect, useRef } from "react";

type ScrollEffectProps = {
  className?: string;
  beforeEffectClassName?: string;
  animationClassName: `animate-${string}`;
  children: React.ReactNode;
};

function ScrollEffect({
  className = "",
  beforeEffectClassName = "opacity-0",
  animationClassName,
  children,
}: ScrollEffectProps) {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(
    function () {
      function handleScroll() {
        if (divRef.current) {
          const divRect = divRef.current.getBoundingClientRect();
          const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;

          if (divRect.top <= windowHeight) {
            divRef.current.classList.add(animationClassName);
          }
        }
      }

      window.addEventListener("scroll", handleScroll);

      // check if element is in view on page load
      handleScroll();

      return function () {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [animationClassName, beforeEffectClassName]
  );

  return (
    <div ref={divRef} className={`${className} ${beforeEffectClassName}`}>
      {children}
    </div>
  );
}

export default ScrollEffect;
