import MeetingItem from "./MeetingItem";
const MeetingsCard = () => {
  const meetingsData = [
    {
      id: 1,
      title: "جلسه ی هفتگی",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      date: "۱۴۰۵/۰۲/۰۵",
      time: "۰۸:۰۰ - ۰۹:۳۰",
      type: "مجازی",
      participants: [{ id: 101 }, { id: 102 }] // می‌توانید اینجا URL عکس بدهید
    },
    {
      id: 2,
      title: "جلسه ی شورا",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      date: "۱۴۰۵/۰۲/۰۵",
      time: "۰۸:۰۰ - ۰۹:۳۰",
      type: "مجازی",
      participants: [{ id: 103 }, { id: 104 }]
    },
    {
      id: 3,
      title: "جلسه ی شورا",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      date: "۱۴۰۵/۰۲/۰۵",
      time: "۰۸:۰۰ - ۰۹:۳۰",
      type: "مجازی",
      participants: [{ id: 103 }, { id: 104 }]
    }
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-900/10 shadow-[0_0_25px_rgba(15,23,42,0.22)] flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_35px_rgba(15,23,42,0.35)] ring-2 ring-blue-500/50" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base font-bold text-slate-800">جلسات</h3>
        <div className="flex gap-2">
           <button className="text-gray-400 hover:text-slate-700 text-lg">＋</button>
           <button className="text-gray-400 hover:text-slate-700 font-bold">···</button>
        </div>
      </div>

      {/* List */}
      <div className="space-y-1 overflow-y-auto max-h-[400px] pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300">
  {meetingsData.map((meeting) => (
    <MeetingItem key={meeting.id} {...meeting} />
  ))}
</div>
    </div>
  );
};

export default MeetingsCard;