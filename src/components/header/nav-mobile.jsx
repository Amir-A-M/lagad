"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import BurgerIcon from "./burger-icon";
import Link from "next/link";
import { cn } from "@/lib/utils";

const data = [
  { title: "سازندگان", href: "/creators" },
  { title: "کشف پروژه", href: "/discover" },
  {
    title: "پشتیبانی",
    href: "/contact",
    submenu: [
      {
        primary: true,
        title: "لگد",
        href: "/about",
        content: (
          <>
            {/* <FigmaLogoIcon className="w-6 h-6 rotate-[190deg]" /> */}
            <div className="mb-2 mt-4 text-lg font-medium">لگد / Lagad</div>
            <p className="text-sm leading-tight text-muted-foreground">
              یک پلتفرم که به سازندگان اجازه می دهد پروژه های خلاقانه خود را
              زنده کنند.
            </p>
          </>
        ),
      },
      {
        title: "درباره ما",
        href: "/about",
        content: "سبک‌های سرفصل‌ها، پاراگراف‌ها، فهرست‌ها و ...",
      },
      {
        title: "تماس باما",
        href: "/contact",
        content: "اجزای قابل استفاده مجدد با استفاده از ساخته شده اند.",
      },
      {
        title: "اعتماد",
        href: "/trust",
        content: "نحوه نصب وابستگی ها و ساختار برنامه خود.",
      },
    ],
  },
];

export default function NavMobile({className}) {
  return (
    <Sheet>
      <SheetTrigger asChild className={cn('pe-0', className)}>
        <Button variant="ghost">
          <BurgerIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-60">
        <nav className="mt-20 grid space-y-3">
          {data.map(({ submenu, title, href }) =>
            submenu ? (
              <div key={title}>
                <Link href={href}>
                  {title}
                </Link>
                <div className="grid space-y-2 ps-4">
                  {submenu.map(
                    ({ primary, title, href }) =>
                      !primary && (
                        <Link
                          key={title}
                          href={href}
                          className="text-muted-foreground"
                        >
                          {title}
                        </Link>
                      )
                  )}
                </div>
              </div>
            ) : (
              <Link key={title} href={href}>
                {title}
              </Link>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
