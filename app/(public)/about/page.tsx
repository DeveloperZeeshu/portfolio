import { Reveal, RevealItem } from "@/src/components/Reveal";
import { GlassCard } from "@/src/components/ui/GlassCard";
import { SectionHeading } from "@/src/components/ui/section-heading";

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About | Jeesan Abbas",
    description:
        "Senior full-stack engineer with a passion for building high-performance web applications and scalable distributed systems.",
}

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Go", "Python", "GraphQL", "REST", "gRPC"],
    },
    {
        title: "Infrastructure",
        skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
    },
    {
        title: "Data",
        skills: ["PostgreSQL", "Redis", "Kafka", "ClickHouse", "Pinecone", "Elasticsearch"],
    },
]

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 pt-25 pb-24 space-y-28">

            {/* Header */}
            <Reveal>
                <SectionHeading
                    label="About"
                    title="Jeesan Abbas"
                    description="Senior full-stack engineer building reliable, scalable systems with a strong focus on product and developer experience."
                    align="center"
                />
            </Reveal>

            {/* Bio */}
            <section className="mx-auto space-y-16">

                {/* Background */}
                <Reveal>
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Background</h3>

                        <div className="space-y-4 text-zinc-400 leading-relaxed">
                            <p>
                                I’ve been writing code for over a decade — starting from curiosity
                                about how websites worked, and evolving into a deep focus on
                                building systems that scale.
                            </p>

                            <p>
                                My journey spans computer science education, early-stage startups,
                                agencies, and enterprise teams. Across all of them, I gravitated
                                toward solving infrastructure and architecture problems.
                            </p>

                            <p>
                                Most recently, I led engineering initiatives focused on developer
                                experience, platform reliability, and long-term maintainability.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <Divider />

                {/* Experience snapshot (important addition) */}
                <Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { label: "Years Experience", value: "10+" },
                            { label: "Teams Led", value: "12+" },
                            { label: "Production Systems", value: "20+" },
                        ].map((item, i) => (
                            <RevealItem key={item.label}>
                                <GlassCard className="p-6 text-center">
                                    <div className="text-2xl font-semibold text-white">
                                        {item.value}
                                    </div>
                                    <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
                                        {item.label}
                                    </div>
                                </GlassCard>
                            </RevealItem>
                        ))}
                    </div>
                </Reveal>

                <Divider />

                {/* Skills */}
                <Reveal>
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">
                            Skills & Expertise
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skillCategories.map((category, i) => (
                                <RevealItem key={category.title}>
                                    <GlassCard className="p-6 h-full">
                                        <h4 className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-4">
                                            {category.title}
                                        </h4>

                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="text-sm px-3 py-1.5 rounded-lg bg-white/10 text-zinc-200"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </GlassCard>
                                </RevealItem>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <Divider />

                {/* Beyond code */}
                <Reveal>
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">
                            Beyond the Terminal
                        </h3>

                        <div className="space-y-4 text-zinc-400 leading-relaxed">
                            <p>
                                Outside of work, I enjoy trail running, specialty coffee, and
                                reading about systems thinking. I find that the best engineering
                                ideas often come from outside engineering itself.
                            </p>

                            <p>
                                I also mentor early-career engineers and occasionally write about
                                distributed systems, tooling, and software craftsmanship.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* CTA */}
            <Reveal>
                <section className="mx-auto rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-10 text-center">
                    <p className="text-white text-lg">
                        Interested in working together or exploring my projects?{" "}
                        <a
                            href="/contact"
                            className="text-indigo-400 underline underline-offset-4 hover:text-indigo-500 transition-colors"
                        >
                            Get in touch.
                        </a>
                    </p>
                </section>
            </Reveal>
        </main>
    )
}

/* Divider component */
function Divider() {
    return <div className="h-px bg-white/10" />
}

