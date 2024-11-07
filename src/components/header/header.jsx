import React from "react";
import { ModeToggle } from "../ui/mode-toggle";
import { FigmaLogoIcon, PersonIcon } from "@radix-ui/react-icons";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";
import Link from "next/link";
import { Button } from "../ui/button";
import { getUser } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/utils";

export default async function Header() {
  const user = await getUser();

  return (
    <header className="container flex justify-between items-center h-16 gap-4 z-50 relative">
      <div className="flex gap-14 items-center">
        <Link href="/" className="flex">
          <FigmaLogoIcon className="w-6 h-6 rotate-[190deg]" />
          <h1 className="text-xl font-bold">لگد</h1>
        </Link>
        <NavDesktop />
      </div>

      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="h-8 w-8 me-1 rounded-lg overflow-hidden">
          <Link href={user ? "/dashboard" : "/auth/login"}>
            {user ? (
              <Avatar className="p-1">
                <AvatarImage src={user.avatarUrl} alt={user.nickname} />
                <AvatarFallback>{getInitials(user.nickname)}</AvatarFallback>
              </Avatar>
            ) : (
              <PersonIcon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Link>
        </Button>
        <ModeToggle />
        <NavMobile className="sm:hidden" />
      </div>
    </header>
  );
}
