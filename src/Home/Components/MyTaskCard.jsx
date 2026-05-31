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