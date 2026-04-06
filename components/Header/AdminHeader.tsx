"use client";
import { useSidebar } from "@/lib/store/general-store";
import { Menu, User2, LogOut } from "lucide-react";

export default function AdminHeader() {
  const { toggle } = useSidebar();

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between h-16 w-full bg-white border-b border-emerald-300 px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          title="Toggle Sidebar"
          className="p-2 rounded-xl text-emerald-700 hover:bg-emerald-50 transition-all active:scale-95 border border-emerald-200"
        >
          <Menu size={20} />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
          <User2 size={20} />
        </div>
        <button
          className="p-2 text-slate-400 hover:text-red-500 transition-colors"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}
