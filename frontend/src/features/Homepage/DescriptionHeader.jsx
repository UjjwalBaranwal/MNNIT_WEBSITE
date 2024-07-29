import Box from "./Box";

function DescriptionHeader() {
  const array = [
    {
      index: 0,
      title: "Attend an Event",
      description: "Learn, Engage and Celebrate with fellow MNNITian",
      button: "Find Event",
    },
    {
      index: 1,
      title: "Give Back",
      description: "Support MNNIT with your gift",
      button: "Make Your Gift",
    },
    {
      index: 2,
      title: "Explore Community",
      description:
        "Expand your experience with by clubs,classes,events or cause",
      button: "Find Your Community",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <div className="grid grid-cols-3 gap-4 justify-items-center p-2 m-20 w-9/12">
        {array.map((item) => (
          <Box
            key={item.index}
            title={item.title}
            description={item.description}
            index={item.index}
            buttondes={item.button}
          />
        ))}
      </div>
    </div>
  );
}

export default DescriptionHeader;
