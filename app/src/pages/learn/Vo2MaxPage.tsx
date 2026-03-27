import InfoCard from "../../components/InfoCard";

export default function Vo2MaxPage() {
  return (
    <article>
      <img
        src="/images/learn/vo2-max.png"
        alt="Runner at peak effort with oxygen uptake visualization"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">VO2 Max</h2>
      <p className="text-stone-600 text-sm mb-4">
        VO2 max is the maximum rate at which your body can consume oxygen during exhaustive
        exercise — the single number that captures your cardiorespiratory system's ceiling. It
        integrates cardiac output, blood oxygen capacity, and muscle extraction into one metric.
        It's also the strongest non-invasive predictor of how long you'll live.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          Low VO2 max is a stronger mortality predictor than smoking, diabetes, or hypertension.
          Moving from the bottom 25% to just above average cuts all-cause mortality by ~50%
          (Mandsager et al. 2018; n=122,007).
        </p>
      </div>

      <div className="space-y-3">
        <InfoCard title="What VO2 Max Is" defaultOpen>
          <p>
            VO2 max is governed by the Fick equation: <span className="font-medium">VO2 =
            Cardiac Output × Arteriovenous O2 Difference</span>. Two sides determine your
            ceiling: how much oxygenated blood your heart delivers (central) and how much
            oxygen your muscles extract (peripheral).
          </p>
          <p className="font-medium text-stone-900 mt-3">Central factors (delivery)</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Stroke volume:</span> The #1 determinant. Untrained: 100–130 ml/beat. Elite athletes: 160–200+ ml/beat.</li>
            <li><span className="font-medium">Heart rate max:</span> Declines ~1 beat/year after 25. Not trainable.</li>
            <li><span className="font-medium">Blood volume & hemoglobin:</span> Each gram of Hb carries 1.34 ml O2. Males have ~15% more Hb than females.</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Peripheral factors (extraction)</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Capillary density:</span> More capillaries = shorter O2 diffusion distance. Increases ~15% with training.</li>
            <li><span className="font-medium">Mitochondrial density:</span> Increases 23–27% with endurance or HIIT training.</li>
            <li><span className="font-medium">Muscle fiber type:</span> Type I fibers are more aerobically efficient. Largely genetic; resistant to change.</li>
          </ul>
          <p className="text-stone-500 text-xs mt-2">
            Cardiac output accounts for ~70% of the VO2 max limitation (Ferretti et al. 1997,
            bed rest study). The concept was introduced by A.V. Hill in 1923 and remains
            conceptually intact 100 years later.
          </p>
        </InfoCard>

        <InfoCard title="Where You Stand: Levels & Benchmarks">
          <img
            src="/images/learn/vo2-functional-spectrum.png"
            alt="What your VO2 max number means: below 20 walking is hard, 35-42 can run 10-12 min/mi, 42-55 sub-2hr half marathon, 55-97 competitive to world-class. Independence threshold at 18-20."
            className="w-full rounded-lg mb-3"
          />
          <p className="font-medium text-stone-900">Normative values (ml/kg/min) — Males</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Age</th>
                  <th className="py-1.5 pr-3">Below Avg</th>
                  <th className="py-1.5 pr-3">Average</th>
                  <th className="py-1.5 pr-3">Above Avg</th>
                  <th className="py-1.5">Top 25%</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">20–29</td><td className="pr-3">&lt;38</td><td className="pr-3">38–48</td><td className="pr-3">&gt;48</td><td>&gt;50</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">30–39</td><td className="pr-3">&lt;35</td><td className="pr-3">35–44</td><td className="pr-3">&gt;44</td><td>&gt;47</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">40–49</td><td className="pr-3">&lt;32</td><td className="pr-3">32–41</td><td className="pr-3">&gt;41</td><td>&gt;49</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">50–59</td><td className="pr-3">&lt;28</td><td className="pr-3">28–36</td><td className="pr-3">&gt;36</td><td>&gt;43</td></tr>
                <tr><td className="py-1.5 pr-3 font-medium">60–69</td><td className="pr-3">&lt;25</td><td className="pr-3">25–32</td><td className="pr-3">&gt;32</td><td>&gt;39</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">What the numbers mean in practice</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">VO2 Max</th>
                  <th className="py-1.5">What You Can Do</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">&lt;20</td><td>Sustained walking difficult; high mortality risk</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">20–30</td><td>Light jogging briefly; sedentary baseline</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">35–42</td><td>Recreational runner; 10–12 min/mi pace continuously</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">42–48</td><td>Regular runner; 5K in 26–30 min; half marathon feasible</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">48–55</td><td>Trained runner; 5K under 24 min; sub-2:00 half marathon</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">55–65</td><td>Competitive club runner; sub-19 min 5K</td></tr>
                <tr><td className="py-1.5 pr-3 font-medium">75–97</td><td>Elite / world-class (Dæhlie 96, Svendsen 97.5)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-2">
            Sources: ACSM 11th ed., FRIEND Registry (Kaminsky 2015), INSCYD. Women's values are
            typically 15–20% lower due to hemoglobin and body composition differences — not
            muscle extraction capacity, which is equivalent (Skattebo 2025).
          </p>
        </InfoCard>

        <InfoCard title="How to Improve It">
          <img
            src="/images/learn/vo2-protocols-ranked.png"
            alt="Best protocols ranked: Norwegian 4x4 (gold standard, +5-8%), HIIT (+5-10%), Sprint intervals (+4-8%), Billat (+3-6%), Threshold (+2-4%). Untrained gain 15-25%."
            className="w-full rounded-lg mb-3"
          />
          <p>
            The Norwegian 4×4 protocol is the gold standard. Untrained adults can gain 15–25%
            in 8–20 weeks; trained athletes 5–10%. Genetics explain ~47% of trainability
            variance (HERITAGE study), but "non-responders" to one program often respond to
            another.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Protocol</th>
                  <th className="py-1.5 pr-3">Prescription</th>
                  <th className="py-1.5 pr-3">Gain (trained)</th>
                  <th className="py-1.5">Best For</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Norwegian 4×4</td>
                  <td className="pr-3">4 × 4 min at 90–95% HRmax, 3 min walk, 2×/wk</td>
                  <td className="pr-3">+5–8%</td>
                  <td>Gold standard; all levels</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">HIIT (3–5 min)</td>
                  <td className="pr-3">4–8 intervals, 1:1 work:rest</td>
                  <td className="pr-3">+5–10%</td>
                  <td>Flexible; all levels</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Sprint intervals</td>
                  <td className="pr-3">8–10 × 30s all-out, 4 min rest, 3×/wk</td>
                  <td className="pr-3">+4–8%</td>
                  <td>Time-constrained</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Billat vVO2max</td>
                  <td className="pr-3">50% TTE intervals at vVO2max pace</td>
                  <td className="pr-3">+3–6%</td>
                  <td>Well-trained runners</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Threshold/tempo</td>
                  <td className="pr-3">20–60 min at LT, 75–85% HRmax</td>
                  <td className="pr-3">+2–4%</td>
                  <td>Base building; less VO2 stimulus</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Timeline</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Weeks 2–4:</span> Peripheral adaptations begin (mitochondria, capillaries)</li>
            <li><span className="font-medium">Weeks 6–8:</span> First measurable VO2 max gains in untrained</li>
            <li><span className="font-medium">Months 6–12:</span> Trained athletes plateau; shift to economy and threshold</li>
          </ul>
          <p className="text-stone-500 text-xs mt-2">
            Polarized training (80/20) is superior for VO2 peak in short blocks (&lt;12 weeks) and
            highly trained athletes (Oliveira et al. 2024 meta-analysis). For longer programs,
            it matches threshold training. Older adults (60–70+) respond robustly — one study
            showed cardiac age reversal of 20 years with the 4×4 protocol.
          </p>
        </InfoCard>

        <InfoCard title="Why It Matters: Longevity & Daily Life">
          <img
            src="/images/learn/vo2-mortality-stat.png"
            alt="5x higher mortality for low fitness vs elite. Low VO2 max is a stronger predictor than smoking, diabetes, or hypertension."
            className="w-full rounded-lg mb-3"
          />
          <p>
            Peter Attia calls VO2 max "the single most powerful independent predictor of
            all-cause mortality." The data backs him up.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Risk Factor</th>
                  <th className="py-1.5">Mortality Hazard</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Low VO2 max (bottom 25%)</td><td>Up to 5× higher mortality</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Smoking</td><td>1.4–2.0×</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Diabetes</td><td>1.5–2.0×</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Hypertension</td><td>1.3–1.5×</td></tr>
                <tr><td className="py-1.5 pr-3">Obesity (BMI &gt;35)</td><td>1.2–1.5×</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">The Marginal Decade</p>
          <img
            src="/images/learn/vo2-marginal-decade.png"
            alt="The Marginal Decade: Active person starts at 42 at age 50 and stays independent at 80. Sedentary person starts at 28 and crosses below independence threshold by 70."
            className="w-full rounded-lg my-2"
          />
          <p className="mt-1">
            Attia's framework: whatever physical capacity you need at 80, you needed to peak far
            above it at 50 — because you lose ~10% per decade. A 50-year-old at 42 ml/kg/min
            will have ~30 at 70 (above independence threshold). At 28, they'll hit ~16 at 80
            (dependent). Build the buffer now.
          </p>
          <p className="font-medium text-stone-900 mt-3">Functional thresholds</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">&lt;18–20 ml/kg/min:</span> Risk of losing independent living capacity</li>
            <li><span className="font-medium">&lt;15:</span> Daily activities require significant effort</li>
            <li><span className="font-medium">40+:</span> Strong protection against all-cause mortality</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Beyond mortality</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Brain:</span> VO2 max correlates with brain myelin content; higher fitness = better white matter integrity (NIA/PNAS 2025)</li>
            <li><span className="font-medium">Cancer:</span> 45% lower cancer mortality for high vs low fitness (Schmid & Leitzmann meta-analysis)</li>
            <li><span className="font-medium">Metabolic:</span> Below-average VO2 max = 4–8× more likely to have metabolic syndrome (HUNT3)</li>
          </ul>
          <p className="text-stone-500 text-xs mt-2">
            50–70% of VO2 max decline with aging is preventable through consistent training.
            Active 70-year-olds maintain values comparable to sedentary 40-year-olds.
          </p>
        </InfoCard>

        <InfoCard title="How to Test & Track">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Method</th>
                  <th className="py-1.5 pr-3">Cost</th>
                  <th className="py-1.5 pr-3">Accuracy</th>
                  <th className="py-1.5">Best For</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Lab GXT</td>
                  <td className="pr-3">$150–400</td>
                  <td className="pr-3">Gold standard (±2–3%)</td>
                  <td>Baseline calibration</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Cooper 12-min run</td>
                  <td className="pr-3">Free</td>
                  <td className="pr-3">r=0.90 vs lab</td>
                  <td>Runners; retest every 12 wks</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">VDOT (from 5K time)</td>
                  <td className="pr-3">Free</td>
                  <td className="pr-3">±3–6% for trained runners</td>
                  <td>Most practical for runners</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Garmin watch</td>
                  <td className="pr-3">~$300+</td>
                  <td className="pr-3">MAPE 4–10%</td>
                  <td>Continuous trend tracking</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Apple Watch</td>
                  <td className="pr-3">~$400+</td>
                  <td className="pr-3">MAPE 13–16%</td>
                  <td>General health awareness</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Wearable caveats</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Garmin underestimates by 6+ ml/kg/min for highly trained athletes (VO2 max &gt;60)</li>
            <li>Apple Watch underestimates by ~6 ml/kg/min average with wide individual variance</li>
            <li>All wearables overestimate in unfit populations, underestimate in fit — regression to mean</li>
            <li>Hot weather, altitude, and treadmill use all reduce accuracy</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">DIY: estimate from a 5K</p>
          <p className="mt-1">
            Run a maximal 5K, enter time at vdoto2.com. Examples: 30:00 ≈ 30 ml/kg/min, 22:00 ≈
            43, 20:00 ≈ 48, 17:30 ≈ 56. VDOT captures both VO2 max and running economy — more
            actionable than a raw lab number for setting training paces.
          </p>
        </InfoCard>

        <InfoCard title="Your Action Plan">
          <p className="font-medium text-stone-900">Step 1: Know your number</p>
          <p className="mt-1">
            Run a maximal 5K or do a Cooper 12-minute test. Enter the result at vdoto2.com.
            Compare to the age/sex table above. Where do you fall?
          </p>
          <p className="font-medium text-stone-900 mt-3">Step 2: Start the 4×4</p>
          <p className="mt-1">
            Add the Norwegian 4×4 to your training 2×/week: 10 min warm-up → 4 × 4 min at
            90–95% HRmax (can't hold conversation, pace just below all-out) → 3 min walking
            recovery → 10 min cool-down. Total: ~45 min.
          </p>
          <p className="font-medium text-stone-900 mt-3">Step 3: Retest at 8 weeks</p>
          <p className="mt-1">
            Repeat the same 5K or Cooper test. Expect 5–15% improvement if previously
            untrained/recreational. If you see less than 3%, increase frequency or try a
            different interval format (Billat, sprint intervals).
          </p>
          <p className="font-medium text-stone-900 mt-3">Step 4: Set your longevity target</p>
          <p className="mt-1">
            Attia recommends the top 25th percentile for your age/sex as a minimum buffer. For a
            40-year-old male, that's &gt;49 ml/kg/min. This isn't a performance goal — it's an
            insurance policy against the 10% per decade decline that's coming regardless.
          </p>
          <p className="text-stone-500 text-xs mt-2">
            Each 1-MET gain (3.5 ml/kg/min) reduces all-cause mortality by 13–15% and
            cardiovascular death by 21% (Kokkinos 2022, n=750,000+; HUNT Norway, n=37,000).
          </p>
        </InfoCard>
      </div>
    </article>
  );
}
