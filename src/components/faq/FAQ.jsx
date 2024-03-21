import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import { Button } from "../ui/button";

const faq = [
  {
    question: "سازندگان چه شرایطی باید داشته باشن؟",
    answer: (
      <>
        برای ساخت حساب سازنده تنها کافیست 3 شریط را داشته باشید. <br />
        حداقل دارای 18 سال سن باشید. <br />
        در صورت جمع آوری سرمایه «به صورت فردی» ایرانی باشید. <br />
        حساب بانکی به نام شخص یا شرکت باشد.
      </>
    ),
  },
  {
    question: "اگر پروژه ای به هدف تامین مالی خود نرسه چی می شه؟",
    answer: `اگر پروژه ای به هدف تامین مالی خود نرسد، هیچ تعهدی دریافت نمی شود و پروژه تامین مالی نخواهد شد. 
      این یک مدل همه یا هیچ است تا اطمینان حاصل شود که سازندگان منابع لازم برای اجرای پروژه های خود را دارند.`,
  },
  {
    question: "آیا لگد پروژه‌ها رو بررسی میکنه؟ چرا؟",
    answer: `به ناچار، هر خطی که ما ترسیم کنیم ممکن است
     برخی از پروژه های بزرگ را کنار بگذارد. این یک مشکل است، اما ما در تلاش هستیم تا بهترین
     ابزار ممکن را برای تأمین مالی و ایجاد یک جامعه پیرامون پروژه‌های خلاقانه بسازیم، نه بزرگترین سایت تأمین مالی ممکن.`,
  },
  {
    question: "بررسی پروژه‌ها چطور کار میکنه و چقدر طول میکشه؟",
    answer: (
      <>
        قبل از اینکه یک پروژه بتواند راه اندازی شود، ممکن است نیاز باشد که توسط
        تیم اعتماد و ایمنی داخلی ما بررسی شود. آنها مطمئن می شوند که پروژه با
        <Link href='/rules' className="underline text-foreground">قوانین</Link> ما مطابقت دارد و تأیید می کنند که پروژه ای با هدف مشخص و محدود
        است. علاوه بر این، آنها ممکن است بازخورد مفیدی در مورد راه‌های ساختار یا
        ارائه پروژه شما ارائه دهند. اگر پروژه شما در صف بررسی باشد، این فرآیند
        ممکن است تا 3 روز کاری طول بکشد.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section className="container px-10 my-36 grid sm:grid-cols-2 lg:gap-24">
      <div>
        <h2 className="text-2xl text-balance font-bold leading-normal">
          سوالات پرتکرار
        </h2>
        <p className="text-sm font-light text-balance my-5">
          پاسخ به سؤالات رایج در مورد نحوه عملکرد لگد و آنچه انجام می دهد
          بیابید.
        </p>
        <Button variant="outline" asChild>
          <Link href='contact'>تماس باما</Link>
        </Button>
      </div>
      <div className="mt-4">
        <Accordion type="single" collapsible>
          {faq.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger className='text-start'>{question}</AccordionTrigger>
              <AccordionContent className="font-light text-muted-foreground text-balance">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
