import { NavLink, Outlet } from "react-router-dom";

const topics = [
  { to: "/learn/aerobic-base", label: "Aerobic Base" },
  { to: "/learn/running-form", label: "Running Form" },
  { to: "/learn/mobility", label: "Mobility" },
  { to: "/learn/stretching", label: "Stretching" },
  { to: "/learn/injuries", label: "Injuries" },
  { to: "/learn/prevention", label: "Prevention" },
  { to: "/learn/recovery", label: "Recovery" },
];

export default function LearnLayout() {
  return (
    <div>
      <nav className="flex gap-1 bg-stone-100 rounded-lg p-1 mb-6 overflow-x-auto">
        {topics.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            className={({ isActive }) =>
              `px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                isActive
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-500 hover:text-stone-700"
              }`
            }
          >
            {t.label}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
