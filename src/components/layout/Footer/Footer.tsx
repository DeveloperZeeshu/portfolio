import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-white/2 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Identity */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Jeesan Abbas
            </h3>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
              Full-stack developer focused on building performant,
              scalable web applications with modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Navigation
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Availability */}
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Get in touch
            </p>

            <div className="mt-4 space-y-3 text-sm text-neutral-400">
              <a
                href="mailto:hello@yourdomain.com"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Mail className="w-4 h-4" />
                hello@yourdomain.com
              </a>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <p className="pt-4 text-xs text-neutral-500">
                Open to full-time roles & freelance projects.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Jeesan Abbas. All rights reserved.</p>
          <p className="text-xs text-neutral-500">
            Designed and engineered by Jeesan Abbas
          </p>
        </div>
      </div>
    </footer>
  );
}
