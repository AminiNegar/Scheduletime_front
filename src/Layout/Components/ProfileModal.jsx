import React, { useState, useEffect, useRef } from 'react';

const ProfileModal = ({ user, isOpen, onClose, onSave, canEdit = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setFormData(user);
    setIsEditing(false);
  }, [user, isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white w-full max-w-[420px] rounded-[24px] p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
        
        <div className="flex flex-col items-center text-center">
          
          <div 
            className="relative w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-slate-50 shadow-md group cursor-pointer"
            onClick={() => isEditing && fileInputRef.current.click()}
          >
            <img 
              src={formData.avatar} 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
            
            {isEditing && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                تغییر عکس
              </div>
            )}
          </div>
          
          <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

          <h2 className="text-xl font-bold text-slate-900">{formData.name}</h2>
          <p className="text-indigo-600 text-sm font-medium">{formData.academicTitle}</p>
        </div>

        <div className="mt-8 space-y-4 text-sm">
          <Field label="دانشگاه" name="university" value={formData.university} isEditing={isEditing} onChange={handleChange} />
          <Field label="دانشکده" name="faculty" value={formData.faculty} isEditing={isEditing} onChange={handleChange} />
          
          <div className="flex flex-col gap-1">
            <label className="text-slate-400 text-xs">بیوگرافی:</label>
            {isEditing ? (
              <textarea 
                name="bio" 
                value={formData.bio} 
                onChange={handleChange} 
                className="w-full p-3 bg-slate-50 border border-indigo-200 rounded-xl outline-none" 
                rows="3"
              />
            ) : (
              <p className="text-slate-700 p-2 leading-relaxed min-h-[60px]">{formData.bio}</p>
            )}
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          {isEditing ? (
            <>
              <button onClick={() => setIsEditing(false)} className="flex-1 py-3 text-slate-500 font-semibold">انصراف</button>
              <button onClick={() => { onSave(formData); setIsEditing(false); }} className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-semibold">ذخیره</button>
            </>
          ) : (
            <>
              <button onClick={onClose} className="flex-1 py-3 border-2 border-slate-100 rounded-xl font-semibold text-slate-600">بستن</button>
              {canEdit && (
                <button onClick={() => setIsEditing(true)} className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-semibold">ویرایش پروفایل</button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

=const Field = ({ label, name, value, isEditing, onChange }) => (
  <div className="flex justify-between items-center">
    <span className="text-slate-400">{label}:</span>
    {isEditing ? (
      <input name={name} value={value} onChange={onChange} className="bg-slate-50 border border-indigo-200 rounded-lg px-2 py-1 text-left w-2/3" />
    ) : (
      <span className="font-medium text-slate-800">{value}</span>
    )}
  </div>
);

export default ProfileModal;