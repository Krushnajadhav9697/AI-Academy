import React, { useState } from "react";
import MpTrCard from "../components/MpTrCard"; // ✅ The component that displays cards in a horizontal scroll
import { courseData } from "../components/lib/constsnt";

const MostPopularAndTopRated = () => {
  const [activeTab, setActiveTab] = useState("popular");

  // ✅ For now: pick first 3 as popular, next 3 as top rated
  const popularCourses = courseData.slice(0, 3);
  const topRatedCourses = courseData.slice(3, 6);

  return (
    <div className="mb-6">
      {/* Tabs */}
      <div className="flex border-b mb-4">
        <button
          onClick={() => setActiveTab("popular")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "popular"
              ? "border-b-2 border-[#3D74B6] text-[#3D74B6]"
              : "text-gray-600 hover:text-[#3D74B6]"
          }`}
        >
          Most Popular
        </button>
        <button
          onClick={() => setActiveTab("topRated")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "topRated"
              ? "border-b-2 border-[#3D74B6] text-[#3D74B6]"
              : "text-gray-600 hover:text-[#3D74B6]"
          }`}
        >
          Top Rated
        </button>
      </div>
            
      {/* Carousel */}
      {activeTab === "popular" && <MpTrCard courses={popularCourses} />}
      {activeTab === "topRated" && <MpTrCard courses={topRatedCourses} />}
    </div>
  );
};

export default MostPopularAndTopRated;
