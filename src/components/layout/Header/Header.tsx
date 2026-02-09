import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: 'Home',
    slug: '/'
  },
  {
    name: 'About',
    slug: '/about'
  },
  {
    name: 'Work',
    slug: '/projects'
  }
]

export default function Header({
  onMenuClick,
}: {
  onMenuClick?: () => void;
}) {

  const pathname = usePathname()

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-7xl px-6">
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl">
        <div className="flex items-center justify-between px-5 h-15">
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
          <nav className="hidden lg:flex items-center gap-3 text-sm text-neutral-300">
            {
              navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.slug}
                  className={cn(
                    "transition-colors duration-300",
                    "hover:text-white transition",
                    "px-3.5 py-1.5 rounded-xl",
                    pathname === item.slug
                      ? "text-foreground bg-white/10"
                      : "text-muted-foreground hover:text-foreground",
                  )}>
                  {item.name} 
                </Link>
              ))
            }

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
