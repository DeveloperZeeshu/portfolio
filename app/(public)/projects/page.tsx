import type { Metadata } from "next"
import Link from "next/link"
import { projects } from "@/lib/projects"
import { Reveal } from "@/src/components/Reveal"
import { SectionHeading } from "@/src/components/ui/section-heading"
import { GlassCard } from "@/src/components/ui/GlassCard"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects | Jeesan Abbas",
  description:
    "A collection of projects showcasing full-stack engineering, system design, and product thinking.",
}

export default function ProjectsPage() {
  return (
    <main className="">
      <div className="mx-auto max-w-7xl px-6 pt-25 pb-24 space-y-20">

        {/* Header */}
        <Reveal>
          <SectionHeading
            label="Projects"
            title="Things I’ve built"
            description="Selected work spanning product engineering, platform systems, and developer tooling."
            align="center"
          />
        </Reveal>

        {/* Projects list */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <GlassCard
                  className="
                    p-8 md:p-10
                    transition-all duration-300
                    hover:bg-white/15
                    hover:border-white/20
                  "
                >
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12">

                    {/* Left content */}
                    <div className="flex-1 space-y-4">
                      
                      {/* Title row */}
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-accent">
                          {project.title}
                        </h2>

                        <span className="flex lg:hidden"><ArrowIcon /></span>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 leading-relaxed max-w-2xl">
                        {project.description}
                      </p>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="
                              text-xs font-mono
                              px-2.5 py-1 rounded-lg
                              bg-white/10
                              text-zinc-300
                              transition-colors
                              group-hover:bg-white/15
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right label */}
                    <div className="hidden lg:flex shrink-0 items-center">
                      <span
                        className="
                          text-xs font-mono uppercase tracking-widest
                          text-zinc-500
                          transition-all duration-300
                          group-hover:text-accent
                          group-hover:translate-x-1
                          flex gap-3 items-center
                        "
                      >
                        View Case Study 
                        <ArrowRight size={19}/>
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}

/* Arrow icon isolated for clarity */
function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      className="
        text-zinc-500 shrink-0 mt-1.5
        transition-all duration-300
        group-hover:text-accent
        group-hover:translate-x-0.5
        group-hover:-translate-y-0.5
      "
    >
      <path
        d="M4 12L12 4m0 0H5m7 0v7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

