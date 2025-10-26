import Image from 'next/image';
import Link from 'next/link';

type CourseCardProps = {
  id?: number | string;
  title?: string;
  description?: string;
  image?: string;
  duration?: string;
  price?: string;
};

export default function CourseCard({
  id,
  title = 'Web Development',
  description = 'Build stunning, responsive websites from scratch using HTML, CSS, and JavaScript.',
  image = '/cart1.jpg',
  duration = '3 Months',
  price = '$199',
}: CourseCardProps) {
  return (
    <div className="relative w-full h-[510px] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image src='/cart1.jpg' alt={title} fill className="object-cover" />
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/90 via-[#0b0b0b]/30 to-transparent"></div>

      {/* Card Content */}
      <div className="absolute bottom-0 p-6 text-white w-full">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-sm text-gray-200 mb-4 line-clamp-3">{description}</p>

        {/* Tags */}
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 text-xs bg-gray-800/60 rounded-full border border-gray-600">
            {duration}
          </span>
          <span className="px-3 py-1 text-xs bg-gray-800/60 rounded-full border border-gray-600">
            Beginner Friendly
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
         <Link href="/Contact" className="flex-1 py-2 rounded-full bg-green-500 hover:bg-green-600 hover:text-gray-700 transition text-center">
          <button >
            Enroll Now 
          </button>
          </Link>
          <Link
            href={id ? `/Course/${id}` : '#'}
            className="flex-1 py-2 rounded-full bg-[#282828] hover:bg-[#333] border border-gray-600 transition text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}