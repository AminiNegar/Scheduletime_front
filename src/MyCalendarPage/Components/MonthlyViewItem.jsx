import React from 'react';
import { FaMapMarkerAlt, FaLink } from 'react-icons/fa';

const MonthlyViewItem = ({ meeting }) => {
  return (
    <div className="group flex flex-col p-2 rounded-xl transition-all duration-300 hover:bg-indigo-50/50 cursor-pointer border border-transparent hover:border-indigo-100 bg-white shadow-sm w-full ring-2 ring-blue-500/50 shadow-[0_0_25px_rgba(15,23,42,0.22)]">
      
      {/* بخش آواتار و نام */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden shrink-0">
          <img 
            src={`https://ui-avatars.com/api/?name=${meeting.title}&background=random&color=fff&size=128`} 
            alt={meeting.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col truncate">
          <span className="text-[10px] font-bold text-slate-800 truncate">{meeting.title}</span>
          <span className="text-[9px] text-slate-400">{meeting.start}:00 - {meeting.end}:00</span>
        </div>
      </div>

      {/* بخش لینک و مکان */}
      <div className="flex items-center gap-2 text-[9px] text-slate-500 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
        <div className="flex items-center gap-1 truncate">
          <FaMapMarkerAlt className="text-indigo-400 shrink-0" />
          <span className="truncate">{meeting.location}</span>
        </div>
        
        {/* لینک جلسه - اگر لینک است بازش کن */}
        <a 
          href={meeting.location.startsWith('http') ? meeting.location : '#'} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-1 text-indigo-600 hover:underline ml-auto shrink-0"
        >
          <FaLink />
        </a>
      </div>
    </div>
  );
};

export default MonthlyViewItem;