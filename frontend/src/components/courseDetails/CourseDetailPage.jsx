import React from "react";
import { useParams } from "react-router-dom";
import { courseData } from "../components/lib/constsnt";
import SpecializationDetail from "../components/CourseDetails/SpecializationDetail";
import ShortCourseDetail from "../components/CourseDetails/ShortCourseDetail";
import CourseDetail from "../components/CourseDetails/CourseDetail";

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = courseData.find((c) => c.id === parseInt(id));

  if (!course) return <div>Course not found.</div>;

  // Render different UIs based on type
  switch (course.type) {
    case "Specialization":
      return <SpecializationDetail course={course} />;
    case "Short Course":
      return <ShortCourseDetail course={course} />;
    case "Course":
      return <CourseDetail course={course} />;
    default:
      return <div>Unknown course type.</div>;
  }
};

export default CourseDetailPage;
