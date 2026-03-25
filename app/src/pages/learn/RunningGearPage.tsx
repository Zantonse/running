import InfoCard from "../../components/InfoCard";

export default function RunningGearPage() {
  return (
    <article>
      <img
        src="/images/learn/running-gear.png"
        alt="Running apparel laid out for a run"
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
      <h2 className="text-xl font-bold text-stone-900 mb-2">Running Gear</h2>
      <p className="text-stone-600 text-sm mb-4">
        Running apparel is a $106B market that's undergone a cultural transformation. Boutique
        brands like Tracksmith, Satisfy, and On are taking share from Nike and Adidas at the
        $70–130 tier. But the performance sweet spot is lower than you think — lab testing shows
        most gains above $70 are marginal or scenario-specific.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm font-medium text-amber-900">
          The #1 fabric rule: never cotton. Cotton absorbs 27× its weight in water, traps
          moisture against skin, and adds drag weight. Any synthetic or merino is dramatically
          better.
        </p>
      </div>

      <div className="space-y-3">
        <InfoCard title="What to Wear: Temperature Guide" defaultOpen>
          <p>
            Dress as if it's 10–20°F warmer than the actual temperature. You should feel slightly
            cold at the start — core temperature rises within the first mile.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Temp</th>
                  <th className="py-1.5">What to Wear</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium whitespace-nowrap">&lt;20°F</td>
                  <td>Thermal base + insulated mid + windproof shell, insulated tights, balaclava, mittens</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium whitespace-nowrap">20–30°F</td>
                  <td>Thermal LS, running jacket, tights, gloves, beanie</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium whitespace-nowrap">30–40°F</td>
                  <td>LS top, light jacket, tights, light gloves</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium whitespace-nowrap">40–50°F</td>
                  <td>SS or light LS, optional vest (shed as you warm), tights</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium whitespace-nowrap">50–60°F</td>
                  <td>Tee, optional vest, capris or tights — the "Goldilocks zone"</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium whitespace-nowrap">60–70°F</td>
                  <td>Tank or tee, shorts, cap/visor for sun</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium whitespace-nowrap">70–80°F</td>
                  <td>Lightweight tank, breathable shorts, cap, sunglasses, sunscreen</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium whitespace-nowrap">80°F+</td>
                  <td>Minimum coverage, maximum mesh. Avoid sustained effort above 90°F.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Extremities first</p>
          <p className="mt-1">
            Hands, ears, and head lose heat disproportionately. Add gloves and a beanie before
            adding a third torso layer. Liner gloves and wool socks are more efficient than bulky
            insulation.
          </p>
        </InfoCard>

        <InfoCard title="Fabric: What Actually Matters">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Fiber</th>
                  <th className="py-1.5 pr-3">Dry Speed</th>
                  <th className="py-1.5 pr-3">Odor</th>
                  <th className="py-1.5">Best For</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Polyester (rPET)</td>
                  <td className="pr-3">Very fast</td>
                  <td className="pr-3">Low</td>
                  <td>Daily training, hot weather</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Nylon</td>
                  <td className="pr-3">Fast</td>
                  <td className="pr-3">Low-moderate</td>
                  <td>Shorts (abrasion-resistant)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Merino wool</td>
                  <td className="pr-3">Moderate</td>
                  <td className="pr-3">Excellent</td>
                  <td>Travel, multi-day, shoulder seasons</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Merino/nylon blend</td>
                  <td className="pr-3">Moderate-fast</td>
                  <td className="pr-3">High</td>
                  <td>Best of both worlds</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Cotton</td>
                  <td className="pr-3">Very slow</td>
                  <td className="pr-3">Low</td>
                  <td>Never run in cotton</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Key tech to know</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>
              <span className="font-medium">Softness ≠ performance.</span> Wicking is mechanical
              (fiber geometry + capillary channels), not chemical. Treatments wash out; fiber
              structure doesn't.
            </li>
            <li>
              <span className="font-medium">Merino is underrated.</span> Tracksmith Strata worn
              daily 7 days in summer heat — same odor Day 7 as Day 1 (Outside Online 2025). One
              merino tee replaces 2–3 synthetics for travel.
            </li>
            <li>
              <span className="font-medium">rPET = identical to virgin polyester.</span> Same
              wicking, weight, durability. Now the default in responsible brands, not a trade-off.
            </li>
            <li>
              <span className="font-medium">Compression doesn't improve performance.</span> Wang
              et al. (2025, 51 studies, 899 runners): no race time benefit. Does reduce muscle
              oscillation ~43%. Better evidence for recovery wear post-run.
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Shirts & Tops: Best Picks">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Pick</th>
                  <th className="py-1.5 pr-3">Price</th>
                  <th className="py-1.5">Why</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Nike Dri-FIT Rise 365</td>
                  <td className="pr-3">$25</td>
                  <td>Best budget; reliable wicking, widely available</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">rabbit EZ Tee SS</td>
                  <td className="pr-3">$48</td>
                  <td>Best overall SS (Outside Online); UPF 50, raglan shoulders</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Adidas Adizero Singlet</td>
                  <td className="pr-3">$49–70</td>
                  <td>Best singlet; fastest dry time in lab testing</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Tracksmith Harrier Tee</td>
                  <td className="pr-3">$68</td>
                  <td>Best wool; merino/37.5 blend, multi-day odor resistance</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Tracksmith Strata</td>
                  <td className="pr-3">$125</td>
                  <td>Best splurge singlet; coldblack tech, −2.5°C surface temp</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">SOAR Race Vest 2.0</td>
                  <td className="pr-3">$115</td>
                  <td>Best race day; Italian mesh, bonded seams, highest breathability</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Fit trends</p>
          <p className="mt-1">
            Relaxed and semi-relaxed fits are rising — run club culture brought a streetwear
            demographic to running. Technical racers still want slim cuts (Adizero, SOAR). Boxy and
            oversized silhouettes are growing in boutique brands (Satisfy, Janji, Bandit). The
            singlet is now worn casually at group runs, not just races.
          </p>
          <p className="font-medium text-stone-900 mt-3">Anti-chafe construction</p>
          <p className="mt-1">
            Flatlock seams, bonded/laser-cut seams, and raglan shoulders are standard above $48. A
            shirt with raised internal seams is no longer acceptable at any price.
          </p>
        </InfoCard>

        <InfoCard title="Shorts: Styles & Best Picks">
          <p className="font-medium text-stone-900">Style guide</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Style</th>
                  <th className="py-1.5 pr-3">Liner</th>
                  <th className="py-1.5">Best For</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Split shorts</td>
                  <td className="pr-3">Brief or none</td>
                  <td>Racing, track, speed work</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Lined shorts</td>
                  <td className="pr-3">Brief only</td>
                  <td>Daily road running</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">2-in-1 shorts</td>
                  <td className="pr-3">Boxer-brief (thigh)</td>
                  <td>Long runs, chafe prevention</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Half-tights</td>
                  <td className="pr-3">Integrated</td>
                  <td>Speed work, cold weather, fastest-growing category</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Top picks</p>
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Pick</th>
                  <th className="py-1.5 pr-3">Price</th>
                  <th className="py-1.5">Why</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Baleaf Athletic (M)</td>
                  <td className="pr-3">$19</td>
                  <td>Best budget; 3 pockets, surprisingly durable</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Tracksmith Session (M)</td>
                  <td className="pr-3">$85</td>
                  <td>RW Best Overall; 4 pockets incl. zippered side</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Patagonia Strider Pro (M)</td>
                  <td className="pr-3">$79</td>
                  <td>iRunFar Best Overall; comfort + storage + durability</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">lululemon Track That (W)</td>
                  <td className="pr-3">$68</td>
                  <td>Multiple-source Best Overall; passes "shorts gobbling test"</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Bandit Stamina (W)</td>
                  <td className="pr-3">$60–70</td>
                  <td>Silicone grip, 3 pockets, 3"/5"/7" options</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Inseam trends</p>
          <p className="mt-1">
            5" is the consensus sweet spot. 3" is the fastest-growing inseam driven by cultural
            trends and heat performance. 7" is declining except on trails. A short without a
            phone-capable pocket is considered outdated — pocket innovation is now a primary
            purchase differentiator.
          </p>
        </InfoCard>

        <InfoCard title="Brands: Who Makes What">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-1.5 pr-3">Tier</th>
                  <th className="py-1.5 pr-3">Price</th>
                  <th className="py-1.5">Brands</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Budget</td>
                  <td className="pr-3">$20–40</td>
                  <td>Nike Dri-FIT, Old Navy, Baleaf, REI Co-op</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Mid</td>
                  <td className="pr-3">$40–70</td>
                  <td>rabbit, Adidas, Hoka, Brooks, Patagonia</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 font-medium">Premium</td>
                  <td className="pr-3">$70–130</td>
                  <td>Tracksmith, On, lululemon, Janji, Path Projects, Soar, Bandit</td>
                </tr>
                <tr>
                  <td className="py-1.5 pr-3 font-medium">Luxury</td>
                  <td className="pr-3">$130+</td>
                  <td>Satisfy Running, District Vision</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-stone-900 mt-3">Brand identities</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Tracksmith:</span> Heritage Boston aesthetic, merino expertise, the "amateur spirit." Session Shorts = RW Best Overall.</li>
            <li><span className="font-medium">Satisfy:</span> French counterculture luxury. MothTech, PeaceShell. Cultural moment brand of 2025–26 ($90–200+).</li>
            <li><span className="font-medium">On Running:</span> Swiss minimalist, gorpcore-meets-performance. Fastest-rising in premium tier.</li>
            <li><span className="font-medium">Janji:</span> Global giveback, travel-inspired. Best pocket design. Recycled fabrics.</li>
            <li><span className="font-medium">SOAR:</span> Named best running apparel brand of 2025. UK technical leader. Graphene vests, silk base layers.</li>
            <li><span className="font-medium">Nike:</span> In turnaround. Technically capable, no longer culturally aspirational among serious runners.</li>
          </ul>
        </InfoCard>

        <InfoCard title="Accessories">
          <p className="font-medium text-stone-900">Socks</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Balega Enduro:</span> Best everyday — Drynamix polyester, medium cushion</li>
            <li><span className="font-medium">Feetures Elite Light:</span> Best for long runs — targeted compression, anti-slip</li>
            <li><span className="font-medium">Darn Tough Run Ultra-Light:</span> Most durable — merino wool, lifetime guarantee</li>
          </ul>
          <p className="text-stone-500 text-xs mt-1">
            Light cushion for speed work/racing, medium for training, heavy for ultras. Merino for
            multi-day events; synthetic for hot single runs.
          </p>

          <p className="font-medium text-stone-900 mt-3">Hats</p>
          <p className="mt-1">
            Ciele Athletics dominates. The five-panel cap functions as both performance gear and
            cultural badge — if someone's wearing Ciele, they're a runner. Cap for full sun
            coverage; visor for ventilation and high ponytails.
          </p>

          <p className="font-medium text-stone-900 mt-3">Sunglasses</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><span className="font-medium">Goodr ($25–45):</span> No-slip, no-bounce, humor-driven. Best value.</li>
            <li><span className="font-medium">Oakley Sutro/Radar EV:</span> Wide peripheral coverage, PRIZM lens tech.</li>
            <li><span className="font-medium">District Vision:</span> Zeiss optics, ultralight titanium. Wellness-meets-running premium.</li>
          </ul>

          <p className="font-medium text-stone-900 mt-3">Visibility</p>
          <p className="mt-1">
            80% of pedestrian fatalities occur in low light (NHTSA). Reflective panels on moving
            body parts (wrists, ankles) catch driver attention faster than static torso panels.
            Always aim for front AND rear coverage. The Noxgear Tracer2 vest adds visibility to
            any outfit.
          </p>
        </InfoCard>

        <InfoCard title="Building a Wardrobe by Budget">
          <p className="font-medium text-stone-900">Starter kit (~$120)</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Nike Dri-FIT Rise 365 tee ($25)</li>
            <li>Baleaf 5" lined shorts ($19)</li>
            <li>Saucony RunDry socks × 2 ($20)</li>
            <li>Goodr sunglasses ($25)</li>
            <li>REI Co-op Swiftland LS for cool weather ($30)</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">Serious runner kit (~$350)</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>rabbit EZ Tee SS ($48) + Tracksmith Harrier Tee merino ($68)</li>
            <li>Tracksmith Session Shorts ($85) or Patagonia Strider Pro ($79)</li>
            <li>Balega Enduro socks × 2 ($30)</li>
            <li>Ciele GOCap ($45)</li>
            <li>Light running jacket for rain/wind ($80–170)</li>
          </ul>
          <p className="font-medium text-stone-900 mt-3">No-compromises kit (~$600+)</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Tracksmith Strata singlet ($125) + SOAR Race Vest ($115) + Brighton LS ($100)</li>
            <li>Satisfy PeaceShell shorts ($118) + Tracksmith Session ($85)</li>
            <li>Darn Tough merino socks × 3 ($60)</li>
            <li>District Vision sunglasses ($150+)</li>
            <li>Patagonia Storm Racer jacket ($315)</li>
          </ul>
        </InfoCard>
      </div>
    </article>
  );
}
