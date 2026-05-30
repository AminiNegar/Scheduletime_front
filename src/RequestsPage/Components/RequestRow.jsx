const RequestRow = ({ name, avatar, description, date }) => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all mb-3 text-right">
      {/* هدر */}
      {/* استفاده از flex-row-reverse باعث می‌شود ترتیب چیدمان از راست به چپ باشد */}
      <div className="flex flex-row-reverse justify-between items-center mb-3">
        
        {/* آیکون سه نقطه (در حالت row-reverse این المان در سمت چپ قرار می‌گیرد) */}
        <span className="text-slate-400 cursor-pointer text-xl">...</span>
        
        {/* کانتینر پروفایل و نام (در حالت row-reverse این المان در سمت راست قرار می‌گیرد) */}
        <div className="flex items-center gap-2">
          <img 
            src={avatar} 
            alt={name} 
            className="w-8 h-8 rounded-full object-cover border border-slate-200" 
          />
          <span className="text-sm font-bold text-slate-800">{name}</span>
        </div>
      </div>
      
      {/* توضیحات */}
      <p className="text-xs text-slate-500 leading-5 mb-4 text-right">
        {description}
      </p>
      
      {/* تاریخ */}
      <div className="text-[10px] text-slate-400 font-bold text-left">
        {date}
      </div>
    </div>
  );
};

export default RequestRow;