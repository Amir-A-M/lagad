"use client";
import React from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { cn, getRandomColor } from "@/lib/utils";
import { GridPattern } from "../bg-patterns";

export const BoxesCore = ({ className, ...rest }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion)
    return (
      <>
        <GridPattern />
      </>
    );
  const rows = new Array(40).fill(1);
  const cols = new Array(20).fill(1);

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        style={{
          transform: `translate(0%, 10%) skewX(-56deg) skewY(15deg) scale(.8) rotate(0deg) translateZ(0px)`,
        }}
        className={cn(
          "absolute top-0 left-0 p-4 w-fit h-full z-0 hidden lg:flex",
          className
        )}
        {...rest}
      >
        <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent_50%,white_100%)] pointer-events-none" />
        {rows.map((_, i) => (
          <m.div
            key={`row` + i}
            className="w-16 h-8 border-l border-muted relative"
          >
            {cols.map((_, j) => (
              <m.div
                whileHover={{
                  backgroundColor: `var(${getRandomColor()})`,
                  transition: { duration: 0 },
                }}
                animate={{
                  backgroundColor: `rgba(0, 0, 0, 0)`,
                  transition: { duration: .3 },
                }}
                key={`col` + j}
                className="w-16 h-8 border-r border-t border-muted relative cell"
              >
                {j % 2 === 0 && i % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-muted stroke-[1px] pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                ) : null}
              </m.div>
            ))}
          </m.div>
        ))}
      </div>
    </LazyMotion>
  );
};

export const Boxes = React.memo(BoxesCore);
