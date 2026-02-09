import { Github, Linkedin } from "lucide-react";
import { Reveal, RevealItem } from "../Reveal";

export function Hero() {
    return (
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
    )
}