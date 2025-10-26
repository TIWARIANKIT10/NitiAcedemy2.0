"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is Niti Academy?",
    answer:
      "Niti Academy is a leading educational platform providing high-quality courses and training programs in management, IT, web development, and professional skills, designed to help students and professionals achieve their career goals.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "You can enroll in a course by visiting the course detail page and clicking the 'Enroll Now' button. You will be guided through a simple registration and payment process.",
  },
  {
    question: "Do you provide certification after course completion?",
    answer:
      "Yes! All our courses provide a recognized certificate upon successful completion, which you can showcase on your LinkedIn profile or resume.",
  },
  {
    question: "Are the courses online or offline?",
    answer:
      "All courses are delivered online, allowing you to learn at your own pace from anywhere in the world. We also provide recorded sessions for reference.",
  },
  {
    question: "Can I get a refund if I am not satisfied?",
    answer:
      "Yes. We offer a 7-day money-back guarantee on most courses. Please check the individual course policy for details.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "No prior experience is required for beginner courses. Our courses are designed to guide you step-by-step, whether you are a beginner or looking to enhance existing skills.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 ">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[ #1f3c88] mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">
          We’ve compiled answers to the most common questions about Niti Academy and our courses.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl border border-gray-100 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-red-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-red-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}