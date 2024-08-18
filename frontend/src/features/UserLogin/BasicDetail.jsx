import Button from "../../component/Button";
import InputField from "./InputField";

function BasicDetail() {
  return (
    <div className="m-4 max-w-full">
      <h1 className="font-extrabold text-4xl">
        <span className="border-b-4 border-b-green-400">Basic</span> Detail
      </h1>
      <form className="flex flex-col gap-5 m-5">
        <InputField
          type={"text"}
          placeholder={"FirstName"}
          labelName={"First Name"}
        />
        <InputField
          type={"text"}
          placeholder={"Last Name"}
          labelName={"Last  Name"}
        />
        <InputField
          type={"tel"}
          placeholder={"Phone Number"}
          labelName={"Phone No."}
        />
        <InputField
          type={"email"}
          placeholder={"Your_email@mnnit.ac.in"}
          labelName={"Email"}
        />
        <InputField
          type={"text"}
          placeholder={"Working Place"}
          labelName={"Current Working Place"}
        />
        <div className="flex justify-end">
          <Button rounded outline className="text-black bg-emerald-400">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BasicDetail;
