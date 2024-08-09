import { BrowserRouter, Route, Routes } from "react-router-dom";

// imports for Landing Pages
import AppLayout from "./component/AppLayout";
import Homepage from "./features/Homepage/Homepage";
import Community from "./features/Community/Community";
import Volunteer from "./features/Volunteer/Volunteer";
import Event from "./features/EventPage/Event";
import Benefit from "./features/Benefit/Benefit";
import Giving from "./features/Giving/Giving";
import Stories from "./features/Stories/Stories";
import CareerPage from "./features/Career/CareerPage";
import ErrorPage from "./features/ErrorPage/ErrorPage";
import LoginPage from "./features/Authentication/LoginPage";
import TeamPage from "./features/Team/TeamPage";
// function App() {
//   return <AppLayout />;
// }
// imports for Login PAge
import AppLogin from "./features/UserLogin/AppLayout";
import Dashboard from "./features/UserLogin/Dashboard";
import EventLogin from "./features/UserLogin/Event";
import JobPost from "./features/UserLogin/JobPost";
import Settings from "./features/UserLogin/Settings";
import Logout from "./features/UserLogin/Logout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="community" element={<Community />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="event" element={<Event />} />
          <Route path="benefit" element={<Benefit />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="stories" element={<Stories />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="teams" element={<TeamPage />} />
        </Route>
        <Route path="giving" element={<Giving />} />
        <Route path="log" element={<AppLogin />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="event" element={<EventLogin />} />
          <Route path="jobPost" element={<JobPost />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
