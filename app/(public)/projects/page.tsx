const projects = [
  { title: "Project One", desc: "High-quality web experience." },
  { title: "Project Two", desc: "Design-driven product build." },
  { title: "Project Three", desc: "Performance-focused interface." },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-24">
      <h1 className="mb-12 text-3xl font-semibold">Work</h1>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 transition hover:-translate-y-1 hover:bg-white/15"
          >
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
