import React from "react";
import SubscribeForm from "./subscribeForm";

export default function NewsletterBanner() {
  return (
    <section className="container px-10 mb-28 mt-36 grid md:grid-cols-2 gap-4 md:gap-20 text-center md:text-start">
      <div className="">
        <h2 className="text-2xl text-balance font-bold leading-normal">
          از پروژه های پرطرفدار مطلع باشید
        </h2>
        <p className="text-sm font-light text-pretty my-5">
          برای دریافت به روز رسانی در خبرنامه ما ثبت نام کنید.
        </p>
      </div>
      <SubscribeForm className='mx-auto md:mx-0' />
    </section>
  );
}
