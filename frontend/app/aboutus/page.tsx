import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-[#c6d3e6] to-[#79b4f3]">
        <div className="max-w-4xl text-center">
          <h2 className="text-red-500 text-lg font-semibold mb-2 tracking-wide uppercase">
            About Us
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-snug">
            Niti Academy: Shaping Tomorrow's IT Leaders in Pokhara
          </h1>
          <p className="text-gray-700 mb-4 text-lg sm:text-xl">
            At Niti Academy, we are dedicated to shaping the next generation of IT
            leaders in Pokhara. Our comprehensive courses cover the latest
            technologies and industry trends, equipping students with the skills and
            knowledge needed to excel in today's competitive digital landscape.
          </p>
          <p className="text-gray-700 mb-8 text-lg sm:text-xl">
            With a focus on hands-on learning and personalized support, we empower
            aspiring tech professionals to achieve their career goals and make a
            meaningful impact in the world of information technology.
          </p>
          <button className="mt-6 bg-red-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-red-600 transition">
            Our Courses
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row justify-around w-full max-w-6xl mx-auto px-4 gap-8">
        <div className="text-center flex-1 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            🎓
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Best IT Courses</h3>
          <p className="text-gray-600">
            Discover the best IT courses at Niti Academy, designed to equip you
            with essential skills and practical knowledge.
          </p>
        </div>

        <div className="text-center flex-1 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            👥
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Team</h3>
          <p className="text-gray-600">
            Our experienced team of IT professionals is dedicated to delivering
            top-quality education and mentorship.
          </p>
        </div>

        <div className="text-center flex-1 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            🤝
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentorship</h3>
          <p className="text-gray-600">
            Our instructors provide personalized guidance, helping students
            navigate their learning paths and achieve their career aspirations.
          </p>
        </div>
      </div>

      {/* Google Map Section */}
    <div className="w-full h-[500px] mt-16">
  <iframe
    src="https://www.google.com/maps?q=28.216711,83.989762&hl=en&z=18&output=embed"
    className="w-full h-full border-0"
    loading="lazy"
    allowFullScreen
  ></iframe>
</div>


    </div>
  );
};

export default AboutPage;
