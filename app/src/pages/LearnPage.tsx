import { Link } from "react-router-dom";

const topics = [
  {
    to: "/learn/aerobic-base",
    image: "/images/learn/aerobic-base.png",
    title: "Aerobic Base",
    summary:
      "Zone 2 physiology, MAF training, and how to build your aerobic foundation over 8–16 weeks.",
  },
  {
    to: "/learn/running-form",
    image: "/images/learn/running-form.png",
    title: "Running Form",
    summary:
      "Cadence, foot strike, arm swing, and the biomechanics that actually matter — ranked by evidence.",
  },
  {
    to: "/learn/half-marathon",
    image: "/images/learn/half-marathon.png",
    title: "Half Marathon",
    summary:
      "Training plans compared, key workouts, pacing strategy, fueling by finish time, and race-day execution.",
  },
  {
    to: "/learn/running-shoes",
    image: "/images/learn/running-shoes.png",
    title: "Running Shoes",
    summary:
      "Foam science, carbon plates, shoe rotation, daily trainer picks, and what's actually worth the money.",
  },
  {
    to: "/learn/running-gear",
    image: "/images/learn/running-gear.png",
    title: "Running Gear",
    summary:
      "Shirts, shorts, brands, fabric science, temperature dressing guide, and building a wardrobe by budget.",
  },
  {
    to: "/learn/mobility",
    image: "/images/learn/mobility.png",
    title: "Mobility",
    summary: "Hip, ankle & thoracic drills to unlock your stride and prevent compensation injuries.",
  },
  {
    to: "/learn/stretching",
    image: "/images/learn/stretching.png",
    title: "Stretching",
    summary: "When and how to stretch — dynamic pre-run, static post-run, and PNF for deep flexibility.",
  },
  {
    to: "/learn/injuries",
    image: "/images/learn/injuries.png",
    title: "Injuries",
    summary: "The 6 most common running injuries — symptoms, root causes, and recovery timelines.",
  },
  {
    to: "/learn/prevention",
    image: "/images/learn/prevention.png",
    title: "Prevention",
    summary: "Strength training, load management & form cues that cut injury risk by 30–47%.",
  },
  {
    to: "/learn/recovery",
    image: "/images/learn/recovery.png",
    title: "Recovery",
    summary: "Foam rolling, cold water immersion, nutrition timing, and sleep optimization.",
  },
];

export default function LearnPage() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-stone-900 mb-1">Learn</h2>
        <p className="text-stone-500 text-sm">
          Evidence-based guides to stay healthy and run stronger.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {topics.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            className="group bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="aspect-video bg-stone-100 overflow-hidden">
              <img
                src={t.image}
                alt={t.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-stone-900 mb-1">{t.title}</h3>
              <p className="text-sm text-stone-500 leading-snug">{t.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
