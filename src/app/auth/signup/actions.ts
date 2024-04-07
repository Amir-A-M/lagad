
"use server";

import { createPasswordResetToken } from "@/lib/auth";
import { signupSchema } from "@/lib/ValidationSchemes";
import { type ActionResult } from "@/components/auth/form";
import CompleteSignupEmail from "@/components/email/complete-signup";
import { sendMail } from "@/lib/email";
import { render } from "@react-email/render";
import { getUserWithUsername } from "@/lib/db";
import { isRateLimited } from "@/lib/helper";

export async function signup(_: any, formData: FormData): Promise<ActionResult> {
  
  const error = await isRateLimited()
  if (error) return { error }

  let data;

  try {
    data = await signupSchema.validate({
      email: formData.get("email"),
      username: formData.get("username"),
    });
  } catch ({ errors }) {
    return {
      error: errors[0],
    };
  }

  const [duplicateUsername] = await getUserWithUsername(data.username);
  if (duplicateUsername)
    return {
      error: 'نام کاربری از قبل موجود است!',
    };

  const verificationToken = await createPasswordResetToken(data.email, data.username);

  try {
    await sendMail({
      to: data.email,
      subject: `تکمیل ثبت نام ${data.username}`,
      html: render(CompleteSignupEmail({ verificationURL: `/auth/reset-password/${verificationToken}` })),
    })


    return {
      success: "برای تکمیل فرآیند ثبت نام، ایمیل خود را بررسی کنید. همچنین، لطفاً پوشه‌ی اسپم خود را نیز بررسی کنید.",
    }
  } catch (error) {
    console.log(error);

    return {
      error: 'متاسفانه خطایی رخ داد. بعدا دوباره امتحان کنید یا با تیم پشتیبانی ما در ارتباط باشید.',
    };
  }
}
