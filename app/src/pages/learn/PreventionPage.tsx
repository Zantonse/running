import InfoCard from "../../components/InfoCard";

export default function PreventionPage() {
  return (
    <article>
      <img
        src="/images/learn/prevention.png"
        alt="Runner doing strength exercises"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Injury Prevention</h2>
      <p className="text-stone-600 text-sm mb-4">
        Strength training is the highest-evidence prevention intervention — 30–47% injury reduction
        across multiple RCTs. Target glute medius, hamstrings (Nordic curls), and calf eccentrics,
        combined with disciplined load management.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          The single most impactful exercise: Nordic hamstring curls cut hamstring injury risk by
          63% (RR 0.37) in meta-analysis.
        </p>
      </div>

      <img
        src="/images/learn/prevention-evidence-ranked.png"
        alt="Prevention ranked: Strength training 30-47%, Nordic curls 63%, Load management, Shoe rotation 39%, Form changes"
        className="w-full rounded-lg mb-4"
      />

      <div className="space-y-3">
        <InfoCard title="Evidence Rankings" defaultOpen>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Strategy</th>
                  <th className="py-1.5 pr-3">Evidence</th>
                  <th className="py-1.5">Effect</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Strength training 2–3×/week</td><td className="pr-3">Level 1 meta-analysis</td><td>30–47% reduction</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Hip/core exercise program</td><td className="pr-3">RCT (n=245)</td><td>39% all-injury; 52% overuse</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Shoe rotation (2+ pairs)</td><td className="pr-3">Cohort (n=264)</td><td>39% reduction</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Cadence +5–10%</td><td className="pr-3">Systematic review</td><td>Consistent biomechanical gains</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Sleep ≥8h/night</td><td className="pr-3">Prospective study</td><td>1.7× risk if &lt;8h</td></tr>
                <tr><td className="py-1.5 pr-3">Nordic curls</td><td className="pr-3">Meta-analysis</td><td>RR 0.37 for hamstring injury</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Hip & Glute Strength">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Exercise</th>
                  <th className="py-1.5 pr-3">Sets × Reps</th>
                  <th className="py-1.5">Why</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Clamshells</td><td className="pr-3">3 × 15/side</td><td>Glute med — prevents hip drop</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Monster walks (banded)</td><td className="pr-3">3 × 15/side</td><td>Glute med/min activation</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Single-leg glute bridge</td><td className="pr-3">3 × 12/side</td><td>Glute max, hip stabilizers</td></tr>
                <tr><td className="py-1.5 pr-3">Bulgarian split squat</td><td className="pr-3">3 × 8–10/side</td><td>Unilateral quad/glute + balance</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Hamstring & Posterior Chain">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Exercise</th>
                  <th className="py-1.5 pr-3">Sets × Reps</th>
                  <th className="py-1.5">Notes</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Nordic hamstring curl</td><td className="pr-3">3 × 6–8</td><td>Start 3 × 3 if new — significant DOMS</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Single-leg RDL</td><td className="pr-3">3 × 8–10/side</td><td>Eccentric ham + balance</td></tr>
                <tr><td className="py-1.5 pr-3">Walking lunges</td><td className="pr-3">3 × 10–12/side</td><td>Integrated lower chain</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Calf & Achilles (Eccentric)">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Exercise</th>
                  <th className="py-1.5 pr-3">Sets × Reps</th>
                  <th className="py-1.5">Notes</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Eccentric heel drops — straight knee</td><td className="pr-3">3 × 15</td><td>Gastrocnemius; 3 sec lower</td></tr>
                <tr><td className="py-1.5 pr-3">Eccentric heel drops — bent knee</td><td className="pr-3">3 × 15</td><td>Soleus; plantar fascia prevention</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-2">Add weight via vest when 3 × 15 becomes easy.</p>
        </InfoCard>

        <InfoCard title="Core Stability">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Exercise</th>
                  <th className="py-1.5 pr-3">Sets × Reps</th>
                  <th className="py-1.5">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Dead bugs</td><td className="pr-3">3 × 8/side</td><td>Anti-rotation; lumbar protection</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Bird dogs</td><td className="pr-3">3 × 10/side</td><td>Multifidus + glute max</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Plank</td><td className="pr-3">3 × 30–45 sec</td><td>Broad core</td></tr>
                <tr><td className="py-1.5 pr-3">Pallof press</td><td className="pr-3">3 × 10/side</td><td>Rotational stability</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Load Management">
          <p>Practical rules for managing training load:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">10% rule:</span> Increase weekly mileage by no more than 10%</li>
            <li><span className="font-medium">3:1 cycle:</span> 3 weeks progressive, then 1 lighter week (−20% volume)</li>
            <li><span className="font-medium">After a break:</span> Rebuild over 2–4 weeks before prior volume</li>
            <li><span className="font-medium">Easy/hard alternation:</span> Always follow a quality session with easy or rest</li>
          </ul>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">ACWR Range</th>
                  <th className="py-1.5 pr-3">Status</th>
                  <th className="py-1.5">Action</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">&lt;0.8</td><td className="pr-3">Undertrained</td><td>Build base</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium text-green-700">0.8–1.3</td><td className="pr-3">Optimal</td><td>Lowest injury risk</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium text-amber-600">1.4–1.5</td><td className="pr-3">Caution</td><td>Pull back</td></tr>
                <tr><td className="py-1.5 pr-3 font-medium text-red-600">&gt;1.5</td><td className="pr-3">Danger</td><td>Significantly elevated risk</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Running Form (Evidence-Ranked)">
          <ol className="list-decimal list-inside space-y-2">
            <li><span className="font-medium">Cadence +5–10%:</span> Strongest evidence — directly reduces vertical ground reaction force and patellofemoral load. Increase from YOUR baseline, not a fixed 180 spm target.</li>
            <li><span className="font-medium">Land under center of mass:</span> Reduces braking forces. Doesn't require forefoot striking.</li>
            <li><span className="font-medium">Correct hip drop:</span> Fix via glute med strength, not cuing alone.</li>
            <li><span className="font-medium">Forward lean from ankles:</span> Engages glutes, reduces quad-dominant loading.</li>
            <li><span className="font-medium">Foot strike:</span> Don't change unless diagnosed — the transition itself carries injury risk.</li>
          </ol>
        </InfoCard>

        <InfoCard title="Footwear & Nutrition">
          <p className="font-medium text-stone-900">Shoes</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Rotate 2+ pairs — 39% injury reduction (Scandinavian cohort)</li>
            <li>EVA foam needs ~24h to decompress between runs</li>
            <li>Replace every 480–640 km; carbon plate shoes ~280 km</li>
            <li>Comfort is the best injury predictor — not pronation type</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Nutrition for Prevention</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Sleep &lt;8h = 1.7× injury risk</li>
            <li>Calcium 1,000–1,300 mg/day + vitamin D (serum &gt;30 ng/mL)</li>
            <li>Protein: 1.4–1.7 g/kg body weight/day</li>
            <li>Caloric restriction = leading modifiable stress fracture risk factor</li>
          </ul>
        </InfoCard>
      </div>
    </article>
  );
}
