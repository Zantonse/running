import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TimelinePage from "./pages/TimelinePage";
import CalendarPage from "./pages/CalendarPage";
import LearnPage from "./pages/LearnPage";
import LearnLayout from "./components/LearnLayout";
import MobilityPage from "./pages/learn/MobilityPage";
import StretchingPage from "./pages/learn/StretchingPage";
import InjuriesPage from "./pages/learn/InjuriesPage";
import PreventionPage from "./pages/learn/PreventionPage";
import RecoveryPage from "./pages/learn/RecoveryPage";
import AerobicBasePage from "./pages/learn/AerobicBasePage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TimelinePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/learn" element={<LearnLayout />}>
          <Route path="aerobic-base" element={<AerobicBasePage />} />
          <Route path="mobility" element={<MobilityPage />} />
          <Route path="stretching" element={<StretchingPage />} />
          <Route path="injuries" element={<InjuriesPage />} />
          <Route path="prevention" element={<PreventionPage />} />
          <Route path="recovery" element={<RecoveryPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
