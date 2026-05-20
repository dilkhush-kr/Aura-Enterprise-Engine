"use client";

import {
  LayoutDashboard,
  Package,
  BarChart3,
  Settings,
  X,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Inventory",
    icon: Package,
  },
  {
    name: "Analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function Sidebar({ closeSidebar }) {
  return (
  <div className="w-72 h-screen fixed left-0 top-0 bg-[#0f172a] text-white flex flex-col border-r border-slate-800">

      {/* Top */}
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            Aura Engine
          </h1>

          <p className="text-sm text-slate-400 mt-1">
            Enterprise Dashboard
          </p>
        </div>

        {/* Mobile Close */}
        <button
          onClick={closeSidebar}
          className="md:hidden"
        >
          <X />
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer hover:bg-slate-800 transition"
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-sm text-slate-300">
            Logged in as
          </p>

          <h3 className="font-semibold mt-1">
            Frontend Intern
          </h3>
        </div>
      </div>
    </div>
  );
}