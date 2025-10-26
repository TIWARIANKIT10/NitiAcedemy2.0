"use client";

import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { FaStar } from 'react-icons/fa';

type TestimonialCardProps = {
  name: string;
  title?: string;
  rating?: number;
  text?: string;
  imageSrc?: string | StaticImageData;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title = '',
  rating = 0,
  text = '',
  imageSrc,
}) => {
  const displayRating = Math.max(0, Math.min(5, Math.floor(rating)));

  return (
    <div className="bg-gray-300 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${name}'s profile`}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
            <span className="text-sm text-gray-600">{name?.[0] ?? '?'}</span>
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>

      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} className={i < displayRating ? 'text-yellow-400' : 'text-gray-300'} />
        ))}
        <span className="ml-2 text-gray-600">{(rating ?? 0).toFixed(1)}</span>
      </div>

      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  );
};

export default TestimonialCard;