import CourseFilters from "../components/CourseFilters";
import CoursesGrid from "../components/CoursesGrid";
import MostPopularAndTopRated from "../components/MostPopularAndTopRated";
import Footer from "../components/common/Footer";

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🚀 Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left: Heading & Text */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-10">
              All Courses
            </h1>
            <p className="text-lg font-semibold text-gray-600 mb-6">
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
        {/* Left Filters (fixed & scrollable if needed) */}
        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto pr-0">
            <CourseFilters />
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="col-span-12 lg:col-span-8 space-y-6">
          <MostPopularAndTopRated />
          <CoursesGrid />
        </main>
      </div>

      {/* 📌 Footer */}
      <Footer />
    </div>
  );
};

export default Courses;
