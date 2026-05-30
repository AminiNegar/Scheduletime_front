import React from 'react';
import { FiX, FiCheckCircle, FiClock, FiActivity } from "react-icons/fi";

const RequestDetailModal = ({ onClose, requestData }) => {
  if (!requestData) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4" dir="rtl">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 relative">
        
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
            <FiActivity className="text-indigo-600"/> روند پیگیری درخواست
          </h2>
          <button onClick={onClose}><FiX size={20}/></button>
        </div>

        {/* خط زمانی (Timeline) */}
        <div className="relative border-r-2 border-slate-100 pr-8 mr-2 space-y-10">
          {requestData.history && requestData.history.length > 0 ? (
            requestData.history.map((log, index) => (
              <div key={index} className="relative">
                {/* دایره نشانگر */}
                <div className="absolute -right-[41px] top-0 w-6 h-6 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                
                {/* محتوای لاگ */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold text-indigo-600">{log.step}</span>
                    <span className="text-[10px] text-slate-400">{log.date}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{log.detail}</p>
                  <p className="text-[10px] text-slate-400 mt-2">ثبت شده توسط: {log.user}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-slate-400 text-sm">
              هنوز روندی برای این درخواست ثبت نشده است.
            </div>
          )}
        </div>

        <button onClick={onClose} className="w-full mt-10 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-black">
          بستن پیگیری
        </button>
      </div>
    </div>
  );
};

export default RequestDetailModal;