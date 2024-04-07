"use client";

import { useFormStatus } from "react-dom";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Field({ label, name, type, caption, ...rest }) {
  const { pending } = useFormStatus();

  return (
    <div
      className={`flex flex-col space-y-1.5 ${type === "hidden" && "sr-only"}`}
    >
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} id={name} type={type} disabled={pending} {...rest} />
      {caption && <p className="text-muted-foreground text-xs !mt-0.5">{caption}</p>}
    </div>
  );
}
