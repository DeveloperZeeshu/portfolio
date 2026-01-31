import Image from "next/image";

export function TechStackCard() {
    return (
        <div className="flex flex-wrap gap-3">
            {[
                "/icons/javascript.svg",
                "/icons/python.svg",
                "/icons/C++.svg",
                "/icons/express.svg",
                "/icons/Node.js.svg",
                "/icons/mongodb.svg",
                "/icons/MySQL.svg",
                "/icons/Next.js.svg",
                "/icons/React.svg",
                "/icons/VSCode.svg",
                "/icons/Git.svg",
                "/icons/Github.svg",
                "/icons/HTML5.svg",
                "/icons/CSS3.svg"
            ].map((src) => (
                <div
                    key={src}
                    className="flex items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl p-2 transition-all hover:bg-white/20"
                >
                    <Image
                        src={src}
                        alt="tech icon"
                        width={28}
                        height={28}
                        className="opacity-90"
                    />
                </div>
            ))}
        </div>

    )
}