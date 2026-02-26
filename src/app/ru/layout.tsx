import { ReactNode } from 'react'
import LayoutShell from "@/components/layout/LayoutShell";

export default function RuLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <LayoutShell>
      {children}
    </LayoutShell>
  )
}
