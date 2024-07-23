import { cn } from "@/lib/utils"

export type NoteGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function NoteContainer({
  className,
  children
}: NoteGenericProps) {
  return (
    <div className={cn(['', className])}>
      {children}
    </div>
  )
}

export function NoteHeader({
  className,
  children
}: NoteGenericProps) {
  return (
    <header className={cn(['bg-white px-4 py-4', className])}>
      {children}
    </header>
  )
}
export function NoteHeaderContent({
  className,
  children
}: NoteGenericProps) {
  return (
    <header className={cn(['flex items-center gap-3 w-full', className])}>
      {children}
    </header>
  )
}

export function NoteFieldTitle({
  className,
  children
}: NoteGenericProps) {
  return (
    <div className={cn(['', className])}>
      {children}
    </div>
  )
}

export function NoteHeaderButton({
  className,
  children
}: NoteGenericProps) {
  return (
    <div className={cn(['', className])}>
      {children}
    </div>
  )
}

export function NoteHeaderDate({
  className,
  children
}: NoteGenericProps) {
  return (
    <span className={cn(['', className])}>
      {children}
    </span>
  )
}

export function NoteContent({
  className,
  children
}: NoteGenericProps) {
  return (
    <div className={cn(['bg-slate-50 px-4 md:px-10 py-6', className])}>
      {children}
    </div>
  )
}
