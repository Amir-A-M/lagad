import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export default function OAuthOptions() {
  return (
    <>
      <div className="my-5 grid grid-cols-2 gap-6">
        <Button variant="outline" asChild>
          <Link href='/auth/oauth/google'>
            <Icons.google className="me-2 h-4 w-4" />
            گوگل
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href='/auth/oauth/github'>
            <Icons.gitHub className="me-2 h-4 w-4" />
            گیت‌هاب
          </Link>
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">یا</span>
        </div>
      </div>
    </>
  );
}
