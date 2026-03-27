import InfoCard from "../../components/InfoCard";

export default function TrainingTypesPage() {
  return (
    <article>
      <img
        src="/images/learn/training-types.png"
        alt="Runner on a track doing interval training"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Training Types</h2>
      <p className="text-stone-600 text-sm mb-4">
        Running training encompasses distinct workout types, each targeting different
        physiological systems. Easy runs build mitochondria. Tempo runs raise your lactate
        threshold. Intervals push your VO2 max ceiling. Strides sharpen neuromuscular speed.
        Understanding what each workout does — and why — lets you train with precision.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          70–80% of your weekly mileage should be easy running. The most common mistake is
          running easy days too fast, which accumulates fatigue and undermines hard sessions.
        </p>
      </div>

      <div className="space-y-3">
        <InfoCard title="Workout Comparison Table" defaultOpen>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Workout</th>
                  <th className="py-1.5 pr-3">% VO2max</th>
                  <th className="py-1.5 pr-3">Target</th>
                  <th className="py-1.5">Duration</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Recovery run</td><td className="pr-3">50–59%</td><td className="pr-3">Active restoration</td><td>20–40 min</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Easy run</td><td className="pr-3">59–74%</td><td className="pr-3">Aerobic base, mitochondria</td><td>30–90 min</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Long run</td><td className="pr-3">59–74%</td><td className="pr-3">Glycogen adaptation, fat oxidation</td><td>75 min–3+ hr</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Tempo / threshold</td><td className="pr-3">83–88%</td><td className="pr-3">Lactate clearance, raise LT</td><td>20–40 min</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Progression run</td><td className="pr-3">65–88%</td><td className="pr-3">Pacing control, aerobic efficiency</td><td>45–90 min</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Fartlek</td><td className="pr-3">70–95%</td><td className="pr-3">Aerobic + anaerobic flexibility</td><td>30–60 min</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">VO2max intervals</td><td className="pr-3">97–100%</td><td className="pr-3">VO2max ceiling</td><td>3–5 min reps</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3 font-medium">Hill repeats</td><td className="pr-3">85–95%</td><td className="pr-3">Muscular endurance, economy</td><td>60–90 sec reps</td></tr>
                <tr><td className="py-1.5 pr-3 font-medium">Strides</td><td className="pr-3">95–100%+</td><td className="pr-3">Neuromuscular speed</td><td>20–30 sec × 4–8</td></tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <InfoCard title="Easy & Recovery Runs">
          <p>
            The backbone of training. Easy runs build mitochondrial density, capillarization, and
            cardiac stroke volume. They should feel conversational — 65–79% HRmax, roughly 60–90
            sec/mile slower than 10K pace.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">Easy runs:</span> 30–90 min, 70–80% of weekly mileage. Builds the aerobic engine.</li>
            <li><span className="font-medium">Recovery runs:</span> 20–40 min, below 65% HRmax. Day after hard sessions. Flushes waste without adding stress.</li>
            <li><span className="font-medium">The #1 mistake:</span> Running easy days in Zone 3 (70–80% HRmax). Too easy for adaptation, too hard for recovery. Use HR, not pace.</li>
          </ul>
        </InfoCard>

        <InfoCard title="Tempo & Threshold Runs">
          <p>
            Sustained effort at lactate threshold — "comfortably hard." The pace you could hold for
            ~60 minutes all-out. Training at LT raises the threshold, allowing faster race paces.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">Continuous tempo:</span> 20–40 min at T-pace. Best for experienced runners.</li>
            <li><span className="font-medium">Cruise intervals:</span> 5–15 min reps at T-pace with 1–3 min recovery. Allows higher total volume.</li>
            <li><span className="font-medium">Feel test:</span> Should finish feeling like you could go "10 more minutes." If you can't, you went too hard.</li>
          </ul>
          <p className="text-stone-500 text-xs mt-2">
            The Norwegian "double threshold" model (Ingebrigtsen) uses lactate meters to keep effort
            at 2.5–4.5 mmol/L, enabling large threshold volume without excess fatigue.
          </p>
        </InfoCard>

        <InfoCard title="VO2max Intervals">
          <p>
            The most potent — and demanding — workout. Structured repeats at 97–100% VO2max
            (approximately 5K race pace). Forces heart, lungs, and muscles to operate at ceiling.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium">Formats:</span> 5 × 1000m, 4 × 1200m, or 3 × 1600m at I-pace with 2–3 min jog recovery</li>
            <li><span className="font-medium">Key finding:</span> 3-min intervals produce 63% more time above 90% VO2max than 30-sec intervals (Fleckenstein 2025). Interval length matters.</li>
            <li><span className="font-medium">Volume cap:</span> Total interval distance should not exceed 8% of weekly mileage</li>
            <li><span className="font-medium">Recovery:</span> 48–72 hours before next hard session</li>
          </ul>
        </InfoCard>

        <InfoCard title="Long Runs, Progression & Fartlek">
          <p className="font-medium text-stone-900">Long runs</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Easy long run:</span> Pure E-pace. Base-building and injury prevention.</li>
            <li><span className="font-medium">Fast-finish:</span> First two-thirds easy, final third at marathon or tempo pace. Teaches running strong on depleted glycogen.</li>
            <li><span className="font-medium">Progression:</span> Builds from easy to marathon pace. Develops pacing discipline.</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Fartlek</p>
          <p className="mt-1">
            Swedish for "speed play." Unstructured or loosely structured pace variation. Bridges the
            gap between easy and formal intervals. Great for early-season speed introduction,
            trails, and runners who burn out on track work.
          </p>
          <p className="font-medium text-stone-900 mt-3">Strides</p>
          <p className="mt-1">
            20–30 sec accelerations to ~95% max speed, 4–8 reps after easy runs. Pure
            neuromuscular training — recruits fast-twitch fibers that easy running never touches.
            Zero recovery cost. Include 2–3×/week year-round.
          </p>
        </InfoCard>

        <InfoCard title="Periodization: Sequencing It All">
          <p>
            The 4-phase model sequences workout types for peak performance at a target race.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Phase</th>
                  <th className="py-1.5 pr-3">Duration</th>
                  <th className="py-1.5 pr-3">Focus</th>
                  <th className="py-1.5">Key Workouts</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Base</td>
                  <td className="pr-3">6–12 wks</td>
                  <td className="pr-3">Aerobic volume</td>
                  <td>Easy runs, long runs, strides</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Build</td>
                  <td className="pr-3">6–8 wks</td>
                  <td className="pr-3">Threshold + VO2max intro</td>
                  <td>Tempo, cruise intervals, hills</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Sharpen</td>
                  <td className="pr-3">2–4 wks</td>
                  <td className="pr-3">Race-specific</td>
                  <td>Race-pace work, tune-up races</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Taper</td>
                  <td className="pr-3">1–3 wks</td>
                  <td className="pr-3">Fatigue reduction</td>
                  <td>Volume −41–60%, maintain intensity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs mt-2">
            All periodization models (polarized, pyramidal, threshold) improve performance for
            recreational runners with no significant difference between them (Rosenblat 2025 NMA).
            The basics matter more than the model.
          </p>
        </InfoCard>

        <InfoCard title="Energy Systems Map">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">System</th>
                  <th className="py-1.5 pr-3">Fuel</th>
                  <th className="py-1.5 pr-3">Dominates</th>
                  <th className="py-1.5">Trained By</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">ATP-CP</td>
                  <td className="pr-3">Stored ATP + creatine</td>
                  <td className="pr-3">0–10 sec</td>
                  <td>Hill sprints, strides</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Glycolytic</td>
                  <td className="pr-3">Glycogen (no O2)</td>
                  <td className="pr-3">10 sec–2 min</td>
                  <td>400–800m intervals</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Aerobic</td>
                  <td className="pr-3">Fat + carbs + O2</td>
                  <td className="pr-3">2 min+</td>
                  <td>Easy runs, tempo, long intervals, long runs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </InfoCard>
      </div>
    </article>
  );
}
