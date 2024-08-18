function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-center  ">
        <h1 className="text-4xl  m-4 p-4 text-center font-bold">
          <span className="text-green-700 italic text-[60px] ">&quot; </span>
          Bridging the Past, Present, and Future.
          <span className="text-green-700 italic text-[60px]">&quot;</span>
        </h1>
        <p className=" text-center p-4 m-4 text-2xl font-mono">
          Welcome to your home away from home. This platform is dedicated to
          fostering lifelong connections among our esteemed alumni. Here, you
          will find a space to celebrate your achievements, support one another,
          and contribute to the future of our alma mater. As we bridge the gap
          between the past and the future, we invite you to take part in shaping
          the journey ahead. Together, we can create a thriving community that
          supports every member, every step of the way.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
