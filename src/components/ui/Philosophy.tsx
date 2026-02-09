import { Reveal, RevealItem } from "../Reveal"
import { GlassCard } from "./GlassCard"
import { SectionHeading } from "./section-heading"

const pillars = [
    {
        title: "Architecture First",
        description:
            "Every system begins with a clear mental model. I invest heavily in understanding the problem space before writing a single line of code, resulting in solutions that are elegant and maintainable.",
        number: "01",
    },
    {
        title: "User-Obsessed",
        description:
            "Technical excellence means nothing if the end user struggles. I bridge the gap between engineering and design, ensuring every interaction feels intentional and every millisecond of performance is earned.",
        number: "02",
    },
    {
        title: "Ship & Iterate",
        description:
            "Perfection is the enemy of progress. I believe in delivering working software early, gathering real feedback, and iterating with conviction. The best code is code that solves real problems today.",
        number: "03",
    },
]

export function Philosophy() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <Reveal>
                    <SectionHeading
                        label="Philosophy"
                        title="How I approach engineering"
                        description="Three principles that guide every decision, from system design to pixel placement."
                    />
                </Reveal>

                {/* Pillars */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((pillar, i) => (
                        <RevealItem key={pillar.title}>
                            <GlassCard className="group h-full p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">

                                {/* Number */}
                                <span className="text-xs font-mono tracking-widest text-zinc-500">
                                    {pillar.number}
                                </span>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-white leading-tight">
                                    {pillar.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    {pillar.description}
                                </p>

                            </GlassCard>
                        </RevealItem>
                    ))}
                </div>
            </div>
        </section>
    )
}

