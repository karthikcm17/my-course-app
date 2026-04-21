import React from 'react';

const CourseCard = ({ course }) => {
  const themes = {
    "Full Stack": "bg-indigo-600 shadow-indigo-100",
    "Front End": "bg-rose-500 shadow-rose-100",
    "Back End": "bg-sky-600 shadow-sky-100",
    "Python": "bg-emerald-500 shadow-emerald-100",
    ".NET": "bg-violet-600 shadow-violet-100"
  };

  const theme = themes[course.category] || "bg-slate-900";

  return (
    <div className="group bg-white rounded-[3rem] p-6 border border-slate-100 hover:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col">
      <div className="relative h-60 rounded-[2.5rem] overflow-hidden mb-8">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        />
        <div className={`absolute top-5 right-5 ${theme} text-white text-[10px] font-black uppercase px-5 py-2 rounded-2xl shadow-xl `}>
          {course.category}
        </div>
      </div>

      <div className="flex-grow px-3">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full">
            <span className="text-amber-500 text-sm">★</span>
            <span className="text-slate-900 font-black text-xs">{course.rating}</span>
          </div>
          <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">{course.students} Learned</span>
        </div>

        <h3 className="text-2xl font-black text-slate-900 leading-tight mb-4 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>

        <p className="text-slate-500 text-sm font-bold uppercase tracking-tight">Instructor : {course.instructor}</p>
      </div>

      <div className="flex items-center justify-between p-3 mt-auto bg-slate-50 rounded-[2rem]">
        <span className="text-3xl font-black text-slate-900 tracking-tighter pl-4">{course.price}</span>
        <button className={`${theme} text-white px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest shadow-2xl hover:-translate-y-1 active:scale-95 transition-all`}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;