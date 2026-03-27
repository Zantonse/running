import InfoCard from "../../components/InfoCard";

export default function MobilityPage() {
  return (
    <article>
      <img
        src="/images/learn/mobility.png"
        alt="Runner performing mobility drills"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Mobility for Runners</h2>
      <p className="text-stone-600 text-sm mb-4">
        Dynamic mobility before every run targets the three highest-leverage joints — hips, ankles,
        and thoracic spine. It raises tissue temperature, activates the nervous system, and improves
        range of motion without impairing force production.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          Key takeaway: 5–10 min of dynamic mobility before running + 15–20 min of dedicated
          sessions 2–3×/week covers all three joint systems.
        </p>
      </div>

      <img
        src="/images/learn/mobility-three-joints.png"
        alt="3 joints that matter: Hips, Ankles, Thoracic Spine. Mobility before flexibility."
        className="w-full rounded-lg mb-4"
      />

      <div className="space-y-3">
        <InfoCard title="Hip Mobility" defaultOpen>
          <p>
            Tight hip flexors shorten stride, compress the lumbar spine, and drive IT band and knee
            overuse. Hip extension deficit is the most common biomechanical limiter in recreational
            runners.
          </p>
          <p className="font-medium text-stone-900 mt-2">Pre-Run (every run)</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Exercise</th>
                  <th className="py-1.5 pr-3">Reps</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Leg swings — front/back</td><td>15/side</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Leg swings — side-to-side</td><td>15/side</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Walking lunge with rotation</td><td>10–12/side</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Hip circle walk</td><td>10–15/side</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Fire hydrant with extension</td><td>10–15/side</td></tr>
                <tr><td className="py-1.5 pr-3">Walking knee hug</td><td>10/side</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Dedicated Sessions (2–3×/week)</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Exercise</th>
                  <th className="py-1.5 pr-3">Sets × Reps</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">90/90 hip sit with arm reach</td><td>10/side</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Hip CARs (controlled articular rotations)</td><td>5 circles/side</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Couch stretch — dynamic pulse</td><td>5–10 pulses/side</td></tr>
                <tr><td className="py-1.5 pr-3">Half-kneeling side lunges</td><td>10/side</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Ankle Mobility">
          <p>
            Ankle dorsiflexion needs at least 10° for safe running. When restricted, the heel rises
            early, the knee collapses inward, and the foot overpronates — overloading the Achilles,
            plantar fascia, and medial knee.
          </p>
          <p className="font-medium text-stone-900 mt-2">
            Self-test: Knee-to-Wall — toes 5″ from wall, drive knee forward keeping heel flat. If
            the heel lifts, you're below 10° dorsiflexion.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Exercise</th>
                  <th className="py-1.5 pr-3">Reps / Duration</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Banded ankle mobilization</td><td>5 × 10–15 sec/side</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">KB/DB ankle mobilization</td><td>5–10 × 15–20 sec/side</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Heel and toe walks</td><td>2 × 30–50 m</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Single-leg balance (eyes closed)</td><td>30 sec/side</td></tr>
                <tr><td className="py-1.5 pr-3">Rebound calf raises (single-leg)</td><td>10–15 bounces/side</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Thoracic Spine">
          <p>
            The thoracic spine rotates counter to the pelvis during running. When stiff, the lumbar
            spine compensates with excessive rotation, increasing lower back strain. Forward-rounded
            shoulders reduce arm swing and degrade running economy.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Exercise</th>
                  <th className="py-1.5 pr-3">Sets × Reps</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Open book over foam roller</td><td>8–10/side</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Thoracic extension over roller</td><td>3 positions × 60 sec</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Cat-cow</td><td>10 reps</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Lunge with rotation</td><td>10–12/side</td></tr>
                <tr><td className="py-1.5 pr-3">Seated shoulder wrap (eagle arms)</td><td>10/side</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Protocol Summary">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Session</th>
                  <th className="py-1.5 pr-3">Frequency</th>
                  <th className="py-1.5">Duration</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Pre-run dynamic warm-up</td><td className="pr-3">Every run</td><td>5–10 min</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Dedicated mobility session</td><td className="pr-3">2–3×/week</td><td>15–20 min</td></tr>
                <tr><td className="py-1.5 pr-3">Ankle self-assessment</td><td className="pr-3">Weekly</td><td>5 min</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-stone-500 text-xs">
            Dynamic mobility follows a 2–3 min easy jog to raise tissue temperature. Dedicated sessions
            are best post-run or on easy/rest days.
          </p>
        </InfoCard>
      </div>
    </article>
  );
}
