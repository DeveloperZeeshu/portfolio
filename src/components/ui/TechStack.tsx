import Image from "next/image";
import { Reveal, RevealItem } from "../Reveal";
import { SectionHeading } from "./section-heading";

export const technologies = [
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "C++", icon: "/icons/cplusplus.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "VS Code", icon: "/icons/vscode.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
]

export function TechStack() {
    return (
        <Reveal>
            <section className="w-full flex justify-center py-20">
                <div className="max-w-7xl w-full flex flex-col gap-4">
                    <SectionHeading
                        label="Toolkit"
                        title="Technologies I work with"
                        description="Choosing the right tools for the right problems. These are the technologies I reach for most often."
                    />

                    {/* Tech Grid */}
                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
                        {technologies.map((tech, i) => (
                            <RevealItem key={tech.name}>
                                <div className="
  group flex flex-col items-center gap-3 rounded-xl
  border border-white/12
  bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.12)_35%,rgba(255,255,255,0.10)_70%)]
  backdrop-blur-xl
  px-4 py-5
  transition-all duration-300
  hover:-translate-y-1
">
                                    <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        width={28}
                                        height={28}
                                        className="opacity-90"
                                    />
                                    <span className="text-xs font-medium text-zinc-300">
                                        {tech.name}
                                    </span>
                                </div>
                            </RevealItem>
                        ))}
                    </div>
                </div>
            </section>
        </Reveal>
    )
}
