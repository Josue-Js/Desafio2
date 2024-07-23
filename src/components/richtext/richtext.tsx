import { cn } from "@/lib/utils"

export type RichTextGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function RichText({ className, children }: RichTextGenericProps) {
  return <div className={cn('bg-white w-[90%] rounded-2xl border-[1px] border-slate-200', className)}>{children}</div>
}
