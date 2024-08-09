import Button from "../../component/Button";
import InputField from "./InputField";

function BasicDetail() {
  return (
    <div className="m-4">
      <h1 className="font-extrabold text-4xl">
        <span className="border-b-4 border-b-green-400">Basic</span> Detail
      </h1>
      <form className="flex flex-col gap-5 m-5">
        <InputField
          type={"text"}
          placeholder={"testing"}
          labelName={"First Name"}
        />
        <InputField
          type={"text"}
          placeholder={"testing"}
          labelName={"Last  Name"}
        />
        <InputField
          type={"tel"}
          placeholder={"777-777-7777"}
          labelName={"Phone No."}
        />
        <InputField
          type={"email"}
          placeholder={"your_email@mnnit.ac.in"}
          labelName={"Email"}
        />
        <InputField
          type={"text"}
          placeholder={"ceo-of-xyz"}
          labelName={"Current Working Place"}
        />
        <Button rounded secondary_mid outline className="text-black">
          Update
        </Button>
      </form>
    </div>
  );
}

export default BasicDetail;
