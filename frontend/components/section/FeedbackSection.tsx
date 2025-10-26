import TestimonialCard from '@/components/ui/TestimonialCard';

const FeedbackSection = () => {
  const testimonials = [
    {
      name: 'Jessy Pinkmen',
      title: 'Web Developer',
      rating: 5,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, making it look like readable English.',
      imageSrc: '/jessy-pinkmen.jpg',
    },
    {
      name: 'Jessy Pinkmen',
      title: 'Web Developer',
      rating: 5,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, making it look like readable English.',
      imageSrc: '/jessy-pinkmen.jpg',
    },
    {
      name: 'Jessy Pinkmen',
      title: 'Web Developer',
      rating: 5,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, making it look like readable English.',
      imageSrc: '/jessy-pinkmen.jpg',
    },
    {
      name: 'Jessy Pinkmen',
      title: 'Web Developer',
      rating: 5,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, making it look like readable English.',
      imageSrc: '/jessy-pinkmen.jpg',
    },
  ];

  return (
<section className="py-12 flex justify-center">
  <div className="w-[80%] bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold text-center mb-8">
      What Our Students Are Saying
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          title={testimonial.title}
          rating={testimonial.rating}
          imageSrc={testimonial.imageSrc}
          text={testimonial.text}
        />
      ))}
    </div>
  </div>
</section>


  );
};

export default FeedbackSection;