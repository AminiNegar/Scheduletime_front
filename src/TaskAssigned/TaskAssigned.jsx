import React, { useState, useEffect } from 'react';
import TaskAssignedElement from './TaskAssignedElement';

const TaskAssigned = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // فرض بر این است که داده‌ها از localStorage با کلید myTasksData می‌آیند
    const savedData = localStorage.getItem('myTasksData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      let allTasks = [];
      Object.keys(parsedData).forEach(statusKey => {
        parsedData[statusKey].forEach(task => {
          allTasks.push({ ...task, status: statusKey });
        });
      });
      setTasks(allTasks);
    }
  }, []);
  useEffect(() => {
  // این یک داده نمونه برای تست ظاهر کامپوننت است
  const sampleTasks = [
    {
      id: 1,
      title: "طراحی رابط کاربری پنل",
      description: "طراحی کامل صفحات داشبورد با استفاده از Tailwind",
      status: "در حال انجام",
      assignedUser: {
        id: 101,
        name: "دکتر احمدی",
        role: "استاد راهنما",
        avatar: "https://i.pravatar.cc/150?u=101"
      }
    },
    {
      id: 2,
      title: "توسعه بخش گزارش‌گیری",
      description: "پیاده‌سازی نمودارهای آماری در بخش درخواست‌ها",
      status: "انجام شده",
      assignedUser: {
        id: 104,
        name: "علی کریمی",
        role: "پژوهشگر",
        avatar: "https://i.pravatar.cc/150?u=104"
      }
    }
  ];
  setTasks(sampleTasks);
}, []);

  return (
    <div className="p-6 bg-slate-50 min-h-screen" dir="rtl">
      <h1 className="text-xl font-bold text-slate-800 mb-8">لیست کارهای محوله</h1>

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
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskAssignedElement key={task.id} {...task} />
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-8 text-center text-slate-400 text-sm">کاری برای نمایش وجود ندارد</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskAssigned;