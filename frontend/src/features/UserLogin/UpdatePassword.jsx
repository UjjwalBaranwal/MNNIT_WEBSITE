import Button from "../../component/Button";
import InputField from "./InputField";

function UpdatePassword() {
  return (
    <div className="m-4">
      <h1 className="font-extrabold text-4xl">
        <span className="border-b-4 border-b-green-400">Update</span> Password
      </h1>
      <form className="flex flex-col gap-5 m-5">
        <InputField
          type={"password"}
          placeholder={"testing"}
          labelName={"Current Password"}
        />
        <InputField
          type={"password"}
          placeholder={"testing"}
          labelName={"New Password"}
        />
        <InputField
          type={"password"}
          placeholder={"testing"}
          labelName={"Re-Enter New Password"}
        />

        <Button rounded secondary_mid outline className="text-black">
          Update
        </Button>
      </form>
    </div>
  );
}

export default UpdatePassword;
