"use client";

import { useEffect, useState } from "react";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Footer from "./layout/Footer/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if(sidebarOpen){
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => document.body.classList.remove('overflow-hidden')
  },[sidebarOpen])

  return (
    <>
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-125 w-125 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-125 w-125 rounded-full bg-cyan-400/20 blur-[120px]" />
      </div>

      <Header onMenuClick={() => setSidebarOpen(true)} />

      {/* Mobile-only sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main>{children}</main>

      <Footer />
    </>
  );
}
