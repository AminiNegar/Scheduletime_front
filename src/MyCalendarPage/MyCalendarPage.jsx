import { FaPlus, FaCalendarDay, FaUniversity, FaGlobe, FaThLarge, FaCheckCircle, FaTrash, FaEdit, FaSyncAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import React, { useState } from 'react';
import DailyView from './Components/DailyView';
import WeeklyView from './Components/WeeklyView';
import MonthlyView from './Components/MonthlyView';
import AddMeetingModal from '../Home/Components/AddMeetingModal';
import AddRequestModal from '../Home/Components/AddRequestModal';
import AddTaskComponent from '../Home/Components/AddTaskComponent';

const MyCalendar = () => {
  const [view, setView] = useState('روزانه');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // مدیریت باز بودن مودال‌ها

  const meetings = [
    { id: 1, title: 'جلسه پژوهشی', category: 'آنلاین', start: 8.0, end: 9.5, color: 'bg-emerald-50', location: 'لینک' , day: 1},
    { id: 2, title: 'کلاس', category: 'دانشگاه', start: 18.0, end: 19.5, color: 'bg-slate-100', location: 'دانشکده اقتصاد' , day:4},
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-10" dir="rtl">
      {/* رندر کردن مودال‌ها بر اساس انتخاب کاربر */}
      {activeModal === 'meeting' && (
  <AddMeetingModal 
    isOpen={true} // این را اضافه کنید
    onClose={() => setActiveModal(null)} 
  />
)}
      {activeModal === 'request' && <AddRequestModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'myTask' && <AddTaskComponent onClose={() => setActiveModal(null)} forcedAssignee="خودم" />}
      {activeModal === 'assignedTask' && <AddTaskComponent onClose={() => setActiveModal(null)} forcedAssignee="دیگران" />}

      <div className="max-w-6xl mx-auto px-6 pt-8">
        
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-indigo-200 hover:scale-105 transition-transform"
            >
              <FaPlus /> افزودن
            </button>
            
            {isMenuOpen && (
              <div className="absolute right-0 top-14 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50">
                {[
                  { title: 'جلسات', icon: <FaCalendarDay />, modal: 'meeting' },
                  { title: 'درخواست ها', icon: <FaSyncAlt />, modal: 'request' },
                  { title: 'کارهای من', icon: <FaCheckCircle />, modal: 'myTask' },
                  { title: 'کارهای محوله', icon: <FaEdit />, modal: 'assignedTask' }
                ].map((item, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => { setActiveModal(item.modal); setIsMenuOpen(false); }}
                    className="flex w-full items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-xl text-slate-700 text-sm font-medium transition-colors"
                  >
                    <span className="text-indigo-500">{item.icon}</span>
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex bg-white border border-slate-100 rounded-full p-1 shadow-sm">
            {['ماهانه', 'هفتگی', 'روزانه'].map((item) => (
              <button 
                key={item} 
                onClick={() => setView(item)} 
                className={`px-6 py-2 rounded-full text-sm transition-all ${view === item ? 'bg-indigo-100 text-indigo-700 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="text-slate-400 font-medium text-sm bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">۱۴۰۵/۰۲/۰۵</div>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-10 ">
          {[ 
            {title: 'آنلاین', color: 'bg-blue-100', icon: <FaGlobe className="text-blue-500" />}, 
            {title: 'دانشگاه', color: 'bg-green-100', icon: <FaUniversity className="text-green-500" />}, 
            {title: 'خارجی', color: 'bg-amber-100', icon: <FaCalendarDay className="text-amber-500" />}, 
            {title: 'سایر', color: 'bg-slate-200', icon: <FaThLarge className="text-slate-600" />}, 
            {title: 'کارهای من', color: 'bg-rose-100', icon: <FaCheckCircle className="text-rose-500" />} 
          ].map((item, idx) => {
            const count = meetings.filter(m => m.category === item.title).length;
            
            return (
              
              
              <div key={idx} className={`${item.color} h-28 p-5 rounded-3xl border border-white shadow-sm flex flex-col justify-between hover:rotate-2 transition-all cursor-pointer hover:shadow-[0_0_35px_rgba(15,23,42,0.35)] ring-2 ring-blue-500/50`}>
                <div className="flex justify-between items-start">
                  <div className="text-xl">{item.icon}</div>
                  {count > 0 && <span className="bg-white/60 px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-700">{count}</span>}
                </div>
                <span className="font-bold text-[12px] text-slate-800">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full px-4">
        {view === 'روزانه' && <DailyView meetings={meetings} />}
        {view === 'هفتگی' && <WeeklyView meetings={meetings} />}
        {view === 'ماهانه' && <MonthlyView meetings={meetings} />}
      </div>
    </div>
  );
};

export default MyCalendar;