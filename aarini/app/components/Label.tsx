import type React from "react"
import { Label as LabelPrimitive } from "./components/label"

interface LabelProps {
  htmlFor: string
  children: React.ReactNode
}

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <LabelPrimitive htmlFor={htmlFor} className="text-right">
      {children}
    </LabelPrimitive>
  )
}
