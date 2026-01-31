import { cn } from "@/src/lib/utils/cn";

export const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn(
    "relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/5 hover:border-white/20",
    className
  )}>
    {children}
  </div>
);