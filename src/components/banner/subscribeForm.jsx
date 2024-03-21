"use client";

import React, { useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";
import { emailSchema } from "@/lib/ValidationSchemes";
import { cn } from "@/lib/utils";

export default function SubscribeForm({ className }) {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await emailSchema.validate({
        email: ref.current.value,
      });

      // Fetch & stuff...
      try {
        // fetch
        toast({
          title: "با موفقیت عضو خبرنامه لگد شدید",
          description: data.email,
          variant: "info",
        });
      } catch (error) {
        toast({
          title: "خطایی در ارسال به وجود آمد!",
          variant: "destructive",
        });
      }
    } catch (error) {
      return toast({
        title: error.errors[0],
        variant: "warning",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full max-w-sm items-center space-x-2 rtl:space-x-reverse",
        className
      )}
    >
      <Input ref={ref} type="email" name="email" placeholder="ایمیل" />
      <Button type="submit">عوضویت</Button>
    </form>
  );
}
