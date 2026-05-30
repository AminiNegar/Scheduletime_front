// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaCalendarAlt, FaUsers, FaFileAlt, FaRegFileAlt, FaPlus, FaEdit, FaSignOutAlt, FaPencilAlt, FaTimes, FaHome } from "react-icons/fa";

// // ایمپورت کامپوننت‌های مودال
// import AddMeetingModal from "../../Home/Components/AddMeetingModal";
// import AddRequestModal from "../../Home/Components/AddRequestModal";
// import AddTaskComponent from "../../Home/Components/AddTaskComponent";

// const SideBar = ({ isOpen, onClose }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [openMenus, setOpenMenus] = useState({});
//   const [activeModal, setActiveModal] = useState(null); // مدیریت مودال فعال

//   const toggleMenu = (key) => {
//     setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <>
//       {isOpen && <div className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity" onClick={onClose} />}

//       <aside className={`bg-gray-100 text-slate-800 h-full w-64 flex-shrink-0 rtl border-l border-gray-200 flex flex-col justify-between z-50 fixed top-0 bottom-0 right-0 transition-transform duration-300 md:static md:translate-x-0 ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
        
//         <div className="p-5">
//           <div className="flex justify-end md:hidden mb-2">
//             <button onClick={onClose} className="text-slate-500 hover:text-slate-800 p-1 text-lg"><FaTimes /></button>
//           </div>

//           <div className="flex flex-col items-center border-b border-gray-200 pb-5 mb-4">
//             <div className="relative mb-3">
//               <img src="https://i.pravatar.cc/40?img=68" alt="پروفایل" className="w-28 h-28 rounded-full border-2 border-indigo-600 p-0.5 object-cover" />
//               <button onClick={() => setIsModalOpen(true)} className="absolute bottom-0 left-0 bg-indigo-600 hover:bg-indigo-700 text-white w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm text-[10px]"><FaPencilAlt /></button>
//             </div>
//             <h2 className="text-base font-bold text-slate-900">نام کاربر</h2>
//             <span className="text-xs font-medium text-slate-400 mt-1">پنل مدیریت اساتید</span>
//           </div>

//           <div className="px-4 py-2 text-xs font-bold text-slate-500 text-right">برنامه شخصی</div>
// <ul className="space-y-1">
//   <Link to="/" className="block">
//     <li className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer">
//       <div className="flex items-center gap-3"><FaHome className="text-base text-slate-500" /><span>صفحه اصلی</span></div>
//     </li>
//   </Link>

//   <Link to="/calendar" className="block">
//     <li className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer">
//       <div className="flex items-center gap-3"><FaCalendarAlt className="text-base text-slate-500" /><span>تقویم</span></div>
//     </li>
//   </Link>

//   {/* جلسات - فقط با کلیک روی نام منو باز می‌شود، با کلیک روی + مودال باز می‌شود */}
//  <Link to="/meetings" className="block">
//  <li className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-default">
//   <div className="flex items-center gap-3">
//     <FaUsers className="text-base text-slate-500" />
//     <span>جلسات</span>
//   </div>
//   <FaPlus className="text-xs text-slate-400 hover:text-indigo-600 cursor-pointer" onClick={() => setActiveModal('meeting')} />
// </li>
// </Link>

//   {/* درخواست‌ها */}
//   <Link to="/requests" className="block">
//     <li className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer">
//       <div className="flex items-center gap-3">
//         <FaFileAlt className="text-base text-slate-500" />
//         <span>درخواست‌ها</span>
//       </div>
//       <FaPlus className="text-xs text-slate-400 hover:text-indigo-600 cursor-pointer" onClick={(e) => { e.preventDefault(); setActiveModal('request'); }} />
//     </li>
//   </Link>

//   {/* وظایف */}
//   <li className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-default">
//   <div className="flex items-center gap-3">
//     <FaRegFileAlt className="text-base text-slate-500" />
//     <span>وظایف</span>
//   </div>
//   <FaPlus className="text-xs text-slate-400 hover:text-indigo-600 cursor-pointer" onClick={() => setActiveModal('task')} />
// </li>
// </ul>
//         </div>

//         <div className="p-5 space-y-2">
//           <button className="p-2.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-xl w-full flex items-center justify-center gap-2 hover:bg-indigo-100 transition-colors" onClick={() => setIsModalOpen(true)}><FaEdit /><span>ویرایش پروفایل</span></button>
//           <button className="p-2.5 bg-rose-50 text-rose-600 text-xs font-bold rounded-xl w-full flex items-center justify-center gap-2 hover:bg-rose-100 transition-colors"><FaSignOutAlt /><span>خروج از حساب</span></button>
//         </div>
//       </aside>

//       {/* نمایش مودال‌ها */}
//       {activeModal === 'meeting' && <AddMeetingModal isOpen={true} onClose={() => setActiveModal(null)} />}
//       {activeModal === 'request' && <AddRequestModal onClose={() => setActiveModal(null)} />}
//       {activeModal === 'task' && <AddTaskComponent onClose={() => setActiveModal(null)} />}
//     </>
//   );
// };

