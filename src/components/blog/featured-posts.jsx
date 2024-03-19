import React from "react";
import BlogCard from "./blog-card";

const data = [
  {
    title: "سیر تا پیاز کراد فاندینگ (Crowdfunding)",
    description: 'شیوه جدیدی برای تامین سرمایه مورد نیاز جهت شروع یا انجام یک فعالیت مشخص است، که در سطح جهانی نیز از سال 2006 مورد استفاده رسمی قرار گرفته...',
    img: {
      src: "/img/blog/De La Soul.jpg",
      className: 'object-top',
      alt: "",
    },
    href: "",
  },
  {
    title: "کتابچه راهنمای سازندگان لگد",
    description: 'این راهنما برای سازندگان شما را با همه چیزهایی که باید بدانید، از گفتن داستانتان گرفته تا برقراری ارتباط با حامیان، راهنمایی می کند.',
    img: {
      src: "/img/blog/creator-handbook.jfif",
      alt: "کتابچه راهنمای سازندگان لگد",
    },
    href: "https://www.kickstarter.com/help/handbook?ref=section-creators-newsitem-the-kickstarter-creator-handbook",
  },
  {
    title: "قوانین ما",
    description: 'پنج قانون که هر پروژه لگد باید از آن پیروی کند.',
    img: {
      src: "/img/blog/our-rules.webp",
      alt: "",
    },
    href: "https://www.kickstarter.com/rules?ref=section-creators-newsitem-our-rules",
  },
];

export default function FeaturedPosts() {
  return (
    <section className="container my-28">
      <h2 className="text-2xl text-balance font-bold px-6 leading-normal">
        چگونه کار می کند؟ <br/> و چگونه آن را انجام دهیم؟
      </h2>
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 px-4 gap-6">
        {data.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
}
