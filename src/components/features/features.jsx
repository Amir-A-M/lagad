"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

const items = [
  {
    title: "نقد‌ و‌ بررسی، و پوشش نقاط ضعف ایده‌ها",
    description: `طرح‌های نوآورانه تا زمانی که در ذهن‌تان یا روی کاغذ هستند ارزشی ندارند،
     عیار آن‌ها زمانی مشخص می‌شود که خرد جمعی عموم، آن‌ها را نقد کند.`,
    image: (
      <div className="h-20">
        <Image
          src="/img/features/messages.png"
          alt=""
          width={170}
          height={170}
          className="mx-auto -translate-x-16 -translate-y-14 sm:-translate-y-24 max-w-36 sm:max-w-max"
        />
      </div>
    ),
  },
  {
    title: "از فناوری تا آشپزی",
    description: `ایده‌ها در همه زمینه‌ها از فناوری، طراحی، انتشارات تا آشپزی و رویدادها، فیلم و موسیقی و هنر تحت پوشش قرار می‌گیرند.`,
    image: (
      <div className="h-20">
        <Image
          src="/img/features/globe.png"
          alt=""
          width={170}
          height={170}
          className="mx-auto -translate-x-16 -translate-y-14 sm:-translate-y-16 max-w-36 sm:max-w-max"
        />
      </div>
    ),
  },
  {
    title: "حفظ مالکیت پروژه",
    description: `می‌توانید مالکیت کامل پروژه خود را حفظ کرده و کنترل خلاقانه داشته باشند.`,
    image: (
      <div className="h-20">
        <Image
          src="/img/features/pie.png"
          alt=""
          width={180}
          height={180}
          className="mx-auto -translate-x-16 -translate-y-14 sm:-translate-y-20 max-w-36 sm:max-w-max"
        />
      </div>
    ),
  },
  {
    title: "کاملا رایگان",
    description: `از این پلت فرم به صورت رایگان استفاده کنید و موانع مالی برای اجرای طرح خود را کاهش دهید.`,
    image: (
      <div className="h-16">
        <Image
          src="/img/features/free.png"
          alt=""
          width={180}
          height={180}
          className="mx-auto -translate-x-16 -translate-y-14 sm:-translate-y-24 max-w-36 sm:max-w-max"
        />
      </div>
    ),
  },
  {
    title: "آمار و تحلیل",
    description: `اطلاعات دقیق درباره عملکرد پروژه‌های خود و مخاطبان تان را دریافت کنید`,
    image: (
      <div className="h-20">
        <Image
          src="/img/features/bar-chart.png"
          alt=""
          width={160}
          height={160}
          className="mx-auto -translate-x-16 -translate-y-14 sm:-translate-y-16 max-w-36 sm:max-w-max"
        />
      </div>
    ),
  },
  {
    title: "شفافیت، تمرکززدایی و حذف واسطه‌ها",
    description: `جذب سرمایه جمعی این امکان را برایتان فراهم کرده که به جای مراجعه به چندین سرمایه‌گذار و اتلاف وقت و انرژی،
     با خیال راحت در یک سایت طرح خود را معرفی کنید و بیشتر زمان خود را صرف بهبود پروژه‌ نماید.`,
    image: (
      <div className="h-20">
        <Image
          src="/img/features/shield.png"
          alt=""
          width={180}
          height={180}
          className="mx-auto -translate-x-16 -translate-y-14 sm:-translate-y-24 max-w-36 sm:max-w-max"
        />
      </div>
    ),
  },

];

export function Features() {
  return (
    <section
      className="container relative z-10 space-y-4 sm:columns-2 md:columns-3 xl:columns-4 sm:-skew-x-6 sm:-skew-y-6 sm:ps-16 gap-x-6
    pointer-events-none"
    >
      {items.map(({ title, description, image }, i) => (
        <Item
          i={i}
          key={title}
          title={title}
          description={description}
          image={image}
        />
      ))}
    </section>
  );
}

export function Item({ title, description, image, i }) {
  return (
    <Card
      className="backdrop-blur-sm bg-white bg-opacity-5 [&>*>*]:pointer-events-auto sm:skew-x-6 sm:skew-y-6"
      style={{ breakInside: "avoid" }}
    >
      <CardHeader>
        <div>{image}</div>
        <CardTitle className="pt-2 text-base text-pretty">{title}</CardTitle>
        <CardDescription className="text-sm text-pretty">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}