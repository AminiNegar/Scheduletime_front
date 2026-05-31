import React from 'react';
import MonthlyViewItem from './MonthlyViewItem';

const MonthlyView = ({ meetings }) => {
  const daysOfWeek = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
      {/* هدر روزهای هفته */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-sm font-bold text-slate-400 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* تقویم ماهانه */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const dayMeetings = meetings.filter((m) => m.day === day);
          
          return (
            <div key={day} className="h-32 border border-slate-100 rounded-xl p-2 bg-slate-50/30 flex flex-col gap-2 transition-all hover:bg-slate-50">
              <span className="text-xs font-bold text-slate-400">{day}</span>
              
              <div className="flex flex-col gap-1">
                {dayMeetings.map((meeting) => (
                  <MonthlyViewItem key={meeting.id} meeting={meeting} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthlyView;