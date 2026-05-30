import React from "react";

const TaskItem = ({ task, onEdit }) => {
  const getStatusColor = (s) => {
    if (s === "انجام شده") return "bg-emerald-100 text-emerald-700";
    if (s === "در حال انجام") return "bg-amber-100 text-amber-700";
    return "bg-rose-100 text-rose-700";
  };

  const getPriorityColor = (p) => {
    if (p === "زیاد") return "bg-red-100 text-red-700";
    if (p === "کم") return "bg-blue-100 text-blue-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div 
      onClick={() => onEdit && onEdit(task)}
      className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
    >
      <div className="flex-1 min-w-0">
        <span className="text-sm font-bold text-slate-700 block truncate">{task.title}</span>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0 ml-3">
        {task.priority && (
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
        )}
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap ${getStatusColor(task.status)}`}>
          {task.status}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;