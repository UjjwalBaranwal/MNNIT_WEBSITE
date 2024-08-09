import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className=" p-[3.2rem_2.4rem] border-r-2 border-grey-100 row-span-full flex flex-col gap-8 ">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
