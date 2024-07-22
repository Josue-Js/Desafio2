import { cn } from "@/lib/utils"

export type HeaderGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function HeaderContainer({ className, children }: HeaderGenericProps) {
  return <header className={cn('flex items-center justify-between w-full pt-4 md:pt-8', className)}>{children}</header>
}

export function HeaderLogo({ className, children }: HeaderGenericProps) {
  return <div className={cn('flex-shrink-0 w-[110px] sm:w-[149px]', className)}>{children}</div>
}

export function HeaderBoxRight({ className, children }: HeaderGenericProps) {
  return <div className={cn('flex gap-4', className)}>{children}</div>
}