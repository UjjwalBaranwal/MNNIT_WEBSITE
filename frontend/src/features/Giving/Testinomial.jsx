import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const alumniTestimonials = [
  {
    name: "John Doe",
    text: "As an alum, I can say that the education and support I received were instrumental in my career. The faculty and resources were top-notch.",
    rating: 5,
    graduationYear: 2010,
    occupation: "Software Engineer",
  },
  {
    name: "Jane Smith",
    text: "The experience at this institution was transformative. The curriculum and extracurricular activities prepared me well for the real world.",
    rating: 4,
    graduationYear: 2015,
    occupation: "Data Scientist",
  },
  {
    name: "Sam Wilson",
    text: "I had a wonderful time during my years here. The friendships and connections I made have lasted a lifetime.",
    rating: 5,
    graduationYear: 2012,
    occupation: "Entrepreneur",
  },
  {
    name: "Emily Johnson",
    text: "The practical knowledge and hands-on experience I gained were invaluable. I feel well-prepared for the challenges in my career.",
    rating: 4,
    graduationYear: 2018,
    occupation: "Marketing Manager",
  },
  {
    name: "Michael Brown",
    text: "The mentorship I received was exceptional. It played a significant role in shaping my professional path and personal growth.",
    rating: 5,
    graduationYear: 2013,
    occupation: "Financial Analyst",
  },
  {
    name: "Sarah Davis",
    text: "The diverse and inclusive environment was a key factor in my development. I am grateful for the opportunities and experiences provided.",
    rating: 4,
    graduationYear: 2017,
    occupation: "Product Designer",
  },
  {
    name: "David Wilson",
    text: "I appreciated the strong focus on research and innovation. It gave me a competitive edge in my field and helped me advance quickly.",
    rating: 5,
    graduationYear: 2011,
    occupation: "Research Scientist",
  },
  {
    name: "Laura Lee",
    text: "The community and support system were phenomenal. I felt truly valued and supported throughout my time here.",
    rating: 4,
    graduationYear: 2016,
    occupation: "Human Resources Specialist",
  },
  {
    name: "Chris Martinez",
    text: "The program was rigorous and rewarding. It challenged me to push my limits and excel in my chosen career.",
    rating: 5,
    graduationYear: 2014,
    occupation: "Mechanical Engineer",
  },
  {
    name: "Anna Garcia",
    text: "The skills and knowledge I acquired were directly applicable to my career. I am continuously applying what I learned in my daily work.",
    rating: 4,
    graduationYear: 2019,
    occupation: "Content Strategist",
  },
  {
    name: "James Thomas",
    text: "The collaborative projects and teamwork experiences were highlights of my time here. They prepared me for real-world challenges.",
    rating: 5,
    graduationYear: 2009,
    occupation: "Project Manager",
  },
  {
    name: "Olivia Martinez",
    text: "I enjoyed the balance between theory and practical application. The faculty were always approachable and helpful.",
    rating: 4,
    graduationYear: 2014,
    occupation: "UX Researcher",
  },
  {
    name: "Ethan Rodriguez",
    text: "The program provided a solid foundation for my career. I am proud to be an alum and frequently refer back to the lessons learned.",
    rating: 5,
    graduationYear: 2010,
    occupation: "Civil Engineer",
  },
  {
    name: "Mia Anderson",
    text: "The networking opportunities were incredibly valuable. I made connections that have significantly benefited my career development.",
    rating: 4,
    graduationYear: 2016,
    occupation: "Health Analyst",
  },
  {
    name: "William Jackson",
    text: "The emphasis on critical thinking and problem-solving has been crucial in my career. I feel well-prepared for any challenge.",
    rating: 5,
    graduationYear: 2013,
    occupation: "IT Consultant",
  },
  {
    name: "Sophia Clark",
    text: "My time here was filled with growth and learning. The support from the faculty and peers was outstanding and deeply appreciated.",
    rating: 4,
    graduationYear: 2018,
    occupation: "Graphic Designer",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center text-5xl font-serif m-6">
        Alumni Testimonials
      </h2>
      <Slider {...settings}>
        {alumniTestimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-lg text-gray-800 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <span className="font-bold text-gray-700 mr-2">
                  {testimonial.name}
                </span>
                <span className="text-gray-500 text-sm">
                  ({testimonial.graduationYear})
                </span>
              </div>
              <div className="text-gray-500 text-sm">
                {testimonial.occupation}
              </div>
              <div className="flex mt-2">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963h4.173c.958 0 1.357 1.23.588 1.81l-3.36 2.434 1.287 3.963c.3.921-.755 1.688-1.54 1.112L10 13.011l-3.385 2.456c-.784.576-1.84-.191-1.54-1.112l1.287-3.963-3.36-2.434c-.769-.58-.37-1.81.588-1.81h4.173l1.286-3.963z" />
                    </svg>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
