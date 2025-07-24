import React from "react";
import { Link } from "react-router-dom";
import CourseOutline from "../courseDetails/CourseOutline";

const ShortCourseDetail = ({ course }) => {
  // ✅ If no course data, show fallback page
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The course you’re looking for doesn’t exist or data is missing.
          </p>
          <Link
            to="/courses"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to All Courses
          </Link>
        </div>
      </div>
    );
  }

  const aboutParagraphs = course.aboutCourse?.split("\n\n") || [
    "No description available for this course.",
  ];

  const summaryIndex = aboutParagraphs.findIndex((p) =>
    p.toLowerCase().startsWith("by the end of")
  );

  const introParagraphs =
    summaryIndex !== -1
      ? aboutParagraphs.slice(0, summaryIndex)
      : aboutParagraphs;

  const summaryParagraphs =
    summaryIndex !== -1 ? aboutParagraphs.slice(summaryIndex) : [];

  const courseOutlineData = course.courseOutline || [];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            {/* ✅ Replaced navigate with Link */}
            <nav className="text-sm text-white mb-4">
              <Link to="/courses" className="hover:underline">
                All Courses
              </Link>
              <span className="mx-2">{">"}</span>
              <span className="hover:underline">Short Courses</span>
              <span className="mx-2">{">"}</span>
              <span className="font-medium">{course.title || "Untitled"}</span>
            </nav>

            <div className="flex flex-wrap gap-3 mb-4 text-sm">
              <span className="bg-transparent text-white border font-semibold px-3 py-1 rounded">
                {course.type || "N/A"}
              </span>
              <span className="bg-transparent text-white border font-semibold px-3 py-1 rounded">
                Intermediate
              </span>
              <span className="bg-transparent text-white border font-semibold px-3 py-1 rounded">
                1 Hour 16 Minutes
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {course.title || "Untitled Course"}
            </h1>

            <p className="text-md font-light mb-6">
              Instructor:{" "}
              <span className="font-medium">
                {course.instructor || "Instructor details not available"}
              </span>
            </p>

            <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded hover:bg-gray-100">
              Enroll for Free
            </button>
          </div>

          {/* Video or Placeholder */}
          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <div className="w-full md:w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
              {courseOutlineData[0]?.videoUrl ? (
                <iframe
                  src={courseOutlineData[0].videoUrl}
                  title={`Intro video for ${course.title}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center text-gray-600">
                  No video available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-8">
          {/* What You'll Learn */}
          {course.whatYouWillLearn?.length ? (
            <div className="bg-white p-6 rounded-xl shadow mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                What you'll learn
              </h2>
              <ul className="list-disc list-outside ml-5 text-gray-700 space-y-3 text-base leading-relaxed">
                {course.whatYouWillLearn.slice(0, 3).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-600 mb-6">
              No learning outcomes available for this course.
            </p>
          )}

          {/* About This Course */}
          <div className="bg-white p-6 rounded-xl shadow mb-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About this course
            </h2>
            {introParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-gray-700 leading-relaxed whitespace-pre-line"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Course Outline */}
          {courseOutlineData.length ? (
            <CourseOutline courseOutline={courseOutlineData} />
          ) : (
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700">
                No course outline available at the moment.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="bg-white p-6 rounded-xl shadow sticky top-24">
            <h3 className="text-lg font-semibold mb-4">
              {course.title || "Untitled"}
            </h3>
            <ul className="text-gray-700 mb-4 space-y-3 text-sm">
              <li>⚡ {course.level || "Intermediate"}</li>
              <li>⏰ {course.duration || "Duration not specified"}</li>
              <li>🎥 {courseOutlineData.length} Video Lessons</li>
            </ul>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg">
              Enroll for Free
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ShortCourseDetail;
