// import React, { useState } from 'react';
// import AddRequestModal from './../Home/Components/AddRequestModal';
// import RequestElement from './RequestElement';

// const RequestList = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("همه درخواست‌ها");

//   const requests = [
//     { id: 1, title: "عنوان کار ۱", description: "توضیحات مربوط به کار اول...", date: "۱۴۰۵/۰۱/۲۰", time: "۸:۰۰ - ۹:۳۰" },
//     { id: 2, title: "عنوان کار ۲", description: "توضیحات مربوط به کار دوم...", date: "۱۴۰۵/۰۱/۲۰", time: "۱۰:۰۰ - ۱۱:۳۰" },
//   ];

//   return (
//     <div className="p-6 bg-slate-50 min-h-screen" dir="rtl">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-xl font-bold text-slate-800">لیست درخواست‌ها</h1>
//         <button 
//           onClick={() => setIsModalOpen(true)}
//           className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-indigo-700 transition-all"
//         >
//           + افزودن
//         </button>
//       </div>

//       <div className="flex items-center gap-6 mb-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
//         <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
//           <span>فیلتر نمایش:</span>
//         </div>
//         <div className="flex items-center gap-4">
//           {["جلسات", "درخواست‌ها", "وظایف"].map((filter) => (
//             <label key={filter} className="flex items-center gap-2 cursor-pointer">
//               <input type="radio" name="filter" className="w-4 h-4 text-indigo-600" />
//               <span className="text-sm font-medium text-slate-700">{filter}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col">
//         {requests.map((req) => (
//           <RequestElement key={req.id} {...req} />
//         ))}
//       </div>

//       {isModalOpen && (
//         <AddRequestModal 
//           onClose={() => setIsModalOpen(false)} 
//           onAdd={(data) => {
//              console.log("درخواست جدید:", data);
//              setIsModalOpen(false);
//           }} 
//         />
//       )}
//     </div>
//   );
// };

// export default RequestList;
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AddRequestModal from '../../Home/Components/AddRequestModal';
import RequestElement from './RequestElement';
import RequestDetailsModal from './RequestDetailModal';
import RequestDetailModal from './RequestDetailModal';
const RequestList = () => {
  const [searchParams] = useSearchParams();
  const statusFilter = searchParams.get("status");
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRequest, setEditingRequest] = useState(null);
  const [requests, setRequests] = useState([]);
  const [viewingRequest, setViewingRequest] = useState(null); // استیت برای مودال گزارش

  useEffect(() => {
    const savedData = localStorage.getItem('myAppData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        let allItems = [];
        Object.keys(parsedData).forEach(statusKey => {
          const items = parsedData[statusKey];
          if (Array.isArray(items)) {
            items.forEach(item => {
              allItems.push({ ...item, status: statusKey });
            });
          }
        });
        setRequests(allItems);
      } catch (e) {
        console.error("خطا در خواندن داده‌ها:", e);
      }
    }
  }, []);

  const filteredRequests = statusFilter 
    ? requests.filter(r => r.status.trim() === statusFilter.trim()) 
    : requests;

  const handleEdit = (req) => {
    setEditingRequest(req);
    setIsModalOpen(true);
  };
  const handleUpdateStatus = (requestId, newStepDetail) => {
  const updatedRequests = requests.map(req => {
    if (req.id === requestId) {
      return {
        ...req,
        history: [
          ...req.history, // نگهداری سوابق قبلی
          { 
            step: "به‌روزرسانی", 
            date: new Date().toLocaleDateString('fa-IR'), 
            user: "ادمین", 
            detail: newStepDetail 
          }
        ]
      };
    }
    return req;
  });
  setRequests(updatedRequests);
  // اینجا باید updatedRequests را دوباره در localStorage ذخیره کنید
};

  return (
    <div className="p-6 bg-slate-50 min-h-screen" dir="rtl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-slate-800">
          لیست درخواست‌ها {statusFilter && <span className="text-indigo-600">({statusFilter})</span>}
        </h1>
        <button 
          onClick={() => { setEditingRequest(null); setIsModalOpen(true); }}
          className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-indigo-700 transition-all"
        >
          + افزودن
        </button>
      </div>

      <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
        <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
          <tr>
            <th className="p-4">ساعت</th>
            <th className="p-4">تاریخ</th>
            <th className="p-4">عنوان</th>
            <th className="p-4">توضیحات</th>
            <th className="p-4">وضعیت</th>
            <th className="p-4">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((req) => (
  <RequestElement 
  key={req.id} 
  {...req} 
  onEdit={() => handleEdit(req)} 
  onView={() => {
     console.log("آیکون برگه کلیک شد! دیتای ریکوئست این است:", req);
     setViewingRequest(req); // این خط باید مودال را باز کند
  }} 
/>
))}
        </tbody>
      </table>

      {/* مودال ویرایش */}
      {isModalOpen && (
        <AddRequestModal 
          requestData={editingRequest}
          onClose={() => { setIsModalOpen(false); setEditingRequest(null); }} 
          onAdd={(data) => { console.log("ثبت شد:", data); setIsModalOpen(false); }} 
        />
      )}

      {/* مودال گزارش */}
      {viewingRequest && (
  <RequestDetailModal
    requestData={viewingRequest} 
    onClose={() => setViewingRequest(null)} 
  />
)}
    </div>
  );
};

export default RequestList;