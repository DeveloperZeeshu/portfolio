import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import { Reveal } from "@/src/components/Reveal"
import { GlassCard } from "@/src/components/ui/GlassCard"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "Not Found" }
  return {
    title: `${project.title} | Alex Chen`,
    description: project.summary,
  }
}

function CaseStudySection({
  label,
  title,
  children,
  delay = 0,
}: {
  label: string
  title: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <Reveal>
      <div className="flex flex-col gap-4">
        <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
          {label}
        </span>
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
        <div className="text-muted-foreground leading-relaxed text-pretty">
          {children}
        </div>
      </div>
    </Reveal>
  )
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <div className="pt-25 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Back link */}
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M13 7H1m0 0l5 5M1 7l5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All Projects
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal>
          <header className="flex flex-col gap-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-2">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors duration-300"
                >
                  Live Site
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 12L12 4m0 0H5m7 0v7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors duration-300"
                >
                  Source Code
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 12L12 4m0 0H5m7 0v7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </header>
        </Reveal>

        {/* Divider */}
        <div className="h-px bg-border/50 mb-16" />

        {/* Narrative sections */}
        <div className="flex flex-col gap-20">
          <CaseStudySection label="01" title="The Problem" delay={100}>
            <p>{project.problem}</p>
          </CaseStudySection>

          <CaseStudySection label="02" title="The Solution" delay={150}>
            <p>{project.solution}</p>
          </CaseStudySection>

          <CaseStudySection label="03" title="Architecture & Stack" delay={200}>
            <p>{project.architecture}</p>
          </CaseStudySection>

          <CaseStudySection label="04" title="Challenges & Decisions" delay={250}>
            <p>{project.challenges}</p>
          </CaseStudySection>

          <CaseStudySection label="05" title="Outcome & Learnings" delay={300}>
            <p>{project.outcome}</p>
          </CaseStudySection>
        </div>

        {/* Bottom CTA */}
        <Reveal>
          <div className="mt-24">
            <GlassCard className="p-10 text-center flex flex-col items-center gap-4">
              <p className="text-muted-foreground">
                Interested in working together on something like this?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium transition-all duration-300 hover:opacity-90"
              >
                Get in Touch
              </Link>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
