import profile from "../../assets/profile.png";
function Header() {
  return (
    <header className="px-4 py-8 relative shadow-md shadow-gray-300">
      <div className="flex flex-col  ">
        <h1 className="font-bold text-3xl font-heading ">
          Department Alumni Interaction and Interface Committee (DAIIC)
        </h1>
        <div className="grid grid-cols-[0.25fr_2fr] items-center mt-8">
          <div className="flex justify-center items-center">
            <img
              src={profile}
              alt=""
              className="h-10 cursor-pointer text-center"
            />
          </div>
          <div>
            <h2 className="font-semibold text-xl font-heading">
              Welcome, Himanshu Tripathi
            </h2>
            <h3 className="text-gray-400 text-base"><span className="pr-4">Role :</span>  Admin</h3>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
