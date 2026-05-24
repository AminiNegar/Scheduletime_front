import TaskItem from "./TaskItem";
const MyTasksCard = () => {
  const tasksData = [
    { id: 1, title: "عنوان کار اول", date: "۱۴۰۵/۰۱/۲۰", description: "لورم ایپسوم متن ساختگی با تولید سادگی.", status: "do" },
    { id: 2, title: "عنوان کار دوم", date: "۱۴۰۵/۰۱/۲۰", description: "لورم ایپسوم متن ساختگی با تولید سادگی.", status: "doing" },
    { id: 3, title: "عنوان کار سوم", date: "۱۴۰۵/۰۱/۲۰", description: "لورم ایپسوم متن ساختگی با تولید سادگی.", status: "doing" },
    { id: 4, title: "عنوان کار چهارم", date: "۱۴۰۵/۰۱/۲۲", description: "لورم ایپسوم متن ساختگی با تولید سادگی.", status: "done" },
    { id: 5, title: "عنوان کار پنجم", date: "۱۴۰۵/۰۱/۲۵", description: "لورم ایپسوم متن ساختگی با تولید سادگی.", status: "do" },
    { id: 6, title: "عنوان کار ششم", date: "۱۴۰۵/۰۱/۲۸", description: "لورم ایپسوم متن ساختگی با تولید سادگی.", status: "done" }
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-900/10 shadow-[0_0_25px_rgba(15,23,42,0.22)] flex flex-col h-full min-h-0 transition-all duration-300 hover:shadow-[0_0_35px_rgba(15,23,42,0.35)] ring-2 ring-blue-500/50" dir="rtl">
      
      {/* هدر کارت */}
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h3 className="text-base font-bold text-slate-800">کارهای من</h3>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-slate-700 text-lg">＋</button>
          <button className="text-gray-400 hover:text-slate-700 font-bold">···</button>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300">
        <div className="flex flex-col divide-y divide-gray-100">
          {tasksData.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              date={task.date}
              description={task.description}
              status={task.status}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default MyTasksCard;