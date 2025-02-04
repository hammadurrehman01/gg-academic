import Image from "next/image";
import React from "react";

const reviews = [
  {
    name: "Sophia D.",
    study: "Law Studies",
    location: "Edinburgh, Scotland",
    university: "University of Edinburgh",
    review:
      "The support I got for my legal case studies was outstanding. The writer's attention to detail was impressive. Highly recommended!",
    ratingImage: "/reviews-gg/5star-rating.webp",
    avatarImage: "/reviews-gg/reviews-gg-2.jpg",
    logoImage: "/gogrades.org_assests/logo.webp",
  },
  {
    name: "James W.",
    study: "Business Management",
    location: "London, UK",
    university: "University College London",
    review:
      "The team delivered a fantastic dissertation on time. It was well-researched and perfectly written.",
    ratingImage: "/reviews-gg/5star-rating.webp",
    avatarImage: "/reviews-gg/reviews-gg-3.jpg",
    logoImage: "/gogrades.org_assests/logo.webp",
  },
  {
    name: "Amelia T.",
    study: "Computer Science",
    location: "Manchester, UK",
    university: "University of Manchester",
    review:
      "I was impressed with the code quality and the timely delivery. My project turned out exactly as expected.",
    ratingImage: "/reviews-gg/5star-rating.webp",
    avatarImage: "/reviews-gg/reviews-gg-4.jpg",
    logoImage: "/gogrades.org_assests/logo.webp",
  },
  {
    name: "Oliver S.",
    study: "Psychology",
    location: "Cambridge, UK",
    university: "University of Cambridge",
    review:
      "The assistance I received was exceptional. My research paper was well-crafted and received excellent feedback.",
    ratingImage: "/reviews-gg/5star-rating.webp",
    avatarImage: "/reviews-gg/reviews-gg-5.jpg",
    logoImage: "/gogrades.org_assests/logo.webp",
  },
  {
    name: "Isabella L.",
    study: "Marketing",
    location: "Berlin, Germany",
    university: "Berlin School of Economics and Law",
    review:
      "The marketing plan delivered was beyond expectations. The content was innovative and relevant.",
    ratingImage: "/reviews-gg/5star-rating.webp",
    avatarImage: "/reviews-gg/reviews-gg-6.jpg",
    logoImage: "/gogrades.org_assests/logo.webp",
  },
  {
    name: "Ethan R.",
    study: "Engineering",
    location: "New York, USA",
    university: "Massachusetts Institute of Technology",
    review:
      "The quality of work was impeccable, and the research was thorough. Truly exceeded my expectations!",
    ratingImage: "/reviews-gg/5star-rating.webp",
    avatarImage: "/reviews-gg/reviews-gg-7.jpg",
    logoImage: "/gogrades.org_assests/logo.webp",
  },
  {
    name: "Charlotte K.",
    study: "Economics",
    location: "Toronto, Canada",
    university: "University of Toronto",
    review:
      "The help with my economics assignment was invaluable. The writer understood the topic thoroughly and delivered exceptional work.",
    ratingImage: "/reviews-gg/5star-rating.webp",
    avatarImage: "/reviews-gg/reviews-gg-8.jpg",
    logoImage: "/gogrades.org_assests/logo.webp",
  },
  {
    name: "Benjamin M.",
    study: "Biology",
    location: "Sydney, Australia",
    university: "University of Sydney",
    review:
      "I got top-notch support for my biology thesis. The details were well-explained, and the paper was perfectly structured.",
    ratingImage: "/reviews-gg/5star-rating.webp",
    avatarImage: "/reviews-gg/reviews-gg-9.jpg",
    logoImage: "/gogrades.org_assests/logo.webp",
  },
  {
    name: "Mia P.",
    study: "Art History",
    location: "Paris, France",
    university: "Université Paris-Sorbonne",
    review:
      "The writing was thorough and beautifully articulated. The assignment was on point and delivered promptly.",
    ratingImage: "/reviews-gg/5star-rating.webp",
    avatarImage: "/reviews-gg/reviews-gg-10.jpg",
    logoImage: "/gogrades.org_assests/logo.webp",
  },
  {
    name: "Lucas H.",
    study: "Architecture",
    location: "Barcelona, Spain",
    university: "University of Barcelona",
    review:
      "The work I received for my architecture project was outstanding. It reflected the required specifications perfectly.",
    ratingImage: "/reviews-gg/5star-rating.webp",
    avatarImage: "/reviews-gg/reviews-gg-11.jpg",
    logoImage: "/gogrades.org_assests/logo.webp",
  },
  {
    name: "Amos F.",
    study: "Physics",
    location: "Zurich, Switzerland",
    university: "ETH Zurich",
    review:
      "The detailed explanations and well-researched findings in my physics paper were exceptional.",
    ratingImage: "/reviews-gg/5star-rating.webp",
    avatarImage: "/reviews-gg/reviews-gg-12.jpg",
    logoImage: "/gogrades.org_assests/logo.webp",
  },
  {
    name: "Emily C.",
    study: "History",
    location: "Los Angeles, USA",
    university: "University of California, Los Angeles",
    review:
      "This service helped me tremendously with my history paper. The depth of research was impressive.",
    ratingImage: "/reviews-gg/5star-rating.webp",
    avatarImage: "/reviews-gg/reviews-gg-13.jpg",
    logoImage: "/gogrades.org_assests/logo.webp",
  },
];

function ReviewsTest() {
  return (
    <div id="reviews" className="max-w-screen-xl mx-auto pt-12 pb-6">
      <h2 className="text-center font-bold text-[#071e57] text-xl md:text-3xl">
        Satisfied Customers Reviews
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 px-4 py-4 mt-7">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto bg-transparent shadow-lg rounded-xl border border-gray-900 transition ease-in delay-300 duration-300 hover:scale-100 scale-95 hover:shadow-2xl flex flex-col"
          >
            <div className="flex items-center mb-4 px-4 py-4">
              <Image
                className="rounded-full h-16 w-16 transition-transform transform hover:scale-105"
                src={review.avatarImage}
                width={40}
                height={40}
                alt="reviews"
              />
              <div className="ml-4">
                <h2 className="text-blue-950 font-bold text-lg hover:text-blue-700 transition-colors">
                  {review.name}
                </h2>
                <p className="text-gray-800 font-semibold">{review.study}</p>
                <p className="text-blue-900 font-bold">{review.location}</p>
                <p className="text-gray-900 font-bold">{review.university}</p>
                <Image
                  className="mt-2 transition-transform transform hover:scale-110"
                  src={review.ratingImage}
                  width={120}
                  height={120}
                  alt="reviews"
                />
              </div>
            </div>
            <p className="text-gray-900 font-medium text-sm mb-6 px-4 flex-grow">
              {review.review}
            </p>
            <div className="bg-blue-950 rounded-br-xl rounded-bl-xl py-2">
              <div className="flex items-center justify-center">
                <Image
                  className="transition-transform transform hover:scale-105"
                  src={review.logoImage}
                  alt="Logo"
                  width={220}
                  height={220}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsTest;
