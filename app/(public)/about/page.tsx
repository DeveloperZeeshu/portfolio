import { GlassCard } from "@/src/components/ui/GlassCard";

export default function AboutPage() {
  const skills = {
    Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    Backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis"],
    Languages: ["TypeScript", "JavaScript", "C++", "Python"],
  };

  const philosophies = [
    {
      title: "Clean Architecture",
      desc: "I structure projects for maintainability and scalability from day one, following best practices and modular principles."
    },
    {
      title: "Performance First",
      desc: "I optimize for speed, bundle size, and smooth UX, because performance is a feature."
    },
    {
      title: "Ownership & Impact",
      desc: "I focus on solving real problems, not just coding for coding’s sake."
    }
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 space-y-32">
      {/* Background / Intro */}
      <section className="space-y-6">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Background</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white">Engineering with Intent</h1>
        <div className="mt-6 space-y-4 text-lg text-zinc-400 leading-relaxed max-w-3xl">
          <p>
            I am a full-stack developer and student, focused on professional-grade standards.
            I work primarily with the MERN stack and Next.js ecosystem.
          </p>
          <p>
            My experience with C++ and Python gives me a strong foundation in algorithms, memory management,
            and performance-conscious thinking, which I bring to modern web development.
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="space-y-8">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Technical Toolkit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <GlassCard key={category} className="p-6">
              <h3 className="text-white font-bold mb-4 text-lg">{category}</h3>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="text-zinc-400 text-sm">{item}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Philosophy / How I Work */}
      <section className="space-y-8">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">My Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((p) => (
            <GlassCard key={p.title} className="p-6">
              <h3 className="text-white font-bold mb-3">{p.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Optional Closing / CTA */}
      <section className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 text-center">
        <p className="text-white text-lg">
          Interested in working together or seeing my projects in action?{" "}
          <a href="/contact" className="text-indigo-400 underline hover:text-indigo-500 transition-colors">Get in touch.</a>
        </p>
      </section>
    </main>
  );
}
