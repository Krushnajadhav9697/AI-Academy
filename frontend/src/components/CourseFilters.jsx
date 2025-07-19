import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import { collaborators, topics } from "../components/lib/constsnt";

const CourseFilters = () => {
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [showAllCollaborators, setShowAllCollaborators] = useState(false);

  const handleClearAll = () => {
    document.querySelectorAll("input[type=checkbox]").forEach((el) => {
      el.checked = false;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* 🔍 Search */}
      <div className="mb-4 relative">
        {/* Search Icon */}
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
          <FaSearch size={14} />
        </span>

        <input
          type="text"
          placeholder="Search courses..."
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* 🔥 Filters Heading + Clear All */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Filters</h2>
        <button
          onClick={handleClearAll}
          className="text-gray-600 text-sm font-medium "
        >
          Clear All
        </button>
      </div>

      {/* 📂 Course Type */}
      <div className="mb-5">
        <h3 className="text-sm font-medium text-gray-600 mb-2">Course Type</h3>
        <div className="space-y-2">
          {["Short Course", "Course", "Specialization"].map((type) => (
            <label
              key={type}
              className="flex items-center space-x-2 text-sm text-gray-700"
            >
              <input type="checkbox" className="accent-blue-600" />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 🏷️ Level */}
      <div className="mb-5">
        <h3 className="text-sm font-medium text-gray-600 mb-2">Level</h3>
        <div className="space-y-2">
          {["Beginner", "Intermediate"].map((level) => (
            <label
              key={level}
              className="flex items-center space-x-2 text-sm text-gray-700"
            >
              <input type="checkbox" className="accent-blue-600" />
              <span>{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 🎯 Popular Topics */}
      <div className="mb-5">
        <h3 className="text-sm font-medium text-gray-600 mb-2">
          Popular Topics
        </h3>
        <div className="space-y-2">
          {(showAllTopics ? topics : topics.slice(0, 5)).map((topic) => (
            <label
              key={topic}
              className="flex items-center space-x-2 text-sm text-gray-700"
            >
              <input type="checkbox" className="accent-blue-600" />
              <span>{topic}</span>
            </label>
          ))}
          <button
            className="flex items-center text-sm text-gray-600 mt-1 "
            onClick={() => setShowAllTopics(!showAllTopics)}
          >
            {showAllTopics ? "Show Less" : "Show More"}
            {showAllTopics ? (
              <FaChevronUp className="ml-1" size={10} />
            ) : (
              <FaChevronDown className="ml-1" size={10} />
            )}
          </button>
        </div>
      </div>

      {/* 👥 Collaborators */}
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">
          Collaborators
        </h3>
        <div className="space-y-2">
          {(showAllCollaborators
            ? collaborators
            : collaborators.slice(0, 5)
          ).map((collab) => (
            <label
              key={collab}
              className="flex items-center space-x-2 text-sm text-gray-700"
            >
              <input type="checkbox" className="accent-blue-600" />
              <span>{collab}</span>
            </label>
          ))}
          <button
            className="flex items-center text-sm text-gray-600 mt-1"
            onClick={() => setShowAllCollaborators(!showAllCollaborators)}
          >
            {showAllCollaborators ? "Show Less" : "Show More"}
            {showAllCollaborators ? (
              <FaChevronUp className="ml-1" size={10} />
            ) : (
              <FaChevronDown className="ml-1" size={10} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;
