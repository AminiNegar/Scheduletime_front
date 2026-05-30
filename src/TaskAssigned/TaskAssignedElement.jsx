import React, { useState } from 'react';
import ProfileModal from '.././Layout/Components/ProfileModal'
import { FaEnvelope } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
const TaskAssignedElement = ({ title, description, status, assignedUser }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors text-sm">
        <td className="p-4 font-bold text-slate-800">{title}</td>
        <td className="p-4 text-slate-600 text-xs truncate max-w-[200px]">{description}</td>
        <td className="p-4">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
            status === "انجام شده" ? "bg-green-100 text-green-700" :
            status === "در حال انجام" ? "bg-indigo-100 text-indigo-700" :
            "bg-slate-100 text-slate-600"
          }`}>
            {status}
          </span>
        </td>
        <td className="p-4">
          {/* تغییر از Link به یک div قابل کلیک */}
          <div 
            onClick={() => setIsProfileOpen(true)} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img src={assignedUser?.avatar} alt={assignedUser?.name} className="w-8 h-8 rounded-full border border-slate-200" />
            <div>
              <div className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{assignedUser?.name}</div>
              <div className="text-[10px] text-slate-400">{assignedUser?.role}</div>
            </div>
          </div>
        </td>
      </tr>

      {/* فراخوانی مودال برای این کاربر خاص */}
      <ProfileModal 
        user={assignedUser} 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
        canEdit={false} // در جدول معمولاً فقط مشاهده است
      />
    </>
  );
};

export default TaskAssignedElement;