import SmallCard from "./SmallCard";

function Impact() {
  return (
    <div className="flex flex-col m-5 p-2 " id="impact">
      <div className="text-center text-7xl font-serif">Your Impact</div>
      <div className="grid grid-cols-4 m-5 p-4  ">
        <SmallCard name="project" stat={100} />
        <SmallCard name="donors" stat={10000} />
        <SmallCard name="Corporate Partners" stat={65} />
        <SmallCard name="crores raised" stat={539} />
      </div>
      <div className="grid grid-cols-4 m-5 p-4  ">
        <SmallCard name="Scholarships" stat={154} />
        <SmallCard name="Student Awards" stat={74} />
        <SmallCard name="Faculity Chairs" stat={57} />
        <SmallCard name="Faculity fellowship" stat={16} />
        <SmallCard name="Beneficiaries" stat={57} />
        <SmallCard name="Beneficiaries" stat={27} />
        <SmallCard name="Beneficiaries" stat={27} />
        <SmallCard name="Beneficiaries" stat={27} />
      </div>
    </div>
  );
}

export default Impact;
