import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {label && (
        <span className="text-xs font-mono tracking-widest uppercase text-zinc-500">
          {label}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-balance">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-sm md:text-base text-zinc-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
