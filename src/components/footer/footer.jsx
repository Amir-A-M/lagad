import {
  DiscordLogoIcon,
  FigmaLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";

const data = {
  links: [
    { href: "/about", text: "درباره ما" },
    { href: "/help", text: "پشتیبانی" },
    { href: "/rules", text: "قوانین" },
    { href: "/newsletter", text: "خبرنامه" },
    { href: "/contribute", text: "مشارکت" },
  ],
  socials: [
    { name: "instagram", icon: <InstagramLogoIcon />, href: "" },
    {
      name: "twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 512 462.799"
        >
          <path
            fillRule="nonzero"
            d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
          />
        </svg>
      ),
      href: "",
    },
    { name: "linkedin", icon: <LinkedInLogoIcon />, href: "" },
    { name: "discord", icon: <DiscordLogoIcon />, href: "" },
  ],
  links2: [
    { href: "", text: "حریم خصوصی" },
    { href: "", text: "شرایط استفاده از خدمات" },
  ],
};

export default function Footer() {
  return (
    <div className="bg-muted relative">
      <footer className="bg-background rounded-b-3xl relative z-10 shadow-sm">
        <div className="container px-10 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="md:w-1/5">
              <Link href="/" className="flex">
                <FigmaLogoIcon className="w-7 h-7 rotate-[190deg]" />
                <h1 className="text-2xl font-bold">لگد</h1>
              </Link>
            </div>
            <div className="md:w-3/5 flex flex-wrap gap-4 justify-center">
              {data.links.map(({ text, href }) => (
                <Button
                  key={text}
                  className="text-sm mt-1"
                  variant="link"
                  asChild
                >
                  <Link href={href}>{text}</Link>
                </Button>
              ))}
            </div>
            <div className="md:w-1/5 flex gap-3 justify-end [&_svg]:w-4 [&_svg]:h-4">
              {data.socials.map(({ name, href, icon }) => (
                <SocialLink key={name} href={href}>
                  {icon}
                </SocialLink>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <p className="text-xs text-muted-foreground">
              © 2024 Lagad. تمامی حقوق محفوظ است.
            </p>
            <div className="flex">
              {data.links2.map(({ text, href }) => (
                <Button
                  key={text}
                  className="text-xs text-muted-foreground underline px-2 mx-1"
                  variant="link"
                  asChild
                >
                  <Link href={href}>{text}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <section className="container py-4 flex flex-wrap gap-4 justify-center items-center sticky bottom-0">
        <a target="_blank" href="">
          <Image
            className="rounded-lg bg-muted h-28 w-auto"
            src="/img/permissions/tax.png"
            height="100"
            width="150"
            title="سازمان امور مالیاتی کشور"
            alt="سازمان امور مالیاتی کشور"
          />
        </a>
        <a
          referrerPolicy="origin"
          target="_blank"
          href="https://trustseal.enamad.ir/"
        >
          <Image
            className="rounded-lg bg-muted h-32 w-auto"
            src="data:image/png;base64,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"
            height="100"
            width="120"
            title="نماد اعتماد الکترونیکی"
            alt="نماد اعتماد الکترونیکی"
          />
        </a>
        <a
          target="_blank"
          href="https://cf.ifb.ir/report/PlatformActivityLicenseTrustSealDetail?licenseguid="
        >
          <Image
            className="rounded-lg bg-muted h-32 w-auto"
            src="/img/permissions/PlatformActivity.png"
            height="100"
            width="150"
            title="مجوز تامین مالی جمعی"
            alt="مجوز تامین مالی جمعی"
          />
        </a>
        <a target="_blank" href="">
          <Image
            className="rounded-lg bg-muted h-28 w-auto"
            src="/img/permissions/Shaparak1.png"
            height="100"
            width="150"
            title="مجوز فعالیت شاپرک"
            alt="مجوز فعالیت شاپرک"
          />
        </a>
      </section>
    </div>
  );
}

export function SocialLink({ children, href }) {
  return (
    <Button variant="ghost" size="icon">
      <Link href={href} target="_blank" className="[&_svg]:fill-foreground">
        {children}
      </Link>
    </Button>
  );
}
