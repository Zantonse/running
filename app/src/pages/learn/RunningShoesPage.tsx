import InfoCard from "../../components/InfoCard";

export default function RunningShoesPage() {
  return (
    <article>
      <img
        src="/images/learn/running-shoes.png"
        alt="Running shoe with visible midsole foam technology"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Running Shoes</h2>
      <p className="text-stone-600 text-sm mb-4">
        Running shoe technology has transformed since 2017. PEBA foams, carbon plates, and
        rocker geometries have produced measurable performance gains — but the benefits are
        pace-dependent, the foams degrade faster than you think, and the marketing often
        outpaces the science. Here's what the evidence actually shows.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          The single highest-evidence shoe recommendation: rotate 2–3 different models. The
          Malisoux et al. study (264 runners, 22 weeks) found a 39% lower injury risk from shoe
          rotation — independent of mileage, BMI, or experience.
        </p>
      </div>

      <div className="space-y-3">
        <InfoCard title="Foam Technology: What's Inside Your Shoes" defaultOpen>
          <p>
            The midsole foam is the most consequential component of a modern running shoe. Energy
            return ranges from ~52% (standard EVA) to ~80% (top-tier TPEE), and A-TPU is
            displacing PEBA as the new performance leader.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Foam</th>
                  <th className="py-1.5 pr-3">Chemistry</th>
                  <th className="py-1.5 pr-3">Energy Return</th>
                  <th className="py-1.5 pr-3">Cold Loss</th>
                  <th className="py-1.5">Used In</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Lightstrike Pro</td>
                  <td className="pr-3">TPEE</td>
                  <td className="pr-3">80.4% (lab)</td>
                  <td className="pr-3">5%</td>
                  <td>Adidas Adios Pro 4</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">ZoomX (race)</td>
                  <td className="pr-3">PEBA</td>
                  <td className="pr-3">~78%</td>
                  <td className="pr-3">6%</td>
                  <td>Nike Alphafly 3, Vaporfly</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">FF Leap</td>
                  <td className="pr-3">A-TPU</td>
                  <td className="pr-3">13.7% bouncier than PEBA</td>
                  <td className="pr-3">2%</td>
                  <td>ASICS Metaspeed (2025)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">NITRO Elite</td>
                  <td className="pr-3">A-TPU</td>
                  <td className="pr-3">88% retained over marathon sim</td>
                  <td className="pr-3">Very low</td>
                  <td>Puma Fast-R Nitro Elite 3</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">scEVA</td>
                  <td className="pr-3">Supercritical EVA</td>
                  <td className="pr-3">65.4%</td>
                  <td className="pr-3">42%</td>
                  <td>HOKA Mach 6</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Standard EVA</td>
                  <td className="pr-3">CMEVA</td>
                  <td className="pr-3">52.3%</td>
                  <td className="pr-3">31%</td>
                  <td>Budget trainers</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Key insights</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>
              <span className="font-medium">A-TPU is the emerging leader</span> — ASICS (FF Leap)
              and Puma (NITRO) both show superior energy return and cold-weather stability vs. PEBA.
              A Puma-funded UMass study found 3.5% efficiency advantage.
            </li>
            <li>
              <span className="font-medium">Softness ≠ energy return.</span> The firm Adizero EVO SL
              (43.5 durometer) returns 74.3%; the soft NB 1080 (28.5 durometer) returns only 58%.
            </li>
            <li>
              <span className="font-medium">PEBA degrades by ~280 miles.</span> Rodrigo-Carranza et
              al. (2023): after 450km, PEBA shoes had similar economy to EVA. Race shoes: retire from
              racing at 200 miles.
            </li>
            <li>
              <span className="font-medium">Standard foams fail in cold weather.</span> EVA loses
              31–42% of softness; PEBA/A-TPU loses 2–8%. Winter runners need premium foam or accept
              a different shoe underfoot.
            </li>
          </ul>
          <p className="text-stone-500 text-xs mt-2">
            Energy return ceiling is ~80% under current World Athletics rules (40mm stack, single
            plate). Lab data: RunRepeat ASTM F1976-13 protocol.
          </p>
        </InfoCard>

        <InfoCard title="Carbon Plates: How They Work">
          <p>
            Carbon fiber plates don't "spring" you forward — they stiffen the forefoot, reducing
            energy lost at the metatarsophalangeal (MTP) joint during toe-off. The plate, foam, and
            rocker geometry work as a system.
          </p>
          <p className="font-medium text-stone-900 mt-3">Performance by pace</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Pace</th>
                  <th className="py-1.5 pr-3">Economy Benefit</th>
                  <th className="py-1.5">Evidence</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">&lt;7:26/mi</td>
                  <td className="pr-3">2.7–4.2%</td>
                  <td>Multiple studies; strong evidence</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">~8:00/mi</td>
                  <td className="pr-3">1.4% average</td>
                  <td>Joubert et al. 2023, n=16</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">~9:40/mi</td>
                  <td className="pr-3">0.9% avg; 33% were worse</td>
                  <td>Foam doesn't compress enough at low forces</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Design variations</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Full-length carbon plate:</span> Standard in race shoes (Vaporfly, Adios Pro). Maximum MTP stiffening.</li>
            <li><span className="font-medium">Spoon-shaped plate:</span> Curved rocker geometry facilitates toe-off transition (Alphafly).</li>
            <li><span className="font-medium">Nylon/fiberglass plate:</span> Brooks SpeedVault, On Speedboard — lower cost, less stiff. Moderate benefit.</li>
            <li><span className="font-medium">Split plate:</span> Some stability-oriented designs. Less data available.</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Training vs. racing</p>
          <p className="mt-1">
            Carbon plates shift workload from ankle plantar flexors to knee and hip. Exclusive
            training in plated shoes may under-develop calf strength and increase hamstring/hip
            overuse risk. Use plated shoes for key sessions and races; train in unplated daily
            trainers.
          </p>
        </InfoCard>

        <InfoCard title="Building a Shoe Rotation">
          <p>
            Malisoux et al. (2013, Scand J Med Sci Sports, n=264, 22 weeks): runners rotating
            multiple models had 39% lower injury risk. The mechanism is twofold — foam needs 24+
            hours to decompress, and varying drop/stack challenges different muscle groups.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Role</th>
                  <th className="py-1.5 pr-3">Character</th>
                  <th className="py-1.5 pr-3">% Mileage</th>
                  <th className="py-1.5">Examples (2025–26)</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Daily trainer</td>
                  <td className="pr-3">8–12mm drop, balanced</td>
                  <td className="pr-3">50–60%</td>
                  <td>Ghost 17, Ride 18, Pegasus 42</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Long run shoe</td>
                  <td className="pr-3">High stack (40mm+), plush</td>
                  <td className="pr-3">20–25%</td>
                  <td>Novablast 5, Clifton 10, 1080v15</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Workout shoe</td>
                  <td className="pr-3">Lighter, firmer, or super trainer</td>
                  <td className="pr-3">15–20%</td>
                  <td>Adizero Evo SL, Endorphin Speed 5</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Race shoe</td>
                  <td className="pr-3">Carbon-plated, super foam</td>
                  <td className="pr-3">5–10%</td>
                  <td>Vaporfly, Alphafly, Adios Pro</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Rules</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Two identical pairs = zero rotation benefit. Models must differ in drop, stack, or density.</li>
            <li>Allow 48+ hours between wears of the same pair (5 days optimal for full foam recovery).</li>
            <li>When adding a low-drop shoe, start at 10–15% of mileage and add 5%/week.</li>
          </ul>
        </InfoCard>

        <InfoCard title="Daily Trainers: 2025–2026 Picks">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Shoe</th>
                  <th className="py-1.5 pr-3">Price</th>
                  <th className="py-1.5 pr-3">Weight</th>
                  <th className="py-1.5 pr-3">Stack</th>
                  <th className="py-1.5">Best For</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Adidas Adizero Evo SL</td>
                  <td className="pr-3">$180</td>
                  <td className="pr-3">7.9 oz</td>
                  <td className="pr-3">39mm</td>
                  <td>Versatile daily/speed (RW Best Overall 2026)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Brooks Ghost 17</td>
                  <td className="pr-3">$150</td>
                  <td className="pr-3">10.3 oz</td>
                  <td className="pr-3">36.5mm</td>
                  <td>Beginners, all-day comfort</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">ASICS Novablast 5</td>
                  <td className="pr-3">$150</td>
                  <td className="pr-3">9.0 oz</td>
                  <td className="pr-3">41.5mm</td>
                  <td>Versatile, wide-foot friendly</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Saucony Ride 18</td>
                  <td className="pr-3">$140</td>
                  <td className="pr-3">9.0 oz</td>
                  <td className="pr-3">35mm</td>
                  <td>Balanced daily, great value</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">NB Fresh Foam 1080v15</td>
                  <td className="pr-3">$170</td>
                  <td className="pr-3">9.1 oz</td>
                  <td className="pr-3">40mm</td>
                  <td>Cushioned long runs</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Nike Pegasus 42</td>
                  <td className="pr-3">~$140</td>
                  <td className="pr-3">—</td>
                  <td className="pr-3">—</td>
                  <td>All-around (April 2026 release)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">The super trainer category</p>
          <p className="mt-1">
            "Super trainers" — high-stack, high-energy daily shoes without a full carbon plate — are
            the dominant new category. The ASICS Megablast ($225, 73% energy return), Brooks Hyperion
            Max 3 ($200, nylon/fiberglass plate), and Saucony Endorphin Speed 5 ($170) bridge the gap
            between plush trainer and race shoe.
          </p>
          <p className="font-medium text-stone-900 mt-3">When to replace</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Daily trainers (EVA/TPEE): 300–500 miles</li>
            <li>Super trainers (PEBA): 200–400 miles</li>
            <li>Race shoes (carbon plate): 100–300 miles</li>
          </ul>
        </InfoCard>

        <InfoCard title="Market Trends">
          <p className="font-medium text-stone-900">Maximalist is winning</p>
          <p className="mt-1">
            Average stack height has risen dramatically. The Hoka Bondi 9 (2025) is 43mm — up from
            33mm in the Bondi 8. Stacks that were extreme in 2015 are mainstream now. World Athletics
            enforces a 40mm cap for record-eligible racing.
          </p>
          <p className="font-medium text-stone-900 mt-3">Stability has evolved</p>
          <p className="mt-1">
            Rigid medial posts are disappearing. Brooks' GuideRails, ASICS' guide systems, and
            similar technologies activate only when form breaks down — a comfort-based model that
            suits neutral runners too, replacing the old "overpronation prescription" approach.
          </p>
          <p className="font-medium text-stone-900 mt-3">Pricing tiers (2025–26)</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Category</th>
                  <th className="py-1.5">Price Range</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Budget daily trainers</td><td>$80–$120</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Standard daily trainers</td><td>$120–$160</td></tr>
                <tr className="border-b border-stone-100"><td className="py-1.5 pr-3">Premium / super trainers</td><td>$160–$230</td></tr>
                <tr><td className="py-1.5 pr-3">Carbon-plate race shoes</td><td>$225–$300+</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Wide foot options</p>
          <p className="mt-1">
            New Balance leads with widths from 2A through 4E on most models. Brooks (2E and 4E on
            Ghost/Glycerin), HOKA (extended toe boxes on Clifton/Bondi), and ASICS (wide on
            Nimbus/Kayano) also serve wider feet well. Nike Pegasus is narrow in standard width.
          </p>
        </InfoCard>

        <InfoCard title="Sustainability & Manufacturing">
          <p>
            A typical performance running shoe produces 10–15 kg CO2 over its lifecycle. ~300 million
            pairs go to US landfill annually. Recycled uppers are now baseline; the real challenge is
            the petrochemical midsole.
          </p>
          <p className="font-medium text-stone-900 mt-3">What's real vs. greenwashing</p>
          <ul className="list-disc list-inside space-y-2 mt-1">
            <li>
              <span className="font-medium">Verified:</span> Nike's 69% Scope 1&2 reduction (audited),
              Allbirds Moonshot ~1 kg CO2 (open-sourced methodology), Hylo Athletics full bio-based
              stack
            </li>
            <li>
              <span className="font-medium">Problematic:</span> On Cyclon went 3 years without
              recycling a single shoe (Swiss regulatory complaint filed 2025); subscription model now
              discontinued. Vague "made with recycled materials" claims may mean 5% rPET in one
              component.
            </li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Manufacturing innovations</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">3D printing at scale:</span> Zellerfeld (Nike partner, Texas hub), STARAY (CES 2026) shipping real products</li>
            <li><span className="font-medium">On LightSpray:</span> Robot-sprayed uppers in 3 min, zero glue/waste. South Korea factory (Feb 2026) = 30× capacity increase</li>
            <li><span className="font-medium">EU ESPR (Feb 2026):</span> Bans destruction of unsold footwear, mandates sustainability disclosure. The biggest regulatory forcing function in the industry.</li>
          </ul>
          <p className="text-stone-500 text-xs mt-2">
            The tension: PEBA foam market is growing at 4.4% CAGR ($744M → $988M by 2034). No
            bio-based equivalent matches its performance. Sugarcane EVA (Allbirds), castor bean foam
            (On, Hylo) exist but are niche.
          </p>
        </InfoCard>

        <InfoCard title="Smart Shoes & What's Next">
          <p>
            The smart shoe market is $549M (2025), projected to reach $2B by 2034. The format
            that's winning: shoe-agnostic sensors (pods, insoles), not embedded-shoe electronics.
          </p>
          <p className="font-medium text-stone-900 mt-3">Current products</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Product</th>
                  <th className="py-1.5 pr-3">Type</th>
                  <th className="py-1.5 pr-3">Price</th>
                  <th className="py-1.5">Key Feature</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Stryd 5.0</td>
                  <td className="pr-3">Foot pod</td>
                  <td className="pr-3">$199</td>
                  <td>Power-based training; AI adaptive plans ($15/mo)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Stryd Duo</td>
                  <td className="pr-3">Dual pods</td>
                  <td className="pr-3">$399</td>
                  <td>Bilateral metrics, 3D footpath, L/R balance</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Nurvv Run</td>
                  <td className="pr-3">Smart insole</td>
                  <td className="pr-3">$300</td>
                  <td>Pronation, foot strike, 16 sensors</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Striv</td>
                  <td className="pr-3">Smart insole</td>
                  <td className="pr-3">TBD</td>
                  <td>256 pressure sensors, real-time AI coaching</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">What failed</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Nike Adapt:</span> App retired Aug 2024, bricking self-lacing features. Pivoted to Project Amplify (powered exoskeleton, no release date).</li>
            <li><span className="font-medium">Under Armour HOVR Connected:</span> Discontinued ~2023, no successor.</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Coming next</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Nike Project Amplify: motorized ankle-assist ("e-bike for running"), in testing</li>
            <li>OSU solar-powered smart insole (Science Advances, 2025): no charging, AI motion classification, ~2028–2030</li>
            <li>Higher-density pressure insoles moving from clinical ($10K+) to consumer (&lt;$400)</li>
          </ul>
        </InfoCard>
      </div>
    </article>
  );
}
