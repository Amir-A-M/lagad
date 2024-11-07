import { cn } from "@/lib/utils";

export function AuthTitle({ children }) {
  return <h1 className="text-2xl font-bold">{children}</h1>;
}
export function AuthDescription({ children, className }) {
  return (
    <p className={cn("mt-2 mb-5 text-muted-foreground text-pretty", className)}>{children}</p>
  );
}
