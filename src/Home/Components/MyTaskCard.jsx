// import TaskItem from "./TaskItem";
// const MyTasksCard = () => {
//   const tasksData = [
//     { id: 1, title: "عنوان کار اول", date: "۱۴۰۵/۰۱/۲۰", description: "لورم ایپسوم متن ساختگی با تولید سادگی.", status: "do" },
//     { id: 2, title: "عنوان کار دوم", date: "۱۴۰۵/۰۱/۲۰", description: "لورم ایپسوم متن ساختگی با تولید سادگی.", status: "doing" },
//     { id: 3, title: "عنوان کار سوم", date: "۱۴۰۵/۰۱/۲۰", description: "لورم ایپسوم متن ساختگی با تولید سادگی.", status: "doing" },
//     { id: 4, title: "عنوان کار چهارم", date: "۱۴۰۵/۰۱/۲۲", description: "لورم ایپسوم متن ساختگی با تولید سادگی.", status: "done" },
//     { id: 5, title: "عنوان کار پنجم", date: "۱۴۰۵/۰۱/۲۵", description: "لورم ایپسوم متن ساختگی با تولید سادگی.", status: "do" },
//     { id: 6, title: "عنوان کار ششم", date: "۱۴۰۵/۰۱/۲۸", description: "لورم ایپسوم متن ساختگی با تولید سادگی.", status: "done" }
//   ];

//   return (
//     <div className="bg-white w-full max-w-full p-4 sm:p-6 rounded-3xl border border-slate-900/10 shadow-[0_0_25px_rgba(15,23,42,0.22)] flex flex-col h-full min-h-0 transition-all duration-300 hover:shadow-[0_0_35px_rgba(15,23,42,0.35)] ring-2 ring-blue-500/50" dir="rtl">
      
//       {/* هدر کارت */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 flex-shrink-0 min-w-0">
//         <h3 className="text-base font-bold text-slate-800 min-w-0 truncate">کارهای من</h3>
//         <div className="flex items-center gap-2 flex-shrink-0">
//           <button className="text-gray-400 hover:text-slate-700 text-lg">＋</button>
//           <button className="text-gray-400 hover:text-slate-700 font-bold">···</button>
//         </div>
//       </div>

//       <div className="flex-1 min-h-0 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300">
//         <div className="flex flex-col divide-y divide-gray-100">
//           {tasksData.map((task) => (
//             <TaskItem
//               key={task.id}
//               title={task.title}
//               date={task.date}
//               description={task.description}
//               status={task.status}
//             />
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default MyTasksCard;

import React, { useState } from "react";
import TaskItem from "./TaskItem";
import AddTaskComponent from "./AddTaskComponent"; 
import EditTaskModal from "./EditTaskModal";

const MyTasksCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // دیتای نمونه
  const [tasksData, setTasksData] = useState([
    { id: 1, title: "عنوان کار اول", status: "انجام نشده", priority: "متوسط" },
    { id: 2, title: "عنوان کار دوم", status: "در حال انجام", priority: "زیاد" },
    { id: 3, title: "عنوان کار سوم", status: "در حال انجام", priority: "کم" },
    { id: 4, title: "عنوان کار چهارم", status: "انجام شده", priority: "متوسط" }
  ]);

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsEditModalOpen(true);
  };

  const handleSaveTask = (updatedTask) => {
    setTasksData(tasksData.map(t => t.id === updatedTask.id ? updatedTask : t));
    setEditingTask(null);
  };

  return (
    <div className="bg-white w-full max-w-full p-6 rounded-3xl border border-slate-100 shadow-xl flex flex-col h-full overflow-hidden ring-2 ring-blue-500/50 shadow-[0_0_25px_rgba(15,23,42,0.22)] duration-300 hover:shadow-[0_0_35px_rgba(15,23,42,0.35)]" dir="rtl">
      
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h3 className="text-base font-bold text-slate-800">کارهای من</h3>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="text-gray-400 hover:text-indigo-600 text-2xl transition-colors"
          >
            ＋
          </button>
          <button className="text-gray-400 hover:text-slate-700 font-bold">
            ···
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          {tasksData.map((task) => (
            <TaskItem key={task.id} task={task} onEdit={handleEditTask} />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <AddTaskComponent onClose={() => setIsModalOpen(false)} />
      )}

      <EditTaskModal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        task={editingTask}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default MyTasksCard;