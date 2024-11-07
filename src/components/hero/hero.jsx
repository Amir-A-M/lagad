import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { GridPattern } from "../bg-patterns";
import { Boxes } from "../ui/background-boxes";

export default function Hero() {
  return (
    <section className="container h-[80lvh] flex flex-col justify-center items-center gap-4 text-center relative">
      <Boxes />
      <GridPattern />
      <h1 className="text-2xl md:text-3xl lg:text-4xl !leading-normal font-bold z-10 text-pretty">
        با <Emphasize>لگد</Emphasize> به پروژه های خلاقانه {}
        <br className="hidden sm:block" />
        خود <Emphasize>زندگی</Emphasize> ببخشید
      </h1>
      <p className="text-base text-muted-foreground font-light z-10 text-pretty w-[35rem] max-w-full">
        برای کمک به پروژه‌های نوآورانه، ایده‌های نوین و خلاقانه در همه زمینه‌ها
        از فناوری گرفته تا آشپزی برای جذب سرمایه عمومی تحت
        پوشش لگد قرار می‌گیرند.
      </p>
      <div className="flex justify-center gap-3 z-10">
        <Button variant="outline" asChild>
          <Link href="/discover">شروع</Link>
        </Button>
        <Button asChild>
          <Link href="/discover">کشف</Link>
        </Button>
      </div>
    </section>
  );
}

function Emphasize({ children }) {
  return (
    <span
      className={`bg-gradient-to-t from-background via-primary to-primary bg-clip-text text-transparent`}
      style={{
        fontVariationSettings: '"wght" 900, "KSHD" 170',
        letterSpacing: "-.5px",
      }}
    >
      {children}
    </span>
  );
}
