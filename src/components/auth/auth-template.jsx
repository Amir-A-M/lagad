import Image from "next/image";

export default function AuthTemplate({
  children,
  image: { src, objectPosition },
}) {
  return (
    <main className="flex flex-col-reverse justify-end md:items-center md:flex-row min-h-dvh p-4 gap-4 container">
      <div className="md:w-2/5 mx-3 md:grid md:items-center md:pb-12">
        <div
          className="px-5 py-4 mx-auto max-w-80 -translate-y-10 md:translate-y-0 bg-background shadow 
        md:shadow-none rounded-xl overflow-hidden"
        >
          {children}
        </div>
      </div>

      <div
        className="-z-10 relative h-64 md:h-[calc(100dvh-(1rem*2))] md:max-h-[40rem] md:w-3/5 
      rounded-t-xl md:rounded-tr-none md:rounded-l-xl overflow-hidden bg-muted-foreground"
      >
        <Image
          src={src}
          priority
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition }}
        />
      </div>
    </main>
  );
}
