import InfoCard from "../../components/InfoCard";

export default function RunningFormPage() {
  return (
    <article>
      <img
        src="/images/learn/running-form.png"
        alt="Runner with efficient stride mechanics"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Running Form</h2>
      <p className="text-stone-600 text-sm mb-4">
        Most prescriptive form advice — 180 steps per minute, forefoot striking, aggressive forward
        lean — is either poorly supported or directly falsified by recent meta-analyses. Running
        biomechanics explains only 4–12% of between-individual variation in running economy when any
        single variable is considered in isolation (Van Hooren et al., Sports Med, 2024; 51 studies,
        n=1,115). What does matter is surprisingly specific and actionable.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          The single highest-evidence form intervention: a 5–10% cadence increase above your
          self-selected baseline. It's the only change with RCT-level injury prevention data — 62%
          risk reduction at 12 months (Chan et al., 2018; n=320).
        </p>
      </div>

      <div className="space-y-3">
        <InfoCard title="What Actually Matters — Ranked by Evidence" defaultOpen>
          <img
            src="/images/learn/form-priority-matrix.png"
            alt="2x2 matrix: Evidence Strength vs Practical Impact showing cadence, overstriding, and vertical oscillation as top priorities"
            className="w-full rounded-lg mb-3"
          />
          <p>
            Not all biomechanics variables are equal. This ranking is based on effect sizes from
            meta-analyses and RCT data, not coaching tradition.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Tier</th>
                  <th className="py-1.5 pr-3">Variable</th>
                  <th className="py-1.5 pr-3">Evidence</th>
                  <th className="py-1.5">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">1</td>
                  <td className="pr-3">Vertical oscillation</td>
                  <td className="pr-3">r=0.35 with RE (strongest)</td>
                  <td>Bouncing wastes energy; target 5–10 cm</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">1</td>
                  <td className="pr-3">Cadence (+5–10%)</td>
                  <td className="pr-3">62% injury reduction (RCT)</td>
                  <td>Reduces loading on tibias, knees, hips</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">1</td>
                  <td className="pr-3">Foot position under CoM</td>
                  <td className="pr-3">Strongest GRF predictor</td>
                  <td>Overstriding = braking force every step</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">2</td>
                  <td className="pr-3">Ankle/calf stiffness</td>
                  <td className="pr-3">r=−0.52 with RE</td>
                  <td>Elastic rebound; elite vs. recreational gap</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">2</td>
                  <td className="pr-3">Hip extension</td>
                  <td className="pr-3">Clinical framework</td>
                  <td>Drives propulsion; tightness causes overstriding</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">2</td>
                  <td className="pr-3">Pelvic stability</td>
                  <td className="pr-3">Gait retraining RCTs</td>
                  <td>Hip drop → ITB, knee pain, lateral sway</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">3</td>
                  <td className="pr-3">Ground contact time</td>
                  <td className="pr-3">r=−0.02 (trivial)</td>
                  <td>Proxy for overstriding, not a direct target</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3">3</td>
                  <td className="pr-3">Forward lean angle</td>
                  <td className="pr-3">−8% RE at large angles</td>
                  <td>Excessive lean is worse than upright</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-2">
            Tier 1 = RCT or large meta-analysis with strong effect. Tier 2 = prospective cohort or
            moderate effect. Tier 3 = weak/null association. Sources: Van Hooren et al. 2024,
            Figueiredo et al. 2025, Liu et al. 2022.
          </p>
        </InfoCard>

        <InfoCard title="Cadence: The #1 Intervention">
          <img
            src="/images/learn/form-cadence-stat.png"
            alt="62% injury risk reduction with a 5-10% cadence increase"
            className="w-full rounded-lg mb-3"
          />
          <p>
            The 180 spm "rule" comes from Jack Daniels observing elite runners at race pace in 1984.
            Recreational runners naturally range 150–170 spm; cadence scales with speed. The target
            isn't 180 — it's 5–10% above your own baseline.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Increase</th>
                  <th className="py-1.5 pr-3">Effect</th>
                  <th className="py-1.5">Study</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">+5%</td>
                  <td className="pr-3">~20% reduction in hip/knee loading</td>
                  <td>Heiderscheit et al. 2011 (n=45)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">+5–10%</td>
                  <td className="pr-3">Reduced vertical GRF, loading rates, stride length, vertical oscillation</td>
                  <td>Figueiredo et al. 2025 (18 studies)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">+10%</td>
                  <td className="pr-3">Knee valgus reduced ~2°; hip adduction reduced</td>
                  <td>Peterson et al. 2024 (n=10)</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">+10% / 8 wks</td>
                  <td className="pr-3">Converted majority from heel to midfoot strike</td>
                  <td>Allen et al. 2016 (n=20)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Injury data</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Runners ≤166 spm had 6–7× higher tibial stress injury risk vs. ≥178 spm (Luedke et al. 2016; n=68)</li>
            <li>62% injury reduction at 12 months with gait retraining incorporating cadence (Chan et al. 2018; RCT, n=320)</li>
            <li>Does not negatively affect running economy — weakly improves it (r=−0.20; Van Hooren 2024)</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">How to do it</p>
          <p className="mt-1">
            Count steps for 30 seconds on an easy run, multiply by 2. Set a metronome app to 5%
            above that number. Run two 10-minute blocks per easy run matching the beat. Re-test at
            week 4 and increase another 2–3% if the first increment feels automatic.
          </p>
        </InfoCard>

        <InfoCard title="Foot Strike: The Evidence">
          <img
            src="/images/learn/form-footstrike-comparison.png"
            alt="Heel strike vs forefoot strike comparison showing trade-offs with no difference in total injury rate"
            className="w-full rounded-lg mb-3"
          />
          <p>
            Lieberman's 2010 Nature study — the paper that launched the barefoot/forefoot movement —
            tested barefoot Kenyans at 4:52/mile pace, where forefoot striking is natural for
            everyone. Hatala et al. (2013) tested habitually barefoot Kenyans at self-selected
            endurance speeds and found the majority rearfoot-struck.
          </p>
          <p className="font-medium text-stone-900 mt-3">The biomechanical trade-off</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Dimension</th>
                  <th className="py-1.5 pr-3">Rearfoot (RFS)</th>
                  <th className="py-1.5">Forefoot (FFS)</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Impact force</td>
                  <td className="pr-3">Higher</td>
                  <td>Lower</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Knee/patella stress</td>
                  <td className="pr-3">Higher</td>
                  <td>Lower</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Achilles loading</td>
                  <td className="pr-3">Lower</td>
                  <td>Higher (3.4× in one study)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Metatarsal stress fracture</td>
                  <td className="pr-3">Lower</td>
                  <td>Higher (~2×)</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Total injury rate</td>
                  <td className="pr-3" colSpan={2}>No significant difference (Hamill &amp; Gruber 2017; 3 large studies)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2">
            Switching doesn't reduce total injuries — it moves them. Injury site changes, frequency
            doesn't. Running economy also doesn't improve for habitual heel-strikers who switch
            (Hamill & Gruber 2017).
          </p>
          <p className="font-medium text-stone-900 mt-3">The real lesson</p>
          <p className="mt-1">
            Foot strike pattern matters less than foot <span className="font-medium">position</span>.
            A heel strike with the foot landing under the hip has less braking force than a midfoot
            strike with the foot extended far ahead. Fix overstriding first — strike pattern will
            often self-correct.
          </p>
          <p className="text-stone-500 text-xs mt-2">
            Exception: supervised forefoot retraining is evidence-supported specifically for
            persistent patellofemoral pain (Chen et al. 2024; de Souza Júnior et al. 2024, RCT, n=60).
          </p>
        </InfoCard>

        <InfoCard title="Upper Body & Arm Swing">
          <p>
            Arm swing doesn't propel you forward — it counteracts trunk rotation from your legs. Without
            it, your torso over-rotates, costing 3–13% more energy (Arellano & Kram, J Exp Biol, 2014).
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Condition</th>
                  <th className="py-1.5">Metabolic Cost Change</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Normal arm swing</td><td>Baseline</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Arms behind back</td><td>+3%</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Arms crossed at chest</td><td>+9%</td></tr>
                <tr><td className="py-1.5 pr-3">Hands on head</td><td>+13%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Key findings</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>
              <span className="font-medium">Elbow angle:</span> Elites run at ~50–60° at easy pace,
              tightening toward 90° at race speed. The "always 90°" cue is oversimplified.
            </li>
            <li>
              <span className="font-medium">Trunk rotation:</span> More rotation actually correlates
              with slightly better economy after controlling for speed (r=−0.15; Schlenstedt 2023,
              n=86 elite juniors). "Minimize rotation" is not a valid cue.
            </li>
            <li>
              <span className="font-medium">Cross-body arm swing:</span> Hands crossing the sternum
              generates lateral oscillation. Fixing arm swing upstream often corrects crossover gait
              below without lower-body cues.
            </li>
            <li>
              <span className="font-medium">Head position:</span> Neutral cervical spine, gaze 15–20m
              ahead. Forward head posture narrows the airway and reduces diaphragm function.
            </li>
            <li>
              <span className="font-medium">Breathing:</span> Reducing breathing rate at a given
              effort saves 4–5% energy. When respiratory muscles fatigue, up to 7% of blood flow
              diverts from legs to breathing muscles.
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Form Across Paces & Fatigue">
          <p>
            Running form adapts predictably with speed — you don't need to force changes that happen
            naturally. About 45% of runners shift to a more anterior foot strike at higher speeds
            without coaching.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Metric</th>
                  <th className="py-1.5 pr-3">Easy</th>
                  <th className="py-1.5 pr-3">Tempo</th>
                  <th className="py-1.5 pr-3">5K Race</th>
                  <th className="py-1.5">Sprint</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Cadence</td>
                  <td className="pr-3">150–160</td>
                  <td className="pr-3">170–175</td>
                  <td className="pr-3">175–185</td>
                  <td>185–200+</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Ground contact</td>
                  <td className="pr-3">270–300ms</td>
                  <td className="pr-3">230–260ms</td>
                  <td className="pr-3">200–230ms</td>
                  <td>100–150ms</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Vert. oscillation</td>
                  <td className="pr-3">6–10cm</td>
                  <td className="pr-3">Moderate</td>
                  <td className="pr-3">Lower</td>
                  <td>4–6cm</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Foot strike (shod)</td>
                  <td className="pr-3">~75% heel</td>
                  <td className="pr-3">Shifting mid</td>
                  <td className="pr-3">More forefoot</td>
                  <td>Forefoot</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Easy-run form still matters</p>
          <p className="mt-1">
            Luedke et al. (2016) found 6–7× tibial injury risk at ≤166 spm — a cadence common on
            easy runs. Chan et al. (2018) achieved 62% injury reduction through training-pace
            retraining, not race-pace work. Maintain at least 165–170 spm even at easy effort.
          </p>
          <p className="font-medium text-stone-900 mt-3">Fatigue breaks upper body first</p>
          <p className="mt-1">
            McConnochie et al. (2026; Royal Society Open Science, R²=0.87 for fatigue → metabolic
            cost) found that fatigue changes kinematics primarily in the upper body, not the lower
            limbs. The breakdown sequence:
          </p>
          <ol className="list-decimal list-inside space-y-1 mt-1">
            <li>Arms cross the body or widen (first signal)</li>
            <li>Shoulders rise toward ears (trapezius compensation)</li>
            <li>Trunk lean increases from hips, not ankles</li>
            <li>Pelvic drop worsens as glutes fatigue</li>
            <li>Cadence drops and GCT rises (late-stage; form has been degrading for a while)</li>
          </ol>
        </InfoCard>

        <InfoCard title="Shoes & Form">
          <p className="font-medium text-stone-900">Heel-toe drop</p>
          <p className="mt-1">
            An 8mm drop change shifts foot strike anteriorly by ~19% and increases loading rate by
            ~32 BW/s (Yu et al. 2022). But injury data conflict: lower-drop shoes reduced injury in
            occasional runners but increased it in regular runners (Malisoux et al. 2016). Safe
            transition: max 2mm reduction per 4–6 weeks.
          </p>
          <p className="font-medium text-stone-900 mt-3">Carbon plate shoes — stratified by pace</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Pace</th>
                  <th className="py-1.5 pr-3">Economy Benefit</th>
                  <th className="py-1.5">Notes</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">&lt;7:26/mi</td>
                  <td className="pr-3">2.7–4.2%</td>
                  <td>Strong evidence; sufficient GRF for foam rebound</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">~8:00/mi</td>
                  <td className="pr-3">1.4% avg</td>
                  <td>Joubert et al. 2023, n=16</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">~9:40/mi</td>
                  <td className="pr-3">0.9% avg</td>
                  <td>33% of runners were worse; foam doesn't compress at low forces</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Other findings</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>
              <span className="font-medium">Maximalist cushioning:</span> Does not lower impact
              loading rates on flat ground (Chan et al. 2018) — the body lands harder when it senses
              more cushion ("impact habituation")
            </li>
            <li>
              <span className="font-medium">Shoe rotation:</span> 2–3 models reduces injury risk 39%
              vs. one model (RCT evidence). Different shoes distribute load across different
              anatomical contact points.
            </li>
            <li>
              <span className="font-medium">Recent shoe change</span> is a stronger injury predictor
              (OR=2.8) than foot strike pattern itself (Vincent et al. 2024, n=710)
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Self-Assessment & Drills">
          <img
            src="/images/learn/form-quickstart-recipe.png"
            alt="Form fix quick start: 5 steps — Measure, Set Target, Film, Activate, One Change at a time"
            className="w-full rounded-lg mb-3"
          />
          <p className="font-medium text-stone-900">Video self-check (treadmill, 240fps slow-mo)</p>
          <p className="text-stone-500 text-xs mb-2">
            Warm up 6+ minutes before filming. Only 42.7% of runners accurately identify their own
            strike pattern (Vincent et al. 2024) — video doesn't lie.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-medium">Side view:</span> Does foot land under or ahead of hips? Is knee flexed ~15–20° at contact? Minimal vertical bounce?</li>
            <li><span className="font-medium">Rear view:</span> Is pelvis level? Visible gap between foot paths (not single-tracking)? No excessive inward knee collapse?</li>
            <li><span className="font-medium">Count cadence:</span> Below 160 spm → cadence increase is priority #1</li>
          </ul>

          <p className="font-medium text-stone-900 mt-3">Evidence-supported drills</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Drill</th>
                  <th className="py-1.5 pr-3">Dose</th>
                  <th className="py-1.5">Targets</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Metronome running</td>
                  <td className="pr-3">2 × 10 min at easy pace</td>
                  <td>Cadence, overstriding, VO (highest evidence)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">A-skip</td>
                  <td className="pr-3">2–3 × 30m</td>
                  <td>Foot placement under CoM</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">B-skip</td>
                  <td className="pr-3">2–3 × 30m</td>
                  <td>Hip extension, hamstring activation</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">Wall drill / falling start</td>
                  <td className="pr-3">4–6 reps</td>
                  <td>Forward lean mechanics, hip drive</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">Barefoot strides on grass</td>
                  <td className="pr-3">4–6 × 80–100m</td>
                  <td>Proprioception, overstriding reduction</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">SL glute bridge</td>
                  <td className="pr-3">3 × 12 each side</td>
                  <td>Hip extension, pelvic stability</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3">Clamshells</td>
                  <td className="pr-3">2 × 15 each side</td>
                  <td>Glute med, hip drop</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-medium text-stone-900 mt-3">Timeline for change</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Weeks 1–2:</span> Cognitive stage — feels unnatural, requires full attention. Easy pace only.</li>
            <li><span className="font-medium">Weeks 3–6:</span> Associative — begins feeling automatic at easy/moderate effort.</li>
            <li><span className="font-medium">Weeks 6–12+:</span> Autonomous — holds under fatigue and at race pace.</li>
          </ul>
          <p className="text-stone-500 text-xs mt-2">
            Change one parameter at a time. Multiple simultaneous changes exceed motor learning
            capacity and load previously unloaded tissues concurrently. If cadence is low, fix that
            before addressing anything else. — Bramah protocol; Dicharry, Running Rewired
          </p>
        </InfoCard>
      </div>
    </article>
  );
}
