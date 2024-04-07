import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: {
    template: "%s | داشبورد لگد",
    default: "داشبورد لگد",
  },
};

export default async function DashboardPage() {
  const user = await getUser();
  if (!user) redirect("/auth/login");

  return <div>Hello {user.nickname}</div>;
}
