"use client"
import { UsefulProvider } from "../Blob/contexts/usefulContext";

export function Providers({ children }) {
  return <UsefulProvider>{children}</UsefulProvider>;
}
