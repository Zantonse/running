import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-10 bg-white border-b border-stone-200">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">Training Tracker</h1>
          <nav className="flex gap-1 bg-stone-100 rounded-lg p-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"
                }`
              }
            >
              Timeline
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"
                }`
              }
            >
              Calendar
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
