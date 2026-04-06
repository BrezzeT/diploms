"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useSidebar } from "@/lib/store/general-store";
import { NAV_ITEMS } from "@/lib/constants/navigation";

export default function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <aside
      className={`hidden md:flex sticky top-0 h-screen bg-white border-r border-emerald-300 transition-all duration-300 z-40 flex-col ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-center h-16 shrink-0 border-b border-emerald-300">
        <Link href="/admin">
          <div
            className={`font-bold transition-all duration-300 flex items-center justify-center ${
              isOpen
                ? "text-xl text-emerald-950"
                : "bg-emerald-500 text-white text-2xl w-11 h-11 rounded-xl shadow-lg shadow-emerald-200"
            }`}
          >
            {isOpen ? (
              <span className="tracking-tighter">
                E-commerce<span className="text-emerald-500">.</span>
              </span>
            ) : (
              "E"
            )}
          </div>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto no-scrollbar p-3 flex flex-col gap-1.5 scroll-smooth">
        {NAV_ITEMS.map((item) => (
          <SidebarItem key={item.title} item={item} isSidebarOpen={isOpen} />
        ))}
      </nav>
      <div className="p-3">
        <Link href={"/"}>Вийти</Link>
      </div>
    </aside>
  );
}

interface NavItem {
  title: string;
  icon: React.ElementType;
  href?: string;
  subItems?: { title: string; href: string }[];
}

function SidebarItem({
  item,
  isSidebarOpen,
}: {
  item: NavItem;
  isSidebarOpen: boolean;
}) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = item.icon;
  const isActive =
    item.href === pathname ||
    item.subItems?.some((sub) => sub.href === pathname);

  if (item.subItems) {
    return (
      <div className="flex flex-col gap-1">
        <button
          onClick={() => isSidebarOpen && setIsExpanded(!isExpanded)}
          className={`flex items-center justify-between w-full p-3 rounded-xl transition-all duration-300 group
            ${isActive ? "bg-emerald-50 text-emerald-800" : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"}
            ${!isSidebarOpen && "justify-center"}`}
        >
          <div className="flex items-center gap-3">
            <Icon
              size={22}
              className={`shrink-0 transition-transform ${!isActive && "group-hover:scale-110"}`}
            />
            {isSidebarOpen && (
              <span className="text-sm font-semibold">{item.title}</span>
            )}
          </div>
          {isSidebarOpen && (
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 opacity-50 ${isExpanded ? "rotate-180" : ""}`}
            />
          )}
        </button>

        {isSidebarOpen && isExpanded && (
          <div className="flex flex-col ml-6 pl-3 border-l-2 border-emerald-200 gap-1 animate-in fade-in slide-in-from-top-1">
            {item.subItems.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                className={`text-sm p-2 rounded-lg transition-colors font-medium
                  ${
                    pathname === sub.href
                      ? "text-emerald-700 bg-emerald-50/50"
                      : "text-slate-500 hover:text-emerald-600 hover:bg-slate-50"
                  }`}
              >
                {sub.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href || "#"}
      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group
        ${isActive ? "bg-emerald-600 text-white shadow-lg shadow-emerald-100" : "text-slate-500 hover:bg-emerald-50 hover:text-emerald-700"}
        ${!isSidebarOpen && "justify-center"}`}
    >
      <Icon
        size={22}
        className={`shrink-0 transition-transform ${!isActive && "group-hover:scale-110"}`}
      />
      {isSidebarOpen && (
        <span className="text-sm font-semibold">{item.title}</span>
      )}
    </Link>
  );
}
