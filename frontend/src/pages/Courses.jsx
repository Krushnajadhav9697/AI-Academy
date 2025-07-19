import React from "react";
import CourseFilters from "../components/CourseFilters";
import CoursesGrid from "../components/CoursesGrid";
import MostPopularAndTopRated from "../components/MostPopularAndTopRated";

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🚀 Hero Section */}
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left: Heading & Text */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              All Courses
            </h1>
            <p className="text-lg font-semibold  text-gray-600">
              Grow your AI career with foundational specializations and <br />
              <span>
                skill‑specific short courses taught by leaders in the field.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 🗂 Filters and Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-10">
        <aside className="col-span-12 lg:col-span-4">
          <CourseFilters />
        </aside>

        <main className="col-span-12 lg:col-span-8 space-y-6">
          <MostPopularAndTopRated />
          <CoursesGrid />
        </main>
      </div>
    </div>
  );
};

export default Courses;
