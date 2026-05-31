import React from 'react';
import TaskAssignedElement from './TaskAssignedElement';

const TaskAssignedList = ({ status, tasks }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      {/* هدر یکپارچه */}
      <div className="p-4 border-b font-bold text-slate-800 bg-slate-50">
        لیست کارهای: {status}
      </div>

      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
          <tr>
            <th className="p-4 text-right">عنوان کار</th>
            <th className="p-4 text-right">توضیحات</th>
            <th className="p-4 text-right">وضعیت</th>
            <th className="p-4 text-right">مسئول</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {tasks && tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskAssignedElement key={task.id} {...task} />
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-8 text-center text-slate-400 text-sm">
                کاری در این دسته‌بندی وجود ندارد
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskAssignedList;