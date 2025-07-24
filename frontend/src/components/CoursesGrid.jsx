import React from "react";
import CourseCard from "../components/Home/CourseCard";
import { courseData } from "../components/lib/constsnt";

const CoursesGrid = () => {
  return (
    <div>
      {/* 📝 Header */}
      <div className="flex items-center justify-between mb-6 px-1">
        <h2 className="text-2xl font-bold text-gray-800">Courses</h2>

        {/* 🔽 Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm text-gray-600">
            Sort by:
          </label>
          <select
            id="sort"
            className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* 🗂️ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courseData.map((course, index) => (
          <CourseCard
            key={course.id || index}
            id={course.id}
            image={course.image}
            title={course.title}
            type={course.type}
            description={course.description}
            collaborators={course.collaborators || []}
            collaboratorLogo={course.collaboratorLogo}
            collaboratorName={course.collaboratorName}
            variant="main"
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesGrid;