// export default SideBar;
import React, { useState } from 'react';
import { Link, Links } from 'react-router-dom';
import { FaCalendarAlt, FaUsers, FaFileAlt, FaRegFileAlt, FaPlus, FaEdit, FaSignOutAlt, FaPencilAlt, FaTimes, FaHome } from "react-icons/fa";

import AddMeetingModal from "../../Home/Components/AddMeetingModal";
import AddRequestModal from "../../Home/Components/AddRequestModal";
import AddTaskComponent from "../../Home/Components/AddTaskComponent";

const SideBar = ({ isOpen, onClose }) => {
  const [activeModal, setActiveModal] = useState(null);
  const [taskModalConfig, setTaskModalConfig] = useState({ isOpen: false, forcedAssignee: null });
  // تابع کمکی برای مدیریت باز کردن مودال بدون انتشار کلیک به زیر
  const handleOpenModal = (e, modalType) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveModal(modalType);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9998] md:hidden" 
          onClick={onClose} 
        />
      )}

      {/* SideBar */}
      <aside className={`
        fixed top-0 right-0 h-full w-64 bg-gray-100 border-l border-gray-200 
        z-[9999] transition-transform duration-300 shadow-2xl
        md:static md:translate-x-0
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* محتوا */}
          <div className="flex-1 overflow-y-auto p-5">
            <div className="flex justify-end md:hidden mb-4">
              <button onClick={onClose} className="p-2 text-slate-500"><FaTimes size={20} /></button>
            </div>

            <div className="flex flex-col items-center border-b border-gray-200 pb-5 mb-4">
              <img src="https://i.pravatar.cc/40?img=68" alt="پروفایل" className="w-24 h-24 rounded-full border-2 border-indigo-600 p-0.5 mb-2" />
              <h2 className="font-bold text-slate-800">نام کاربر</h2>
            </div>

           <ul className="space-y-1"> {/* فاصله بین آیتم‌ها را از 2 به 1 کاهش دادیم */}
  {/* لینک‌های ساده */}
  <li>
    <Link to="/" onClick={onClose} className="flex items-center gap-3 p-3 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors">
      <FaHome /> صفحه اصلی
    </Link>
  </li>
  <li>
    <Link to="/calendar" onClick={onClose} className="flex items-center gap-3 p-3 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors">
      <FaCalendarAlt /> تقویم
    </Link>
  </li>
            
  {/* لیست منوها با دکمه پلاس */}
  <li className="flex justify-between items-center px-3 py-1 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer transition-colors">
    <Link to="/meetings" onClick={onClose} className="flex-1 flex items-center gap-3 py-2 text-slate-700">
      <FaUsers /> جلسات
    </Link>
    <button onClick={(e) => handleOpenModal(e, 'meeting')} className="p-1 hover:text-indigo-600">
      <FaPlus />
    </button>
  </li>

  <li className="flex justify-between items-center px-3 py-1 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer transition-colors">
    <Link to="/requests" onClick={onClose} className="flex-1 flex items-center gap-3 py-2 text-slate-700">
      <FaFileAlt /> درخواست‌ها
    </Link>
    <button onClick={(e) => handleOpenModal(e, 'request')} className="p-1 hover:text-indigo-600">
      <FaPlus />
    </button>
  </li>

  <li className="flex justify-between items-center px-3 py-1 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer transition-colors">
    <Link to="/mytasks" onClick={onClose} className="flex-1 flex items-center gap-3 py-2 text-slate-700">
      <FaRegFileAlt /> کارهای من
    </Link>
    <button onClick={() => setTaskModalConfig({ isOpen: true, forcedAssignee: 'خودم' })} className="p-1 hover:text-indigo-600">
      <FaPlus />
    </button>
  </li>

  <li className="flex justify-between items-center px-3 py-1 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer transition-colors">
    <Link to="/taskassigned" onClick={onClose} className="flex-1 flex items-center gap-3 py-2 text-slate-700">
      <FaRegFileAlt /> کارهای محوله
    </Link>
    <button onClick={() => setTaskModalConfig({ isOpen: true, forcedAssignee: 'دیگران' })} className="p-1 hover:text-indigo-600">
      <FaPlus />
    </button>
  </li>
</ul>
          </div>

          <div className="p-4 border-t border-gray-200 bg-white">
            <button className="w-full p-2 mb-2 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-100 transition-colors">
              <FaEdit /> ویرایش پروفایل
            </button>
            <button className="w-full p-2 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center gap-2 hover:bg-rose-100 transition-colors">
              <FaSignOutAlt /> خروج
            </button>
          </div>
        </div>
      </aside>

      {/* مودال‌ها - در بالاترین سطح قرار دارند */}
      {activeModal === 'meeting' && <AddMeetingModal isOpen={true} onClose={() => setActiveModal(null)} />}
      {activeModal === 'request' && <AddRequestModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'task' && <AddTaskComponent onClose={() => setActiveModal(null)} />}
      {taskModalConfig.isOpen && (
  <AddTaskComponent 
    onClose={() => setTaskModalConfig({ isOpen: false, forcedAssignee: null })} 
    forcedAssignee={taskModalConfig.forcedAssignee} 
  />
)}
    </>
    
);
};

export default SideBar;