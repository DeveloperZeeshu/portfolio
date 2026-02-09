// import ContactForm from "@/src/components/form/ContactForm";
// import { GlassCard } from "@/src/components/ui/GlassCard";
// import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 space-y-20">
//       {/* Intro */}
//       <section className="max-w-3xl space-y-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-white">
//           Let’s build something meaningful.
//         </h1>
//         <p className="text-xl text-zinc-400 leading-relaxed">
//           Reach out for opportunities, collaborations, or freelance work.
//           I usually respond within 24 hours.
//         </p>
//       </section>

//       {/* Form + Contact Cards */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Form (Left / Primary) */}
//         <div className="md:col-span-2">
//           <GlassCard className="p-8">
//             <ContactForm />
//           </GlassCard>
//         </div>

//         {/* Contact Cards (Right / Secondary) */}
//         <div className="space-y-4">
//           {/* Email */}
//           <GlassCard className="p-6 group">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <Mail className="w-5 h-5 text-zinc-400" />
//                 <div>
//                   <span className="text-sm text-zinc-500">Email</span>
//                   <p className="text-white">hello@yourdomain.com</p>
//                 </div>
//               </div>
//               <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
//             </div>
//           </GlassCard>

//           {/* GitHub */}
//           <GlassCard className="p-6 group">
//             <a
//               href="https://github.com/"
//               target="_blank"
//               className="flex items-center justify-between"
//             >
//               <div className="flex items-center gap-3">
//                 <Github className="w-5 h-5 text-zinc-400" />
//                 <div>
//                   <span className="text-sm text-zinc-500">GitHub</span>
//                   <p className="text-white">github.com/</p>
//                 </div>
//               </div>
//               <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
//             </a>
//           </GlassCard>

//           {/* LinkedIn */}
//           <GlassCard className="p-6 group">
//             <a
//               href="https://linkedin.com/in/"
//               target="_blank"
//               className="flex items-center justify-between"
//             >
//               <div className="flex items-center gap-3">
//                 <Linkedin className="w-5 h-5 text-zinc-400" />
//                 <div>
//                   <span className="text-sm text-zinc-500">LinkedIn</span>
//                   <p className="text-white">linkedin.com/in/</p>
//                 </div>
//               </div>
//               <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
//             </a>
//           </GlassCard>
//         </div>

//       </section>
//     </main>
//   );
// }


import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Reveal } from "@/src/components/Reveal"
import { SectionHeading } from "@/src/components/ui/section-heading"
import { GlassCard } from "@/src/components/ui/GlassCard"

export const metadata: Metadata = {
  title: "Contact | Jeesan Abbas",
  description: "Get in touch for collaborations, opportunities, or just to say hello.",
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const socials = [
  {
    name: "GitHub",
    href: "https://github.com",
    handle: "@jeesanabbas",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    handle: "jeesanabbas",
    icon: LinkedInIcon,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com",
    handle: "@jeesanabbas",
    icon: XIcon,
  },
]

export default function ContactPage() {
  return (
    <main className="pt-25 pb-24">
      <div className="mx-auto max-w-7xl px-6 space-y-20">

        {/* Header */}
        <Reveal>
          <SectionHeading
            label="Contact"
            title="Let’s connect"
            description="Whether you have a project in mind, want to collaborate, or just want to talk engineering, I’d love to hear from you."
            align="center"
          />
        </Reveal>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Email */}
          <Reveal>
            <Link href="mailto:alex@alexchen.dev" className="group block h-full">
              <GlassCard
                className="
                  p-8 h-full flex flex-col gap-6
                  transition-all duration-300
                  hover:bg-white/15
                  hover:border-white/20
                "
              >
                <IconBadge>
                  <MailIcon className="w-5 h-5" />
                </IconBadge>

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                    Email
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Best for serious inquiries and opportunities.
                  </p>
                </div>

                <span className="mt-auto text-sm font-mono text-zinc-500 group-hover:text-accent transition-colors">
                  alex@alexchen.dev
                </span>
              </GlassCard>
            </Link>
          </Reveal>

          {/* Socials */}
          {socials.map((social) => (
            <Reveal key={social.name}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <GlassCard
                  className="
                    p-8 h-full flex flex-col gap-6
                    transition-all duration-300
                    hover:bg-white/15
                    hover:border-white/20
                  "
                >
                  <IconBadge>
                    <social.icon className="w-5 h-5" />
                  </IconBadge>

                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-sm text-zinc-400">
                      {social.name === "GitHub"
                        ? "Open source work and experiments."
                        : social.name === "LinkedIn"
                        ? "Professional background and experience."
                        : "Thoughts on engineering and systems."}
                    </p>
                  </div>

                  <span className="mt-auto text-sm font-mono text-zinc-500 group-hover:text-accent transition-colors">
                    {social.handle}
                  </span>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Availability */}
        <Reveal>
          <GlassCard className="p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-center gap-3">
              <StatusDot />
              <span className="text-sm font-medium text-white">
                Available for new projects
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed md:ml-auto max-w-md">
              I’m currently taking on select freelance and contract work. If the
              project is interesting and impactful, let’s talk.
            </p>
          </GlassCard>
        </Reveal>

      </div>
    </main>
  )
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
      {children}
    </div>
  )
}

function StatusDot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
    </span>
  )
}
