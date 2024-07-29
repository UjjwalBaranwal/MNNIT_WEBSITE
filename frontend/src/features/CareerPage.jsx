import Card from "../component/Card";

function CareerPage() {
  const posts = [
    {
      index: "r3oyy",
      years: "2-4 yrs",
      title: "Admin Support Executive",
      qualification:
        "Any Graduate, Basic of computer, Knowledge in accounting/CS is preferred",
      responsibilities: [
        "Efficiently manage inventory by implementing control systems",
        "Monitoring stock levels, and conducting audits",
        "Handle donation management, purchase requisitions, petty cash, and vendor relations effectively.",
      ],
    },
    // Add more job data similarly
    {
      index: "r3oyy3",
      years: "5-7 yrs",
      title: "Project Manager",
      qualification: "MBA, PMP Certification preferred",
      responsibilities: [
        "Lead project planning sessions",
        "Coordinate staff and internal resources",
        "Manage project progress and adapt work as required",
        "Ensure projects meet deadlines",
      ],
    },
    {
      index: "r3oyy31",
      years: "5-7 yrs",
      title: "Project Manager",
      qualification: "MBA, PMP Certification preferred",
      responsibilities: [
        "Lead project planning sessions",
        "Coordinate staff and internal resources",
        "Manage project progress and adapt work as required",
        "Ensure projects meet deadlines",
      ],
    },
    {
      index: "r3oyy31",
      years: "5-7 yrs",
      title: "Project Manager",
      qualification: "MBA, PMP Certification preferred",
      responsibilities: [
        "Lead project planning sessions",
        "Coordinate staff and internal resources",
        "Manage project progress and adapt work as required",
        "Ensure projects meet deadlines",
      ],
    },
    {
      index: "r3o1",
      years: "5-7 yrs",
      title: "Project Manager",
      qualification: "MBA, PMP Certification preferred",
      responsibilities: [
        "Lead project planning sessions",
        "Coordinate staff and internal resources",
        "Manage project progress and adapt work as required",
        "Ensure projects meet deadlines",
      ],
    },
    {
      index: "r3o01",
      years: "5-7 yrs",
      title: "Project Manager",
      qualification: "MBA, PMP Certification preferred",
      responsibilities: [
        "Lead project planning sessions",
        "Coordinate staff and internal resources",
        "Manage project progress and adapt work as required",
        "Ensure projects meet deadlines",
      ],
    },
    {
      index: "ro1",
      years: "5-7 yrs",
      title: "Project Manager",
      qualification: "MBA, PMP Certification preferred",
      responsibilities: [
        "Lead project planning sessions",
        "Coordinate staff and internal resources",
        "Manage project progress and adapt work as required",
        "Ensure projects meet deadlines",
      ],
    },
  {
    index:'ehoue2',
    years: '1-4 yrs',
    title: 'Data Profiling Executive',
    qualification: "Bachelor's & master's degree in a data-related field (statistics, computer science, business analytics)",
    responsibilities: [
      'Screen LinkedIn for professional profiles.',
      'Track data completion progress.',
      'Ensure data confidentiality.',
      'Enter information accurately.',
      'Perform additional assigned support tasks.'
    ]
  },
  {
    index:'eh1ue',
    years: '2-4 yrs',
    title: 'Admin Support Executive',
    qualification: 'Any Graduate, Basic of computer, Knowledge in accounting/CS is preferred',
    responsibilities: [
      'Efficiently manage inventory by implementing control systems',
      'Monitoring stock levels, and conducting audits',
      'Handle donation management, purchase requisitions, petty cash, and vendor relations effectively.'
    ]
  },
  {
    index:'ehou1',
    years: '5-7 yrs',
    title: 'Project Manager',
    qualification: 'MBA, PMP Certification preferred',
    responsibilities: [
      'Lead project planning sessions',
      'Coordinate staff and internal resources',
      'Manage project progress and adapt work as required',
      'Ensure projects meet deadlines'
    ]
  },
  {
    index:'ehoue22',
    years: '3-5 yrs',
    title: 'Proposal Writer',
    qualification: "Bachelor's in English, Communications or related field. B.Tech preferred",
    responsibilities: [
      'Develop proposals and MoUs for projects.',
      'Collaborate with teams, tailor proposals, ensure clarity and persuasiveness.',
      'Analyze project requirements, identify challenges, provide insights.',
      'Assist in project documentation, ensure accuracy.',
      'Communicate effectively, liaise between departments.'
    ]
  },
  {
    index:'ehoue2',
    years: '2-4 yrs',
    title: 'Student Relations Manager',
    qualification: 'Bachelors in education, communication, psychology, or social sciences',
    responsibilities: [
      'Enhance student engagement through activities & feedback mechanisms',
      'Provide support services, manage communications',
      'Foster alumni relations to enrich student experience & promote lifelong connections.'
    ]
  },
  {
    index:'ehoue',
    years: '1-4 yrs',
    title: 'Data Profiling Executive',
    qualification: "Bachelor's & master's degree in a data-related field (statistics, computer science, business analytics)",
    responsibilities: [
      'Screen LinkedIn for professional profiles.',
      'Track data completion progress.',
      'Ensure data confidentiality.',
      'Enter information accurately.',
      'Perform additional assigned support tasks.'
    ]
  }
  // ... other entries can be added here
];

    // ...more data entr

  return (
   <div>
     <div className="flex flex-col items-center justify-center p-4 m-4">
    <div className="flex flex-row w-11/12 p-2 m-2 justify-between">
      <h1 className="text-5xl "><span className="border-b-4 border-b-cyan-800">Open</span> Positions</h1>
      <p className="text-center text-xl">Eligible and interested candidates please drop CV to <a href="mnnit.ac.in" className="text-blue-600 hover:text-blue-800 hover:text-xl">mnnit.ac.in</a></p>
    </div>
    <div className="grid grid-cols-3 justify-items-center w-11/12 ">
      {posts.map(
        ({ index, years, title, qualification, responsibilities }) => (
          <Card 
          key={index}
          years={years}
          title={title}
          qualification={qualification}
          responsibilities={responsibilities}
           />
        )
      )}
      
    
    </div>
   
    
  </div>
   </div>
  );
}

export default CareerPage;
