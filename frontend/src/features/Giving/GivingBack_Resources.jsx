import Card from "./Card";

function GivingBack_Resources() {
  const givingBackResources = [
    {
      id: 1,
      title: "Annual Giving",
      image: "https://picsum.photos/seed/annual_giving/600/400",
      text: "Your contributions have been critical in the growth and eminence of your Alma mater. Every time you give back, you contribute towards the brighter future of MNNIT.",
    },
    {
      id: 2,
      title: "Batch Initiative",
      image: "https://picsum.photos/seed/batch_initiative/600/400",
      text: "Join your batchmates in supporting a cause or project. Together, you can make a significant impact on the MNNIT community.",
    },
    {
      id: 3,
      title: "Community Welfare",
      image: "https://picsum.photos/seed/community_welfare/600/400",
      text: "Contribute to initiatives aimed at improving the well-being of the local community. Your support can bring positive changes to those in need.",
    },
    {
      id: 4,
      title: "Current Campaign",
      image: "https://picsum.photos/seed/current_campaign/600/400",
      text: "Be a part of our current fundraising campaign. Your donations help us achieve specific goals and milestones set for the year.",
    },
    {
      id: 5,
      title: "Health and Wellness",
      image: "https://picsum.photos/seed/health_wellness/600/400",
      text: "Support health and wellness programs for students and staff. Your contributions can provide better healthcare facilities and promote healthy living.",
    },
    {
      id: 6,
      title: "Infrastructure",
      image: "https://picsum.photos/seed/infrastructure/600/400",
      text: "Help build and improve the infrastructure at MNNIT. Your support creates better learning and living environments for students and faculty.",
    },
    {
      id: 7,
      title: "R&D Facilities",
      image: "https://picsum.photos/seed/rnd_facilities/600/400",
      text: "Invest in state-of-the-art research and development facilities. Your contributions enable groundbreaking research and innovation.",
    },
    {
      id: 8,
      title: "Students",
      image: "https://picsum.photos/seed/students/600/400",
      text: "Directly support the students of MNNIT through various initiatives, including scholarships, mentorship programs, and more.",
    },
  ];

  return (
    <div className="m-5 p-2">
      <h1 className="text-center text-7xl font-serif">
        Giving Back : Resources
      </h1>
      <div className="grid grid-cols-4 gap-10 my-6 py-6">
        {givingBackResources.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default GivingBack_Resources;
