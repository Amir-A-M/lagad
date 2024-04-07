import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

const baseURL = process.env.BASE_URL;
export default function ResetPasswordEmail({ verificationURL }) {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <Font
          fontFamily="Vazirmatn"
          webFont={{
            url: "https://github.com/aminabedi68/Estedad/raw/master/fonts/webfonts/statics/Estedad-Regular.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>درخواست بازیابی رمز عبور</Preview>
      <Tailwind>
        <Body className="bg-orange-100 text-right m-7 rounded-2xl" dir="rtl">
          <Container className="max-w-96 py-11 mx-auto px-6 text-black">
            <main>
              <Text className="text-lg">
                <strong>درخواست بازیابی رمز عبور</strong>
              </Text>
              <Text>
                با سلام، لطفا با کلیک بر روی دکمه `تنظیم رمز عبور` زیر، رمز عبور
                خود را تنظیم کرده و فرآیند ثبت نام خود را تکمیل نمایید. (اعتبار
                لینک: کمتر از 15 دقیقه!)
              </Text>
              <Section>
                <Button
                  href={baseURL + verificationURL}
                  className="px-5 py-2 bg-green-800 text-green-50 mb-4 rounded"
                >
                  تنظیم رمز عبور
                </Button>
              </Section>
              <Link
                href={baseURL + verificationURL}
                className="underline text-green-900"
              >
                {baseURL + verificationURL}
              </Link>
              <Text>
                در صورتی که شما درخواست بازیابی رمز عبور نکرده اید، این پیام را نادیده
                گرفته و آن را حذف نمایید.
              </Text>
              <Text>
                برای حفظ امنیت حساب خود، لطفاً این ایمیل را برای کسی بازارسال
                نکنید.
              </Text>
            </main>
            <footer>
              <Text>
                این یک پیام خودکار است. از پاسخ به این پیام خود داری کنید.
              </Text>
              <Link href={baseURL} className="text-black text-lg">
                <strong>لگد</strong>
              </Link>
            </footer>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
