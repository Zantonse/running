import InfoCard from "../../components/InfoCard";

export default function MarathonNutritionPage() {
  return (
    <article>
      <img
        src="/images/learn/marathon-nutrition.png"
        alt="Runner taking a gel during a marathon"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Marathon Nutrition</h2>
      <p className="text-stone-600 text-sm mb-4">
        Marathon nutrition has undergone a revolution. The old 30–60 g/hr standard has been
        replaced by 60–90 g/hr using dual-transporter gels. Carb intake during the race is the
        single most predictive nutritional variable for finishing time — yet the average runner
        consumes only 35 g/hr, less than half the optimal range.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          The #1 mistake: waiting to fuel until you feel tired. Start your first gel at mile 3–4
          (25–30 minutes in). Glycogen depletion begins from the gun — a late start creates a
          deficit you can't recover from.
        </p>
      </div>

      <div className="space-y-3">
        <InfoCard title="Race-Day Fueling by Goal Time" defaultOpen>
          <img
            src="/images/learn/marathon-carb-stat.png"
            alt="60-90 g/hr carbs during the marathon — the single most predictive variable for sub-3 finishing, yet average runner takes only 35 g/hr"
            className="w-full rounded-lg mb-3"
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Goal</th>
                  <th className="py-1.5 pr-3">Carbs/Hr</th>
                  <th className="py-1.5 pr-3">Gels (25g)</th>
                  <th className="py-1.5">Timing</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Sub-3:00</td><td className="pr-3">70–90g</td><td className="pr-3">8–11</td><td>Every 20 min</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">3:00–4:00</td><td className="pr-3">60–75g</td><td className="pr-3">9–13</td><td>Every 20–25 min</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">4:00–5:00</td><td className="pr-3">50–65g</td><td className="pr-3">10–14</td><td>Every 25–30 min</td></tr>
                <tr><td className="py-1.5 pr-3 font-medium">5:00+</td><td className="pr-3">45–55g</td><td className="pr-3">11–15</td><td>Every 25–30 min</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-2">
            Seville 2025 study (n=160): runners consuming 60–90 g/hr were significantly more likely
            to finish sub-3 (p=0.035). Average intake was only 35 g/hr.
          </p>
        </InfoCard>

        <InfoCard title="The Dual-Transporter Protocol">
          <p>
            Glucose saturates the SGLT1 transporter at ~60 g/hr. Adding fructose (GLUT5
            transporter) bypasses this ceiling.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">2:1 glucose:fructose:</span> Raises ceiling to ~90 g/hr (Jeukendrup original research)</li>
            <li><span className="font-medium">1:0.8 glucose:fructose:</span> Higher oxidation rates, better GI tolerance, emerging as superior (O'Brien & Rowlands)</li>
            <li><span className="font-medium">1:0.8 products:</span> Maurten (all), SiS Beta Fuel, Nduranz</li>
            <li><span className="font-medium">2:1 products:</span> GU Original, Precision Fuel, Clif, Enervit</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">2025 elite study</p>
          <p className="mt-1">
            8 elite marathoners (avg PR 2:22): 90 g/hr improved running economy +1.3%; 120 g/hr
            improved +2.6% but caused GI distress in 100% of runners. Sweet spot: 70–90 g/hr.
          </p>
        </InfoCard>

        <InfoCard title="Gut Training">
          <p>
            At 70% VO2max, blood flow to the gut drops ~80%. Running causes GI distress at double
            the rate of cycling. But the gut adapts — SGLT1 transporter density increases with
            repeated carb exposure during exercise.
          </p>
          <p className="font-medium text-stone-900 mt-3">The Costa protocol (landmark RCT)</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>25 runners, 10 sessions over 14 days at 60% VO2max</li>
            <li>Consumed 90 g/hr (30g every 20 min)</li>
            <li>Result: <span className="font-medium">60–63% reduction in GI symptoms</span>, 4–5% performance improvement</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Your 6–8 week protocol</p>
          <ol className="list-decimal list-inside space-y-1 mt-1">
            <li>Start at 30 g/hr on 1–2 long runs per week</li>
            <li>Add 10 g/hr each week until reaching 60–90 g/hr race target</li>
            <li>Use the exact products, flavors, and concentrations planned for race day</li>
            <li>Practice with a pre-run meal in the stomach (not fasted)</li>
          </ol>
        </InfoCard>

        <InfoCard title="Carb Loading & Pre-Race Meal">
          <p className="font-medium text-stone-900">3-day carb loading protocol</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">When</th>
                  <th className="py-1.5 pr-3">Carb Target</th>
                  <th className="py-1.5">Notes</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Days 3–2 before</td><td className="pr-3">8–10 g/kg</td><td>Low fiber, low fat; 5–6 small meals</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Day before</td><td className="pr-3">8–10 g/kg</td><td>Familiar foods; expect 1–3 kg weight gain (water)</td></tr>
                <tr><td className="py-1.5 pr-3 font-medium">Race morning</td><td className="pr-3">1–4 g/kg</td><td>2–4 hours before; low fiber/fat; 15–20g protein</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2">
            Carb loading increases glycogen by 25–40% and prolongs exercise capacity by up to 20%.
            The weight gain is glycogen-bound water — not fat.
          </p>
        </InfoCard>

        <InfoCard title="The Wall & How to Prevent It">
          <img
            src="/images/learn/marathon-fueling-timeline.png"
            alt="Marathon fueling timeline: pre-race meal 3-4 hrs before, top off 15 min before, FIRST GEL at mile 3-4, continue every 20-30 min targeting 60-90 g/hr, last gel mile 22-24, recovery 3:1 carbs:protein at finish"
            className="w-full rounded-lg mb-3"
          />
          <p>
            The body stores ~2,000 calories of glycogen. At ~100 cal/mile, stores are critically
            depleted at miles 18–22 without fueling. A 2025 UCD study found 28% of men and 17% of
            women hit the wall, losing an average of 31+ minutes.
          </p>
          <p className="font-medium text-stone-900 mt-3">Prevention</p>
          <ol className="list-decimal list-inside space-y-1 mt-1">
            <li>Start fueling at mile 3–4 (not mile 10). Target 60–90 g carbs/hr.</li>
            <li>Carb load 3 days before (8–10 g/kg/day).</li>
            <li>Conservative early pacing — going out too fast triggers anaerobic glycolysis that depletes stores exponentially faster.</li>
            <li>Practice fast-finish long runs to build fatigue resistance at race pace.</li>
          </ol>
        </InfoCard>

        <InfoCard title="Daily Nutrition During Training">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Training Day</th>
                  <th className="py-1.5 pr-3">Carbs</th>
                  <th className="py-1.5">Protein</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Rest / easy</td><td className="pr-3">3–5 g/kg</td><td>1.6–1.8 g/kg</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Moderate (60–90 min)</td><td className="pr-3">5–7 g/kg</td><td>1.6–1.8 g/kg</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Hard / long run</td><td className="pr-3">7–10 g/kg</td><td>1.8–2.0 g/kg</td></tr>
                <tr><td className="py-1.5 pr-3 font-medium">Post-run (30–60 min)</td><td className="pr-3">1.0–1.2 g/kg</td><td>20–40g (0.3 g/kg)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Iron: the hidden performance variable</p>
          <p className="mt-1">
            15–35% of female runners are iron deficient with "normal" labs. Standard reference (12
            ng/mL) misses athletic deficiency. Target ferritin &gt;50 ng/mL. Test ferritin + CRP
            together (inflammation inflates ferritin 30–90%). Take iron 6+ hours after exercise
            to avoid the hepcidin window.
          </p>
        </InfoCard>

        <InfoCard title="Caffeine, Hydration & Common Mistakes">
          <p className="font-medium text-stone-900">Caffeine</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>3–6 mg/kg, 45–60 min pre-race (100–200mg)</li>
            <li>Mid-race caffeinated gel at miles 14–18 and 21–24</li>
            <li>Consider 5–7 day washout before race week to restore sensitivity</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Hydration</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Drink to thirst (not on a rigid schedule)</li>
            <li>400–800 ml/hr depending on conditions and sweat rate</li>
            <li>500–700 mg sodium/hr for races over 4 hours</li>
            <li>Hyponatremia (over-hydrating) is more dangerous than mild dehydration</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Common mistakes</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Waiting until mile 8–10 to take first gel (too late)</li>
            <li>Trying new products on race day (untested on your gut)</li>
            <li>Taking gels without water (concentrated sugar = osmotic cramping)</li>
            <li>Drinking only plain water (dilutes blood sodium)</li>
            <li>Never practicing high-carb intake in training (the gut adapts like muscle)</li>
          </ul>
        </InfoCard>
      </div>
    </article>
  );
}
