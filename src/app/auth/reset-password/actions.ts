
"use server";

import { createPasswordResetToken } from "@/lib/auth";
import { emailSchema } from "@/lib/ValidationSchemes";
import { type ActionResult } from "@/components/auth/form";
import { sendMail } from "@/lib/email";
import { render } from "@react-email/render";
import ResetPasswordEmail from "@/components/email/reset-password";
import { getUserWithEmail } from "@/lib/db";
import { isRateLimited } from "@/lib/helper";

const successRespond = {
  success: 'در صورت وجود حساب، ایمیل بازیابی با موفقیت ارسال شد. لطفاً پوشه‌ اسپم خود را نیز بررسی کنید.',
}
export async function resetPassword(_: any, formData: FormData): Promise<ActionResult> {
  
  const error = await isRateLimited()
  if (error) return { error }
  
  let data;

  try {
    data = await emailSchema.validate({
      email: formData.get("email"),
    });
  } catch ({ errors }) {
    return {
      error: errors[0],
    };
  }

  const verificationToken = await createPasswordResetToken(data.email);

  // idk if its the right way to do... But:
  const [existingUser] = await getUserWithEmail(data.email);
  if (!existingUser) return successRespond;

  try {
    await sendMail({
      to: data.email,
      subject: 'بازیابی رمز عبور',
      html: render(ResetPasswordEmail({ verificationURL: `/auth/reset-password/${verificationToken}` })),
    })


    return successRespond;
  } catch (error) {
    return {
      error: 'متاسفانه خطایی رخ داد. بعدا دوباره امتحان کنید یا با تیم پشتیبانی ما در ارتباط باشید.',
    };
  }
}
