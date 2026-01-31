"use client";

import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <label className="text-sm text-zinc-400">Name</label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm text-zinc-400">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm text-zinc-400">Message</label>
        <textarea
          rows={4}
          placeholder="Tell me about the role or project..."
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-all"
      >
        Send message
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </form>
  );
}
