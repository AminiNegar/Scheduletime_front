import React from "react";
import { FaBars } from "react-icons/fa";
import LogoUni from "../assets/image/University-of-Isfahan-Logo.png"

function Header({ onMenuToggle }) {
  return (
    <header className="w-full h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-3 md:px-6 z-30 flex-shrink-0">
      
      {/* سمت راست: منو همبرگری + لوگو + متن دانشگاه */}
      <div className="flex items-center gap-1.5 md:gap-4 h-full py-2 min-w-0">
        <button 
          onClick={onMenuToggle}
          className="text-white text-xl p-1.5 rounded-lg hover:bg-slate-800 md:hidden transition-colors flex-shrink-0"
        >
          <FaBars />
        </button>

        <img
          src={LogoUni}
          alt="لوگو دانشگاه اصفهان"
          className="h-9 w-auto md:h-14 object-contain flex-shrink-0"
        />

        <div className="flex flex-col justify-center min-w-0">
          <span className="text-xs md:text-xl font-bold text-white tracking-wide truncate">
            دانشگاه اصفهان
          </span>
          <span className="hidden md:block text-xs text-slate-400 tracking-tight">
            University of Isfahan
          </span>
        </div>
      </div>

      {/* سمت چپ: تمام آیکون‌ها بدون حذف شدن در موبایل */}
      <div className="flex items-center gap-2.5 md:gap-4 flex-shrink-0">
        
        {/* آیکون چت و مسیج - کلس hidden برداشته شد تا همیشه جایش امن باشد */}
        <div className="relative text-slate-300 hover:text-white cursor-pointer text-base md:text-lg transition-colors">
          💬
          <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[8px] md:text-[9px] font-bold rounded-full w-3.5 h-3.5 md:w-4 md:h-4 flex items-center justify-center">
            ۲
          </span>
        </div>

        {/* آیکون نوتیفیکیشن */}
        <div className="relative text-slate-300 hover:text-white cursor-pointer text-base md:text-lg transition-colors">
          🔔
          <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[8px] md:text-[9px] font-bold rounded-full w-3.5 h-3.5 md:w-4 md:h-4 flex items-center justify-center">
            ۵
          </span>
        </div>
        
        {/* آیکون تنظیمات - این را هم گذاشتم همیشه بیاید، فقط در موبایل پدینگش کمتر است */}
        <div className="text-slate-300 hover:text-white cursor-pointer text-base md:text-lg transition-colors border-r border-slate-700 pr-2 md:pr-3">
          ⚙️
        </div>

        {/* دایره کاربری */}
        <div className="w-7 h-7 md:w-9 md:h-9 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors flex-shrink-0">
          <span className="text-white text-[10px] md:text-sm">👤</span>
        </div>
      </div>

    </header>
  );
}

export default Header;