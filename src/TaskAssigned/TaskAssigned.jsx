// import React, { useState, useEffect } from 'react';
// import TaskAssignedElement from './TaskAssignedElement';

// const TaskAssigned = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     // فرض بر این است که داده‌ها از localStorage با کلید myTasksData می‌آیند
//     const savedData = localStorage.getItem('myTasksData');
//     if (savedData) {
//       const parsedData = JSON.parse(savedData);
//       let allTasks = [];
//       Object.keys(parsedData).forEach(statusKey => {
//         parsedData[statusKey].forEach(task => {
//           allTasks.push({ ...task, status: statusKey });
//         });
//       });
//       setTasks(allTasks);
//     }
//   }, []);
//   useEffect(() => {
//   // این یک داده نمونه برای تست ظاهر کامپوننت است
//   const sampleTasks = [
//     {
//       id: 1,
//       title: "طراحی رابط کاربری پنل",
//       description: "طراحی کامل صفحات داشبورد با استفاده از Tailwind",
//       status: "در حال انجام",
//       assignedUser: {
//         id: 101,
//         name: "دکتر احمدی",
//         role: "استاد راهنما",
//         avatar: "https://i.pravatar.cc/150?u=101"
//       }
//     },
//     {
//       id: 2,
//       title: "توسعه بخش گزارش‌گیری",
//       description: "پیاده‌سازی نمودارهای آماری در بخش درخواست‌ها",
//       status: "انجام شده",
//       assignedUser: {
//         id: 104,
//         name: "علی کریمی",
//         role: "پژوهشگر",
//         avatar: "https://i.pravatar.cc/150?u=104"
//       }
//     }
//   ];
//   setTasks(sampleTasks);
// }, []);

//   return (
//     <div className="p-6 bg-slate-50 min-h-screen" dir="rtl">
//       <h1 className="text-xl font-bold text-slate-800 mb-8">لیست کارهای محوله</h1>

//       <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
//         <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
//           <tr>
//             <th className="p-4 text-right">عنوان کار</th>
//             <th className="p-4 text-right">توضیحات</th>
//             <th className="p-4 text-right">وضعیت</th>
//             <th className="p-4 text-right">مسئول</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.length > 0 ? (
//             tasks.map((task) => (
//               <TaskAssignedElement key={task.id} {...task} />
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="p-8 text-center text-slate-400 text-sm">کاری برای نمایش وجود ندارد</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TaskAssigned;
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import AddRequestModal from './../Home/Components/AddRequestModal';
import TaskAssignedRow from './TaskAssignedRow';
import TaskAssignedElement from './TaskAssignedElement';
import AddTaskComponent from '../Home/Components/AddTaskComponent';

const TaskAssigned = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null); // null = نمایش ستونی، string = نمایش لیستی

  const columnStyles = {
    "در انتظار انجام": { border: "border-slate-400", text: "text-slate-800", badge: "bg-slate-200 text-slate-700" },
    "در حال انجام": { border: "border-indigo-500", text: "text-indigo-800", badge: "bg-indigo-100 text-indigo-700" },
    "در انتظار تأیید ناظر": { border: "border-amber-500", text: "text-amber-800", badge: "bg-amber-100 text-amber-700" },
    "تکمیل شده": { border: "border-green-500", text: "text-green-800", badge: "bg-green-100 text-green-700" }
  };

  const [data, setData] = useState({
    "در انتظار انجام": [
        { id: "a1", title: "تحقیق بازار", description: "تهیه گزارش رقبا", date: "۱۴۰۵/۰۳/۰۵", time: "۱۲:۰۰", assignee: { name: "سارا موسوی", avatar: "https://i.pravatar.cc/150?u=103" } }
    ],
    "در حال انجام": [
        { id: "a2", title: "توسعه API", description: "اتصال به سرویس پرداخت", date: "۱۴۰۵/۰۳/۰۶", time: "۱۶:۰۰", assignee: { name: "دکتر احمدی", avatar: "https://i.pravatar.cc/150?u=101" } }
    ],
    "در انتظار تأیید ناظر": [],
    "تکمیل شده": []
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    const newData = { ...data };
    const [movedItem] = newData[source.droppableId].splice(source.index, 1);
    newData[destination.droppableId].splice(destination.index, 0, movedItem);
    setData(newData);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen" dir="rtl">
      {/* هدر اصلی */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-bold text-slate-800">کارهای محوله</h1>
          {selectedStatus && (
            <button onClick={() => setSelectedStatus(null)} className="text-xs text-indigo-600 font-bold mt-2 hover:underline">← بازگشت به نمای ستونی</button>
          )}
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-rose-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-rose-700 transition-all">+ محول کردن کار</button>
      </div>

      {/* نمایش نمای لیستی (TaskAssignedElement) */}
      {selectedStatus ? (
        <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
            <tr>
              <th className="p-4 text-right">عنوان کار</th>
              <th className="p-4 text-right">توضیحات</th>
              <th className="p-4 text-right">وضعیت</th>
              <th className="p-4 text-right">مسئول</th>
            </tr>
          </thead>
          <tbody>
            {data[selectedStatus].length > 0 ? (
              data[selectedStatus].map((task) => <TaskAssignedElement key={task.id} {...task} status={selectedStatus} />)
            ) : (
              <tr><td colSpan="4" className="p-8 text-center text-slate-400 text-sm">کاری برای نمایش وجود ندارد</td></tr>
            )}
          </tbody>
        </table>
      ) : (
        /* نمایش نمای ستونی (Drag & Drop) */
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Object.keys(data).map((columnName) => (
              <Droppable key={columnName} droppableId={columnName}>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col min-h-[500px]">
                    <div 
                      onClick={() => setSelectedStatus(columnName)}
                      className={`flex justify-between items-center mb-4 pb-2 border-b-2 cursor-pointer hover:opacity-80 transition-opacity ${columnStyles[columnName].border}`}
                    >
                      <h2 className={`font-bold text-sm ${columnStyles[columnName].text}`}>{columnName}</h2>
                      <span className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-black shadow-sm ${columnStyles[columnName].badge}`}>
                        {data[columnName].length}
                      </span>
                    </div>
                    {data[columnName].map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="mb-3">
                            <TaskAssignedRow {...item} />
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
      )}

      {isModalOpen && <AddTaskComponent onClose={() => setIsModalOpen(false)} forcedAssignee="دیگران" />}
    </div>
  );
};

export default TaskAssigned;