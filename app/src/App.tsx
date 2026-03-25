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
import RunningFormPage from "./pages/learn/RunningFormPage";
import HalfMarathonPage from "./pages/learn/HalfMarathonPage";
import RunningShoesPage from "./pages/learn/RunningShoesPage";
import RunningGearPage from "./pages/learn/RunningGearPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TimelinePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/learn" element={<LearnLayout />}>
          <Route path="aerobic-base" element={<AerobicBasePage />} />
          <Route path="running-form" element={<RunningFormPage />} />
          <Route path="half-marathon" element={<HalfMarathonPage />} />
          <Route path="running-shoes" element={<RunningShoesPage />} />
          <Route path="running-gear" element={<RunningGearPage />} />
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
