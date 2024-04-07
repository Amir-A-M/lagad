import { login } from "./actions";
import { Form } from "@/components/auth/form";
import Field from "@/components/auth/field";
import SubmitButton from "@/components/auth/submit-button";
import AuthTemplate from "@/components/auth/auth-template";
import { AuthDescription, AuthTitle } from "@/components/auth/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import OAuthOptions from "@/components/auth/oauth";

export const metadata = {
  title: "ورود",
};

export default async function Page() {
  const user = await getUser();
  if (user) redirect("/dashboard");

  return (
    <AuthTemplate
      image={{
        src: "/img/theme/Ferris Buellers Day Off.jpg",
        objectPosition: "80% center",
      }}
    >
      <AuthTitle>ورود</AuthTitle>

      <AuthDescription>
        خوش برگشتی! لطفا ایمیل و رمز عبور خود را برای ادامه وارد کنید.
      </AuthDescription>

      <OAuthOptions />

      <Form action={login} className="space-y-4">
        <Field
          label="ایمیل"
          name="email"
          id="email"
          placeholder="email@example.com"
          dir="ltr"
          type="email"
        />

        <Field
          label="رمز عبور"
          name="password"
          id="password"
          dir="ltr"
          type="password"
        />

          <Button variant="link" asChild className="ps-0">
            <Link href="/auth/signup">ثبت نام</Link>
          </Button>
          <SubmitButton>
            ورود
          </SubmitButton>

        <div className="text-sm text-muted-foreground">
          رمز خود را فراموش کردید؟
          <Link
            href="/auth/reset-password"
            className="ms-2 underline text-foreground font-medium"
          >
            بازیابی رمز
          </Link>
        </div>
      </Form>
    </AuthTemplate>
  );
}
