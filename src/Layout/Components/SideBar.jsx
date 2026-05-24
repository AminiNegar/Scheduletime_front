import React, { useState } from 'react';
import { FaCalendarAlt, FaUsers, FaFileAlt, FaRegFileAlt, FaPlus, FaEdit, FaSignOutAlt, FaPencilAlt, FaTimes } from "react-icons/fa";

const SideBar = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* لایه تاریک پشت سایدبار در حالت موبایل (Overlay) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      <aside className={`
        bg-gray-100 text-slate-800 h-full w-64 flex-shrink-0 rtl border-l border-gray-200 flex flex-col justify-between z-50
        /* استایل‌های ریسپانسیو */
        fixed top-0 bottom-0 right-0 transition-transform duration-300 md:static md:translate-x-0
        ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
        
        <div className="p-5">
          {/* دکمه بستن سایدبار - فقط در موبایل دیده می‌شود */}
          <div className="flex justify-end md:hidden mb-2">
            <button onClick={onClose} className="text-slate-500 hover:text-slate-800 p-1 text-lg">
              <FaTimes />
            </button>
          </div>

          {/* بخش پروفایل */}
          <div className="flex flex-col items-center border-b border-gray-200 pb-5 mb-4">
            <div className="relative mb-3">
              <img src="https://via.placeholder.com/100" alt="پروفایل" className="w-20 h-20 rounded-full border-2 border-indigo-600 p-0.5 object-cover" />
              <button onClick={() => setIsModalOpen(true)} className="absolute bottom-0 left-0 bg-indigo-600 hover:bg-indigo-700 text-white w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm text-[10px]"><FaPencilAlt /></button>
            </div>
            <h2 className="text-base font-bold text-slate-900">نام کاربر</h2>
            <span className="text-xs font-medium text-slate-400 mt-1">پنل مدیریت اساتید</span>
          </div>

          <div className="px-4 py-2 text-xs font-bold text-slate-500 text-right">برنامه شخصی</div>

          {/* آیتم‌های منو */}
          <ul className="space-y-1">
            <li className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer">
              <div className="flex items-center gap-3"><span>تقویم</span><FaCalendarAlt className="text-base text-slate-500" /></div>
            </li>
            <li className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer">
              <div className="flex items-center gap-3"><span>جلسات</span><FaUsers className="text-base text-slate-500" /></div>
              <FaPlus className="text-xs text-slate-400" />
            </li>
            <li className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer">
              <div className="flex items-center gap-3"><span>درخواست ها</span><FaFileAlt className="text-base text-slate-500" /></div>
              <FaPlus className="text-xs text-slate-400" />
            </li>
            <li className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer">
              <div className="flex items-center gap-3"><span>وظایف</span><FaRegFileAlt className="text-base text-slate-500" /></div>
              <FaPlus className="text-xs text-slate-400" />
            </li>
          </ul>
        </div>

        {/* دکمه‌های انتهای سایدبار */}
        <div className="p-5 space-y-2">
          <button className="p-2.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-xl w-full flex items-center justify-center gap-2 hover:bg-indigo-100 transition-colors" onClick={() => setIsModalOpen(true)}><FaEdit /><span>ویرایش پروفایل</span></button>
          <button className="p-2.5 bg-rose-50 text-rose-600 text-xs font-bold rounded-xl w-full flex items-center justify-center gap-2 hover:bg-rose-100 transition-colors"><FaSignOutAlt /><span>خروج از حساب</span></button>
        </div>
      </aside>
    </>
  );
};

export default SideBar;