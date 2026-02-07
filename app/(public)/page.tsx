import Link from "next/link";
import { Github, Linkedin, ArrowUpRight, ArrowRight } from "lucide-react";
import { GlassCard } from "@/src/components/ui/GlassCard";
import { TechStackCard } from "@/src/components/ui/TechStackCard";
import { Reveal, RevealItem } from "@/src/components/Reveal";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-20 space-y-32">
      {/* Hero Section */}
      <Reveal>
        <RevealItem>
          <section className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
              Full-stack engineer building{" "}
              <span className="text-zinc-500">performant, type-safe</span> web applications.
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Specializing in React, Next.js, and Node.js. I bridge the gap between
              complex backend architecture and refined frontend experiences.
            </p>
            <div className="flex items-center gap-6 mt-10">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-all">
                View Projects
              </button>
              <div className="flex items-center gap-4 text-zinc-400">
                <a href="https://github.com/yourusername" aria-label="GitHub">
                  <Github className="w-5 h-5 hover:text-white transition-colors" />
                </a>
                <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </section>
        </RevealItem>
      </Reveal>

      <Reveal>
        <section className="w-full flex justify-center">
          <div className="max-w-7xl px-6 w-full flex flex-col items-center gap-6">
            <RevealItem>
              <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Technologies I Work With
              </h2>
            </RevealItem>

            <RevealItem>
              <p className="text-center text-zinc-400 text-base max-w-md">
                A focused stack I use to build reliable, scalable web applications.
              </p>
            </RevealItem>

            {/* Tech icons should stagger internally */}
            <RevealItem>
              <TechStackCard />
            </RevealItem>
          </div>
        </section>
      </Reveal>


      {/* Featured Projects Grid */}
      <Reveal>
        <section id="work">
          <RevealItem>
            <div className="mb-12 flex items-end justify-between">
              <h2 className="text-3xl font-bold text-white">Selected Work</h2>
              <Link
                href="/projects"
                className="text-sm text-zinc-500 hover:text-white flex justify-center items-center gap-1">
                View all projects
                <ArrowRight size={20} />
              </Link>
            </div>
          </RevealItem>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <RevealItem key={i}>
                <GlassCard className="group cursor-pointer transition-all">
                  {/* Placeholder image / visual */}
                  <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-zinc-900">
                    <div className="h-full w-full bg-linear-to-br from-zinc-800 to-zinc-950 transition-transform duration-500 group-hover:scale-105" />
                  </div>

                  {/* Project info */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">Enterprise SaaS Dashboard</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Built a real-time analytics engine handling 10k+ events/sec using Next.js,
                        Redis, and PostgreSQL. Focused on data visualization and performance.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {["Next.js", "TypeScript", "PostgreSQL"].map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                </GlassCard>
              </RevealItem>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Philosophy Section */}
      <Reveal>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-white/5 py-20">
          {[
            {
              title: "01. Architecture",
              text: "I prioritize modular, maintainable codebases...",
            },
            {
              title: "02. Performance",
              text: "Speed is a feature. I optimize Core Web Vitals...",
            },
            {
              title: "03. Ownership",
              text: "Beyond code, I focus on product goals...",
            },
          ].map((item) => (
            <RevealItem key={item.title}>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white italic">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </section>
      </Reveal>

    </main>
  );
}
