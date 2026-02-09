import Link from "next/link"
import { Reveal } from "../Reveal"
import { GlassCard } from "./GlassCard"

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <GlassCard className="p-12 md:p-16 text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
              {"Let's build something together"}
            </h2>
            <p className="text-muted-foreground max-w-lg leading-relaxed text-pretty">
              {"I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, my inbox is open."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-foreground text-background text-sm font-medium transition-all duration-300 hover:opacity-90 mt-2"
            >
              Get in Touch
            </Link>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
