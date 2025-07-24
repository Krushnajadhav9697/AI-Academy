import React from "react";

const CourseOutline = ({ courseOutline }) => {
  if (!courseOutline?.length) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Course Outline</h2>
      <ul className="divide-y divide-gray-200">
        {courseOutline.map((lesson, idx) => (
          <li key={idx} className="py-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">{lesson.title}</p>
                <p className="text-sm text-gray-600">
                  {lesson.type} • {lesson.duration}
                  {lesson.hasCode && (
                    <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded">
                      Code Example
                    </span>
                  )}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOutline;
