"use client";

import { Bell, Menu, Search } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">

      <div className="flex items-center justify-between px-4 md:px-8 py-4">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-4">

          {/* Mobile Hamburger */}
          <button
            onClick={onMenuClick}
            className="md:hidden bg-slate-100 hover:bg-slate-200 transition p-2 rounded-xl"
          >
            <Menu size={22} />
          </button>

          {/* Title */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">
              Inventory Overview
            </h2>

            <p className="text-sm text-slate-500 hidden sm:block">
              Monitor products and analytics
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3 md:gap-5">

          {/* Search */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-2xl px-4 py-3 w-80">
            <Search size={18} className="text-slate-500" />

            <input
              type="text"
              placeholder="Search inventory..."
              className="bg-transparent outline-none ml-2 w-full text-sm"
            />
          </div>

          {/* Notification */}
          <button className="relative bg-white shadow-sm border border-slate-200 rounded-full p-3 hover:bg-slate-100 transition">
            <Bell className="text-slate-700" size={20} />

            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Avatar */}
          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 text-white flex items-center justify-center font-bold shadow">
            A
          </div>
        </div>
      </div>
    </header>
  );
}