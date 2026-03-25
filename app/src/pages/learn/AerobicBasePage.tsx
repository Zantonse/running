import InfoCard from "../../components/InfoCard";

export default function AerobicBasePage() {
  return (
    <article>
      <img
        src="/images/learn/aerobic-base.png"
        alt="Runner on a trail at easy aerobic pace"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Aerobic Base</h2>
      <p className="text-stone-600 text-sm mb-4">
        The aerobic base is the foundational phase of structured running training. Four major
        frameworks address it — Maffetone MAF, 80/20 polarized (Seiler), Lydiard base phase, and
        Zone 2 protocols — and they agree on the fundamentals: most training should be easy, the
        moderate "grey zone" is the primary mistake recreational runners make, and consistency over
        weeks matters more than any single workout.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          The #1 mistake: running easy days too fast. Seiler's research shows recreational runners
          spend 15–30% more time in the "grey zone" than elites do.
        </p>
      </div>

      <div className="space-y-3">
        <InfoCard title="What Is the Aerobic Base?" defaultOpen>
          <p>
            The aerobic base is the sum of physiological adaptations that let you run farther and
            faster while burning fat, clearing lactate, and recovering between sessions. Building it
            requires sustained easy running over weeks to months — there are no shortcuts.
          </p>
          <p className="font-medium text-stone-900 mt-3">Six Key Adaptations</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>
              <span className="font-medium">Mitochondrial density</span> — more and larger
              mitochondria in muscle fibers, increasing aerobic enzyme activity (weeks 4–16+)
            </li>
            <li>
              <span className="font-medium">Capillary network</span> — new capillaries grow around
              muscle cells, improving oxygen delivery (weeks 4–16+)
            </li>
            <li>
              <span className="font-medium">Fat oxidation</span> — muscles shift toward burning fat
              at higher intensities, sparing glycogen for hard efforts
            </li>
            <li>
              <span className="font-medium">Cardiac remodeling</span> — the left ventricle enlarges,
              increasing stroke volume so each heartbeat delivers more blood (weeks 1–4)
            </li>
            <li>
              <span className="font-medium">Blood volume</span> — red blood cell count rises,
              improving oxygen-carrying capacity (weeks 1–4)
            </li>
            <li>
              <span className="font-medium">Slow-twitch fiber development</span> — Type I fibers
              become more fatigue-resistant; some Type IIa fibers gain more aerobic characteristics
            </li>
          </ul>
          <p className="text-stone-500 text-xs mt-2">
            Early adaptations (cardiac output, blood volume) appear in weeks 1–4. Deeper adaptations
            (capillaries, mitochondria) require 4–16+ weeks of consistent aerobic stimulus. — McMillan
            Running
          </p>
        </InfoCard>

        <InfoCard title="Why Low Intensity Works">
          <p>
            Running slowly doesn't feel productive, but four mechanisms explain why it outperforms
            moderate-effort training for building your aerobic engine.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              <span className="font-medium">Sustained signaling</span> — Zone 2 intensity activates
              calcium signaling pathways during prolonged contractions, driving mitochondrial
              adaptation without the recovery cost of harder work
            </li>
            <li>
              <span className="font-medium">Fiber recruitment pattern</span> — easy running
              primarily loads Type I (slow-twitch) fibers, which are the fibers most trainable for
              endurance. High-intensity work recruits Type II fibers but can't sustain the volume
              needed for aerobic remodeling
            </li>
            <li>
              <span className="font-medium">FatMax loading</span> — fat oxidation peaks in Zone 2.
              Training here teaches muscles to burn fat at progressively higher intensities, delaying
              the switch to glycogen
            </li>
            <li>
              <span className="font-medium">Recovery &amp; volume ceiling</span> — easy runs create
              minimal glycogen depletion and muscle damage, allowing higher weekly volume. Volume is
              the primary driver of aerobic development — the more hours you can accumulate without
              breaking down, the faster you adapt
            </li>
          </ul>
          <p className="text-stone-500 text-xs mt-2">
            Note: A 2025 Sports Medicine review (PMID 40560504) challenges Zone 2 as uniquely
            superior for mitochondrial biogenesis, noting higher intensities create stronger
            AMPK/PGC-1α signaling. The practical takeaway: Zone 2 enables volume; the 20% hard work
            provides the intense stimulus. Both matter.
          </p>
        </InfoCard>

        <InfoCard title="Training Methods Compared">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Dimension</th>
                  <th className="py-1.5 pr-3">MAF</th>
                  <th className="py-1.5 pr-3">80/20</th>
                  <th className="py-1.5 pr-3">Lydiard</th>
                  <th className="py-1.5">Zone 2</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Intensity control</td>
                  <td className="pr-3">HR cap (180 formula)</td>
                  <td className="pr-3">Time-in-zone split</td>
                  <td className="pr-3">"Best aerobic effort"</td>
                  <td>Below LT1 / talk test</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Hard work in base?</td>
                  <td className="pr-3">None</td>
                  <td className="pr-3">20% hard sessions</td>
                  <td className="pr-3">Fartlek / varied aerobic</td>
                  <td>Minimal</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Grey zone?</td>
                  <td className="pr-3">Avoid</td>
                  <td className="pr-3">Actively avoid</td>
                  <td className="pr-3">Avoid for most runs</td>
                  <td>Avoid</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Base duration</td>
                  <td className="pr-3">3–6 months</td>
                  <td className="pr-3">Ongoing</td>
                  <td className="pr-3">8–16+ weeks</td>
                  <td>Ongoing</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Volume focus</td>
                  <td className="pr-3">Any volume</td>
                  <td className="pr-3">High for 80%</td>
                  <td className="pr-3">Very high (elite ~100 mpw)</td>
                  <td>Accumulate hours</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Best for</td>
                  <td className="pr-3">Beginners</td>
                  <td className="pr-3">Intermediate</td>
                  <td className="pr-3">Advanced</td>
                  <td>All levels</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Where all methods agree</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Most training must be easy — conversational, aerobic effort</li>
            <li>The moderate "grey zone" (Zone 3) is the primary mistake of recreational runners</li>
            <li>A dedicated base phase precedes race-specific and high-intensity work</li>
            <li>Consistency and accumulated time matter more than any single workout</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Where they disagree</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>
              <span className="font-medium">Easy run intensity:</span> MAF/Zone 2 use hard HR caps;
              Lydiard allows "3/4 effort" aerobic runs that exceed MAF HR
            </li>
            <li>
              <span className="font-medium">Hard work during base:</span> 80/20 keeps ~20% hard
              year-round; MAF and Lydiard base exclude significant anaerobic work
            </li>
            <li>
              <span className="font-medium">Volume requirements:</span> Lydiard requires very high
              mileage (70–100+ mpw); MAF adapts to any volume; 80/20 scales to available time
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Finding Your Zones">
          <p className="font-medium text-stone-900">MAF 180 Formula</p>
          <p className="mt-1">
            MAF HR = 180 − age, then adjust: −10 if recovering from major illness or chronic
            overtraining; −5 if injured, inconsistent, or just starting; ±0 if training consistently
            4×/week for up to 2 years; +5 if training 2+ years with steady improvement. Athletes 65+
            may add up to 10 extra beats. Athletes 16 and under use a flat 165.
          </p>
          <p className="font-medium text-stone-900 mt-3">Zone System Mapping</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Zone</th>
                  <th className="py-1.5 pr-3">% Max HR</th>
                  <th className="py-1.5 pr-3">Feel</th>
                  <th className="py-1.5">RPE (Borg)</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Zone 1</td>
                  <td className="pr-3">55–65%</td>
                  <td className="pr-3">Very easy, recovery</td>
                  <td>6–8</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Zone 2</td>
                  <td className="pr-3">65–80%</td>
                  <td className="pr-3">Conversational, approaching limit at top</td>
                  <td>9–12</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Zone 3</td>
                  <td className="pr-3">80–87%</td>
                  <td className="pr-3">"Comfortably hard" — the grey zone</td>
                  <td>13–14</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Zone 4</td>
                  <td className="pr-3">87–93%</td>
                  <td className="pr-3">Hard, threshold effort</td>
                  <td>15–17</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Zone 5</td>
                  <td className="pr-3">93–100%</td>
                  <td className="pr-3">Maximum, unsustainable</td>
                  <td>18–20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Practical Methods</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>
              <span className="font-medium">Talk test:</span> If you can hold a full conversation,
              you're in Zone 1–2. If you can speak in short sentences, you're in Zone 3. If you can
              only manage a few words, Zone 4+.
            </li>
            <li>
              <span className="font-medium">HR drift test:</span> Run a steady effort for 60 min. If
              your HR drifts up &gt;5% in the second half at the same pace, you started too fast for
              an aerobic run.
            </li>
            <li>
              <span className="font-medium">MAF test:</span> Run a fixed distance at exactly MAF HR.
              Track your pace monthly — it should improve as your base develops.
            </li>
            <li>
              <span className="font-medium">Wearable accuracy:</span> Optical wrist-based HR sensors
              can lag and spike. Chest straps (Polar H10, Garmin HRM-Pro) are significantly more
              accurate for zone-based training.
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="How Long It Takes">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Level</th>
                  <th className="py-1.5 pr-3">Base Duration</th>
                  <th className="py-1.5 pr-3">Starting Volume</th>
                  <th className="py-1.5">Best Method</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Beginner (0–2 yrs)</td>
                  <td className="pr-3">12–24 weeks</td>
                  <td className="pr-3">10–20 mpw</td>
                  <td>MAF or Zone 2</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Intermediate (2–5 yrs)</td>
                  <td className="pr-3">8–12 weeks</td>
                  <td className="pr-3">25–45 mpw</td>
                  <td>80/20 Polarized</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Advanced (5+ yrs)</td>
                  <td className="pr-3">10–16 weeks</td>
                  <td className="pr-3">50–80+ mpw</td>
                  <td>Lydiard + 80/20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Progressive Overload</p>
          <p className="mt-1">
            The 10% rule is training lore, not evidence. A 2008 Groningen study (n=532) found no
            injury difference between 10% and 50% weekly increases. A 2012 Aarhus study found injured
            runners averaged 30%+ weekly jumps, while non-injured averaged 22%.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <span className="font-medium">Runs-per-week rule:</span> add no more miles per week
              than you run days per week (4 runs/week → max +4 miles)
            </li>
            <li>
              <span className="font-medium">3-up / 1-down:</span> increase volume for 3 weeks
              (10–20% each), then cut back 20–30% for a recovery week before building again
            </li>
            <li>
              <span className="font-medium">Feel-based:</span> let individual response to training
              load guide increases, not arbitrary percentages
            </li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Detraining</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>2 weeks off: VO2max drops ~6%; mitochondrial enzyme activity declines</li>
            <li>4 weeks off: measurable capillary regression begins</li>
            <li>Maintaining 2–3 easy runs/week preserves most aerobic fitness during tapers or breaks</li>
          </ul>
        </InfoCard>

        <InfoCard title="Common Mistakes">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-medium">Running easy days too fast</span> — the most common
              error. Seiler's research shows recreational runners spend 15–30% more time in Zone 3
              than elites. Slow down until you can talk in full sentences.
            </li>
            <li>
              <span className="font-medium">Trusting watch defaults</span> — wrist-based optical HR
              sensors lag and spike, especially at wrist-flexion angles during running. Zone alerts
              based on inaccurate data lead to wrong pacing. Use a chest strap for zone training.
            </li>
            <li>
              <span className="font-medium">Impatience with the process</span> — capillary and
              mitochondrial adaptations take 4–16+ weeks. Many runners quit base building after 3–4
              weeks because they don't feel faster yet. The MAF test (monthly pace at fixed HR) helps
              prove progress is happening.
            </li>
            <li>
              <span className="font-medium">Group run pressure</span> — social runs often drift into
              Zone 3 because nobody wants to be the slowest. Run your easy runs alone, or find a
              group explicitly committed to conversational pace.
            </li>
            <li>
              <span className="font-medium">Under-fueling</span> — low carb availability during high
              aerobic volume impairs adaptation. The goal is to train the body to burn fat, not to
              starve it of fuel. Adequate carbohydrate intake supports both glycogen stores and the
              hormonal environment needed for adaptation.
            </li>
            <li>
              <span className="font-medium">Skipping strides</span> — strides (20–30 sec
              accelerations, 4–8 reps, 2–3×/week) maintain neuromuscular speed and running economy
              during base building at zero recovery cost. Most coaches including Jason Fitzgerald
              (USATF) endorse them throughout the base phase.
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Quick-Start Guide">
          <p className="font-medium text-stone-900">5 Steps to Start</p>
          <ol className="list-decimal list-inside space-y-1 mt-1">
            <li>Calculate your MAF HR (180 − age, adjusted) as a starting ceiling</li>
            <li>Run your next 3 easy runs at or below that HR — accept the slow pace</li>
            <li>Do a baseline MAF test: run 3 miles at exactly MAF HR and record your pace</li>
            <li>Add strides (6 × 20 sec) after 2 easy runs per week</li>
            <li>Follow a 3-up / 1-down volume cycle, adding miles per the runs-per-week rule</li>
          </ol>
          <p className="font-medium text-stone-900 mt-3">Sample Week (~20 mpw)</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Day</th>
                  <th className="py-1.5 pr-3">Run</th>
                  <th className="py-1.5">Notes</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Monday</td>
                  <td className="pr-3">Rest</td>
                  <td>—</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Tuesday</td>
                  <td className="pr-3">4 mi easy</td>
                  <td>+ 6 strides after</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Wednesday</td>
                  <td className="pr-3">3 mi easy</td>
                  <td>All at MAF HR or below</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Thursday</td>
                  <td className="pr-3">4 mi easy</td>
                  <td>+ 6 strides after</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Friday</td>
                  <td className="pr-3">Rest</td>
                  <td>—</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Saturday</td>
                  <td className="pr-3">7 mi long run</td>
                  <td>Conversational pace throughout</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Sunday</td>
                  <td className="pr-3">2 mi recovery</td>
                  <td>Very easy, Zone 1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Monitoring Your Progress</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Metric</th>
                  <th className="py-1.5 pr-3">How</th>
                  <th className="py-1.5">Frequency</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">MAF test pace</td>
                  <td className="pr-3">3 mi at MAF HR, record avg pace</td>
                  <td>Monthly</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">Resting HR</td>
                  <td className="pr-3">First thing in morning, lying down</td>
                  <td>Daily (7-day avg)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">HR drift</td>
                  <td className="pr-3">Compare 1st/2nd half HR at same pace</td>
                  <td>Weekly on long run</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3">Perceived effort</td>
                  <td className="pr-3">Same route feeling easier over time</td>
                  <td>Ongoing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </InfoCard>
      </div>
    </article>
  );
}
