"use client";

import CourseCard from '@/components/ui/courseCart'
import { courses } from "../Data/courseData";

export default function CoursesPage() {
  return (
    <section className="max-w-6xl mx-auto py-28 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Our Courses</h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {courses.map((course) => (
          <CourseCard key={course.id} id={course.id} title={course.title} description={course.description} image={course.image} duration={course.duration} price={course.price} />
        ))}
      </div>
    </section>
  );
}
