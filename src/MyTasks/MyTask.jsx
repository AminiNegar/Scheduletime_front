import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import AddRequestModal from './../Home/Components/AddRequestModal';
import MytaskRow from './MytasRow';

const MyTasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("همه کارها");

  const columnStyles = {
    "انجام نشده": { border: "border-slate-400", text: "text-slate-800", badge: "bg-slate-200 text-slate-700" },
    "در حال انجام": { border: "border-indigo-500", text: "text-indigo-800", badge: "bg-indigo-100 text-indigo-700" },
    "انجام شده": { border: "border-green-500", text: "text-green-800", badge: "bg-green-100 text-green-700" }
  };

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('myTasksData');
    if (saved) return JSON.parse(saved);

    // داده‌های نمونه برای تست
    const sampleData = {
      "انجام نشده": [
        { id: "1", title: "بررسی مستندات پروژه", description: "مطالعه فایل‌های اولیه و نیازمندی‌ها", date: "۱۴۰۵/۰۳/۰۱", time: "۱۰:۰۰ - ۱۱:۳۰" },
        { id: "2", title: "تماس با تیم فنی", description: "هماهنگی برای جلسه دوشنبه", date: "۱۴۰۵/۰۳/۰۲", time: "۱۴:۰۰ - ۱۵:۰۰" }
      ],
      "در حال انجام": [
        { id: "3", title: "طراحی رابط کاربری", description: "پیاده‌سازی بخش سایدبار در پنل مدیریت", date: "۱۴۰۵/۰۳/۰۱", time: "۰۹:۰۰ - ۱۲:۰۰" }
      ],
      "انجام شده": [
        { id: "4", title: "آماده‌سازی گزارش ماهانه", description: "جمع‌بندی عملکرد تیم در ماه گذشته", date: "۱۴۰۵/۰۲/۳۰", time: "۰۸:۰۰ - ۱۰:۰۰" }
      ]
    };
    localStorage.setItem('myTasksData', JSON.stringify(sampleData));
    return sampleData;
  });

  const handleAddTask = (newTask) => {
    const updatedData = {
      ...data,
      "انجام نشده": [...data["انجام نشده"], { ...newTask, id: Date.now().toString() }]
    };
    setData(updatedData);
    localStorage.setItem('myTasksData', JSON.stringify(updatedData));
    setIsModalOpen(false);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    const newData = { ...data };
    const [movedItem] = newData[source.droppableId].splice(source.index, 1);
    newData[destination.droppableId].splice(destination.index, 0, movedItem);
    setData(newData);
    localStorage.setItem('myTasksData', JSON.stringify(newData));
  };

  const tabs = ["همه کارها", "انجام نشده", "در حال انجام", "انجام شده"];

  return (
    <div className="p-6 bg-slate-50 min-h-screen" dir="rtl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-slate-800">مدیریت کارها</h1>
        <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-indigo-700 transition-all">+ افزودن کار</button>
      </div>

      <div className="flex gap-8 mb-8 border-b border-slate-200">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-3 text-sm font-bold ${activeTab === tab ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-500 hover:text-slate-700"}`}>{tab}</button>
        ))}
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.keys(data).filter(col => activeTab === "همه کارها" || col === activeTab).map((columnName) => (
            <Droppable key={columnName} droppableId={columnName}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col min-h-[500px]">
                  <div className={`flex justify-between items-center mb-4 pb-2 border-b-2 ${columnStyles[columnName].border}`}>
                    <h2 className={`font-bold text-lg ${columnStyles[columnName].text}`}>{columnName}</h2>
                    <span className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-black shadow-sm ${columnStyles[columnName].badge}`}>{data[columnName].length}</span>
                  </div>
                  {data[columnName].map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="mb-3">
                          <MytaskRow {...item} />
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

      {isModalOpen && <AddRequestModal onClose={() => setIsModalOpen(false)} onAdd={handleAddTask} />}
    </div>
  );
};

export default MyTasks;