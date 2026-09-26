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
  audience: 'families' | 'owners' | 'church'
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
  {
    slug: 'assisted-living-costs-guide',
    title: 'What Assisted Living Actually Costs — and the Six Ways Families Pay for It',
    description:
      'A plain-language breakdown of assisted living pricing models, what drives monthly cost up, and the six real funding sources families use.',
    audience: 'families',
    audienceLabel: 'For Families',
    date: '2026-09-20',
    readTime: '9 min read',
    body: `
<p>Cost is the question families ask last and worry about first. It is also the question communities answer least clearly, which leaves people guessing at the single largest variable in the decision. Here is the honest version.</p>

<h2>The three pricing models</h2>
<p>Almost every community uses one of three structures, and knowing which one you are looking at matters more than the headline number.</p>
<ul>
<li><strong>All-inclusive.</strong> One monthly rate covers rent, meals, and care regardless of how much help your loved one needs. Predictable, usually a higher starting number, and the safest choice if needs are increasing.</li>
<li><strong>Tiered care levels.</strong> Base rent plus a care tier — often Level 1 through 4 or 5. The tier is set by an assessment and can change. Ask what specifically moves someone from one level to the next, and what each jump costs in dollars.</li>
<li><strong>À la carte or points.</strong> Base rent plus itemized charges for each service: medication management, bathing assistance, escorts to meals. The most transparent on paper and the easiest to underestimate in practice.</li>
</ul>

<h2>What actually drives the number up</h2>
<ul>
<li><strong>Care level</strong> — the largest single variable, and the one most likely to change after move-in</li>
<li><strong>Memory care</strong> — typically adds a substantial premium over standard assisted living for secured units and higher staffing</li>
<li><strong>Apartment size</strong> — a shared room can cost meaningfully less than a one-bedroom in the same building</li>
<li><strong>Geography</strong> — the same care can differ by a factor of two between metro areas and rural markets</li>
<li><strong>Two people in one apartment</strong> — usually a second-person fee rather than double rent</li>
</ul>
<p>Then there are the one-time and recurring extras: a community fee or move-in fee, medication administration, incontinence supplies, salon services, and transportation beyond scheduled trips.</p>

<h2>The question that saves families the most money</h2>
<p>Ask this, in writing: <strong>"How much has the monthly rate increased in each of the last three years, and what triggered a care-level change for residents last year?"</strong></p>
<p>A community that raised rates modestly each year is a fundamentally different financial commitment than one that raised them steeply — and past behavior is the only real predictor you will get. Both answers are knowable, and a confident operator will give them.</p>

<h2>The six ways families actually pay</h2>
<ol>
<li><strong>Private funds.</strong> Savings, pensions, Social Security, and retirement accounts. The most common source by far.</li>
<li><strong>Selling the home.</strong> Frequently the single largest source. Talk to a tax professional before you sell — timing affects what you keep.</li>
<li><strong>Long-term care insurance.</strong> If a policy exists, request the benefit summary early. Most policies have an elimination period — a waiting window you must pay out of pocket — and require documentation of specific care needs before benefits begin.</li>
<li><strong>VA benefits.</strong> Aid and Attendance can add meaningful monthly support for qualifying wartime veterans and surviving spouses. It is underused because the application is slow and confusing — start it early and consider a VA-accredited representative.</li>
<li><strong>Medicaid.</strong> Rules differ by state, and most states have some waiver program covering assisted living, often with waiting lists and a limited number of participating communities. Ask any community directly whether they accept Medicaid waivers and how many such beds they hold.</li>
<li><strong>Family contribution.</strong> Often the piece that closes the gap. Put it in writing among siblings, including who pays what and what happens if costs rise. Unwritten arrangements are where family relationships break.</li>
</ol>
<p><strong>Medicare does not pay for assisted living.</strong> It covers short-term skilled nursing after a qualifying hospital stay, not ongoing residential care. This is the most common and most expensive misunderstanding families bring into the process.</p>

<h2>Build the real number before you tour</h2>
<p>Take the quoted base rate, add the care level you honestly expect within a year — not today's best case — and add a modest annual increase. That figure is what you are actually committing to. If it works, you can tour with confidence. If it does not, you have learned that before falling in love with a building.</p>
<p>Next: <a href="/articles/choosing-an-assisted-living-facility">the ten questions to ask on every tour</a>.</p>
`,
  },
  {
    slug: 'assisted-living-resident-rights',
    title: 'Your Rights as an Assisted Living Resident',
    description:
      'Residents of assisted living keep specific legal rights: privacy, choice, dignity, and protection from arbitrary discharge. Here is what they are and how to use them.',
    audience: 'families',
    audienceLabel: 'For Residents & Families',
    date: '2026-09-18',
    readTime: '7 min read',
    body: `
<p>Moving into assisted living is not a surrender of autonomy. Residents keep specific, enforceable rights — and knowing them changes how problems get solved, usually without conflict. Exact protections vary by state, but the following exist in some form nearly everywhere.</p>

<h2>Your rights in your own home</h2>
<ul>
<li><strong>Privacy.</strong> Your apartment is your residence. Staff should knock and announce themselves. Your mail is yours, unopened. Phone calls and visits are private.</li>
<li><strong>Dignity and respect.</strong> Being addressed by your preferred name, not "sweetie" or "honey." Being spoken to directly rather than about, even when family is present.</li>
<li><strong>Choice in daily life.</strong> When you wake, what you eat, what you wear, how you spend your day, whether you attend an activity. A schedule that suits the staffing pattern is not a rule you agreed to.</li>
<li><strong>Visitors on your terms.</strong> Including the right to see whoever you choose, and the right to decline a visit.</li>
<li><strong>Your own belongings.</strong> Furniture, keepsakes, and personal property, within reasonable safety limits.</li>
<li><strong>Your own doctor and pharmacy</strong> in most states, rather than only the community's preferred providers.</li>
<li><strong>Participation in your care plan.</strong> You should know what is in it, be present when it is written, and be able to disagree.</li>
<li><strong>Freedom from restraint</strong> — physical or chemical — for staff convenience.</li>
<li><strong>Manage your own money</strong> unless a legal arrangement says otherwise. If the community holds funds, you are entitled to an accounting.</li>
<li><strong>Complain without retaliation.</strong> This one matters most, because every other right depends on it.</li>
</ul>

<h2>Discharge is not unlimited</h2>
<p>A community cannot generally ask a resident to leave on a whim. Most states require written notice — commonly 30 days — a stated reason falling within permitted grounds, and a right to appeal. Permitted reasons usually include care needs exceeding the license, nonpayment, or behavior genuinely endangering others.</p>
<p>"We think she would be happier elsewhere" is not a legal ground. If you receive a discharge notice you believe is improper, ask for it in writing with the specific reason and the appeal process, and contact your state's long-term care ombudsman before the clock runs out.</p>

<h2>The ombudsman is free, and almost nobody calls</h2>
<p>Every state has a Long-Term Care Ombudsman Program: trained advocates who investigate complaints on behalf of residents at no cost. They are independent of the facility and the licensing agency, and they can resolve problems informally long before anything becomes adversarial. Search your state's name plus "long-term care ombudsman."</p>
<p>Your state licensing or health department is the other channel. Inspection reports are public record — you can request them, and so can a family considering the same community.</p>

<h2>How to raise a problem so it gets fixed</h2>
<ol>
<li><strong>Start with the person closest to it.</strong> Most issues are a caregiver or scheduling problem, not a policy.</li>
<li><strong>Escalate to the administrator in writing.</strong> Date it, describe the specific incident, state what you want done. Written requests get tracked; verbal ones get forgotten.</li>
<li><strong>Ask for a care plan meeting.</strong> You have the right to one. Bring notes and a second family member.</li>
<li><strong>Keep your own record.</strong> Dates, times, names, what was said. This costs nothing and changes everything if it escalates.</li>
<li><strong>Call the ombudsman</strong> if it stalls. You do not need permission, and you are not being difficult.</li>
</ol>

<h2>A note for families</h2>
<p>The most effective advocates are specific, documented, and persistent rather than loud. Staff respond to a written request about a named incident far better than to general frustration. And nothing you do here should be secret — tell your loved one what you are doing on their behalf, and ask what they actually want. It is their home.</p>
<p>This is general information, not legal advice; your state's rules govern. Your ombudsman can tell you exactly what applies where you live.</p>
`,
  },
  {
    slug: 'memory-care-tour-questions',
    title: 'Touring Memory Care: What to Look For That Nobody Points Out',
    description:
      'Memory care tours show you secured doors and activity calendars. Here is what actually predicts quality of life — staffing, engagement, and how a hard moment gets handled.',
    audience: 'families',
    audienceLabel: 'For Families',
    date: '2026-09-15',
    readTime: '8 min read',
    body: `
<p>A memory care tour is designed to reassure you. The door codes, the enclosed courtyard, the laminated activity calendar — all real, all worth seeing, and none of them the thing that determines whether your mother's days are good. Here is what to look at instead.</p>

<h2>Watch the residents, not the building</h2>
<p>Spend five quiet minutes in the common area before you ask a single question. This tells you more than the rest of the tour combined.</p>
<ul>
<li><strong>Are residents engaged or parked?</strong> A room of people asleep in wheelchairs facing a television at 11am is the answer to every question you were going to ask.</li>
<li><strong>Is staff among them or at a desk?</strong> Good memory care staff are on the floor, at eye level, talking.</li>
<li><strong>Does anyone seem bored?</strong> Boredom drives most of what gets labeled as "behaviors" in dementia care.</li>
<li><strong>Are residents groomed?</strong> Clean clothes, trimmed nails, hair brushed. Dignity is visible.</li>
<li><strong>How does staff speak to them?</strong> Listen for real conversation rather than instructions called across a room.</li>
</ul>

<h2>The staffing questions that matter</h2>
<ul>
<li>What is the ratio on the memory care unit at 2am and on Sunday afternoon — not on a weekday morning?</li>
<li>How long has the memory care director been here? How long have the caregivers been here? Turnover is the hidden variable in dementia care, because familiarity is the care.</li>
<li>What dementia-specific training do caregivers receive, how many hours, and who delivers it?</li>
<li>Do the same caregivers work with the same residents consistently?</li>
<li>How many agency staff worked this unit last month?</li>
</ul>

<h2>Ask how a hard moment gets handled</h2>
<p>This is the single most revealing question on the tour: <strong>"Tell me what happens when a resident becomes agitated and wants to leave."</strong></p>
<p>A strong answer describes redirection, identifying the unmet need behind the behavior, and involving someone the resident trusts. A concerning answer jumps quickly to medication, or describes the behavior as a problem to be stopped rather than a message to be understood.</p>
<p>Follow with: how often are antipsychotics used here, and who reviews them? Then: what would cause you to send someone to the hospital, and when would you call me?</p>

<h2>Look at the day, not the calendar</h2>
<p>Activity calendars are marketing documents. Ask what actually happened yesterday, hour by hour. Then ask:</p>
<ul>
<li>What is available at 4pm, when agitation typically peaks?</li>
<li>What happens for someone who cannot participate in group activities?</li>
<li>Is there anything to do that involves purpose rather than entertainment — folding, sorting, gardening, setting a table?</li>
<li>Can residents go outside independently, and how often do they?</li>
</ul>

<h2>Eat a meal there</h2>
<p>Meals are three of the most important moments in a dementia resident's day. Sit through one. Is anyone rushed? Does staff assist patiently? Are adaptive utensils and finger foods available for people who can no longer manage cutlery? Does the room feel calm or chaotic?</p>

<h2>The questions about later</h2>
<p>Dementia progresses. Ask what happens as needs increase: at what point can you no longer care for someone here, do you provide end-of-life care, do you work with hospice on site, and what would require a move? Knowing the ceiling now prevents a second traumatic transition later.</p>

<h2>Go back unannounced</h2>
<p>Visit a second time without an appointment, on a weekend or an evening. What you see then is what your loved one will actually live. If a community discourages that, you have learned something important.</p>
<p>Also useful: <a href="/articles/choosing-an-assisted-living-facility">the ten questions for any assisted living tour</a> and <a href="/articles/assisted-living-costs-guide">what memory care actually costs</a>.</p>
`,
  },
  {
    slug: 'respond-to-negative-review-templates',
    title: 'How to Respond to a Negative Review: Six Templates for Senior Care',
    description:
      'HIPAA-safe response frameworks for the six negative reviews assisted living communities actually get — staffing, billing, food, a fall, a discharge, and the angry ex-employee.',
    audience: 'owners',
    audienceLabel: 'For Owners & Operators',
    date: '2026-09-22',
    readTime: '9 min read',
    ctaMessage:
      'Want every review monitored and a response drafted for you within hours? See the ALF Reputation Engine.',
    body: `
<p>Your response to a negative review is not written for the person who left it. It is written for the fifty families who will read it while deciding whether to call you. That reframe changes everything about how you write.</p>

<h2>The four-part structure</h2>
<p>Every strong response does the same four things, in the same order, in under 120 words:</p>
<ol>
<li><strong>Thank them</strong> — briefly, without grovelling</li>
<li><strong>Acknowledge the specific concern</strong> — without arguing, and without confirming anyone is a resident</li>
<li><strong>State what you did or will do</strong> — a concrete action, not a sentiment</li>
<li><strong>Move it offline</strong> — a named person and a direct number</li>
</ol>

<h2>The HIPAA line you cannot cross</h2>
<p>Never confirm, deny, or discuss whether anyone is or was a resident, or any detail of their care — even when the reviewer disclosed it themselves, and even when their account is wrong. Their disclosure does not authorize yours. This single rule eliminates most of the responses operators instinctively want to write, which is exactly why it protects you.</p>
<p>Write about your standards and your process, never about a person.</p>

<h2>Six templates</h2>

<h3>1. Understaffing ("nobody answers the call light")</h3>
<p>"Thank you for taking the time to share this. Response times to call lights are something we measure, and any delay that leaves a resident waiting is not the standard we hold. I'd like to understand the specific shifts and times you observed so I can address it directly with the team. Please call me — [Name], [Title] — at [number]."</p>

<h3>2. Billing surprise</h3>
<p>"I appreciate you raising this, and I'm sorry the charges weren't clear. Our pricing structure and what triggers a care-level change should be explained in writing before move-in and at every reassessment — if that didn't happen clearly here, I want to fix it and review how we're communicating it to every family. Please reach me directly at [number] and we'll go through the statement line by line."</p>

<h3>3. Food quality</h3>
<p>"Thank you — this is fair feedback and we take it seriously. Dining is three of the most important moments in our residents' day. I've shared your comments with our culinary team, and we hold a resident food committee monthly where this kind of input directly shapes the menu. I'd welcome the chance to hear more specifics: [Name], [number]."</p>

<h3>4. A fall or injury</h3>
<p>"I'm sorry to read this, and I want to respond carefully — privacy laws prevent me from discussing any individual's care publicly, even in response to a review. What I can say is that every fall in our community triggers a documented review of the circumstances, the care plan, and the environment. If you'd like to discuss a specific situation, please call me directly at [number] and I will give it my full attention."</p>
<p>Note the structure: you have explained your restraint rather than appearing evasive, and you have described a real process. Do not add a single detail beyond that.</p>

<h3>5. A discharge dispute</h3>
<p>"Thank you for sharing this. Decisions about whether we can safely meet someone's care needs are among the hardest we make, and I understand how difficult they are to receive. I'm not able to discuss any individual's situation publicly, but our process includes written notice, a stated reason, and a right to appeal — and I am always willing to walk a family through it personally. Please call me at [number]."</p>

<h3>6. A former employee</h3>
<p>"Thank you for the feedback. We take concerns about our workplace and our care standards seriously, and we investigate every one. I'm not able to discuss personnel matters publicly, but I'd welcome a direct conversation — [Name], [number]."</p>
<p>Do not identify them as a former employee, dispute their account, or hint at why they left. The audience is not adjudicating the dispute; they are watching your composure.</p>

<h2>What to never do</h2>
<ul>
<li>Argue the facts point by point. You will be right and still lose the reader.</li>
<li>Use the same canned sentence on every review. Families read the whole page and notice.</li>
<li>Write "we're sorry your experience did not meet your expectations." It signals a template and concedes nothing.</li>
<li>Respond within an hour while angry. Draft it, wait two hours, reread it as a stranger.</li>
<li>Ask the reviewer to take the review down. It converts one complaint into two.</li>
<li>Leave it unanswered. Silence reads as agreement, and it is the most common mistake of all.</li>
</ul>

<h2>Then fix the upstream problem</h2>
<p>Three reviews about call-light response time is not a reputation problem, it is a staffing problem with a public symptom. Track what reviews are actually about each quarter. The pattern is free operational intelligence most operators throw away.</p>
<p>Related: <a href="/articles/google-reviews-assisted-living-occupancy">why reviews decide your move-ins</a> and the full <a href="/blueprint/assisted-living">occupancy blueprint</a>.</p>
`,
  },
  {
    slug: 'google-business-profile-checklist-assisted-living',
    title: 'The Google Business Profile Checklist for Assisted Living',
    description:
      'A free, complete GBP optimization checklist for assisted living and independent living communities — categories, photos, attributes, posts, and the mistakes that suppress ranking.',
    audience: 'owners',
    audienceLabel: 'For Owners & Operators',
    date: '2026-09-24',
    readTime: '8 min read',
    ctaMessage: 'Want your Google Business Profile audited and managed for you? Let\'s talk.',
    body: `
<p>Your Google Business Profile outranks your website for the searches that matter most, costs nothing, and takes about three hours to fix properly. Most communities have never completed it. Work this list top to bottom.</p>

<h2>Ownership and accuracy</h2>
<ul>
<li>Claim and verify the profile. If you cannot edit it, someone else controls your front door — request ownership through Google's process</li>
<li>Name field: your real business name only. Stuffing keywords ("Magnolia Manor Assisted Living Memory Care Cleveland") risks suspension</li>
<li>Address exactly as it appears on your license and mail, formatted identically everywhere online</li>
<li>Phone number that reaches a human during business hours — a tracking number is fine if it is consistent</li>
<li>Hours that reflect when someone actually answers, plus special hours for every holiday, set in advance</li>
<li>Website link to your homepage, not a PDF or a landing page that may expire</li>
</ul>

<h2>Categories</h2>
<ul>
<li>Primary: <strong>Assisted living facility</strong> (or <strong>Retirement community</strong> for ILF). The primary category carries the most ranking weight of any single field</li>
<li>Secondary, as applicable: Retirement home, Nursing home, Home health care service, Senior citizen center</li>
<li>Do not add categories you do not genuinely provide — it dilutes relevance and risks removal</li>
</ul>

<h2>Photos — the most neglected, highest-impact field</h2>
<ul>
<li>Upload 20 or more real photos. Profiles with substantial, current photography earn markedly more calls and direction requests</li>
<li>Cover the set families want: exterior and entrance, parking, lobby, dining room mid-service, a resident apartment (staged but real), common areas, outdoor space, activity in progress, staff (with written permission)</li>
<li>Add a few new photos monthly. Freshness is a signal</li>
<li>No stock photography. Families recognize it instantly and read it as concealment</li>
<li>Add a short video if you have one — a 30-second walkthrough outperforms a brochure</li>
</ul>

<h2>Attributes, services, and description</h2>
<ul>
<li>Complete every applicable attribute: wheelchair accessible entrance, on-site parking, identifies as veteran-led or women-led if true</li>
<li>Fill the services list with your actual care offerings — medication management, memory care, respite, physical therapy on site</li>
<li>Write the 750-character description for a worried adult daughter, not a search engine. Lead with city and care levels, name what makes you genuinely different, avoid "premier" and "state-of-the-art"</li>
<li>Set the opening date, and add your license number if the field is available</li>
</ul>

<h2>Reviews</h2>
<ul>
<li>Respond to every review, negative first, within 48 hours — response rate itself is a trust signal families read</li>
<li>Ask for reviews consistently after positive moments. A text with a direct link converts far better than a lobby sign</li>
<li>Never incentivize reviews. It violates Google's policy and can remove every review you have</li>
<li>Never write or solicit fake reviews. Families spot the pattern and Google removes them in waves</li>
<li>Flag reviews that violate policy, but do not count on removal — a good response is the reliable remedy</li>
</ul>

<h2>Posts, Q&A, and the parts nobody uses</h2>
<ul>
<li>Post at least monthly: an event, a menu highlight, a staff spotlight, a seasonal update. Dormant profiles lose ground to active ones</li>
<li>Seed your own Q&A. You are allowed to ask and answer the questions families actually have — pricing range, care levels, pet policy, visiting hours. Anyone can answer these, so answer them first and accurately</li>
<li>Turn on messaging <strong>only</strong> if someone will reply within the hour. A slow response here is worse than none</li>
<li>Add the booking or appointment link if you use scheduling software</li>
</ul>

<h2>Mistakes that quietly suppress you</h2>
<ul>
<li>Duplicate listings from a prior owner or management company — find and merge them</li>
<li>Inconsistent name, address, or phone across your website, directories, and social profiles</li>
<li>A PO box or a management company's corporate address instead of the building</li>
<li>Letting a vendor claim the profile under their own account, then losing access when the contract ends</li>
<li>Keyword-stuffed business name — the single fastest route to suspension</li>
</ul>

<h2>Check your work</h2>
<p>From a phone on a different network, search your city plus "assisted living." You should appear in the top map results with a rating, recent photos, correct hours, and a working number. Then check Google's own insights monthly: calls, direction requests, website clicks, and which search terms found you.</p>
<p>This is stage 1 of the full <a href="/blueprint/assisted-living">occupancy blueprint</a> — the rest of the stages are there, free.</p>
`,
  },
  {
    slug: 'church-website-pages',
    title: 'The Five Pages Every Church Website Needs (and What to Put on Them)',
    description:
      'Most church websites are built for members and lose first-time visitors. Here are the five pages a newcomer actually needs, and exactly what belongs on each.',
    audience: 'church',
    audienceLabel: 'For Churches & Ministries',
    date: '2026-09-16',
    readTime: '7 min read',
    ctaMessage: 'Want a church website built around the visitor instead of the bulletin? Let\'s talk.',
    body: `
<p>Nearly everyone who visits your church for the first time checks your website first — usually on a phone, often late at night, frequently after something hard happened. Most church websites are built for people who already attend: bulletins, committee minutes, giving portals, a letter from the pastor. A newcomer needs five pages, and every extra click between them and those five makes coming on Sunday less likely.</p>

<h2>1. Home</h2>
<p>A stranger should answer four questions without scrolling: who you are, where you are, when you meet, and what to do next.</p>
<ul>
<li>Service times and city in the first screen — as text, not inside an image</li>
<li>One primary action: <strong>Plan Your Visit</strong></li>
<li>A real photo of actual people in your actual room, mid-service</li>
<li>A one-sentence description a person with no church background understands</li>
<li>Tappable phone number and address in the footer of every page</li>
</ul>
<p>What to remove: the rotating slideshow nobody waits through, the welcome letter, and the announcement for an event that ended in March.</p>

<h2>2. Plan Your Visit</h2>
<p>This is the most important page on a church website and the one most often missing. It exists to eliminate the specific anxieties that keep people home.</p>
<ul>
<li><strong>What to wear</strong> — say it plainly. "Most people wear jeans; some wear suits; you'll be fine either way"</li>
<li><strong>Where to park</strong> and which door to use, with a photo of that door</li>
<li><strong>What happens to your kids</strong> — check-in process, security procedures, ages, where they go</li>
<li><strong>How long the service runs</strong> — uncertainty about time is a real objection</li>
<li><strong>What the first five minutes look like</strong> — who greets you, where you sit, what to do if you arrive late</li>
<li><strong>What you will not be asked to do</strong> — stand up, introduce yourself, or give. Say it explicitly</li>
<li>A short form: name, email, which service they are planning to attend</li>
</ul>

<h2>3. What We Believe</h2>
<p>Short, plain, and honest. People are deciding whether they are safe here, not studying doctrine.</p>
<ul>
<li>Five to seven sentences, not five pages. Link to a fuller statement for those who want it</li>
<li>No insider vocabulary. If a sentence needs a church background to parse, rewrite it</li>
<li>Name your denomination or affiliation clearly — people search for it</li>
<li>Be honest about your convictions. Vagueness does not attract people; it just delays the discovery</li>
</ul>

<h2>4. Our People</h2>
<p>Faces build trust faster than mission statements.</p>
<ul>
<li>Real photos of your pastor and staff — warm, current, not in front of a bookshelf from 2009</li>
<li>Two or three human sentences each: family, how long they have been here, something specific and real</li>
<li>A direct way to reach the pastor. Being reachable is itself a message</li>
</ul>

<h2>5. Ministries</h2>
<p>Organized by the visitor's life stage, not your internal org chart.</p>
<ul>
<li>Group by who it serves: kids, youth, young adults, families, seniors, recovery, grief, marriage</li>
<li>For each: when it meets, where, who leads it, and whether a newcomer can just show up</li>
<li>Delete anything that no longer meets. A ministry page listing a group that dissolved two years ago costs you credibility</li>
</ul>

<h2>The mechanics that decide whether any of it works</h2>
<ul>
<li><strong>Check it on a phone.</strong> Most visitors will never see a desktop version. If service times require pinch-zoom, nothing else matters</li>
<li><strong>Load in under three seconds.</strong> Compress the photos; that hero video is costing you people</li>
<li><strong>Update service times everywhere</strong> — site, Google, Facebook. Someone arriving at an empty building is the most expensive error on this page</li>
<li><strong>Put the livestream where it can be found</strong>, without making it feel like a substitute for coming</li>
<li><strong>Write out numbers and addresses as text</strong> so phones can tap them and search engines can read them</li>
</ul>

<h2>Where to start if you can only do one thing</h2>
<p>Build the Plan Your Visit page and link it from your homepage headline. It outperforms a full redesign, and you can write it this week.</p>
<p>The rest of the growth sequence — local search, guest follow-up, and what to measure — is in the free <a href="/blueprint/church">Church Growth Blueprint</a>.</p>
`,
  },
]
