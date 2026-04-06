import StoreHeader from "@/components/Header/StoreHeader";
export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <StoreHeader />
      <main className="container mx-auto py-4 px-2">{children}</main>
    </div>
  );
}
