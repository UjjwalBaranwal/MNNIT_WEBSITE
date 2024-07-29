import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router";
function AppLayout() {
  //   return (
  //     <>
  //       <Header />
  //       <Slides />
  //       <DescriptionHeader />
  //       <Footer />
  //     </>
  //   );
  // }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
