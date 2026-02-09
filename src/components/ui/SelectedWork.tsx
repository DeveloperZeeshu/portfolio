import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealItem } from "../Reveal";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./section-heading";

export function SelectedWork() {
    return (
        <Reveal>
            <section id="work">
                <RevealItem>
                    <div className="mb-12 flex items-end justify-between">
                        <SectionHeading
                            label="Selected Work"
                            title="Projects I've shipped"
                            description="A curated selection of projects that showcase my approach to engineering complex systems."
                        />
                    </div>
                </RevealItem>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {[1, 2, 3, 4].map((i) => (
                        <RevealItem key={i}>
                            <GlassCard className="group cursor-pointer transition-all hover:-translate-y-1">
                                {/* Visual */}
                                <div className="aspect-video mb-4 overflow-hidden rounded-md bg-zinc-900">
                                    <div className="h-full w-full bg-linear-to-br from-zinc-800 to-zinc-950 transition-transform duration-500 group-hover:scale-105" />
                                </div>

                                {/* Content */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-1.5">
                                        <h3 className="text-lg font-semibold text-white leading-tight">
                                            Enterprise SaaS Dashboard
                                        </h3>

                                        <p className="text-zinc-400 text-sm leading-snug max-w-[95%]">
                                            Real-time analytics system handling high-volume events with a strong
                                            focus on performance and data clarity.
                                        </p>

                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {["Next.js", "TypeScript", "PostgreSQL"].map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-mono text-zinc-500 border border-white/10 px-2 py-0.5 rounded"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <ArrowUpRight
                                        size={30}
                                        className="mt-1 text-zinc-600 transition-colors group-hover:text-white"
                                    />
                                </div>
                            </GlassCard>

                        </RevealItem>
                    ))}
                </div>
            </section>
        </Reveal>
    )
}