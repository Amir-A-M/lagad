"use client";

import { useFormState } from "react-dom";

export function Form({
  children,
  action,
  ...rest
}: {
  children: React.ReactNode;
  action: (prevState: any, formData: FormData) => Promise<ActionResult>;
}) {
  const [state, formAction] = useFormState(action, {
    error: null,
    success: null,
    data: {},
  });

  return (
    <form action={formAction} {...rest}>
      <p key="success" className="text-primary text-sm">
        {state.success}
      </p>
      <p key="error" className="text-warning-foreground text-sm">
        {state.error}
      </p>
      {children}
    </form>
  );
}

export interface ActionResult {
  error?: string | null;
  success?: string | null;
}
