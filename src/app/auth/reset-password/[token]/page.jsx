import { Form } from "@/components/auth/form";
import Field from "@/components/auth/field";
import SubmitButton from "@/components/auth/submit-button";
import AuthTemplate from "@/components/auth/auth-template";
import { AuthDescription, AuthTitle } from "@/components/auth/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { setNewPassword } from "./actions";

export const metadata = {
  title: "تنظیم رمز عبور جدید",
};

export default async function Page({ params: { token } }) {
  const setNewPasswordWithToken = setNewPassword.bind(null, token);

  return (
    <AuthTemplate
      image={{
        src: "/img/theme/Everything Everywhere All at Once.jpg",
        objectPosition: "center bottom",
      }}
    >
      <AuthTitle>تنظیم رمز عبور جدید</AuthTitle>

      <AuthDescription>
        لطفاً اطمینان حاصل کنید که رمز عبور شما حداقل 8 کاراکتر داشته و شامل
        ترکیبی از اعداد، حروف و نمادها برای افزایش امنیت باشد.
      </AuthDescription>

      <Form action={setNewPasswordWithToken} className="space-y-4">
        <Field
          label="رمز عبور جدید"
          name="password"
          id="password"
          dir="ltr"
          type="password"
        />

        <Button variant="link" asChild className="ps-0">
          <Link href="/auth/login">ورود</Link>
        </Button>
        <SubmitButton>تنظیم رمز عبور</SubmitButton>
      </Form>
    </AuthTemplate>
  );
}
