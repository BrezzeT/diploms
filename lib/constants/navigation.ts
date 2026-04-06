import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Settings,
  ChevronDown,
} from "lucide-react";
import { title } from "process";

export const NAV_ITEMS = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    subItems: [
      {
        title: "Overview",
        href: "/admin",
      },
      {
        title: "Analytics",
        href: "/admin/analytics",
      },
      {
        title: "Reports",
        href: "/admin/reports",
      },
    ],
  },
  {
    title: "E-commerce",
    icon: ShoppingBag,
    subItems: [
      {
        title: "Products",
        href: "/admin/products",
      },
      {
        title: "Add Product",
        href: "/admin/add-products",
      },
      {
        title: "Categories",
        href: "/admin/categories",
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];
