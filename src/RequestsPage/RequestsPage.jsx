// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
// import RequestRow from './Components/RequestRow';
// import AddRequestModal from './../Home/Components/AddRequestModal';

// const RequestPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   // استیت جدید برای کنترل تب‌های بالا
//   const [activeTab, setActiveTab] = useState("همه درخواست‌ها");

//   const columnStyles = {
//     "تایید شده": { border: "border-green-500", text: "text-slate-900", badge: "bg-green-100 text-green-700" },
//     "تایید نشده": { border: "border-red-500", text: "text-slate-900", badge: "bg-red-100 text-red-700" },
//     "در انتظار": { border: "border-amber-400", text: "text-slate-900", badge: "bg-amber-100 text-amber-700" },
//     "ارجاعات": { border: "border-blue-500", text: "text-slate-900", badge: "bg-blue-100 text-blue-700" }
//   };

//   const [data, setData] = useState({
//     "تایید شده": [{ id: "1", name: "علی رضایی", avatar: "https://i.pravatar.cc/40?img=1", description: "توضیحات: لورم ایپسوم متن ساختگی با تولید سادگی.", date: "۱۴۰۵/۰۱/۲۰" }],
//     "تایید نشده": [],
//     "در انتظار": [],
//     "ارجاعات": []
//   });

//   const handleAddRequest = (newRequest) => {
//     setData(prev => ({
//       ...prev,
//       "تایید شده": [...prev["تایید شده"], { ...newRequest, id: Date.now().toString() }]
//     }));
//     setIsModalOpen(false);
//   };

//   const onDragEnd = (result) => {
//     const { source, destination } = result;
//     if (!destination) return;
//     const newData = { ...data };
//     const [movedItem] = newData[source.droppableId].splice(source.index, 1);
//     newData[destination.droppableId].splice(destination.index, 0, movedItem);
//     setData(newData);
//   };

//   // لیست تب‌ها
//   const tabs = ["همه درخواست‌ها", "ارجاعات", "در انتظار", "تایید نشده", "تایید شده"];

//   return (
//     <div className="p-6 bg-slate-50 min-h-screen" dir="rtl">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-xl font-bold text-slate-800">همه درخواست‌ها</h1>
//         <button 
//           onClick={() => setIsModalOpen(true)} 
//           className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-indigo-700 transition-all"
//         >
//           + افزودن
//         </button>
//       </div>

//       {/* منوی تب‌های جدید */}
//       <div className="flex gap-8 mb-8 border-b border-slate-200">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-3 text-sm font-bold transition-all ${activeTab === tab ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-500 hover:text-slate-700"}`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <DragDropContext onDragEnd={onDragEnd}>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {Object.keys(data)
//             // فیلتر کردن ستون‌ها بر اساس تب انتخاب شده
//             .filter(col => activeTab === "همه درخواست‌ها" || col === activeTab)
//             .map((columnName) => (
//               <Droppable key={columnName} droppableId={columnName}>
//                 {(provided) => (
//                   <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col min-h-[500px]">
//                     <div className={`flex justify-between items-center mb-4 pb-2 border-b-2 ${columnStyles[columnName].border}`}>
//                       <h2 className={`font-bold text-lg ${columnStyles[columnName].text}`}>{columnName}</h2>
//                       <span className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-black shadow-md ${columnStyles[columnName].badge}`}>
//                         {data[columnName].length}
//                       </span>
//                     </div>
                    
//                     {data[columnName].map((item, index) => (
//                       <Draggable key={item.id} draggableId={item.id} index={index}>
//                         {(provided) => (
//                           <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="mb-3">
//                             <RequestRow {...item} />
//                           </div>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//             ))}
//         </div>
//       </DragDropContext>

//       {isModalOpen && (
//         <AddRequestModal 
//           onClose={() => setIsModalOpen(false)} 
//           onAdd={handleAddRequest} 
//         />
//       )}
//     </div>
//   );
// };

// export default RequestPage;

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Link } from 'react-router-dom'; // اضافه شد
import RequestRow from './Components/RequestRow';
import AddRequestModal from './../Home/Components/AddRequestModal';

const RequestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("همه درخواست‌ها");

  const columnStyles = {
    "تایید شده": { border: "border-green-500", text: "text-slate-900", badge: "bg-green-100 text-green-700" },
    "تایید نشده": { border: "border-red-500", text: "text-slate-900", badge: "bg-red-100 text-red-700" },
    "در انتظار": { border: "border-amber-400", text: "text-slate-900", badge: "bg-amber-100 text-amber-700" },
    "ارجاعات": { border: "border-blue-500", text: "text-slate-900", badge: "bg-blue-100 text-blue-700" }
  };

  const [data, setData] = useState(() => {
  const saved = localStorage.getItem('myAppData');
  if (saved) return JSON.parse(saved);
  
  // دیتای پیش‌فرض اگر در لوکال نبود
  const initialData = {
    "تایید شده": [{ id: "1", name: "علی رضایی", avatar: "https://i.pravatar.cc/40?img=1", description: "توضیحات: لورم ایپسوم متن ساختگی.", date: "۱۴۰۵/۰۱/۲۰" }],
    "تایید نشده": [],
    "در انتظار": [],
    "ارجاعات": []
  };
  
  localStorage.setItem('myAppData', JSON.stringify(initialData)); // ذخیره اولیه
  return initialData;
});
const handleAddRequest = (newRequest) => {
  const updatedData = {
    ...data,
    "تایید شده": [...data["تایید شده"], { ...newRequest, id: Date.now().toString() }]
  };
  
  setData(updatedData);
  // این خط کلید حل مشکل شماست:
  localStorage.setItem('myAppData', JSON.stringify(updatedData)); 
  
  setIsModalOpen(false);
};
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    const newData = { ...data };
    const [movedItem] = newData[source.droppableId].splice(source.index, 1);
    newData[destination.droppableId].splice(destination.index, 0, movedItem);
    setData(newData);
  };

  const tabs = ["همه درخواست‌ها", "ارجاعات", "در انتظار", "تایید نشده", "تایید شده"];

  return (
    <div className="p-6 bg-slate-50 min-h-screen" dir="rtl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-slate-800">همه درخواست‌ها</h1>
        <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-indigo-700 transition-all">+ افزودن</button>
      </div>

      <div className="flex gap-8 mb-8 border-b border-slate-200">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-3 text-sm font-bold ${activeTab === tab ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-500"}`}>{tab}</button>
        ))}
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Object.keys(data).filter(col => activeTab === "همه درخواست‌ها" || col === activeTab).map((columnName) => (
            <Droppable key={columnName} droppableId={columnName}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col min-h-[500px]">
                  <div className={`flex justify-between items-center mb-4 pb-2 border-b-2 ${columnStyles[columnName].border}`}>
                    <Link to={`/requestsList?status=${columnName}`} className={`font-bold text-lg ${columnStyles[columnName].text}`}>
                      {columnName}
                    </Link>
                    <span className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-black shadow-md ${columnStyles[columnName].badge}`}>{data[columnName].length}</span>
                  </div>
                  {data[columnName].map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="mb-3">
                          <RequestRow {...item} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {isModalOpen && <AddRequestModal onClose={() => setIsModalOpen(false)} onAdd={handleAddRequest} />}
    </div>
  );
};

export default RequestPage;