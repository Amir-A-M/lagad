import React from "react";
import BlogCard from "../blog/blog-card";
import { ArrowLink } from "../ui/button";

const data = [
  {
    title: "هودی چند کاره مسافرتی و روزانه NOMADE",
    description:
      "3 سبک، 33 ویژگی، 360 حفاظت پایدار - ساخته شده برای تسخیر طبیعت، تسلط بر رفت و آمد، و در آغوش گرفتن آزادی.",
    badge: { variant: "foreground", text: "به زودی" },
    img: {
      src: "/img/projects/NOMADE-hr.webp",
      alt: "عکس برای پروژه هودی چند کاره مسافرتی و روزانه NOMADE",
      className: "h-68",
    },
    author: {
      name: "Jacopo",
      image: "/img/authors/Jacopo.webp",
      href: "/creators/jacopo",
    },
    href: "",
  },
  {
    title: "مستند شکست انتظارات",
    description: "این مستند به عمق زندگی دزدان دریایی ناشنوا می پردازد.",
    badge: { variant: "foreground", text: "به زودی" },
    img: {
      src: "/img/projects/SMASHING-EXPECTATIONS.webp",
      alt: "عکس برای پروژه SMASHING EXPECTATIONS",
      className: "h-68",
    },
    author: {
      name: "Smooth Pirates",
      image: "/img/authors/Smooth Pirates.webp",
      href: "/creators/smooth-pirates",
    },
    href: "",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="container my-24">
      <h2 className="text-2xl text-balance font-bold px-6 leading-normal">
        پروژه‌های به زودی...
      </h2>
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 px-4 gap-6">
        {data.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}

        <article className="pt-60 pb-5 px-5 lg:px-10 mx-4 lg:mx-6 xl:mx-12 rounded-lg bg-muted relative overflow-hidden">
          <div
            className="h-full w-48 rotate-45 absolute -top-36 -end-6 opacity-25"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%238e8e8e' fill-opacity='0.4'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <h1 className="text-xl font-semibold">ثبت پروژه...</h1>
          <p className="my-3">با ساخت یک حساب لگد شروع کنید.</p>
          <ArrowLink href="/auth/login" className="!p-0 text-xs font-light">
            ادامه
          </ArrowLink>
        </article>
      </div>
    </section>
  );
}
