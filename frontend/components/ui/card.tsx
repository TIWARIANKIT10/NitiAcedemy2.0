export default function CourseCard() {
  return (
    <div className="relative w-[320px] h-[460px] rounded-2xl overflow-hidden shadow-lg">
      {/* Background image */}
      <img
        src="/webdev.jpg" // replace with your image path
        alt="Web Development"
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/90 via-[#0b0b0b]/30 to-transparent"></div>

      {/* Card Content */}
      <div className="absolute bottom-0 p-6 text-white">
        <h2 className="text-xl font-semibold mb-1">Web Development</h2>
        <p className="text-sm text-gray-200 mb-4">
          Build stunning, responsive websites from scratch using HTML, CSS, and JavaScript.
        </p>

        {/* Tags */}
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 text-xs bg-gray-800/60 rounded-full border border-gray-600">
            3 Months
          </span>
          <span className="px-3 py-1 text-xs bg-gray-800/60 rounded-full border border-gray-600">
            Beginner Friendly
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 py-2 rounded-full bg-green-500 hover:bg-green-600 transition">
            Enroll Now
          </button>
          <button className="flex-1 py-2 rounded-full bg-[#282828] hover:bg-[#333] border border-gray-600 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}