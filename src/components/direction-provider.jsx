"use client"

import { DirectionProvider } from "@radix-ui/react-direction";

export default function DirProvider({ children, ...rest }) {
  return <DirectionProvider {...rest}>{children}</DirectionProvider>;
}
