import React, { useState } from "react";
import RequestItem from "./RequestItem";
import AddRequestModal from "./AddRequestModal";

const RequestsCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const requestsData = [
    { id: 1, name: "نام و نام خانوادگی", date: "۱۴۰۵/۰۱/۲۰", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.", status: "approved", avatarUrl: "" },
    { id: 2, name: "نام و نام خانوادگی", date: "۱۴۰۵/۰۱/۲۵", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.", status: "pending", avatarUrl: "" },
    { id: 3, name: "نام و نام خانوادگی", date: "۱۴۰۵/۰۱/۲۵", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.", status: "rejected", avatarUrl: "" },
    { id: 4, name: "کاربر تستی جدید ۴", date: "۱۴۰۵/۰۱/۲۸", description: "این یک متن آزمایشی برای بررسی درست کار کردن اسکرول مانیتورینگ است.", status: "pending", avatarUrl: "" },
    { id: 5, name: "کاربر تستی جدید ۵", date: "۱۴۰۵/۰۱/۲۸", description: "این یک متن آزمایشی برای بررسی درست کار کردن اسکرول مانیتورینگ است.", status: "pending", avatarUrl: "" },
    { id: 6, name: "کاربر تستی جدید ۶", date: "۱۴۰۵/۰۱/۲۸", description: "این یک متن آزمایشی برای بررسی درست کار کردن اسکرول مانیتورینگ است.", status: "pending", avatarUrl: "" }
  ];

  return (
    <div className="bg-white p-4 md:p-6 rounded-3xl border border-slate-900/10 shadow-[0_0_25px_rgba(15,23,42,0.22)] flex flex-col h-[400px] md:h-full min-h-0 transition-all duration-300 hover:shadow-[0_0_35px_rgba(15,23,42,0.35)] ring-2 ring-blue-500/50" dir="rtl">
      
      {/* هدر کارت */}
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h3 className="text-base font-bold text-slate-800">درخواست‌ها</h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="text-gray-400 hover:text-slate-700 text-lg cursor-pointer"
          >
            ＋
          </button>
          <button className="text-gray-400 hover:text-slate-700 font-bold cursor-pointer">···</button>
        </div>
      </div>

      {/* محفظه اسکرول داخلی لیست - 🛠️ اصلاح شد: با حذف حداکثر ارتفاع، لیست داخل کارت اسکرول می‌شود نه خود کارت */}
      <div className="flex-1 overflow-y-auto min-h-0 pr-1 pb-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300">
        <div className="flex flex-col divide-y divide-gray-100">
          {requestsData.map((request) => (
            <RequestItem
              key={request.id}
              name={request.name}
              date={request.date}
              description={request.description}
              status={request.status}
              avatarUrl={request.avatarUrl}
            />
          ))}
        </div>
      </div>

      {isModalOpen && <AddRequestModal onClose={() => setIsModalOpen(false)} />}

    </div>
  );
};

export default RequestsCard;
