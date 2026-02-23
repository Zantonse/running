import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TimelinePage from "./pages/TimelinePage";
import CalendarPage from "./pages/CalendarPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TimelinePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Route>
    </Routes>
  );
}
