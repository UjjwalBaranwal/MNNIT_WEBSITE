import image from "../../assets/mnnit.jpg";
function Logo() {
  return (
    <div className="text-center flex justify-center items-center">
      <img className="h-24 w-auto" src={image} alt="Logo" />
    </div>
  );
}

export default Logo;
