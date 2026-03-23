import InfoCard from "../../components/InfoCard";

export default function InjuriesPage() {
  return (
    <article>
      <img
        src="/images/learn/injuries.png"
        alt="Running injury illustration"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Common Running Injuries</h2>
      <p className="text-stone-600 text-sm mb-4">
        Six injuries account for the vast majority of running-related downtime. Most share two root
        causes — weak glutes and too much load too fast. The most dangerous mistake is continuing
        to run through pain that worsens or becomes focal.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          10-minute rule: If pain is 3+/10 in the first 10 minutes and does not decrease, stop the
          session.
        </p>
      </div>

      <div className="space-y-3">
        <InfoCard title="Injury Overview" defaultOpen>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Injury</th>
                  <th className="py-1.5 pr-3">Prevalence</th>
                  <th className="py-1.5">Recovery</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Runner's Knee (PFPS)</td><td className="pr-3">6–16%</td><td>4–8 weeks</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">IT Band Syndrome</td><td className="pr-3">10–14%</td><td>4–12 weeks</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Shin Splints (MTSS)</td><td className="pr-3">10–13%</td><td>2–8 weeks</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Plantar Fasciitis</td><td className="pr-3">5–18%</td><td>3–6 months</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Achilles Tendinopathy</td><td className="pr-3">6–9%</td><td>3–6 months</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Hamstring Strain</td><td className="pr-3">7–12%</td><td>Varies (high re-injury risk)</td></tr>
                <tr><td className="py-1.5 pr-3">Stress Fractures</td><td className="pr-3">~4%</td><td>6–12 weeks (non-weight-bearing)</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Runner's Knee (Patellofemoral Pain)">
          <p>
            The kneecap maltracks laterally due to weak glute medius and VMO, creating pain under
            or around the kneecap.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">Symptoms:</span> Diffuse anterior knee pain, worse descending stairs, squatting, or sitting long ("theatre sign")</li>
            <li><span className="font-medium">Root cause:</span> Weak glutes allow femoral internal rotation</li>
            <li><span className="font-medium">Fix:</span> Clamshells, single-leg glute bridges, cadence increase</li>
            <li><span className="font-medium">Milestone:</span> Pain-free stair descent</li>
          </ul>
        </InfoCard>

        <InfoCard title="IT Band Syndrome">
          <p>
            The IT band impinges against the lateral femoral condyle at ~30° knee flexion. Weak
            glute medius allows pelvic drop, increasing tension.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">Symptoms:</span> Sharp lateral knee pain, onset 10–15 min into a run</li>
            <li><span className="font-medium">Key insight:</span> The IT band cannot be meaningfully stretched — it's a dense fibrous structure. Foam rolling works on surrounding tissue, not the band itself.</li>
            <li><span className="font-medium">Fix:</span> Glute med strengthening, cadence increase, hip mobility</li>
          </ul>
        </InfoCard>

        <InfoCard title="Shin Splints (MTSS)">
          <p>
            Repetitive loading creates micro-damage to the tibial bone faster than it can remodel.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">Symptoms:</span> Diffuse medial tibial pain, worse at run start, may improve mid-run</li>
            <li><span className="font-medium">Warning:</span> Can progress to stress fracture. MTSS = diffuse tenderness over 5+ cm. Stress fracture = pinpoint tenderness over 1–2 cm.</li>
            <li><span className="font-medium">Fix:</span> 10% mileage rule, cadence increase, calf strengthening</li>
          </ul>
        </InfoCard>

        <InfoCard title="Plantar Fasciitis">
          <p>
            Micro-tears at the calcaneal insertion from repeated tensile loading. Tight calves
            increase tension; weak foot intrinsics fail to support the arch.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">Symptoms:</span> Sharp heel pain worst on first morning steps, improves with walking, worsens with sustained activity</li>
            <li><span className="font-medium">Recovery:</span> Longest of common injuries — median 3–6 months</li>
            <li><span className="font-medium">Fix:</span> Calf stretching (both straight & bent knee), towel scrunches, eccentric calf loading</li>
          </ul>
        </InfoCard>

        <InfoCard title="Achilles Tendinopathy">
          <p>Two distinct variants with different management:</p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Variant</th>
                  <th className="py-1.5 pr-3">Location</th>
                  <th className="py-1.5">Eccentric Drops?</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Midportion</td><td className="pr-3">2–6 cm above insertion</td><td>Yes — core treatment</td></tr>
                <tr><td className="py-1.5 pr-3">Insertional</td><td className="pr-3">At calcaneal attachment</td><td>No — compression worsens it</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">Symptoms:</span> Morning stiffness, pain at run start that may improve, worsens with hills/speed</li>
            <li><span className="font-medium">Prevention:</span> Eccentric heel drops 3 × 15, 2×/week; no abrupt mileage spikes</li>
          </ul>
        </InfoCard>

        <InfoCard title="Stress Fractures">
          <p>
            Tibial and metatarsal (2nd/3rd) are most common. Women carry 1.5–3× higher risk.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">Symptoms:</span> Focal pinpoint bony tenderness; pain worsens through the run and persists at rest</li>
            <li><span className="font-medium">Red flag:</span> Pain at rest = stop running immediately. X-ray misses early fractures — MRI is gold standard.</li>
            <li><span className="font-medium">Risk factors:</span> Caloric restriction, vitamin D deficiency (&lt;30 ng/mL), rapid mileage increase</li>
          </ul>
        </InfoCard>

        <InfoCard title="Pain Monitoring (Traffic Light)">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Level</th>
                  <th className="py-1.5 pr-3">Meaning</th>
                  <th className="py-1.5">Action</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium text-green-700">0/10</td><td className="pr-3">No pain</td><td>Train as planned</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium text-green-700">1–2/10</td><td className="pr-3">Mild, resolves &lt;24h</td><td>Continue, monitor</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium text-amber-600">3–4/10</td><td className="pr-3">Changes gait or &gt;24h</td><td>Reduce load; no pain-reproducing runs</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium text-red-600">5+/10</td><td className="pr-3">Sharp, acute, swelling</td><td>Stop; medical eval within 48–72h</td></tr>
                <tr><td className="py-1.5 pr-3 font-medium text-red-600">Worse next AM</td><td className="pr-3">Red flag</td><td>Rest; likely overuse injury</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-stone-500 text-xs">
            Soreness vs. injury: DOMS is bilateral, diffuse, peaks 24–48h. Injury pain is unilateral,
            sharp, joint-specific, or worsens during the run. Bone pain — never run through it.
          </p>
        </InfoCard>

        <InfoCard title="When to See a Doctor">
          <ul className="list-disc list-inside space-y-1">
            <li>Pain transitions from diffuse to focal</li>
            <li>Pain at rest or disrupting sleep</li>
            <li>Swelling, bruising, or visible deformity</li>
            <li>Audible or sensory "pop" at onset</li>
            <li>Tingling, numbness, or radiation</li>
            <li>No improvement after 2–3 weeks of modified training</li>
          </ul>
        </InfoCard>
      </div>
    </article>
  );
}
