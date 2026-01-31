import ContactForm from "@/src/components/form/ContactForm";
import { GlassCard } from "@/src/components/ui/GlassCard";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 space-y-20">
      {/* Intro */}
      <section className="max-w-3xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Let’s build something meaningful.
        </h1>
        <p className="text-xl text-zinc-400 leading-relaxed">
          Reach out for opportunities, collaborations, or freelance work.
          I usually respond within 24 hours.
        </p>
      </section>

      {/* Form + Contact Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form (Left / Primary) */}
        <div className="md:col-span-2">
          <GlassCard className="p-8">
            <ContactForm />
          </GlassCard>
        </div>

        {/* Contact Cards (Right / Secondary) */}
        <div className="space-y-4">
          {/* Email */}
          <GlassCard className="p-6 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-zinc-400" />
                <div>
                  <span className="text-sm text-zinc-500">Email</span>
                  <p className="text-white">hello@yourdomain.com</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
          </GlassCard>

          {/* GitHub */}
          <GlassCard className="p-6 group">
            <a
              href="https://github.com/"
              target="_blank"
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-zinc-400" />
                <div>
                  <span className="text-sm text-zinc-500">GitHub</span>
                  <p className="text-white">github.com/</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </a>
          </GlassCard>

          {/* LinkedIn */}
          <GlassCard className="p-6 group">
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-zinc-400" />
                <div>
                  <span className="text-sm text-zinc-500">LinkedIn</span>
                  <p className="text-white">linkedin.com/in/</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </a>
          </GlassCard>
        </div>

      </section>
    </main>
  );
}
