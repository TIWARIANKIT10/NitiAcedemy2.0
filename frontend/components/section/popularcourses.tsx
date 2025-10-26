import React from 'react'
import CourseCard from '../ui/card'
import { courses } from '@/app/Data/courseData'

const PopularCourses = () => {
  const popular = courses.filter(c => c.isPopular);

  return (
    <div className='flex flex-col items-center gap-8 mb-16 px-4 md:px-8'>
      {/* Section Title */}
      <div>
        <h2 className='text-2xl sm:text-3xl font-semibold text-center'>
          Our Popular Courses
        </h2>
      </div>

      {/* Cards Container */}
      <div className='flex flex-wrap justify-center gap-6 sm:gap-10'>
        {popular.map(course => (
          <CourseCard key={course.id} id={course.id} title={course.title} description={course.description} image={course.image} duration={course.duration} price={course.price} />
        ))}
      </div>
    </div>
  )
}

export default PopularCourses
