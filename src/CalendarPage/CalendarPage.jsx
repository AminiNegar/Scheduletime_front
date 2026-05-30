import React from "react";
import CalendarCard from "../Home/Components/CalendarCard";

const CategoryCard = ({ colorClass, title, count }) => {
  return (
    <div className={`rounded-2xl p-3 flex items-center gap-3 ${colorClass}`}>
      <div className="w-3 h-3 rounded-full bg-white/80" />
      <div className="flex flex-col">
        <span className="text-xs text-white/90 font-semibold">{title}</span>
        <span className="text-[11px] text-white/80">{count} جلسه</span>
      </div>
    </div>
  );
};

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">صفحه تقویم</h1>
            <p className="mt-1 text-sm text-slate-500">نمای کلی جلسات و تقویم ماهانه</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/10">
            افزودن +
          </button>
        </div>

        <div className="flex gap-3 mb-6">
          <CategoryCard colorClass="bg-indigo-600" title="جلسات آنلاین" count={12} />
          <CategoryCard colorClass="bg-emerald-500" title="جلسات حضوری دانشگاه" count={8} />
          <CategoryCard colorClass="bg-amber-400" title="جلسات حضوری خارجی" count={3} />
          <CategoryCard colorClass="bg-slate-400" title="سایر جلسات" count={6} />
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <CalendarCard />
        </div>
      </div>
    </div>
  );
}
