import { useState } from "react";
const faqs = [
  {
    question: "How can I update my contact information?",
    answer:
      "You can update your contact information by logging into your alumni account and navigating to the 'Profile' section.",
  },
  {
    question: "Where can I access my transcripts?",
    answer:
      "Transcripts can be accessed through the 'Academic Records' section of your alumni portal. If you need assistance, contact the registrar's office.",
  },
  {
    question: "Are there any alumni events coming up?",
    answer:
      "Check our Events page for the latest information on upcoming alumni gatherings and networking events.",
  },
  {
    question: "How do I join the alumni network?",
    answer:
      "You can join the alumni network by registering on our website and selecting 'Alumni Network' from the options available.",
  },
  {
    question: "What career services are available to alumni?",
    answer:
      "We offer various career services, including job placement assistance, resume reviews, and career counseling. Visit the Career Services page for more details.",
  },
  {
    question: "Can I access the library resources as an alum?",
    answer:
      "Yes, alumni can access certain library resources online. Visit the Library Access page for more information and login instructions.",
  },
  {
    question: "How do I get involved with mentoring current students?",
    answer:
      "You can sign up to be a mentor through the 'Mentorship Program' section on our website.",
  },
  {
    question: "What are the benefits of being an alumni member?",
    answer:
      "Alumni benefits include networking opportunities, access to exclusive events, discounts on courses, and more. Visit our Benefits page for a full list.",
  },
  {
    question: "How can I make a donation to the institution?",
    answer:
      "Donations can be made through the 'Giving' section on our website. You can choose to contribute to specific programs or general funds.",
  },
  {
    question: "How do I find fellow alumni?",
    answer:
      "You can connect with fellow alumni through the 'Alumni Directory' available in your alumni account or through our social media groups.",
  },
  {
    question: "What kind of continuing education opportunities are available?",
    answer:
      "We offer a range of continuing education courses and workshops. Check the Continuing Education page for current offerings.",
  },
  {
    question: "Can I access my old email account?",
    answer:
      "Access to old email accounts may be restricted. Please contact IT support for assistance with accessing archived emails.",
  },
  {
    question: "How do I report a change in my employment status?",
    answer:
      "Update your employment status by logging into your alumni account and navigating to the 'Employment Information' section.",
  },
  {
    question: "Are there any alumni chapters or clubs?",
    answer:
      "Yes, we have several regional alumni chapters and special interest clubs. Visit the Alumni Chapters page to find one near you.",
  },
  {
    question: "How can I request a certificate of alumni status?",
    answer:
      "You can request a certificate of alumni status by contacting the alumni office through the contact form on our website.",
  },
  {
    question: "What resources are available for alumni entrepreneurs?",
    answer:
      "We offer resources like business development workshops, networking events, and mentorship programs for alumni entrepreneurs.",
  },
  {
    question: "How can I update my graduation year?",
    answer:
      "To update your graduation year, please contact the alumni office directly with your request.",
  },
  {
    question: "Can I access career counseling services remotely?",
    answer:
      "Yes, career counseling services are available remotely. Schedule an appointment through our online booking system.",
  },
  {
    question: "What should I do if I forgot my alumni account password?",
    answer:
      "If you forgot your password, use the 'Forgot Password' link on the login page to reset it.",
  },
  {
    question: "How can I provide feedback about alumni services?",
    answer:
      "Feedback can be provided through the 'Feedback' section on our website or by contacting us via email.",
  },
];
function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-fit mx-auto p-6 flex flex-col gap-7">
      <h2 className="text-center text-5xl font-serif">
        Frequently Asked Questions
      </h2>
      <div className="bg-white shadow-md rounded-md grid grid-cols-2 gap-7">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full px-4 py-3 text-left font-medium text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <svg
                className={`inline-block w-5 h-5 float-right transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="p-4">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
