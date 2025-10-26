import Image from "next/image";
import { notFound } from "next/navigation";
import { courses } from "@/app/Data/courseData";

type Props = {
  params: { id: string };
};

export default function CourseDetailPage({ params }: Props) {
  console.log("PARAMS ID:", params.id);

  const course = courses.find(
    (c) => c.id === Number(params.id)
  );

  if (!course) {
    console.log("Course not found for id:", params.id);
    notFound();
  }

  return (
    <section
      className="min-h-screen bg-cover bg-center mt-28"
      style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
    >
      <div className="max-w-4xl mx-auto py-12 px-4 text-white">
        <div className="bg-black bg-opacity-50 rounded-2xl shadow-md p-6">
          <Image
            src={course.image}
            alt={course.title}
            width={800}
            height={400}
            className="rounded-xl w-full h-64 object-cover mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-lg mb-6">{course.description}</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600">
            Enroll Now
          </button>

          <div className="mt-6 grid grid-cols-2 gap-4 text-gray-200">
            <p><strong>Category:</strong> {course.category}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Price:</strong> {course.price}</p>
          </div>
        </div>

       
      </div>
    </section>
  );
}