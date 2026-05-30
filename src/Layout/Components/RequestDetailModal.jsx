import React, { useState } from 'react';

const RequestDetailModal = ({ request, onClose, onAction, onOpenMeeting }) => {
  // ۱. هوک‌ها همیشه باید در بالاترین سطح کامپوننت فراخوانی شوند
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [openModal, setOpenModal] = useState(false);

  // ۲. حالا چک کردن شرط پس از تعریف هوک‌ها انجام می‌شود
  if (!request) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 left-4 text-slate-400 hover:text-slate-600">✕</button>
        
        <h2 className="text-lg font-bold mb-4">جزئیات درخواست</h2>
        <div className="space-y-3 text-sm text-slate-700 mb-6">
          <p><strong>نام فرد:</strong> {request.name}</p>
          <p><strong>تاریخ:</strong> {request.date}</p>
          <p><strong>ساعت:</strong> {request.time}</p>
        </div>

        {showReplyBox ? (
          <div className="mb-4">
            <textarea 
              className="w-full p-2 border rounded-xl text-xs" 
              placeholder="پاسخ خود را بنویسید..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button onClick={() => { onAction("پاسخ ارسال شد."); onClose(); }} className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-xl text-xs font-bold">ارسال</button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => { onAction("درخواست با موفقیت تایید شد."); onClose(); }} className="bg-green-600 text-white py-2 rounded-xl text-xs font-bold">تایید</button>
            <button onClick={() => { onAction("درخواست تایید نشد."); onClose(); }} className="bg-rose-600 text-white py-2 rounded-xl text-xs font-bold">عدم تایید</button>
            <button onClick={() => setShowReplyBox(true)} className="bg-blue-600 text-white py-2 rounded-xl text-xs font-bold">تایید و پاسخ</button>
         <button 
  type="button"
  onClick={(e) => {
    e.stopPropagation(); // جلوی انتشار کلیک را بگیر
    onOpenMeeting(); // این تابع باید از والد پاس داده شده باشد
  }} 
  className="bg-amber-600 text-white py-2 rounded-xl text-xs font-bold"
>
  درخواست جلسه
</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestDetailModal;