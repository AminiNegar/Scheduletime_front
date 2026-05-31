import React from 'react';
import { FaMapMarkerAlt, FaVideo } from 'react-icons/fa';

const WeeklyTaskCard = ({ title, location, colorClass }) => {
  const loc = location || ''; 
  const isOnline = loc.toLowerCase().includes('لینک') || loc.toLowerCase().includes('meet');

  return (
    <div className={`w-[92%] h-[75px] mx-auto ${colorClass.replace('100', '50')} border border-slate-200/60 rounded-2xl p-3 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 hover:shadow-[0_0_35px_rgba(15,23,42,0.35)] ring-2 ring-blue-500/50`}>
      
      {/* عنوان بزرگتر و خواناتر */}
      <h4 className="font-bold text-[12px] text-slate-800 leading-snug truncate">
        {title}
      </h4>

      {/* بخش پایین: آیکون‌ها کنار هم */}
      <div className="flex justify-between items-center mt-1">
        
        {/* آیکون مکان یا لینک با استایل بهتر */}
        <div className={`flex items-center gap-1 text-[10px] font-semibold ${isOnline ? 'text-blue-500' : 'text-slate-500'}`}>
          {isOnline ? <FaVideo size={11} /> : <FaMapMarkerAlt size={11} />}
          <span className="truncate max-w-[40px]">{isOnline ? 'آنلاین' : 'حضوری'}</span>
        </div>

        {/* آیکون کاربران با استایل شیک‌تر */}
        <div className="flex -space-x-1.5 ring-2 ring-white rounded-full bg-white">
          {[1, 2].map(i => (
            <div key={i} className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center border border-white shadow-inner text-[8px]">
              👤
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyTaskCard;