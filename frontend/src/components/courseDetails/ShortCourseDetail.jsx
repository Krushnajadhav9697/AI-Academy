import React from "react";
import { useNavigate } from "react-router-dom";
import CourseOutline from "../courseDetails/CourseOutline"; // Adjust path as needed

const ShortCourseDetail = ({ course }) => {
  const navigate = useNavigate();

  const aboutParagraphs = course.aboutCourse?.split("\n\n") || [];

  const summaryIndex = aboutParagraphs.findIndex((p) =>
    p.toLowerCase().startsWith("by the end of")
  );

  const introParagraphs =
    summaryIndex !== -1
      ? aboutParagraphs.slice(0, summaryIndex)
      : aboutParagraphs;
  const summaryParagraphs =
    summaryIndex !== -1 ? aboutParagraphs.slice(summaryIndex) : [];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <nav className="text-sm text-white mb-4">
              <span
                className="hover:underline cursor-pointer"
                onClick={() => navigate("/courses")}
              >
                All Courses
              </span>
              <span className="mx-2">{">"}</span>
              <span className="hover:underline cursor-pointer">
                Short Courses
              </span>
              <span className="mx-2">{">"}</span>
              <span className="font-medium">{course.title}</span>
            </nav>

            <div className="flex flex-wrap gap-3 mb-4 text-sm">
              <span className="bg-transparent text-white border font-semibold px-3 py-1 rounded">
                {course.type}
              </span>
              <span className="bg-transparent text-white border font-semibold px-3 py-1 rounded">
                Intermediate
              </span>
              <span className="bg-transparent text-white border font-semibold px-3 py-1 rounded">
                1 Hour 16 Minutes
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {course.title}
            </h1>

            <p className="text-md font-light mb-6">
              Instructor: <span className="font-medium">John Doe</span>
            </p>

            <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded hover:bg-gray-100">
              Enroll for Free
            </button>
          </div>

          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <div className="w-full md:w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                src={course.courseOutline[0]?.videoUrl}
                title={`Intro video for ${course.title}`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-8">
          {/* What You'll Learn (Top 3 Only) */}
          {course.whatYouWillLearn && (
            <div className="bg-white p-6 rounded-xl shadow mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                What you'll learn
              </h2>
              <ul className="list-disc list-outside ml-5 text-gray-700 space-y-3 text-base leading-relaxed">
                {course.whatYouWillLearn.slice(0, 3).map((item, index) => (
                  <li key={index}>
                    {item.includes(":") ? (
                      <>
                        <span className="font-medium text-gray-900">
                          {item.split(":")[0]}:
                        </span>{" "}
                        {item.split(":").slice(1).join(":")}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* About This Course */}
          {course.aboutCourse && (
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

              {/* Full Learning List */}
              {course.whatYouWillLearn && (
                <ul className="list-disc list-outside ml-5 text-gray-700 space-y-3 text-base leading-relaxed">
                  {course.whatYouWillLearn.map((item, index) => (
                    <li key={index}>
                      {item.includes(":") ? (
                        <>
                          <span className="font-medium text-gray-900">
                            {item.split(":")[0]}:
                          </span>{" "}
                          {item.split(":").slice(1).join(":")}
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {summaryParagraphs.map((para, idx) => (
                <p
                  key={`summary-${idx}`}
                  className="text-gray-700 leading-relaxed whitespace-pre-line"
                >
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Who Should Join */}
          {course.whoShouldJoin && (
            <div className="bg-white p-6 rounded-xl shadow mb-6">
              <h2 className="text-xl font-semibold mb-4">Who should join?</h2>
              <p className="text-gray-700">{course.whoShouldJoin}</p>
            </div>
          )}

          {/* Course Outline */}
          <CourseOutline courseOutline={course.courseOutline} />

          {/* Instructor */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Instructor</h2>
            <div className="flex items-center space-x-4">
              <img
                src={course.image}
                alt="Instructor"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">John Doe</p>
                <p className="text-sm text-gray-600">
                  Assistant Professor at the University of Washington, Principal
                  Research Scientist at Nvidia, Co-founder of Nexusflow
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="bg-white p-6 rounded-xl shadow sticky top-24">
            <h3 className="text-lg font-semibold mb-4">{course.title}</h3>
            <ul className="text-gray-700 mb-4 space-y-3 text-sm">
              <li>⚡ Intermediate</li>
              <li>⏰ 1 Hour 16 Minutes</li>
              <li>🎥 9 Video Lessons</li>
              <li>📂 4 Code Examples</li>
              <li>👨‍🏫 Instructor: John Doe</li>
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
