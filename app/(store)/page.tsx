import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden p-12 md:p-20 bg-linear-to-br from-emerald-600 via-emerald-700 to-emerald-900 rounded-[2.5rem] mt-8 shadow-2xl shadow-emerald-200">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold tracking-wider mb-6 border border-white/20 uppercase">
              Diplom Project 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
              E-commerce <br />
              <span className="text-emerald-300">PLATFORM</span>
            </h1>
            <p className="text-emerald-50/80 text-xl md:text-2xl font-medium leading-relaxed">
              Дипломний проект: сучасне рішення для <br /> вашого
              онлайн-бізнесу.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/catalog"
              className="group relative flex items-center gap-2 bg-white text-emerald-900 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-white/20"
            >
              Перейти до каталогу
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
