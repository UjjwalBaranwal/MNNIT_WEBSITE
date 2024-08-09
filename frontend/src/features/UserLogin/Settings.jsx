import BasicDetail from "./BasicDetail";
import UpdatePassword from "./UpdatePassword";

function Settings() {
  return (
    <div className="flex flex-col gap-4 ">
      <BasicDetail />
      <UpdatePassword />
    </div>
  );
}

export default Settings;
