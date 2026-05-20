"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex w-72">
        <Sidebar />
      </aside>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`
          fixed inset-0 z-50 md:hidden transition-all duration-300
          ${sidebarOpen ? "visible" : "invisible"}
        `}
      >
        {/* Overlay */}
        <div
          onClick={() => setSidebarOpen(false)}
          className={`
            absolute inset-0 bg-black/40 transition-opacity duration-300
            ${sidebarOpen ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Sidebar Drawer */}
        <div
          className={`
            absolute top-0 left-0 h-full transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <Sidebar closeSidebar={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}