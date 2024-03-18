"use client";

import React from "react";
import { ModeToggle } from "../ui/mode-toggle";
import { FigmaLogoIcon } from "@radix-ui/react-icons";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container flex justify-between items-center h-16 gap-4 z-50 relative">
      <div className="flex gap-14 items-center">
        <Link href="/" className="flex">
          <FigmaLogoIcon className="w-6 h-6 rotate-[190deg]" />
          <h1 className="text-xl font-bold">لگد</h1>
        </Link>
        <NavDesktop />
      </div>

      <div className="flex">
        <ModeToggle />
        <NavMobile className="sm:hidden" />
      </div>
    </header>
  );
}
