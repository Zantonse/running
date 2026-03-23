import { useState } from "react";

interface InfoCardProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function InfoCard({ title, defaultOpen = false, children }: InfoCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-stone-200 rounded-lg bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-stone-900 hover:bg-stone-50 transition-colors"
      >
        {title}
        <svg
          className={`w-5 h-5 text-stone-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-4 text-stone-700 text-sm leading-relaxed space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}
