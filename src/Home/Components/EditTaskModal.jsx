import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const EditTaskModal = ({ isOpen, onClose, task, onSave }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [status, setStatus] = useState(task?.status || "انجام نشده");
  const [priority, setPriority] = useState(task?.priority || "متوسط");

  const statusOptions = ["انجام نشده", "در حال انجام", "انجام شده"];
  const priorityOptions = ["کم", "متوسط", "زیاد"];

  const handleSave = () => {
    if (!title || !title.trim()) {
      toast.error("لطفاً عنوان تسک را وارد کنید.");
      return;
    }

    toast.success(`تسک "${title}" با اولویت "${priority}" و وضعیت "${status}" با موفقیت بروزرسانی شد.`);
    
    // فراخوانی تابع onSave با دیتای جدید
    onSave({
      ...task,
      title,
      status,
      priority
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs" onClick={onClose} />
      
      <div className="bg-white w-full max-w-[650px] rounded-3xl p-6 shadow-2xl relative z-10 border border-slate-100 overflow-hidden" dir="rtl">
        <button onClick={onClose} className="text-slate-400 hover:text-rose-500 mb-4 cursor-pointer p-1 rounded-full border-2 border-slate-300 hover:border-rose-300 w-7 h-7 flex items-center justify-center">
          <svg className="w-4 h-4" stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <h2 className="text-lg font-bold text-slate-800 mb-4">ویرایش کارهای من</h2>

        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-[80px_1fr] items-center gap-2">
            <label className="text-sm font-bold text-slate-800">عنوان:</label>
            <input 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500" 
              placeholder="عنوان تسک..." 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-700">وضعیت:</label>
            <div className="flex gap-2">
              {statusOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setStatus(option)}
                  className={`px-4 py-2 text-xs rounded-xl border transition-all ${
                    status === option 
                      ? "bg-indigo-100 border-indigo-500 text-indigo-700 font-bold" 
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-700">اولویت:</label>
            <div className="flex gap-2">
              {priorityOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPriority(option)}
                  className={`px-4 py-2 text-xs rounded-xl border transition-all ${
                    priority === option 
                      ? "bg-rose-100 border-rose-500 text-rose-700 font-bold" 
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button 
            type="button" 
            onClick={handleSave}
            className="w-full py-3 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 transition-all"
          >
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
