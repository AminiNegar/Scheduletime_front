import React from 'react';

// ۱. کامپوننت سطر کارها (TaskItem) کاملاً هماهنگ با تصویر شما
const TaskItem = ({ title, description, date, status }) => {
  // تابع تعیین رنگ دایره وضعیت
  const getStatusColor = (status) => {
    switch (status) {
      case 'do': return 'bg-emerald-500'; 
      case 'doing': return 'bg-amber-500';   
      case 'done': return 'bg-rose-500';    
      default: return 'bg-slate-300';
    }
  };

  return (
    <div className="py-4 border-b border-gray-100 last:border-0 flex items-center justify-between text-xs text-slate-600 gap-4" dir="rtl">
      
      <div className="flex items-center gap-2 min-w-[120px]">
        <span className={`w-3.5 h-3.5 rounded-full flex-shrink-0 ${getStatusColor(status)}`}></span>
        <span className="font-bold text-slate-800 text-sm whitespace-nowrap">{title}</span>
      </div>

      <div className="flex-1 text-center text-slate-400 truncate px-4">
        <span>توضیحات: </span>
        <span>{description}</span>
      </div>

      <div className="text-left font-mono text-slate-500 min-w-[80px] flex-shrink-0">
        {date}
      </div>

    </div>
  );
};
export default TaskItem