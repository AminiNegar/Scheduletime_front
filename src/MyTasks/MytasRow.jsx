import React from 'react';
import { FaEllipsisH, FaClock } from "react-icons/fa";

const MytaskRow = ({ title, description, date, time }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow w-full" dir="rtl">
      {/* ردیف اول: عنوان و آیکون منو */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-bold text-slate-800">{title || "عنوان کار"}</h3>
        <button className="text-slate-400 hover:text-slate-600">
          <FaEllipsisH />
        </button>
      </div>

      {/* ردیف دوم: توضیحات */}
      <p className="text-xs text-slate-600 leading-5 mb-4 text-justify">
        {description || "توضیحات مربوط به کار در اینجا قرار می‌گیرد..."}
      </p>

      {/* ردیف سوم: تاریخ و زمان */}
      <div className="flex justify-between items-center text-slate-400">
        <div className="flex items-center gap-1">
          <FaClock size={12} />
          <span className="text-[10px] font-medium">{time || "۸:۰۰ - ۹:۳۰"}</span>
        </div>
        <span className="text-[10px] font-bold">{date || "۱۴۰۵/۰۱/۲۰"}</span>
      </div>
    </div>
  );
};

export default MytaskRow;