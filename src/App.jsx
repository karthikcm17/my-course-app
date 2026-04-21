import React, { useState } from 'react';
import { courses } from './data/courses';
import CourseCard from './components/CourseCard';

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Full Stack", "Front End", "Back End", "Python", ".NET"];

  const filtered = courses.filter(c => {
    const matchCat = activeCategory === "All" || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100">
      <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-xl border-b border-slate-100 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl shadow-lg shadow-indigo-200 flex items-center justify-center">
            <span className="text-white font-black text-xl">M</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">MATHURA ACADEMY</span>
        </div>

        <div className="hidden lg:flex items-center gap-10 font-bold text-sm text-slate-500">
          <a href="#" className="text-slate-900 border-b-2 border-indigo-600 pb-1">Home</a>
          <a href="#Course" className="hover:text-indigo-600 transition-colors">All Courses</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Mentors</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-slate-900 font-bold text-sm cursor-pointer">Log in</button>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all cursor-pointer">
            Join for Free
          </button>
        </div>
      </nav>

      <header className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
              <span className="text-indigo-600 text-[10px] font-black uppercase tracking-wider">Tamil Nadu's Top Tutors</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight mb-8">
              Skills that <br /> <span className="text-indigo-600 italic">elevate</span> your life.
            </h1>

            <div className="relative max-w-lg mb-8 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-focus-within:opacity-100"></div>
              <div className="relative flex items-center bg-white rounded-2xl shadow-2xl border-2 border-slate-100 group-focus-within:border-indigo-500 transition-all overflow-hidden">
                <div className="pl-6 text-slate-400">
                </div>
               
                <input type="text" placeholder="Search Java, Python, or Full Stack..."
                  className="block w-full pl-4 pr-6 py-5 text-xl font-medium outline-none text-slate-700 bg-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <img src="public/assets/main.jpg"
              className="rounded-[3rem] shadow-2xl rotate-4 hover:rotate-0 transition-transform duration-700 border-8 border-white"
              alt="Learning"
            />
          </div>
        </div>
      </header>

      <section id="Course" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black text-slate-900">Explore Programs</h2>
            <p className="text-slate-400 font-bold text-sm mt-1 uppercase tracking-widest italic">Industry Ready Curriculum</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all 
                  ${activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-xl scale-105"
                  : "bg-white text-slate-400 border border-slate-100 hover:border-indigo-200 hover:text-indigo-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.length > 0 ? (
            filtered.map(course => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <p className="text-slate-400 font-bold uppercase tracking-tighter text-xl">No courses match your search.</p>
            </div>
          )}
        </main>
      </section>

      <footer className="mt-20 bg-white border-t border-slate-100 pt-16 pb-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-sm">M</span>
                </div>
                <span className="text-xl font-black tracking-tighter text-slate-900">MATHURA ACADEMY</span>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
                Premium tech education platform focused on high-demand skills for the modern developer.
              </p>
            </div>

            <div>
              <h4 className="text-slate-900 font-black text-[10px] uppercase tracking-widest mb-6">Explore</h4>
              <nav className="flex flex-col gap-3">
                <a href="#Course" className="text-slate-500 text-sm font-bold hover:text-indigo-600 transition-colors cursor-pointer w-fit">All Courses</a>
                <a href="#" className="text-slate-500 text-sm font-bold hover:text-indigo-600 transition-colors cursor-pointer w-fit">Career Paths</a>
                <a href="#" className="text-slate-500 text-sm font-bold hover:text-indigo-600 transition-colors cursor-pointer w-fit">Success Stories</a>
              </nav>
            </div>

            <div>
              <h4 className="text-slate-900 font-black text-[10px] uppercase tracking-widest mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-sm">📞</span>
                  <p className="text-slate-600 text-sm font-bold">+91 93608 59919</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-sm">✉️</span>
                  <p className="text-slate-600 text-sm font-bold">support@mathuraacademy.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-sm">📍</span>
                  <p className="text-slate-600 text-sm font-bold leading-tight">
                    TRICHY, TAMIL NADU
                  </p>
                </div>
              </div>
            </div>
            <p className="text-bold text-sm font-black uppercase text-slate-500">
              © 2026 Mathura Academy Private Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;