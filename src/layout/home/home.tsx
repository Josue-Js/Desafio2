import { cn } from "@/lib/utils"

export type HomeGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function HomeContainer({
  className,
  children
}: HomeGenericProps) {
  return (
    <div className={cn(['relative min-h-screen px-4 pb-12 lg:px-8 max-w-[1600px] mx-auto overflow-hidden', className])}>
      {children}
    </div>
  )
}

export function HomeSectionImage({
  className,
  children
}: HomeGenericProps) {
  return (
    <picture className={cn(['flex', className])}>
      {children}
    </picture>
  )
}

export function HomeHeroSection({
  className,
  children
}: HomeGenericProps) {
  return (
    <div className={cn(['h-max', className])}>
      {children}
    </div>
  )
}

export function HomeHeroSectionWrapper({
  className,
  children
}: HomeGenericProps) {
  return (
    <div className={cn(['', className])}>
      {children}
    </div>
  )
}

export function HomeHeroSectionImage({
  className,
  children
}: HomeGenericProps) {
  return (
    <div className={cn(['absolute top-0 -left-[16px] -right-[16px] bottom-0 z-[-1]', className])}>
      {children}
    </div>
  )
}

export function HomeHeroSectionTitle({
  className,
  children
}: HomeGenericProps) {
  return (
    <h1 className={cn(['font-bold', className])}>
      {children}
    </h1>
  )
}

export function HomeHeroSectionDescription({
  className,
  children
}: HomeGenericProps) {
  return (
    <p className={cn(['max-w-[1019px]', className])}>
      {children}
    </p>
  )
}

export function HomeSection({
  className,
  children
}: HomeGenericProps) {
  return (
    <section className={cn(['flex w-full', className])}>
      {children}
    </section>
  )
}

export function HomeSectionWrapper({
  className,
  children
}: HomeGenericProps) {
  return (
    <div className={cn(['flex flex-col', className])}>
      {children}
    </div>
  )
}

export function HomeSectionTitle({
  className,
  children
}: HomeGenericProps) {
  return (
    <h1 className={cn(['font-bold', className])}>
      {children}
    </h1>
  )
}

export function HomeSectionDescription({
  className,
  children
}: HomeGenericProps) {
  return (
    <p className={cn(['', className])}>
      {children}
    </p>
  )
}

export function HomeSectionCard({
  className,
  children
}: HomeGenericProps) {
  return (
    <div className={cn(['px-6 py-8 cursor-pointer hover:shadow-[0_0_15px_rgba(0,0,0,0.03)] rounded-xl transition-all duration-300', className])}>
      {children}
    </div>
  )
}

export function HomeSectionCardIcon({
  className,
  children
}: HomeGenericProps) {
  return (
    <div className={cn(['flex items-center justify-center w-10 h-10 rounded-[6px] bg-slate-50', className])}>
      {children}
    </div>
  )
}