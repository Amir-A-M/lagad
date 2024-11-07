import { Form } from "@/components/auth/form";
import Field from "@/components/auth/field";
import SubmitButton from "@/components/auth/submit-button";
import AuthTemplate from "@/components/auth/auth-template";
import { AuthDescription, AuthTitle } from "@/components/auth/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signup } from "./actions";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import OAuthOptions from "@/components/auth/oauth";

export const metadata = {
  title: "ثبت نام",
};

export default async function Page() {
  const user = await getUser();
  if (user) redirect("/dashboard");

  return (
    <AuthTemplate
      image={{
        src: "/img/theme/Moonrise Kingdom.jpg",
        objectPosition: "left 90%",
      }}
    >
      <AuthTitle>ثبت نام</AuthTitle>

      <AuthDescription>
        لطفاً برای ثبت نام اطلاعات خود را وارد کنید.
      </AuthDescription>

      <OAuthOptions />

      <Form action={signup} className="space-y-4">
        <Field
          label="نام کاربری"
          name="username"
          id="username"
          placeholder="Lagad"
          dir="ltr"
          type="text"
          caption="a-z، A-Z، فاصله و علامت های . _ -"
        />

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
        <SubmitButton>ثبت نام</SubmitButton>
      </Form>
    </AuthTemplate>
  );
}
