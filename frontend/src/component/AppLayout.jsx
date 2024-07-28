import Footer from "./Footer";
import Header from "./Header";
import DescriptionHeader from "./DescriptionHeader";
import Slides from "./Slides";
function AppLayout() {
  return (
    <>
      <Header />
      <Slides />
      <DescriptionHeader />
      <Footer />
    </>
  );
}

export default AppLayout;
