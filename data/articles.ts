// Articles for /articles and /resources.
//
// RULE: article `body` HTML must use PLAIN TAGS ONLY (h2, h3, p, ul, ol, li,
// strong, em, a, blockquote). No Tailwind classes — the data/ directory is not
// in Tailwind's content globs, so utility classes used only here would be
// purged from the generated CSS. Styling comes from the `.article-body` CSS
// in pages/articles/_slug.vue.
//
// Every article added here appears automatically on /articles (and on
// /resources for its audience), which is also how `nuxt generate` discovers
// the route — keep that chain intact.

export interface Article {
  slug: string
  title: string
  description: string // meta description + index-card blurb
  audience: 'families' | 'owners'
  audienceLabel: string
  date: string // ISO 'YYYY-MM-DD'
  readTime: string
  body: string // trusted, in-repo HTML — plain tags only (see rule above)
  ctaMessage?: string // optional InlineCta override on the detail page
}

export const articles: Article[] = [
  {
    slug: 'choosing-an-assisted-living-facility',
    title: '10 Questions Families Should Ask Before Choosing an Assisted Living Facility',
    description:
      'A practical checklist for touring assisted living communities: staffing, licensing, pricing structures, and the red flags most families miss.',
    audience: 'families',
    audienceLabel: 'For Families',
    date: '2026-08-13',
    readTime: '7 min read',
    body: `
<p>Choosing an assisted living community is one of the most emotional decisions a family makes — and it usually happens under time pressure. A hospital discharge date, a fall at home, a caregiver reaching their limit. The communities you tour will all show you the same things: the dining room, the activity calendar, the model apartment.</p>
<p>What separates a good decision from a rushed one is the questions you ask. Here are ten worth bringing to every tour, and what to listen for in the answers.</p>

<h2>1. What is your staff-to-resident ratio — on nights and weekends?</h2>
<p>Everyone staffs well on weekday mornings when tours happen. Ask specifically about overnight and weekend coverage, and whether the people providing care are employees or agency staff. High agency usage often signals turnover problems.</p>

<h2>2. Who assesses my loved one's care level, and how often is it reassessed?</h2>
<p>Care needs change. Ask how the community evaluates residents initially, how often they re-evaluate, and — critically — how a change in care level changes the monthly cost. Get the assessment criteria in writing.</p>

<h2>3. What exactly is included in the base rate?</h2>
<p>Assisted living pricing usually follows one of three models: all-inclusive, tiered care levels, or à la carte points systems. None is inherently better, but you need to know which one you're looking at. Ask for a written breakdown of what the quoted rate includes — and what the three most common add-on charges are.</p>

<h2>4. How much have rates increased in each of the last three years?</h2>
<p>A community that raised rates 3% annually is a very different financial commitment than one that raised them 9%. Past increases are the best predictor you'll get.</p>

<h2>5. What would cause my loved one to be asked to leave?</h2>
<p>Every community has discharge criteria — behaviors or care needs it cannot accommodate. It is far better to learn those limits now than during a crisis. Ask what happens if your loved one develops memory-care needs or becomes non-ambulatory.</p>

<h2>6. Can I see your latest state inspection report?</h2>
<p>Assisted living facilities are licensed and inspected at the state level, and inspection reports are public record. A confident community will hand theirs over. You can also look up reports through your state's department of health or aging services website before you ever visit.</p>

<h2>7. How do you communicate with families?</h2>
<p>Ask how you'll hear about a fall, a medication change, or a hospital visit — and how quickly. Then ask how the community shares day-to-day life: photos, updates, family portals. Communication culture varies enormously and matters more than most families expect.</p>

<h2>8. What does move-in actually look like?</h2>
<p>Good communities have a real transition plan for the first 30 days — introductions, dining companions, activity invitations — because the first month determines whether a resident settles in or withdraws. "We let them adjust at their own pace" is not a plan.</p>

<h2>9. Can we eat a meal here and talk to current residents' families?</h2>
<p>Food quality is a daily quality-of-life issue and impossible to fake for a whole meal service. And no marketing brochure will tell you what a current family member will over coffee. Communities that discourage either request are telling you something.</p>

<h2>10. What do your online reviews say — and how does leadership respond?</h2>
<p>Before any tour, read the community's Google reviews. Look past the star average to the pattern: What do people complain about? Does leadership respond to criticism with specifics and accountability, or with canned defensiveness? How a community handles public criticism is a preview of how it will handle your concerns as a resident's family.</p>

<h2>Bring this list with you</h2>
<p>You don't need to interrogate anyone — a good community expects these questions and answers them easily. Take notes, compare answers across your top two or three options, and trust the pattern over any single impression.</p>
<p>If this checklist helps, share it with the rest of your family before your next tour. The best decisions are the ones everyone was part of.</p>
`,
  },
  {
    slug: 'assisted-living-vs-independent-living',
    title: 'Assisted Living vs. Independent Living: Which Is Right for Your Loved One?',
    description:
      'ALF vs. ILF explained in plain language: care levels, typical costs, the signs it may be time for each, and how to plan a move that lasts.',
    audience: 'families',
    audienceLabel: 'For Families',
    date: '2026-08-13',
    readTime: '6 min read',
    body: `
<p>Families researching senior living run into two terms almost immediately: <strong>assisted living</strong> (often abbreviated ALF, for assisted living facility) and <strong>independent living</strong> (ILF). They sound similar, are often located on the same campus, and are frequently confused — but they serve genuinely different needs, at genuinely different costs.</p>

<h2>What independent living actually is</h2>
<p>Independent living is housing designed for older adults who can manage daily life on their own but want to trade home maintenance, isolation, and yard work for community, convenience, and safety. Think of it as an age-focused apartment community:</p>
<ul>
<li>Private apartments or cottages, with full or partial kitchens</li>
<li>Optional dining plans, housekeeping, and transportation</li>
<li>Social activities, fitness programs, and built-in community</li>
<li><strong>No hands-on personal care</strong> — no help with bathing, dressing, or medications</li>
</ul>
<p>Because no medical care is provided, independent living is typically not licensed as a care facility and costs less than assisted living.</p>

<h2>What assisted living actually is</h2>
<p>Assisted living is for adults who need daily support but not round-the-clock skilled nursing. It's a licensed care setting that provides:</p>
<ul>
<li>Help with activities of daily living — bathing, dressing, mobility, toileting</li>
<li>Medication management and coordination with doctors</li>
<li>Three meals a day, housekeeping, and laundry</li>
<li>24-hour staff availability and emergency response</li>
</ul>
<p>Residents still have their own apartments and as much independence as they can safely handle. The difference is that trained staff are there for the parts of the day that have become hard.</p>

<h2>The signs that point to each</h2>
<h3>Independent living may be the right fit when:</h3>
<ul>
<li>Daily tasks are fine, but the house has become a burden</li>
<li>Loneliness or isolation is the biggest health risk</li>
<li>Driving is becoming stressful and services feel far away</li>
<li>Your family wants a proactive move, not a crisis-driven one</li>
</ul>
<h3>Assisted living may be the right fit when:</h3>
<ul>
<li>Medications are being missed or doubled</li>
<li>There's been a fall, or a near-miss that scared everyone</li>
<li>Hygiene, laundry, or meals are visibly slipping</li>
<li>A family caregiver is burning out providing daily help</li>
</ul>

<h2>What they cost</h2>
<p>Costs vary widely by region, but nationally, independent living typically runs from roughly $2,000 to $4,000 per month, while assisted living generally ranges from about $4,500 to $7,000 or more, with care-level charges added on top of base rent in many communities. Always ask which pricing model a community uses and what triggers a rate change — we cover this in detail in <a href="/articles/choosing-an-assisted-living-facility">10 Questions Families Should Ask Before Choosing an Assisted Living Facility</a>.</p>

<h2>Planning a move that lasts</h2>
<p>The most common mistake is choosing based on today's needs alone. If your loved one is borderline — independent now, but with a progressing condition — ask communities these questions:</p>
<ol>
<li>Do you offer both independent and assisted living on the same campus?</li>
<li>What does the transition between levels look like, and does it require a physical move?</li>
<li>How is the higher level of care priced, and is availability guaranteed?</li>
</ol>
<p>A community that can grow with your loved one's needs spares everyone a second wrenching move two years from now.</p>

<h2>The bottom line</h2>
<p>Independent living solves a <em>lifestyle</em> problem; assisted living solves a <em>care</em> problem. Be honest about which problem your family actually has — and if it's both, look hard at campuses that offer a continuum. Tour more than one, bring your questions written down, and involve your loved one in every step you can.</p>
`,
  },
  {
    slug: 'google-reviews-assisted-living-occupancy',
    title: "Why Google Reviews Decide Your Facility's Move-Ins (and What To Do About Your Last 1-Star)",
    description:
      'How families actually research senior living communities online, why your Google Business Profile outranks your website, and a practical playbook for reviews.',
    audience: 'owners',
    audienceLabel: 'For Owners & Operators',
    date: '2026-08-13',
    readTime: '8 min read',
    ctaMessage:
      'Want reviews handled for you — monitoring, responses, and request campaigns? See the ALF Reputation Engine.',
    body: `
<p>Here is how a family finds your community in 2026: an adult daughter, usually between 45 and 65, searches "assisted living near me" at 10pm after a hard phone call with her siblings. Google shows her a map with three or four communities, each with a star rating next to its name. She never scrolls past that map — and she eliminates anyone under 4 stars before clicking a single website.</p>
<p>Your website matters. Your brochure matters. But for most families, <strong>your Google Business Profile and its reviews are your first impression — and often your last</strong>, because the elimination happens before you ever knew they were looking.</p>

<h2>Why reviews hit harder in senior care than anywhere else</h2>
<p>This is a maximum-trust purchase. Families are choosing who will care for their mother — while feeling guilty, rushed, and afraid of making a mistake. In that state of mind:</p>
<ul>
<li><strong>Negative reviews are read first and weighted heaviest.</strong> One detailed 1-star story about neglect outweighs a dozen generic 5-stars in a worried reader's mind.</li>
<li><strong>The response is read as closely as the review.</strong> Families know every facility has a bad day. What they're evaluating is how leadership behaves when something goes wrong — because someday the complaint could be theirs.</li>
<li><strong>Recency matters.</strong> A 4.6 average built on reviews from three years ago reads as "something changed." A steady stream of recent reviews reads as a healthy, well-run building.</li>
</ul>

<h2>The math your occupancy already knows</h2>
<p>Run the numbers for your own building. If your average resident stays roughly two years, one move-in is worth tens of thousands of dollars in lifetime revenue. If a low star rating is silently filtering out even one or two families per quarter before they ever call, your reviews are costing you more per year than nearly any line item in your marketing budget — and it never shows up in a report, because those families never entered your funnel.</p>

<h2>The playbook: what well-run communities do</h2>

<h3>1. Claim and complete your Google Business Profile</h3>
<p>Verify ownership, correct your hours and phone number, choose accurate categories, and load real photos — residents' common spaces, dining, staff (with permissions), not just stock exteriors. Profiles with complete information and fresh photos consistently earn more calls and direction requests. This is free, and most communities still do it badly.</p>

<h3>2. Respond to every review — the hard ones first</h3>
<p>For negative reviews, a strong response does four things: thanks the reviewer, acknowledges the specific concern without arguing, states what you did or will do about it, and moves the conversation offline with a named person and phone number. Never dispute details publicly, and never use canned language — families can spot "We're sorry your experience did not meet expectations" a mile away, and HIPAA means you must never confirm or discuss any resident's care in public.</p>

<h3>3. Ask for reviews systematically, not sporadically</h3>
<p>Happy families rarely think to leave a review; upset ones always do. The fix is a consistent ask built into your operations: after a smooth move-in, after a well-run family event, after a compliment to your staff. A simple link sent by text or email at the right moment does more than any lobby sign. The goal is a steady cadence — a few new reviews every month — not a one-time blast that looks manufactured.</p>

<h3>4. Watch every platform families actually use</h3>
<p>Google is the front door, but families cross-check: Yelp, Facebook, and senior-care directories. A 4.7 on Google undermined by an unanswered 2.1 on Yelp still loses the move-in. Someone on your team should see every new review, everywhere, within a day.</p>

<h2>Do it yourself — or have it done</h2>
<p>Everything above can be run in-house with discipline: a named owner, a weekly rhythm, and response templates your administrator actually uses. If nobody on your team has the hours, that's exactly what our <a href="/alf-reputation-engine">ALF Reputation Engine</a> exists for — review monitoring across platforms, drafted responses, and automated review-request campaigns built for assisted living.</p>
<p>Either way: your next move-in is reading your reviews tonight. Make sure what they find — and how you responded to it — tells the story you'd want told.</p>
`,
  },
]
