import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import Homepage from "./features/Homepage/Homepage";
import Community from "./features/Community/Community";
import Volunteer from "./features/Volunteer/Volunteer";
import Event from "./features/EventPage/Event";
import Benefit from "./features/Benefit/Benefit";
import Giving from "./features/Giving/Giving";
import Stories from "./features/Stories/Stories";

// function App() {
//   return <AppLayout />;
// }
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="community" element={<Community />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="event" element={<Event />} />
          <Route path="benefit" element={<Benefit />} />
          <Route path="giving" element={<Giving />} />
          <Route path="stories" element={<Stories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
