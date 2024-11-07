import Image from "next/image";
import React from "react";
import { ArrowLink } from "../ui/button";
import { cn, getInitials } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function BlogCard({
  title,
  description,
  badge: { text: badgeText, variant: badgeVariant } = {},
  img: { src, alt, className },
  author: { image: authorImage, name: authorName, href: authorHref } = {},
  href,
}) {
  return (
    <article className="max-w-[400px] mx-auto">
      <header>
        <div className="relative">
          <Image
            src={src}
            width={400}
            height={300}
            alt={alt}
            loading="lazy"
            className={cn(
              "rounded-lg object-cover object-center h-72",
              className
            )}
          />
          {badgeText && (
            <Badge
              variant={badgeVariant}
              className="absolute top-2 start-2 text-xss rounded-lg"
            >
              {badgeText}
            </Badge>
          )}
          {authorImage && (
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger className="absolute bottom-2 end-2">
                  <Link href={authorHref ?? ""}>
                    <Avatar>
                      <AvatarImage src={authorImage} alt={authorName} />
                      <AvatarFallback>{getInitials(authorName)}</AvatarFallback>
                    </Avatar>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  {authorName}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <Link href={href}>
          <h1 className="text-base text-balance font-semibold leading-normal pt-5 px-2">
            {title}
          </h1>
        </Link>
      </header>
      <p className="text-sm py-4 font-light text-balance px-2">{description}</p>
      <ArrowLink
        className="text-xs font-light text-muted-foreground"
        href={href}
      >
        ادامه
      </ArrowLink>
    </article>
  );
}
