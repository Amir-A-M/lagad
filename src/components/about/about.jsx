import Image from "next/image";
import React from "react";
import { ArrowLink, Button } from "../ui/button";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

export default function About() {
  return (
    <section className="container px-6 lg:px-14 my-32 grid md:grid-cols-2 items-center gap-12">
      <div>
        <Image
          className="rounded-lg"
          src="/img/about/our-team.jpg"
          alt=""
          width={750}
          height={500}
          loading="lazy"
        />
      </div>
      <div className="px-6 md:px-0">
        <p className="text-sm font-light">ما کیستیم؟</p>
        <h2 className="text-2xl text-balance font-bold mt-2 leading-normal">
          توانمند کننده سازندگان برای زنده کردن ایده هایشان
        </h2>
        <p className="text-sm font-light text-balance mt-5">
          لگد یک پلتفرم سرمایه‌گذاری جمعی منحصربه‌فرد است که در سال 1403 تاسیس
          گشت تا به سازندگان از همه نوع اجازه دهد با مخاطبان ارتباط برقرار کنند
          و پروژه‌های خلاقانه‌شان را زنده کنند. با Lagad، می‌توانید هر چیزی از
          فیلم‌های مستقل و آلبوم‌های موسیقی گرفته تا استارت‌آپ‌های نوآورانه و
          لباس‌های مد روز را برای تأمین مالی قرار دهید.
        </p>
        <div className="flex gap-3 pt-4">
          <Button asChild variant="outline">
            <Link href="/about">بیشتر بدانید</Link>
          </Button>
          <ArrowLink href="/signup">ثبت نام</ArrowLink>
        </div>
      </div>
    </section>
  );
}
