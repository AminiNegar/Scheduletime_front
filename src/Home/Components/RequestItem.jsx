import React from 'react';

const RequestItem = ({ name, date, description, status, avatarUrl }) => {
  
  const getStatusStyles = (status) => {
    switch (status) {
      case 'approved':
        return { text: 'تأیید شده', colorClass: 'text-emerald-500 font-bold' };
      case 'pending':
        return { text: 'در انتظار', colorClass: 'text-amber-500 font-bold' };
      case 'rejected':
        return { text: 'تأیید نشده', colorClass: 'text-rose-500 font-bold' };
      default:
        return { text: 'نامشخص', colorClass: 'text-slate-400' };
    }
  };

  const currentStatus = getStatusStyles(status);

  return (
    <div className="py-4 border-b border-gray-100 last:border-0 flex flex-col gap-2" dir="rtl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center overflow-hidden shadow-sm">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <svg className="w-6 h-6 text-indigo-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            )}
          </div>
          <span className="font-bold text-slate-800 text-sm">{name}</span>
        </div>

        <span className="text-slate-500 text-xs font-mono">{date}</span>
      </div>

      <p className="text-xs text-slate-700 leading-relaxed text-right pr-13 pl-4">
        <span className="font-semibold text-slate-800">توضیحات:</span> {description}
      </p>

      <div className="text-xs text-slate-800 text-right pr-13 mt-1">
        <span>وضعیت : </span>
        <span className={currentStatus.colorClass}>{currentStatus.text}</span>
      </div>
    </div>
  );
};

export default RequestItem