import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header({
  onMenuClick,
}: {
  onMenuClick?: () => void;
}) {
  return (
    <header className="sticky top-4 z-50 mx-auto max-w-7xl px-6">
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl">
        <div className="flex items-center justify-between px-5 py-4">
          {/* Left: Menu (mobile) + Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="lg:hidden text-neutral-300 hover:text-white transition"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link
              href="/"
              className="font-semibold tracking-tight text-lg text-white"
            >
              Jeesan Abbas
            </Link>
          </div>

          {/* Right: Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm text-neutral-300">
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
            <Link href="/projects" className="hover:text-white transition">
              Work
            </Link>

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl hover:bg-white/20 transition-all"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
