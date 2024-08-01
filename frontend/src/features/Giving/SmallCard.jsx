function SmallCard({ stat, name }) {
  return (
    <div className="m-4 p-4 flex flex-col gap-2 justify-center items-center ">
      <h1 className="text-2xl font-bold font-mono">{stat}</h1>
      <h1 className="text-xl font-semibold capitalize font-sans">{name}</h1>
    </div>
  );
}

export default SmallCard;
