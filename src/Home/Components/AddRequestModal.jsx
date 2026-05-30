// import React, { useState, useRef } from "react";

// const AddRequestModal = ({ onClose }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedPeople, setSelectedPeople] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const searchRef = useRef(null);
//   const [formData, setFormData] = useState(requestData || { title: "", description: "", status: "در انتظار" });

//   const allPeople = [
//     { id: 1, name: "دکتر احمدی", role: "مدیر بخش", avatar: "/avatar1.png" },
//     { id: 2, name: "مهندس رضایی", role: "توسعه دهنده ارشد", avatar: "/avatar2.png" },
//     { id: 3, name: "سارا موسوی", role: "طراح محصول", avatar: "/avatar3.png" },
//   ];

//   const removePerson = (id) => {
//     setSelectedPeople(selectedPeople.filter((p) => p.id !== id));
//   };

//   const handleSave = () => {
//     if (!title.trim()) {
//       window.alert("لطفاً عنوان درخواست را وارد کنید.");
//       return;
//     }
    
//     if (selectedPeople.length === 0) {
//       window.alert("لطفاً حداقل یک شخص را انتخاب کنید.");
//       return;
//     }
    
//     window.alert("درخواست شما با موفقیت ثبت شد.");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
//       <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs" onClick={onClose} />
      
//       <div className="bg-white w-full max-w-[650px] rounded-3xl p-6 shadow-2xl relative z-10 border border-slate-100" dir="rtl">
//         <button onClick={onClose} className="text-slate-400 hover:text-rose-500 mb-4 cursor-pointer p-1 rounded-full border-2 border-slate-300 hover:border-rose-300 w-7 h-7 flex items-center justify-center">
//           <svg className="w-4 h-4" stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
//         </button>

//         <h2 className="text-lg font-bold text-slate-800 mb-6">ساخت درخواست جدید</h2>

//         <form className="flex flex-col gap-5">
//           <div className="grid grid-cols-[80px_1fr] items-center gap-2">
//             <label className="text-sm font-bold text-slate-800">عنوان:</label>
//             <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="عنوان..." />
//           </div>

//           <div className="grid grid-cols-[80px_1fr] items-start gap-2">
//             <label className="text-sm font-bold text-slate-800 mt-2">توضیحات:</label>
//             <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none" rows="3" placeholder="توضیحات..." />
//           </div>

//           <div className="grid grid-cols-[80px_1fr] items-start gap-2 relative" ref={searchRef}>
//             <label className="text-sm font-bold text-slate-800 mt-2">افزودن شخص:</label>
//             <div className="w-full flex flex-col gap-2">
//               <div className="flex flex-wrap items-center gap-2">
//                 {selectedPeople.map((person) => (
//                   <div key={person.id} className="flex items-center gap-2 pr-1 pl-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full">
//                     <img src={person.avatar} className="w-6 h-6 rounded-full object-cover" />
//                     <span className="text-xs font-bold text-indigo-800">{person.name}</span>
//                     <button type="button" onClick={() => removePerson(person.id)} className="text-indigo-400 hover:text-rose-500 font-bold">×</button>
//                   </div>
//                 ))}
//                 <button type="button" onClick={() => setIsSearchOpen(!isSearchOpen)} className="w-8 h-8 rounded-full border border-dashed border-slate-300 text-slate-400 flex items-center justify-center hover:border-indigo-500 hover:text-indigo-500">+</button>
//               </div>

//               {isSearchOpen && (
//                 <div className="absolute top-full right-0 w-full mt-1 bg-white border border-slate-200 shadow-2xl rounded-2xl z-50 max-h-60 overflow-y-auto">
//                   <input autoFocus value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="جستجو..." className="w-full p-3 text-xs border-b border-slate-50 outline-none" />
//                   {allPeople.filter(u => !selectedPeople.find(p => p.id === u.id) && u.name.includes(searchQuery)).map((user) => (
//                     <div key={user.id} onClick={() => { setSelectedPeople([...selectedPeople, user]); setIsSearchOpen(false); }} className="px-4 py-3 hover:bg-slate-50 cursor-pointer flex items-center gap-3">
//                       <img src={user.avatar} className="w-8 h-8 rounded-full" />
//                       <div>
//                         <div className="font-bold text-sm">{user.name}</div>
//                         <div className="text-[9px] text-slate-400 uppercase tracking-wide">{user.role}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           <button type="button" onClick={handleSave} className="w-full py-3 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 transition-all mt-4">
//             ذخیره
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddRequestModal;

