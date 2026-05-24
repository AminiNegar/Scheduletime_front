
import React, { useState } from "react";
import "react-day-picker/dist/style.css";
import { DayPicker, faIR } from "@daypicker/persian";


const CalendarCard = () => {
  const [selected, setSelected] = useState(new Date());

  const formatCaption = (date) => {
    return new Intl.DateTimeFormat("fa-IR", { month: "long", year: "numeric" }).format(date);
  };

  return (
    <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-900/10 shadow-[0_0_25px_rgba(15,23,42,0.22)] flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_35px_rgba(15,23,42,0.35)] overflow-hidden select-none">
      
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h3 className="text-sm sm:text-base font-bold text-slate-800">تقویم</h3>
        <span className="text-xs text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full font-medium">امروز</span>
      </div>

      <div className="flex-1 flex items-start justify-center bg-slate-50 rounded-2xl p-2 sm:p-4 pt-8 sm:pt-10 min-h-0 overflow-hidden" dir="rtl">
  
  <div className="w-full max-w-[320px] mx-auto">
    <DayPicker 
      mode="single"
      selected={selected}
      onSelect={setSelected}
      locale={faIR} 
      showOutsideDays={true}
      fixedWeeks={true}
      formatters={{
        formatCaption: formatCaption
      }}
    />
  </div>
  
</div>

    </div>
  );
};

export default CalendarCard;

