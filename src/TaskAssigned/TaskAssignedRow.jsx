import React, { useState } from 'react';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import ProfileModal from './../Layout/Components/ProfileModal' ;

const TaskAssignedRow = ({ title, description, date, time, assignee }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
        
        {/* بخش اطلاعات تسک (سمت راست/وسط) */}
        <div className="flex-1">
          <h3 className="font-bold text-slate-800 text-sm mb-2">{title}</h3>
          <p className="text-xs text-slate-500 mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center gap-4 text-[10px] text-slate-400 font-medium">
            <div className="flex items-center gap-1"><FaCalendarAlt /> {date}</div>
            <div className="flex items-center gap-1"><FaClock /> {time}</div>
          </div>
        </div>

        {/* بخش مسئول (سمت چپ/بزرگتر) - قابل کلیک */}
        <div 
          onClick={() => setIsProfileOpen(true)}
          className="flex flex-col items-center gap-2 p-3 bg-slate-50 rounded-2xl cursor-pointer hover:bg-indigo-50 transition-colors w-24 shrink-0"
        >
          <img 
            src={assignee?.avatar} 
            alt={assignee?.name} 
            className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" 
          />
          <span className="text-[10px] font-bold text-slate-700 text-center leading-tight">
            {assignee?.name}
          </span>
        </div>
      </div>

      {/* مودال پروفایل بدون اجازه ویرایش */}
      <ProfileModal 
        user={assignee} 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
        canEdit={false} // غیرفعال کردن ویرایش
      />
    </>
  );
};

export default TaskAssignedRow;