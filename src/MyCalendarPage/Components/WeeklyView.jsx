import React from 'react';
import WeeklyTaskCard from './WeeklyTaskCard';

const WeeklyView = ({ meetings }) => {
  const days = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];
  const dates = ['۰۵', '۰۶', '۰۷', '۰۸', '۰۹', '۱۰', '۱۱']; // تاریخ‌های متناظر با روزها
  const hours = Array.from({ length: 16 }, (_, i) => i + 6);
  const rowHeight = 60;

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl mt-10 overflow-x-auto" dir="rtl">
      {/* هدر روزها همراه با تاریخ */}
      <div className="grid grid-cols-8 border-b border-slate-200 pb-4 mb-2">
        <div className="w-16"></div>
        {days.map((d, index) => (
          <div key={d} className="text-center">
            <div className="font-bold text-slate-800">{d}</div>
            <div className="text-[12px] text-slate-400 font-medium">{dates[index]}</div>
          </div>
        ))}
      </div>

      {/* شبکه اصلی */}
      <div className="grid grid-cols-8 relative border-t border-slate-200">
        
        {/* ستون ساعت‌ها - حالا داخل گرید است و هماهنگ */}
        <div className="border-l-2 border-slate-300 bg-slate-50/50">
          {hours.map(h => (
            <div key={h} className="text-[15px] text-slate-500 font-bold text-center border-b border-slate-200 flex items-center justify-center" style={{ height: `${rowHeight}px` }}>
              {h}:00
            </div>
          ))}
        </div>

        {/* ستون روزها */}
        {days.map((_, dayIndex) => (
          <div key={dayIndex} className="border-l border-slate-200 relative">
            {hours.map(h => (
              <div 
                key={h} 
                className="border-b border-slate-200"
                style={{ height: `${rowHeight}px` }}
              ></div>
            ))}
            
            {/* قرارگیری تسک‌ها - دقیق بر اساس پیکسل */}
            {meetings.filter(m => m.day === dayIndex).map(m => (
              <div key={m.id} className="absolute left-1 right-1 z-10" style={{ 
                top: `${(m.start - 6) * rowHeight}px`, 
                height: `${(m.end - m.start) * rowHeight}px` 
              }}>
                <WeeklyTaskCard title={m.title} location={m.location} colorClass={m.color} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyView;