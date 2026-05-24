import React, { useState } from "react";
import SideBar from "../Layout/Components/SideBar"
import MyTasksCard from "./Components/MyTaskCard";
import CalendarCard from "./Components/CalendarCard";
import MeetingsCard from "./Components/MeetingsCard";
import RequestsCard from "./Components/RequestsCard";
import Header from "../Layout/Components/Header";

export function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full bg-[#f8fafc] overflow-hidden select-none" dir="rtl">
      {/* هدر فیکس در بالا */}
      <Header onMenuToggle={() => setIsSidebarOpen(true)} />

      {/* بخش بدنه: دقیقاً باقیمانده ارتفاع را اشغال می‌کند */}
      <div className="flex flex-1 w-full h-[calc(100vh-80px)] overflow-hidden relative">
        <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* محتوای اصلی دشبورد با کنترل کامل روی اسکرول و ارتفاع */}
        <main className="flex-1 h-full p-6 bg-[#f8fafc] overflow-hidden">
          
          {/* استفاده از کلاس‌های ذیل برای چسبیدن به کف:
            1. flex flex-col h-full: وادار کردن کانتینر گرید به پر کردن تمام ارتفاع موجود.
            2. md:grid-rows-2: مانیتور را به دو سطر با ارتفاع کاملاً مساوی تقسیم می‌کند.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 w-full h-full max-w-full">
            
            {/* سطر اول */}
            <CalendarCard />
            <MyTasksCard />
            

            {/* سطر دوم */}
            <MeetingsCard />
            <RequestsCard />
            

          </div>

        </main> 
      </div>
    </div>
  );
}