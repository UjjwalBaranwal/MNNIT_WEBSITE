import logo from '../../assets/mayank_sir.jpg'

function About() {
  const paraStyling = "p-4 my-2 text-xl";
  return (
    <div className="border col-span-3 text-wrap h-[100%] ">
      <h1 className="font-extrabold text-5xl my-2 mx-3 ">
        <span className="border-b-4 border-b-cyan-700">Ab</span>out Us
      </h1>
      <img src={logo} alt="" className='float-left h-64  m-4 border-2 border-gray-400 rounded'/>
      <p className={paraStyling}>
        Welcome to the alumni page of the Department of Computer Science and
        Engineering at Motilal Nehru National Institute of Technology (MNNIT)
        Allahabad. Our vibrant community of alumni is a testament to the rich
        legacy and impact of the CSE branch at MNNIT. With a tradition of
        excellence in education, research, and innovation, our alumni have
        consistently contributed to the technological advancements and societal
        progress across the globe.
      </p>
      <p className={paraStyling}>
        Our department is renowned for its cutting-edge curriculum, world-class
        faculty, and state-of-the-art facilities, which together create an
        environment conducive to learning and growth. The knowledge and skills
        imparted at MNNIT Allahabad have equipped our alumni to excel in diverse
        fields, ranging from software development and data science to artificial
        intelligence and cybersecurity. <br className="p-1" />
        The alumni network of CSE at MNNIT is not just a group of former
        students; its a thriving community that continues to inspire and support
        each other. Whether its through mentorship, collaboration, or simply
        sharing experiences, our alumni play a crucial role in shaping the
        future of the next generation of engineers. <br className="p-1"/>
        We take pride in the achievements of our alumni, who have made
        significant contributions in various sectors, including academia,
        industry, and entrepreneurship. Their accomplishments reflect the
        quality of education and the holistic development provided by our
        institution.
      </p>
      {/* <p className={paraStyling}>
       
      </p>
      <p className={paraStyling}>
      
      </p> */}
      <p className={paraStyling}>
        At MNNIT Allahabad, we believe in fostering a lifelong connection with
        our alumni. This platform serves as a space for our alumni to reconnect,
        reminisce, and stay updated with the latest happenings at the
        department. We encourage all our alumni to stay engaged and involved, as
        we continue to build on the legacy of excellence.
      </p>
      <p className={paraStyling}>
        Together, lets celebrate the spirit of innovation, the pursuit of
        knowledge, and the shared pride in being a part of the MNNIT CSE family.
      </p>
    </div>
  );
}

export default About;
