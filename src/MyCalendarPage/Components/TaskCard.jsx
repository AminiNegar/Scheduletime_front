import React from 'react';
import { FaTrash, FaEdit, FaSyncAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const TaskCard = ({ title, desc, time, location, colorClass }) => {
  return (
    <div className={`w-full ${colorClass.replace('100', '50')} border border-slate-200 p-5 rounded-3xl shadow-sm mb-4 hover:shadow-[0_0_35px_rgba(15,23,42,0.35)] ring-2 ring-blue-500/50`} dir="rtl">
      
      {/* هدر کارت */}
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
        <div className="flex -space-x-3 flex-row-reverse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-9 h-9 rounded-full bg-white border-2 border-white flex items-center justify-center text-[10px] shadow-sm hover:shadow-[0_0_35px_rgba(15,23,42,0.35)] ring-2 ring-blue-500/50">
              👤
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-slate-600 mt-3 text-right leading-relaxed">
        {desc}
      </p>

      {/* بخش پایین: جابجایی آیکون‌ها به سمت چپ */}
      <div className="flex justify-between items-center mt-6">
        
        {/* این بخش اطلاعات مکان و زمان است که حالا می‌آید سمت راست */}
        <div className="flex gap-6 text-[12px] text-slate-500 font-medium">
          <span className="flex items-center gap-1"><FaMapMarkerAlt /> {location}</span>
          <span className="flex items-center gap-1"><FaClock /> {time}</span>
        </div>

        {/* این بخش آیکون‌های عملیاتی است که منتقل شد به سمت چپ */}
        <div className="flex gap-4 text-slate-400">
          <FaTrash className="cursor-pointer hover:text-red-500 transition-colors" />
          <FaEdit className="cursor-pointer hover:text-blue-500 transition-colors" />
          <FaSyncAlt className="cursor-pointer hover:text-green-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;