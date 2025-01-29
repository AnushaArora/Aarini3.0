import type React from "react"
import {
  Dialog as DialogPrimitive,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/dialog"
import { Button } from "@/components/button"

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  children: React.ReactNode
  onSubmit: () => void
  submitText: string
}

export function Dialog({ isOpen, onClose, title, description, children, onSubmit, submitText }: DialogProps) {
  return (
    <DialogPrimitive open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">{children}</div>
        <DialogFooter>
          <Button type="submit" onClick={onSubmit}>
            {submitText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogPrimitive>
  )
}