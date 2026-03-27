import InfoCard from "../../components/InfoCard";

export default function RecoveryPage() {
  return (
    <article>
      <img
        src="/images/learn/recovery.png"
        alt="Runner foam rolling for recovery"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Recovery Protocols</h2>
      <p className="text-stone-600 text-sm mb-4">
        Four modalities have strong RCT evidence: sleep, post-run nutrition within 30–45 minutes,
        cold water immersion (10–15 min at 10–15°C), and foam rolling for at least 120 seconds per
        muscle group. Sleep is the most underweighted — one night of restriction measurably
        undermines both physical and nutritional recovery.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          Priority order: Sleep → Nutrition → Cold water → Foam rolling. Get sleep right before
          optimizing everything else.
        </p>
      </div>

      <div className="space-y-3">
        <img
          src="/images/learn/recovery-priority-pyramid.png"
          alt="Recovery priority pyramid: Sleep at the base (7-9 hrs), then Nutrition (30-45 min window), Cold Water (10-15 min), Foam Rolling (120 sec per group). Get sleep right before optimizing everything else."
          className="w-full rounded-lg mb-3"
        />
        <InfoCard title="Evidence Tiers" defaultOpen>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Tier</th>
                  <th className="py-1.5 pr-3">Modality</th>
                  <th className="py-1.5">Evidence</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">1</td><td className="pr-3">Sleep (7–9h; 8–10h high load)</td><td>Multiple RCTs</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">1</td><td className="pr-3">Post-run nutrition (30–45 min)</td><td>Multiple RCTs</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">1</td><td className="pr-3">Cold water immersion</td><td>55-RCT meta-analysis</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">1</td><td className="pr-3">Foam rolling (≥120 sec/group)</td><td>RCT (n=60)</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">2</td><td className="pr-3">Tart cherry juice</td><td>Consistent RCTs</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">2</td><td className="pr-3">Active recovery (Zone 1–2)</td><td>RCTs</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">2</td><td className="pr-3">Compression garments</td><td>RCTs</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">3</td><td className="pr-3">Collagen + vitamin C</td><td>Emerging</td></tr>
                <tr><td className="py-1.5 pr-3">3</td><td className="pr-3">Omega-3 supplementation</td><td>Dose-dependent, 8+ weeks</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Sleep">
          <p>
            Target 7–9 hours; 8–10 during high training load. Even 1 night of restriction raises
            ghrelin, drops leptin, reduces glucose disposal ~25%, and increases cortisol 21%.
            Less than 8 hours = 1.7× injury risk.
          </p>
          <p className="font-medium text-stone-900 mt-3">Optimization</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Consistent bed/wake time — highest-leverage single habit</li>
            <li>Room temperature: 18°C (64°F) for optimal core temp drop</li>
            <li>No screens 60+ min before bed (blue light suppresses melatonin)</li>
            <li>No alcohol within 3–4 hours (fragments REM cycles)</li>
            <li>Small casein protein before bed (20–30 g cottage cheese) supports overnight protein synthesis</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Napping</p>
          <p>20–30 min improves alertness without sleep inertia. Avoid after 3 PM. Post-race/long-run naps of 60–90 min support acute recovery.</p>
        </InfoCard>

        <InfoCard title="Foam Rolling">
          <p>
            Rolling duration must be at least 120 seconds per muscle group for measurable recovery
            benefits. Roller texture (smooth vs. grooved) does not matter when duration is adequate.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Muscle Group</th>
                  <th className="py-1.5 pr-3">Duration</th>
                  <th className="py-1.5">Technique</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Calves</td><td className="pr-3">120 sec</td><td>Proximal-to-distal; pause on tender points</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Hamstrings</td><td className="pr-3">120 sec</td><td>Full posterior thigh; rotate hip for bias</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Quads</td><td className="pr-3">120 sec</td><td>Anterior thigh; both limbs if possible</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">IT band / TFL</td><td className="pr-3">90–120 sec</td><td>Lateral thigh; less pressure than soft tissue</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Glutes / piriformis</td><td className="pr-3">120 sec</td><td>Cross-leg for piriformis; broad for glute max</td></tr>
                <tr><td className="py-1.5 pr-3">Thoracic spine</td><td className="pr-3">60 sec</td><td>Supported extension</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-2">
            Lacrosse balls are more effective than foam rollers for plantar fascia, glutes, and pec minor.
            Best within 30 min post-run or in the evening.
          </p>
        </InfoCard>

        <InfoCard title="Cold Water Immersion">
          <p>
            Optimal dose from a 55-RCT meta-analysis: 10–15 minutes at 11–15°C for DOMS reduction;
            10–15 min at 5–10°C for blood marker clearance. Shorter and longer durations are less
            effective.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">Use for:</span> After races and hard efforts for soreness management</li>
            <li><span className="font-medium">Avoid if:</span> Next session within 6–8 hours — CWI blunts inflammatory signaling needed for adaptation</li>
            <li><span className="font-medium">Hot vs. cold:</span> Hot water better maintains performance; cold better reduces soreness</li>
          </ul>
        </InfoCard>

        <InfoCard title="Post-Run Nutrition">
          <p className="font-medium text-stone-900">Within 30–45 minutes:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Protein:</span> 20–40 g (~0.3–0.4 g/kg). Whey fastest; dairy, eggs, plant blends also effective.</li>
            <li><span className="font-medium">Carbs:</span> 0.8–1.2 g/kg; higher end after long runs (&gt;75 min)</li>
            <li><span className="font-medium">Ratio:</span> 3:1 or 4:1 carbs to protein</li>
            <li><span className="font-medium">Hydration:</span> Replace 150% of fluid lost (1 kg lost = 1.5 L with sodium)</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Supplements</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Supplement</th>
                  <th className="py-1.5 pr-3">Dose</th>
                  <th className="py-1.5">Notes</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Tart cherry juice</td><td className="pr-3">8–12 oz 2×/day</td><td>Start 2 days pre-race through 3 days post</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Omega-3 (EPA+DHA)</td><td className="pr-3">2–4 g/day</td><td>8+ weeks for full effect</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Collagen + Vit C</td><td className="pr-3">10–15 g + 50 mg</td><td>30–60 min before training</td></tr>
                <tr><td className="py-1.5 pr-3">Curcumin (+ piperine)</td><td className="pr-3">500–1,000 mg/day</td><td>Weaker evidence base</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Active Recovery & Deloads">
          <p className="font-medium text-stone-900">Active Recovery (day after hard efforts)</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Duration: 20–45 minutes</li>
            <li>Mode: walking, easy cycling, swimming (low-impact preferred)</li>
            <li>Intensity: HR &lt;70% max; conversational; RPE 3–4/10</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Deload Weeks (every 3–4 weeks)</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Reduce volume 30–40%, maintain some intensity</li>
            <li>Adaptations (tendon remodeling, mitochondrial density) lag 7–14 days — deloads let them express</li>
            <li>80/20 rule: at least 80% of weekly runs at genuinely easy effort</li>
          </ul>
        </InfoCard>
      </div>
    </article>
  );
}