import React, { useState, useEffect, useRef } from "react";

const AddRequestModal = ({ onClose, onAdd, requestData }) => {
  // ۱. مقداردهی اولیه فرم - اگر requestData وجود داشت، فیلدها پر می‌شوند
  const [formData, setFormData] = useState({
    title: requestData?.title || "",
    description: requestData?.description || "",
    status: requestData?.status || "در انتظار",
    people: requestData?.people || []
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const allPeople = [
    { id: 1, name: "دکتر احمدی", role: "مدیر بخش", avatar: "/avatar1.png" },
    { id: 2, name: "مهندس رضایی", role: "توسعه دهنده ارشد", avatar: "/avatar2.png" },
    { id: 3, name: "سارا موسوی", role: "طراح محصول", avatar: "/avatar3.png" },
  ];

  const removePerson = (id) => {
    setFormData({ ...formData, people: formData.people.filter((p) => p.id !== id) });
  };

  const handleSave = () => {
    if (!formData.title.trim()) {
      window.alert("لطفاً عنوان درخواست را وارد کنید.");
      return;
    }
    // ارسال داده نهایی (اگر ویرایش باشد، id را هم می‌فرستیم)
    onAdd({ ...formData, id: requestData?.id });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs" onClick={onClose} />
      
      <div className="bg-white w-full max-w-[650px] rounded-3xl p-6 shadow-2xl relative z-10 border border-slate-100" dir="rtl">
        <h2 className="text-lg font-bold text-slate-800 mb-6">
          {requestData ? "ویرایش درخواست" : "ساخت درخواست جدید"}
        </h2>

        <form className="flex flex-col gap-5">
          {/* عنوان */}
          <div className="grid grid-cols-[80px_1fr] items-center gap-2">
            <label className="text-sm font-bold text-slate-800">عنوان:</label>
            <input 
              value={formData.title} 
              onChange={(e) => setFormData({...formData, title: e.target.value})} 
              className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none" 
            />
          </div>

          {/* توضیحات */}
          <div className="grid grid-cols-[80px_1fr] items-start gap-2">
            <label className="text-sm font-bold text-slate-800 mt-2">توضیحات:</label>
            <textarea 
              value={formData.description} 
              onChange={(e) => setFormData({...formData, description: e.target.value})} 
              className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none" 
              rows="3" 
            />
          </div>

          

          {/* افزودن شخص */}
          <div className="grid grid-cols-[80px_1fr] items-start gap-2 relative" ref={searchRef}>
            <label className="text-sm font-bold text-slate-800 mt-2">افزودن شخص:</label>
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                {formData.people.map((person) => (
                  <div key={person.id} className="flex items-center gap-2 pr-1 pl-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full">
                    <img src={person.avatar} className="w-6 h-6 rounded-full object-cover" alt="" />
                    <span className="text-xs font-bold text-indigo-800">{person.name}</span>
                    <button type="button" onClick={() => removePerson(person.id)} className="text-indigo-400 hover:text-rose-500 font-bold">×</button>
                  </div>
                ))}
                <button type="button" onClick={() => setIsSearchOpen(!isSearchOpen)} className="w-8 h-8 rounded-full border border-dashed border-slate-300 text-slate-400 flex items-center justify-center hover:border-indigo-500 hover:text-indigo-500">+</button>
              </div>

              {isSearchOpen && (
                <div className="absolute top-full right-0 w-full mt-1 bg-white border border-slate-200 shadow-2xl rounded-2xl z-50 max-h-60 overflow-y-auto">
                  {allPeople.filter(u => !formData.people.find(p => p.id === u.id)).map((user) => (
                    <div key={user.id} onClick={() => { setFormData({...formData, people: [...formData.people, user]}); setIsSearchOpen(false); }} className="px-4 py-3 hover:bg-slate-50 cursor-pointer flex items-center gap-3">
                      <img src={user.avatar} className="w-8 h-8 rounded-full" alt="" />
                      <div>
                        <div className="font-bold text-sm">{user.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button type="button" onClick={handleSave} className="w-full py-3 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 transition-all mt-4">
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRequestModal;