import Footer from "./Footer";
import Header from "./Header";
import DescriptionHeader from "./DescriptionHeader";
import Slides from "./Slides";
import CareerPage from "../features/CareerPage"
function AppLayout() {
  return (
    <>
      <Header />
      {/* <Slides />
      <DescriptionHeader /> */}
      <CareerPage/>
      <Footer />
    </>
  );
}

export default AppLayout;
