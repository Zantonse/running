import InfoCard from "../../components/InfoCard";

export default function HalfMarathonPage() {
  return (
    <article>
      <img
        src="/images/learn/half-marathon.png"
        alt="Runner crossing a half marathon finish line"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Half Marathon</h2>
      <p className="text-stone-600 text-sm mb-4">
        The half marathon is the most popular race distance in the US (~2 million finishers
        annually). Its training demands are meaningfully lower than the marathon while still
        requiring structured periodization. Race pace sits between the aerobic and lactate
        thresholds for most runners — which is why threshold work is the single highest-return
        training investment.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          The #1 race-day mistake: starting too fast. Every world record from 1500m to the marathon
          has been set with even or negative splits. Start 10–15 sec/mile slower than goal pace for
          the first 3 miles.
        </p>
      </div>

      <div className="space-y-3">
        <InfoCard title="Choosing a Training Plan" defaultOpen>
          <img
            src="/images/learn/hm-plans-comparison.png"
            alt="Pick your plan: Higdon for first-timers, Pfitzinger for competitive, Hansons for fatigue resistance, Daniels for precision pacing"
            className="w-full rounded-lg mb-3"
          />
          <p>
            12 weeks is the consensus minimum plan length. The right plan depends on your base
            mileage and goals — not on which is "best" in the abstract.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Program</th>
                  <th className="py-1.5 pr-3">Weeks</th>
                  <th className="py-1.5 pr-3">Peak MPW</th>
                  <th className="py-1.5 pr-3">Days/Wk</th>
                  <th className="py-1.5">Best For</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Higdon Novice</td>
                  <td className="pr-3">12</td>
                  <td className="pr-3">25–28</td>
                  <td className="pr-3">4 run + 2 cross</td>
                  <td>First-timers; finish goal</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Higdon Intermediate</td>
                  <td className="pr-3">12</td>
                  <td className="pr-3">32–35</td>
                  <td className="pr-3">5 run + 1 cross</td>
                  <td>Time goal; adds pace work</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Pfitzinger</td>
                  <td className="pr-3">12</td>
                  <td className="pr-3">47–63</td>
                  <td className="pr-3">5–6 run</td>
                  <td>Competitive; physiological optimization</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Hansons</td>
                  <td className="pr-3">18</td>
                  <td className="pr-3">40–60</td>
                  <td className="pr-3">6 run</td>
                  <td>Fatigue resistance; cumulative load</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Daniels (VDOT)</td>
                  <td className="pr-3">12–18</td>
                  <td className="pr-3">Varies</td>
                  <td className="pr-3">5–6 run</td>
                  <td>Precision pacing; plateaued runners</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Entry requirements</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Higdon Novice: can run 3 miles, 3–4×/week</li>
            <li>Pfitzinger 31–47 plan: minimum 25–35 mpw base (community reports of failure below this)</li>
            <li>Hansons: comfortable with 6 days/week running</li>
          </ul>
          <p className="text-stone-500 text-xs mt-2">
            Fokkema et al. (2020, Scand J Med Sci Sports, n=556): runners training &gt;32 km/week
            (~20 mpw) had significantly faster times and less late-race fade, with no increase in
            injury risk.
          </p>
        </InfoCard>

        <InfoCard title="The Workouts That Matter">
          <p>
            HM pace sits between the aerobic threshold and lactate threshold. For a ~1:45 target, LT
            pace is only 8–15 sec/mile faster than race pace — making threshold work the most
            race-specific training you can do.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Workout</th>
                  <th className="py-1.5 pr-3">Pace</th>
                  <th className="py-1.5 pr-3">Volume</th>
                  <th className="py-1.5">Frequency</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Steady tempo</td>
                  <td className="pr-3">LT (8–15s faster than HM pace)</td>
                  <td className="pr-3">24–30 min continuous</td>
                  <td>1×/week</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Cruise intervals</td>
                  <td className="pr-3">LT pace</td>
                  <td className="pr-3">5×5 min or 6×1 mi, 60–90s jog</td>
                  <td>1×/week</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">VO2max intervals</td>
                  <td className="pr-3">5K pace</td>
                  <td className="pr-3">4–6 × 1000m, 2–3 min jog</td>
                  <td>1×/week</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Fast-finish long run</td>
                  <td className="pr-3">Easy → HM pace final 25–40%</td>
                  <td className="pr-3">10–14 miles total</td>
                  <td>Every 2–3 weeks</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Progression long run</td>
                  <td className="pr-3">Drop 5–10s/mi each segment</td>
                  <td className="pr-3">10–14 miles</td>
                  <td>Every 3 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Long run: how far?</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Novice:</span> Peak at 8–10 miles, 2–3 weeks before race</li>
            <li><span className="font-medium">Intermediate:</span> Peak at 10–12 miles; at minimum, reach 90 min running time</li>
            <li><span className="font-medium">Advanced:</span> 13–16 miles appropriate</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Threshold vs. VO2max debate</p>
          <p className="mt-1">
            Daniels and Pfitzinger favor threshold-dominant training for HM since the race is near
            LT. The polarized model (Seiler) argues for 80% easy + 20% near VO2max. Practical
            consensus for recreational runners: 80% easy + 1 threshold session + 1 interval session
            per week.
          </p>
        </InfoCard>

        <InfoCard title="Pacing & Race Execution">
          <img
            src="/images/learn/hm-race-execution.png"
            alt="Half marathon mile by mile: Miles 1-3 hold back, 4-8 lock in, 9-11 dark patch, 12-13.1 all out"
            className="w-full rounded-lg mb-3"
          />
          <p>
            Negative or even splits are physiologically optimal — they spare glycogen, control core
            temperature, and delay cardiovascular drift (Grivas 2025, Frontiers in Physiology). A
            mild positive split (5–10 sec/mile) is survivable; 30+ sec/mile is catastrophic.
          </p>
          <p className="font-medium text-stone-900 mt-3">Mile-by-mile strategy</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Segment</th>
                  <th className="py-1.5 pr-3">Pace</th>
                  <th className="py-1.5">Focus</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Miles 1–3</td>
                  <td className="pr-3">10–15 sec/mi slower than goal</td>
                  <td>Resist adrenaline; find rhythm; first gel at min 30–40</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Miles 4–8</td>
                  <td className="pr-3">Goal pace</td>
                  <td>Lock in; use HR/effort on hills, not GPS</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Miles 9–11</td>
                  <td className="pr-3">Goal pace (hold)</td>
                  <td>The "dark patch" — deploy mental tools</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Miles 12–13.1</td>
                  <td className="pr-3">Gentle acceleration</td>
                  <td>Tighten form; full commitment final 0.5 mi</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">10K → Half prediction (Riegel formula)</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">10K Time</th>
                  <th className="py-1.5 pr-3">Predicted HM</th>
                  <th className="py-1.5">Pace/mi</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">45:00</td><td className="pr-3">1:39</td><td>7:34</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">50:00</td><td className="pr-3">1:50</td><td>8:24</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">55:00</td><td className="pr-3">2:01</td><td>9:15</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">60:00</td><td className="pr-3">2:12</td><td>10:05</td></tr>
                <tr><td className="py-1.5 pr-3">65:00</td><td className="pr-3">2:23</td><td>10:56</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-2">
            Accuracy caveat: Park et al. (2024) found prediction formulas are ~80% accurate. If
            weekly mileage is below 30 mpw, add 1–3 minutes to the Riegel prediction.
          </p>
        </InfoCard>

        <InfoCard title="Nutrition & Fueling">
          <img
            src="/images/learn/hm-fueling-strategy.png"
            alt="Fuel by finish time: sub-1:30 needs 0-1 gels, 2:15+ needs 2-3 gels starting at minute 35"
            className="w-full rounded-lg mb-3"
          />
          <p>
            Glycogen stores last ~75–90 minutes at race effort. Sub-1:45 runners may finish before
            depleting; 2:00+ runners face real glycogen risk. Fueling strategy should be stratified
            by finish time.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Finish Time</th>
                  <th className="py-1.5 pr-3">Gels</th>
                  <th className="py-1.5">Timing</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Under 1:30</td><td className="pr-3">0–1</td><td>Optional at 45–50 min</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">1:30–1:45</td><td className="pr-3">1</td><td>At 45–50 min</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">1:45–2:00</td><td className="pr-3">1–2</td><td>Min 40, min 75</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">2:00–2:15</td><td className="pr-3">2</td><td>Min 40, min 80</td></tr>
                <tr><td className="py-1.5 pr-3 font-medium">2:15+</td><td className="pr-3">2–3</td><td>Min 35, min 65, min 95</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Key rules</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Start fueling early (30–40 min in) — don't wait until you feel depleted</li>
            <li>Always take gels with water, not sports drink (concentrated CHO = GI distress)</li>
            <li>Practice your exact race-day fueling on at least 3 long training runs</li>
            <li>30–90% of runners experience GI symptoms at race effort — gut training reduces this 60–63% in 2 weeks</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Caffeine</p>
          <p className="mt-1">
            3–6 mg/kg body weight, 45–60 min before the gun. A 2022 meta-analysis (Wang et al., 21
            RCTs) found meaningful improvement in running time trials. Start at the low end if
            caffeine-naive. A caffeinated gel at mile 7–9 provides a useful secondary boost.
          </p>
          <p className="font-medium text-stone-900 mt-3">Pre-race meal (2–3 hrs before)</p>
          <p className="mt-1">
            0.5–1.0 g carbs per pound of body weight. Low fat, low fiber. Proven options: oatmeal
            with banana and honey, bagel with nut butter, white rice with egg. Nothing new on race
            day.
          </p>
        </InfoCard>

        <InfoCard title="Injury Prevention">
          <p>
            ~40% of runners get injured annually. The vast majority are overuse injuries from
            cumulative stress exceeding tissue capacity. Two findings matter most.
          </p>
          <p className="font-medium text-stone-900 mt-3">What the research shows</p>
          <ul className="list-disc list-inside space-y-2 mt-1">
            <li>
              <span className="font-medium">Per-session spikes predict injury, not weekly totals.</span>{" "}
              Nielsen et al. (2025, BJSM, n=5,000+): how much you add to a single run matters more
              than weekly volume. Add no more than 1 mile per running day per week.
            </li>
            <li>
              <span className="font-medium">High-compliance strength training reduces injury 85%.</span>{" "}
              Desai et al. (2023, n=433): consistent 2×/week strength + foam rolling dramatically
              reduced injury. But sporadic programs showed zero benefit (Toresdahl 2020 RCT, n=720).
            </li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Essential strength exercises</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Clamshells + lateral band walks (glute med → runner's knee, ITB)</li>
            <li>Single-leg glute bridges + Romanian deadlifts (posterior chain)</li>
            <li>Eccentric heel drops — straight and bent knee (Achilles)</li>
            <li>Bulgarian split squats (quad/VMO)</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Deload weeks</p>
          <p className="mt-1">
            Every 3–4 weeks, cut volume 20–25%. Injuries most commonly surface 3–6 weeks after a
            load increase because tissue adaptation lags cardiovascular adaptation. A 12-week plan
            should have 2–3 deloads built in.
          </p>
          <p className="font-medium text-stone-900 mt-3">When to stop running</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Pain 1–3/10:</span> Usually safe; monitor closely</li>
            <li><span className="font-medium">Pain 4–5/10:</span> Modify (reduce pace/distance); see a physio if persistent</li>
            <li><span className="font-medium">Pain 6+/10:</span> Stop the run; professional evaluation if it persists</li>
            <li><span className="font-medium">Bone tenderness, swelling, joint locking:</span> Stop immediately; seek medical eval</li>
          </ul>
        </InfoCard>

        <InfoCard title="Race Day & Mental Game">
          <img
            src="/images/learn/hm-start-slow-stat.png"
            alt="10-15 seconds per mile slower for the first 3 miles — starting too fast is the number one race-day mistake"
            className="w-full rounded-lg mb-3"
          />
          <p className="font-medium text-stone-900">Race morning timeline</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">When</th>
                  <th className="py-1.5">Action</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">T−3 hrs</td><td>Wake. Pre-race meal + 12–20 oz water.</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">T−90 min</td><td>Arrive. Bag check. First bathroom.</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">T−60 min</td><td>Caffeine (if using). Pin bib. Body Glide.</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">T−30 min</td><td>Warm-up: 5–10 min jog + dynamic drills + 4–6 strides.</td></tr>
                <tr><td className="py-1.5 pr-3 font-medium">T−10 min</td><td>Enter corral. Discard throwaway layers. Final mental prep.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">The dark patch (miles 9–11)</p>
          <p className="mt-1">
            This isn't glycogen depletion — the distance is too short. It's psychological: too far in
            to feel fresh, not close enough to see the finish. It's predictable and survivable. Tools:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Chunk the race:</span> 1–4 (rhythm), 5–8 (lock in), 9–11 (mental fight), 12–13.1 (all out)</li>
            <li><span className="font-medium">Associate then dissociate:</span> Monitor form and effort in the first 8 miles; switch to mantras and dedication miles for 9–11 (Masters & Ogles, The Sport Psychologist, 1998)</li>
            <li><span className="font-medium">Instructional self-talk:</span> "Relax shoulders," "Drive arms back," "Quick feet" — displaces pain signals</li>
            <li><span className="font-medium">Smile for 5 seconds:</span> Measurably reduces perceived exertion at the same pace</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Weather adjustments</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>55–60°F: Ideal — no adjustment</li>
            <li>65–70°F: ~20–30 sec/mi slower</li>
            <li>75–80°F: ~60–90 sec/mi slower</li>
            <li>Above 80°F: Abandon time goals; run by effort</li>
          </ul>
        </InfoCard>

        <InfoCard title="Taper & Recovery">
          <p className="font-medium text-stone-900">Taper (final 2 weeks)</p>
          <p className="mt-1">
            A 2023 meta-analysis (Wang et al., 14 studies) found optimal tapering reduces volume
            41–60% while maintaining intensity and frequency. Progressive tapers outperform step
            tapers. The "heavy legs" feeling during taper is stored glycogen — up to 20–25% more
            than baseline.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">2 weeks out:</span> Cut mileage 25–35%; last substantial quality session (tempo or intervals)</li>
            <li><span className="font-medium">Race week:</span> 50–60% of usual mileage; add an extra rest day; strides to stay sharp</li>
            <li><span className="font-medium">Day before:</span> 10–15 min shakeout + 4 × 10-sec strides; no hard efforts</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Post-race recovery</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Walk 5–10 min immediately after (don't stop abruptly)</li>
            <li>Eat carbs + protein within 30–45 min</li>
            <li>Rule of thumb: 1 day off per mile raced ≈ 13 days of reduced training</li>
            <li>Days 1–5: rest or gentle cross-training only</li>
            <li>Week 2: easy runs every other day, 3–5 miles, zero intensity</li>
            <li>Week 3+: resume structured training; first long run at 70–80% of peak</li>
          </ul>
          <p className="text-stone-500 text-xs mt-2">
            Post-race blues (days 2–5) are common — endorphin withdrawal + goal vacuum. Plan your
            next goal before race day to have something on the calendar. Allow 8–12 weeks before the
            next goal race.
          </p>
        </InfoCard>
      </div>
    </article>
  );
}
