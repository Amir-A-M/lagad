"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { FigmaLogoIcon } from "@radix-ui/react-icons";
import { ListItem, PrimaryItem } from "./list-item";

const data = [
  { title: "سازندگان", href: "/creators" },
  { title: "کشف پروژه", href: "/discover" },
  {
    title: "پشتیبانی",
    submenu: [
      {
        primary: true,
        title: "لگد",
        href: "/about",
        content: (
          <>
            <FigmaLogoIcon className="w-6 h-6 rotate-[190deg]" />
            <div className="mb-2 mt-4 text-lg font-medium">لگد / Lagad</div>
            <p className="text-xs leading-tight text-muted-foreground">
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

export default function NavDesktop() {
  return (
    <NavigationMenu className="hidden sm:block">
      <NavigationMenuList>
        {data.map(({ submenu, title, ...props }) =>
          submenu ? (
            <NavigationMenuItem key={title}>
              <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {submenu.map(({ primary, title, href, content }) =>
                    primary ? (
                      <PrimaryItem key={title} href={href} title={title}>
                        {content}
                      </PrimaryItem>
                    ) : (
                      <ListItem key={title} href={href} title={title}>
                        {content}
                      </ListItem>
                    )
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={title}>
              <Link legacyBehavior passHref {...props}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
