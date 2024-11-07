"use client";

import { useFormStatus } from "react-dom";
import { ArrowLink } from "../ui/button";

export default function SubmitButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <ArrowLink
      Tag="button"
      type="submit"
      variant=""
      className="!mt-5"
      disabled={pending}
    >
      {children}
    </ArrowLink>
  );
}
