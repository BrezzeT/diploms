"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import AdminHeader from "@/components/Header/AdminHeader";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="p-2 md:p-4 bg-white flex-1">
          <div className="container mx-auto ">{children}</div>
        </main>
      </div>
    </div>
  );
}
