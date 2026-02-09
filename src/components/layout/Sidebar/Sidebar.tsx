import Link from "next/link";
import { X, Home, User, FolderGit2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {

  const pathname = usePathname()

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}
      <aside
        className={`
    fixed z-50 top-0 bottom-0 left-0 w-77.5
    rounded-r-2xl border border-white/10 bg-white/10 backdrop-blur-xl
    px-4 py-6 transition-transform duration-300
    lg:hidden
    ${open ? "translate-x-0" : "-translate-x-[120%]"}
  `}
      >
        {/* Header / Identity */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Jeesan Abbas</p>
            <p className="text-xs text-neutral-400">Full-stack Engineer</p>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Divider */}
        <div className="mb-4 h-px bg-white/10" />

        {/* Navigation label */}
        <p className="mb-2 px-3 text-xs uppercase tracking-widest text-neutral-500">
          Navigation
        </p>

        {/* Nav */}
        <nav className="space-y-1">
          {[
            { label: "Home", href: "/", icon: Home },
            { label: "About", href: "/about", icon: User },
            { label: "Projects", href: "/projects", icon: FolderGit2 },
            { label: "Contact", href: "/contact", icon: Mail },
          ].map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-neutral-400 hover:text-white hover:bg-white/10 transition",
                pathname === href
                  ? "bg-white/10"
                  : ""
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{label}</span>
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="mt-6">
          <Link
            href="/contact"
            onClick={onClose}
            className={cn(
              "flex items-center justify-center rounded-xl bg-white",
              "text-black py-2 text-sm font-semibold hover:bg-neutral-200 transition",
            )}
          >
            Let’s work together
          </Link>
        </div>

        {/* Footer meta */}
        <div className="absolute bottom-6 left-4 right-4 text-center">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Jeesan Abbas
          </p>
        </div>
      </aside>

    </>
  );
}
