import { Form } from "@/components/auth/form";
import Field from "@/components/auth/field";
import SubmitButton from "@/components/auth/submit-button";
import AuthTemplate from "@/components/auth/auth-template";
import { AuthDescription, AuthTitle } from "@/components/auth/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { resetPassword } from "./actions";

export const metadata = {
  title: "بازیابی رمز عبور",
};

export default async function Page() {
  return (
    <AuthTemplate
      image={{
        src: "/img/theme/Everything Everywhere All at Once.jpg",
        objectPosition: "center bottom",
      }}
    >
      <AuthTitle>بازیابی رمز عبور</AuthTitle>

      <AuthDescription>
        لطفاً برای بازیابی رمز عبور ایمیل خود را وارد کنید.
      </AuthDescription>

      <Form action={resetPassword} className="space-y-4">
        <Field
          label="ایمیل"
          name="email"
          id="email"
          placeholder="email@example.com"
          dir="ltr"
          type="email"
        />

        <Button variant="link" asChild className="ps-0">
          <Link href="/auth/login">ورود</Link>
        </Button>
        <SubmitButton>بازیابی رمز عبور</SubmitButton>
      </Form>
    </AuthTemplate>
  );
}
