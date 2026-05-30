import React, { useState } from "react";
import MeetingItem from "./MeetingItem";
import AddMeetingModal from "./AddMeetingModal"; // 🔹 ایمپورت کامپوننت جدید فرم

const MeetingsCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const meetingsData = [
    { id: 1, title: "جلسه ی هفتگی", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.", date: "۱۴۰۵/۰۲/۰۵", time: "۰۸:۰۰ - ۰۹:۳۰", type: "مجازی", participants: [{ id: 101 }, { id: 102 }] },
    { id: 2, title: "جلسه ی شورا", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.", date: "۱۴۰۵/۰۲/۰۵", time: "۰۸:۰۰ - ۰۹:۳۰", type: "مجازی", participants: [{ id: 103 }, { id: 104 }] },
    { id: 3, title: "جلسه ی شورا", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.", date: "۱۴۰۵/۰۲/۰۵", time: "۰۸:۰۰ - ۰۹:۳۰", type: "مجازی", participants: [{ id: 103 }, { id: 104 }] }
  ];

  return (
    <>
      <div className="bg-white p-6 rounded-3xl border border-slate-900/10 shadow-[0_0_25px_rgba(15,23,42,0.22)] flex flex-col h-[400px] md:h-full min-h-0 transition-all duration-300 hover:shadow-[0_0_35px_rgba(15,23,42,0.35)] ring-2 ring-blue-500/50" dir="rtl">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6 flex-shrink-0">
          <h3 className="text-base font-bold text-slate-800">جلسات</h3>
          <div className="flex gap-2">
             <button 
               onClick={() => setIsModalOpen(true)}
               className="text-gray-400 hover:text-indigo-600 text-xl cursor-pointer transition-colors p-1"
             >
               ＋
             </button>
             <button className="text-gray-400 hover:text-slate-700 font-bold cursor-pointer p-1">···</button>
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto min-h-0 pr-1 overscroll-contain touch-pan-y [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300">
          {meetingsData.map((meeting) => (
            <MeetingItem key={meeting.id} {...meeting} />
          ))}
        </div>

      </div>

      {/* 🗓️ فراخوانی کامپوننت فرم جدا شده */}
      <AddMeetingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default MeetingsCard;