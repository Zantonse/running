import InfoCard from "../../components/InfoCard";

export default function LegRecoveryPage() {
  return (
    <article>
      <img
        src="/images/learn/leg-recovery.png"
        alt="Runner recovering with legs elevated"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Leg Recovery</h2>
      <p className="text-stone-600 text-sm mb-4">
        Recovery is where adaptation happens — not during the workout itself. Your legs rebuild
        stronger during rest, but only if recovery is adequate. Tendons need 48–72+ hours;
        glycogen takes 24–48 hours to replenish; muscle protein synthesis stays elevated for
        24–48 hours post-exercise. Understanding these timelines is the key to training harder
        without breaking down.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          The #1 recovery intervention is sleep. Less than 8 hours = 1.7× injury risk. HGH
          release peaks during deep sleep — it's when your body does most of its repair work.
          Fix sleep before optimizing anything else.
        </p>
      </div>

      <div className="space-y-3">
        <InfoCard title="Recovery Timelines by Workout Type" defaultOpen>
          <img
            src="/images/learn/recovery-timelines-bars.png"
            alt="Recovery by workout type: Easy run 12-24 hrs, Tempo 24-48 hrs, VO2max intervals 48-72 hrs, Long run 48-72 hrs, Hilly/downhill 72+ hrs. Tendons recover slower than muscle."
            className="w-full rounded-lg mb-3"
          />
          <p>
            Different workouts create different types of damage, requiring different recovery
            windows. The mistake most runners make is treating all runs the same.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Workout Type</th>
                  <th className="py-1.5 pr-3">Primary Damage</th>
                  <th className="py-1.5 pr-3">Recovery Time</th>
                  <th className="py-1.5">Next Day</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Easy run (30–60 min)</td>
                  <td className="pr-3">Minimal muscle damage</td>
                  <td className="pr-3">12–24 hours</td>
                  <td>Can run again</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Tempo / threshold</td>
                  <td className="pr-3">Moderate glycogen depletion</td>
                  <td className="pr-3">24–48 hours</td>
                  <td>Easy run or rest</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">VO2 max intervals</td>
                  <td className="pr-3">Significant muscle + metabolic stress</td>
                  <td className="pr-3">48–72 hours</td>
                  <td>Rest or very easy</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Long run (90+ min)</td>
                  <td className="pr-3">Glycogen depletion + eccentric damage</td>
                  <td className="pr-3">48–72 hours</td>
                  <td>Rest or easy cross-train</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Hilly / downhill run</td>
                  <td className="pr-3">Heavy eccentric muscle damage</td>
                  <td className="pr-3">72+ hours for full recovery</td>
                  <td>Rest; DOMS peaks day 2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-2">
            Tendons recover slower than muscle (48–72+ hours). Running daily can create a
            tendon breakdown cycle — this is the mechanism behind Achilles tendinopathy.
            Connective tissue adaptation lags cardiovascular adaptation by weeks.
          </p>
        </InfoCard>

        <InfoCard title="The Hard-Easy Principle">
          <img
            src="/images/learn/recovery-hard-easy.png"
            alt="The hard-easy principle: weekly bar chart showing alternating tall (hard) and short (easy) days. Never follow a hard day with another hard day."
            className="w-full rounded-lg mb-3"
          />
          <p>
            The most fundamental training structure: never follow a hard day with another hard
            day. Hard sessions (tempo, intervals, long run) create damage; easy days allow
            repair and adaptation. Most training plans use 2–3 quality sessions per week with
            easy runs or rest between them.
          </p>
          <p className="font-medium text-stone-900 mt-3">Sample weekly structures</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Days/Wk</th>
                  <th className="py-1.5 pr-3">M</th>
                  <th className="py-1.5 pr-3">T</th>
                  <th className="py-1.5 pr-3">W</th>
                  <th className="py-1.5 pr-3">Th</th>
                  <th className="py-1.5 pr-3">F</th>
                  <th className="py-1.5 pr-3">Sa</th>
                  <th className="py-1.5">Su</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">4 days</td>
                  <td className="pr-3">Rest</td>
                  <td className="pr-3 font-medium text-amber-700">Tempo</td>
                  <td className="pr-3">Rest</td>
                  <td className="pr-3">Easy</td>
                  <td className="pr-3">Rest</td>
                  <td className="pr-3 font-medium text-amber-700">Long</td>
                  <td>Rest</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">5 days</td>
                  <td className="pr-3">Rest</td>
                  <td className="pr-3 font-medium text-amber-700">Intervals</td>
                  <td className="pr-3">Easy</td>
                  <td className="pr-3 font-medium text-amber-700">Tempo</td>
                  <td className="pr-3">Rest</td>
                  <td className="pr-3 font-medium text-amber-700">Long</td>
                  <td>Easy</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">6 days</td>
                  <td className="pr-3">Easy</td>
                  <td className="pr-3 font-medium text-amber-700">Intervals</td>
                  <td className="pr-3">Easy</td>
                  <td className="pr-3 font-medium text-amber-700">Tempo</td>
                  <td className="pr-3">Easy</td>
                  <td className="pr-3 font-medium text-amber-700">Long</td>
                  <td>Rest</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Deload weeks</p>
          <p className="mt-1">
            Every 3–4 weeks, cut volume 20–30% while maintaining some intensity. Injuries most
            commonly surface 3–6 weeks after a load increase — deloads let tissue adaptation
            catch up to cardiovascular gains. A 12-week training block should have 2–3 deloads.
          </p>
        </InfoCard>

        <InfoCard title="Active Recovery: What Works">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Method</th>
                  <th className="py-1.5 pr-3">Evidence</th>
                  <th className="py-1.5">Best For</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Easy run (Zone 1)</td>
                  <td className="pr-3">Increases blood flow; clears metabolic waste</td>
                  <td>Day after tempo or moderate session</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Walking (30–45 min)</td>
                  <td className="pr-3">Gentle blood flow without impact stress</td>
                  <td>Day after long run or intervals</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Cycling (easy)</td>
                  <td className="pr-3">Non-impact cardio; maintains aerobic fitness</td>
                  <td>Replacing a run when legs are trashed</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Pool running</td>
                  <td className="pr-3">Zero impact; mimics running gait pattern</td>
                  <td>Injury recovery; post-race</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Swimming</td>
                  <td className="pr-3">Full-body, zero impact, different muscle pattern</td>
                  <td>True rest day that still moves</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">The key rule</p>
          <p className="mt-1">
            Active recovery must be genuinely easy — HR below 65% max, RPE 2–3/10,
            conversational. If your "recovery run" feels like effort, it's not recovery. Many
            runners run their easy days too fast, turning recovery days into moderate-stress
            days and never fully adapting from hard sessions.
          </p>
        </InfoCard>

        <InfoCard title="Recovery Tools: Evidence Ranked">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Tool</th>
                  <th className="py-1.5 pr-3">Evidence</th>
                  <th className="py-1.5 pr-3">Cost</th>
                  <th className="py-1.5">Verdict</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Cold water immersion</td>
                  <td className="pr-3">Strong (55-RCT meta-analysis)</td>
                  <td className="pr-3">Free–$50</td>
                  <td>Use after races/hard efforts for DOMS</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Foam rolling</td>
                  <td className="pr-3">Moderate (≥120 sec/group)</td>
                  <td className="pr-3">$20–$60</td>
                  <td>Best within 30 min post-run</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Compression boots</td>
                  <td className="pr-3">Moderate for perceived recovery</td>
                  <td className="pr-3">$600–$1,200</td>
                  <td>Luxury; helps but expensive</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Massage gun</td>
                  <td className="pr-3">Moderate for DOMS, ROM</td>
                  <td className="pr-3">$100–$400</td>
                  <td>Convenient; similar to foam rolling</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Compression socks</td>
                  <td className="pr-3">Moderate for post-run recovery</td>
                  <td className="pr-3">$20–$60</td>
                  <td>Better for recovery than performance</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Cryotherapy chamber</td>
                  <td className="pr-3">Weak vs. cold water</td>
                  <td className="pr-3">$40–$80/session</td>
                  <td>Not worth it; CWI is cheaper and better-studied</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-2">
            Cold water immersion: 10–15 min at 11–15°C for DOMS; avoid within 6–8 hours of a
            hard session if you want the adaptation signal (inflammation is part of how you get
            stronger). Foam rolling: texture doesn't matter if duration is adequate. Compression
            boots: the placebo contribution is likely significant but the perceived benefit is real.
          </p>
        </InfoCard>

        <InfoCard title="Sleep & Nutrition for Recovery">
          <p className="font-medium text-stone-900">Sleep</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Target 7–9 hours; 8–10 during high training load</li>
            <li>Less than 8 hours = 1.7× injury risk</li>
            <li>HGH release peaks during deep sleep (stages 3–4) — this drives muscle repair</li>
            <li>Consistent bed/wake time is the single highest-leverage sleep habit</li>
            <li>Napping: 20–30 min improves alertness; 60–90 min for acute post-race recovery</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Post-run nutrition (30–45 min window)</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Carbs:</span> 0.8–1.2 g/kg to replenish glycogen (higher after long runs)</li>
            <li><span className="font-medium">Protein:</span> 20–40 g (~0.3–0.4 g/kg) for muscle protein synthesis</li>
            <li><span className="font-medium">Ratio:</span> 3:1 or 4:1 carbs to protein</li>
            <li><span className="font-medium">Hydration:</span> Replace 150% of fluid lost (weigh before and after)</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Supplements with evidence</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Supplement</th>
                  <th className="py-1.5 pr-3">Dose</th>
                  <th className="py-1.5">Evidence</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Tart cherry juice</td>
                  <td className="pr-3">8–12 oz, 2×/day</td>
                  <td>Consistent RCTs for DOMS reduction</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Omega-3 (EPA+DHA)</td>
                  <td className="pr-3">2–4 g/day</td>
                  <td>Anti-inflammatory; 8+ weeks for full effect</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Collagen + Vit C</td>
                  <td className="pr-3">10–15 g + 50 mg, 30–60 min pre-run</td>
                  <td>Emerging for tendon/connective tissue</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Vitamin D</td>
                  <td className="pr-3">1,000–2,000 IU/day</td>
                  <td>Muscle function; high deficiency in runners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="What Hurts Recovery">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-medium">NSAIDs (ibuprofen) after training:</span> Blunts the
              inflammatory signaling needed for adaptation. A 2017 meta-analysis found chronic
              NSAID use impaired muscle protein synthesis by up to 25%. Use for acute injury only,
              not routine post-run soreness.
            </li>
            <li>
              <span className="font-medium">Alcohol:</span> Even moderate drinking (2–3 drinks)
              reduces muscle protein synthesis by ~24%, disrupts REM sleep, increases cortisol, and
              impairs glycogen replenishment. The worst time to drink is within 4 hours of a hard
              session.
            </li>
            <li>
              <span className="font-medium">Under-eating:</span> Caloric deficit during heavy
              training blocks reduces recovery rate, increases injury risk, and can trigger RED-S
              (Relative Energy Deficiency in Sport). Don't restrict calories during peak training.
            </li>
            <li>
              <span className="font-medium">Running easy days too fast:</span> The most common
              recovery killer. If your "easy" pace is in Zone 3, you're accumulating fatigue without
              adequate recovery stimulus. Easy means conversational, HR below 65% max.
            </li>
            <li>
              <span className="font-medium">Psychological stress:</span> Cortisol from work stress,
              relationship stress, and poor sleep impairs physical recovery. High perceived life
              stress is associated with increased running injury rates independent of training load.
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Signs You Need More Recovery">
          <p>
            Your body signals when recovery is inadequate. Learn to read the signals before
            they become injuries.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Signal</th>
                  <th className="py-1.5 pr-3">What It Means</th>
                  <th className="py-1.5">Action</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Resting HR elevated 5+ bpm</td>
                  <td className="pr-3">Autonomic stress; incomplete recovery</td>
                  <td>Easy day or rest</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Heavy legs that don't clear in warm-up</td>
                  <td className="pr-3">Accumulated fatigue</td>
                  <td>Cut the run short; add a rest day</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Persistent low motivation</td>
                  <td className="pr-3">Central fatigue / psychological overload</td>
                  <td>2–3 days complete rest</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Getting sick frequently</td>
                  <td className="pr-3">Immune suppression from overtraining</td>
                  <td>Reduce volume 30–50% for 1–2 weeks</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Disrupted sleep despite fatigue</td>
                  <td className="pr-3">Sympathetic overdrive</td>
                  <td>Deload week immediately</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Same pace feels harder (HR drift up)</td>
                  <td className="pr-3">Cardiovascular fatigue</td>
                  <td>Extra easy day; monitor for 1 week</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-2">
            HRV (heart rate variability) tracking via Garmin, Whoop, or Oura provides an
            objective recovery metric. A sustained drop in HRV over 3–5 days signals
            accumulated fatigue. But subjective feel is equally valid — if you feel flat,
            trust it.
          </p>
        </InfoCard>
      </div>
    </article>
  );
}
