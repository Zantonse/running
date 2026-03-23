import InfoCard from "../../components/InfoCard";

export default function StretchingPage() {
  return (
    <article>
      <img
        src="/images/learn/stretching.png"
        alt="Runner stretching post-run"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Stretching for Runners</h2>
      <p className="text-stone-600 text-sm mb-4">
        Dynamic stretching before runs preserves power and reduces injury risk. Static and PNF
        stretching belong after runs or in standalone sessions — and only reduce injury when
        targeted to your specific tight muscles.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          Key finding: Individualized stretching of tight muscles reduced injuries 30% in a 2024
          meta-analysis. Blanket stretching of all muscles showed no meaningful protection.
        </p>
      </div>

      <div className="space-y-3">
        <InfoCard title="Dynamic Pre-Run Sequence (8–10 min)" defaultOpen>
          <p>
            Begin with 5 minutes of easy jogging, then move through running-specific ranges. This
            raises tissue temperature and activates the neuromuscular system without impairing force
            production.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Exercise</th>
                  <th className="py-1.5 pr-3">Duration / Reps</th>
                  <th className="py-1.5">Targets</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Leg swings — sagittal</td><td className="pr-3">10/leg</td><td>Hip flexors, hamstrings</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Leg swings — lateral</td><td className="pr-3">10/leg</td><td>Abductors, adductors</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Walking lunges</td><td className="pr-3">10–12/leg</td><td>Quads, glutes, hams</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">High knees</td><td className="pr-3">30–60 sec</td><td>Hip flexors, calves</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Butt kicks</td><td className="pr-3">30–60 sec</td><td>Hamstrings</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">A-skips</td><td className="pr-3">20 meters</td><td>Hip flexion, posture</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Hip circles</td><td className="pr-3">10 each dir/leg</td><td>Multi-planar hip ROM</td></tr>
                <tr><td className="py-1.5 pr-3">Heel raises</td><td className="pr-3">15 reps</td><td>Ankle, calf prep</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Static Post-Run Routine (8–10 min)">
          <p>
            Hold each stretch 30 sec × 2 sets, both sides. Optimal hold is 30 seconds post-run;
            up to 60 seconds in dedicated sessions. Diminishing returns after 60 seconds.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Muscle Group</th>
                  <th className="py-1.5 pr-3">Stretch</th>
                  <th className="py-1.5">Hold</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Hip flexors</td><td className="pr-3">Kneeling lunge, tuck pelvis</td><td>2 × 30s</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Quads</td><td className="pr-3">Standing quad stretch</td><td>2 × 30s</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Hamstrings</td><td className="pr-3">Seated single-leg reach</td><td>2 × 30–40s</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Gastrocnemius</td><td className="pr-3">Wall calf stretch, straight leg</td><td>2 × 30s</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Soleus</td><td className="pr-3">Bent-knee calf stretch</td><td>2 × 30s</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">IT band / TFL</td><td className="pr-3">Standing crossover, lean away</td><td>2 × 30s</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Piriformis</td><td className="pr-3">Supine figure-4</td><td>2 × 30s</td></tr>
                <tr><td className="py-1.5 pr-3">Adductors</td><td className="pr-3">Seated butterfly</td><td>2 × 30s</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="PNF Stretching (Dedicated Sessions)">
          <p>
            PNF consistently outperforms static stretching for acute ROM gains. It triggers the Golgi
            tendon organ's inhibitory reflex via isometric contraction, then deepens the stretch in
            the resulting relaxation window. Best on warm tissue, not pre-run.
          </p>
          <div className="mt-2 bg-stone-50 rounded-lg p-3 text-sm">
            <p className="font-medium text-stone-900 mb-2">Hold-Relax Protocol (no partner needed)</p>
            <ol className="list-decimal list-inside space-y-1 text-stone-700">
              <li>Move to mild stretch, hold 10 seconds</li>
              <li>Contract target muscle isometrically for 6 seconds (no movement)</li>
              <li>Relax, then deepen stretch for 30 seconds</li>
              <li>Repeat 2–3 cycles per muscle group</li>
            </ol>
            <p className="mt-2 text-stone-500">Best for: hamstrings (use strap), hip flexors, calves</p>
          </div>
        </InfoCard>

        <InfoCard title="Injury-to-Stretch Quick Reference">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Injury</th>
                  <th className="py-1.5 pr-3">Tight Area</th>
                  <th className="py-1.5">Key Stretch</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Achilles tendinopathy</td><td className="pr-3">Gastroc + soleus</td><td>Wall calf + bent-knee soleus</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Plantar fasciitis</td><td className="pr-3">Calf + dorsiflexion</td><td>Calf stretches + morning plantar stretch</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">IT band syndrome</td><td className="pr-3">TFL + hip flexors</td><td>Crossover + hip flexor lunge</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Runner's knee</td><td className="pr-3">Quads + hip flexors</td><td>Quad stretch + hip flexor lunge</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Piriformis syndrome</td><td className="pr-3">Piriformis</td><td>Supine figure-4</td></tr>
                <tr><td className="py-1.5 pr-3">Shin splints</td><td className="pr-3">Calves</td><td>Wall calf + cadence correction</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Weekly Routine Summary">
          <div className="space-y-2">
            <div className="bg-stone-50 rounded p-2">
              <p className="font-medium text-stone-900 text-xs uppercase tracking-wide">Pre-Run</p>
              <p>8–10 min dynamic: jog → leg swings → lunges → high knees → butt kicks → A-skips → hip circles → heel raises</p>
            </div>
            <div className="bg-stone-50 rounded p-2">
              <p className="font-medium text-stone-900 text-xs uppercase tracking-wide">Post-Run</p>
              <p>8–10 min static: 30 sec × 2 sets each side — hip flexors, quads, hamstrings, calves, soleus, piriformis, IT band</p>
            </div>
            <div className="bg-stone-50 rounded p-2">
              <p className="font-medium text-stone-900 text-xs uppercase tracking-wide">Standalone (2–3×/week)</p>
              <p>20–30 min: warm up → static holds 45–60 sec × 3 sets, or PNF 3 cycles/group. Focus: hamstrings, hip flexors, piriformis, calves.</p>
            </div>
          </div>
        </InfoCard>
      </div>
    </article>
  );
}
