import Card from "./Card";

function GivingBack_Time() {
  const givingBackTimes = [
    {
      id: 1,
      title: "Academic Contributions",
      image: "https://picsum.photos/seed/academic_contributions/600/400",
      text: "Support the academic growth and excellence of MNNIT by contributing to educational initiatives and resources.",
    },
    {
      id: 2,
      title: "Alumni Connect",
      image: "https://picsum.photos/seed/alumni_connect/600/400",
      text: "Strengthen the bond with your Alma mater and fellow alumni through events, networking opportunities, and more.",
    },
    {
      id: 3,
      title: "Student Support",
      image: "https://picsum.photos/seed/student_suppor/600/400",
      text: "Help provide essential resources and assistance to students, ensuring they have the support needed for a successful academic journey.",
    },
    {
      id: 4,
      title: "Entrepreneurship",
      image: "https://picsum.photos/seed/ent/600/400",
      text: "Encourage and support the entrepreneurial spirit among students and alumni by contributing to innovation and startup initiatives.",
    },
    {
      id: 5,
      title: "Alumni Inspired Mentorship",
      image: "https://picsum.photos/seed/alumni__mentorship/600/400",
      text: "Join the mentorship programs and guide the next generation of MNNITians, sharing your experience and expertise.",
    },
    {
      id: 6,
      title: "TechConnect",
      image: "https://picsum.photos/seed/tech/600/400",
      text: "Reconnect with fellow CSE alumni and celebrate the advancements in technology and innovation at MNNIT.",
    },
  ];

  return (
    <div className="m-5 p-2">
      <h1 className="text-center text-7xl font-serif">Giving Back : Time</h1>
      <div className="grid grid-cols-3 gap-10 my-6 py-6">
        {givingBackTimes.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default GivingBack_Time;
