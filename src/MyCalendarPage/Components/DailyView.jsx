import React from 'react';
import TaskCard from "./TaskCard";
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// در اینجا meetings را از طریق props دریافت می‌کنیم
const DailyView = ({ meetings }) => {
  const hours = Array.from({ length: 19 }, (_, i) => i + 6);
  const rowHeight = 50; 
  
  return (
    <div className="relative w-full bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100 hover:shadow-[0_0_35px_rgba(15,23,42,0.35)] ring-2 ring-blue-500/50">
      {/* خطوط ساعت */}
      {hours.map((hour) => (
        <div key={hour} className="flex border-t border-slate-100" style={{ height: `${rowHeight}px` }}>
          <div className="w-20 text-[15px] text-slate-400 pt-2">{hour}:00</div>
          <div className="flex-1 border-r border-slate-50 border-dashed"></div>
        </div>
      ))}

      {/* نمایش تسک‌ها */}
      {meetings.map((m) => (
        <div
          key={m.id}
          className="absolute right-28 left-8 "
          style={{ 
            top: `${(m.start - 6) * rowHeight + 24}px`, 
            height: `${(m.end - m.start) * rowHeight}px` 
          }}
        >
          <TaskCard 
            title={m.title}
            desc={m.desc}
            time={m.time}
            location={m.location}
            colorClass={m.color}
          />
        </div>
      ))}
    </div>
  );
};

export default DailyView;