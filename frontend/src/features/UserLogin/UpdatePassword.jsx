import Button from "../../component/Button";
import InputField from "./InputField";

function UpdatePassword() {
  return (
    <div className="m-4 max-w-2xl">
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

        <div className="flex items-center justify-end">
          <Button rounded outline className="text-black bg-emerald-400">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePassword;
