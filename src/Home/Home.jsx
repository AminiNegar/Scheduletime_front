import CalendarCard from "./Components/CalendarCard";
import MyTasksCard from './Components/MyTaskCard';
import MeetingsCard from './Components/MeetingsCard';
import RequestsCard from './Components/RequestsCard';

export function Home() {
  return (
    /* 🛠️ اصلاح کلیدی:
      h-auto در موبایل اجازه می‌دهد صفحه متناسب با کارت‌ها طول بگیرد.
      overflow-y-auto به خود کامپوننت اصلی اجازه اسکرول می‌دهد.
    */
    <main className="flex-1 p-4 pb-24 md:p-6 bg-[#f8fafc] h-auto md:h-full overflow-y-auto md:overflow-hidden flex flex-col min-h-0">
      
      {/* 🛠️ در موبایل grid-rows نداریم تا کارت‌ها قدِ طبیعی خود را داشته باشند.
        در دسکتاپ (md) تبدیل به دو ردیف مساوی می‌شود.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_1fr] gap-6 w-full h-auto md:h-full max-w-full flex-1 min-h-0">
        <CalendarCard />
        <MyTasksCard />
        <MeetingsCard />
        <RequestsCard />
      </div>

    </main>
  );
}