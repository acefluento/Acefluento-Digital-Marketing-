// Growth blueprints for trust-based organizations. Rendered by pages/blueprint/_slug.vue.
//
// These are free, ungated, link-worthy playbooks. Each one ends in two ways to act:
// start the software, or book a call.
//
// Adding a blueprint here creates its page automatically — but it must also appear
// on /resources or /blueprint so `nuxt generate`'s crawler can discover the route.

export interface BlueprintStage {
  number: string
  title: string
  why: string
  actions: string[]
  proof: string
}

export interface BlueprintMetric {
  label: string
  target: string
  note: string
}

export interface BlueprintMistake {
  mistake: string
  fix: string
}

export interface Blueprint {
  slug: string
  audience: 'owners' | 'church'
  audienceLabel: string
  eyebrow: string
  titleLead: string
  titleAccent: string
  description: string
  readTime: string
  intro: string
  forWho: string[]
  stages: BlueprintStage[]
  metrics: BlueprintMetric[]
  mistakes: BlueprintMistake[]
  software: {
    name: string
    price: string
    pitch: string
    bullets: string[]
    href: string
    cta: string
  }
  faqs: { q: string; a: string }[]
}

export const blueprints: Blueprint[] = [
  {
    slug: 'assisted-living',
    audience: 'owners',
    audienceLabel: 'For ALF & ILF owners',
    eyebrow: 'The Occupancy Blueprint',
    titleLead: 'How assisted living communities fill beds',
    titleAccent: 'without buying leads',
    description:
      'A free six-stage occupancy blueprint for assisted living and independent living owners: Google Business Profile, website conversion, reviews, inquiry response speed, tour conversion, and the four numbers that matter.',
    readTime: '14 min read',
    intro:
      'Referral agencies charge a full month of rent — sometimes more — for a single move-in. Paid leads get resold to three competitors before you call them back. Neither builds anything you own. This blueprint is the other path: the six stages that turn your own digital presence into a steady, compounding source of inquiries. Work them in order. Stage 1 alone changes more than most operators expect.',
    forWho: [
      'Owners and administrators of 1–20 assisted living or independent living communities',
      'Operators paying referral agencies and wanting to reduce that dependency',
      'Anyone with beds open longer than 45 days',
      'Communities whose Google rating is below 4.3 — or has no recent reviews',
    ],
    stages: [
      {
        number: '01',
        title: 'Claim and finish your Google Business Profile',
        why:
          "This is your real front door, not your website. A family searching \"assisted living near me\" sees a map with three or four communities and a star rating beside each name. Most never scroll past it. Your profile decides whether you're in that consideration set at all — and it is entirely free.",
        actions: [
          'Verify ownership of the profile (if you can\'t edit it, you don\'t control it)',
          'Set the primary category to "Assisted living facility" — add "Retirement home" and "Retirement community" as secondary',
          'Confirm your phone number rings a person during business hours, and says who answers after hours',
          'Upload 20+ real photos: common areas, dining, a resident apartment, the entrance, staff (with written permission)',
          'Fill the services and amenities attributes completely — every blank field is a ranking signal you gave away',
          'Post once a month: an event, a menu, a staff spotlight. Dormant profiles rank lower',
          'Turn on messaging only if someone will actually answer within the hour',
        ],
        proof:
          'Search your city plus "assisted living" from a phone on a different network than your building. You appear in the top three map results with a rating, recent photos, and a phone number that works.',
      },
      {
        number: '02',
        title: 'Fix the first ten seconds of your website',
        why:
          'A family arriving from Google is asking three silent questions: Is this place near me? Is it the right level of care? Can I trust it with my mother? If your homepage opens with a stock photo and a welcome letter from the administrator, you have answered none of them — and the back button is one tap away.',
        actions: [
          'Put your city and level of care in the headline. "Assisted living and memory care in Westlake, Ohio" beats "Welcome to our family" every time',
          'Show real photography of your actual building within the first screen. Stock photos of strangers read as a warning sign',
          'Make the phone number tappable and visible without scrolling, on mobile first — most of your traffic is a phone at 10pm',
          'Give a starting price or a range. "Pricing starts at $4,200/mo" builds more trust than "contact us for pricing," which reads as expensive and evasive',
          'Add one clear primary action — schedule a tour — and repeat it every screen or two',
          'Put your state license number and inspection history somewhere findable. Confident operators publish it',
          'Test your load speed on a phone. Over three seconds and you are losing families who never saw the page',
        ],
        proof:
          'Hand your phone to someone unfamiliar with your community and ask them to find your location, your care levels, your starting price, and how to book a tour. They do all four in under thirty seconds without asking you a question.',
      },
      {
        number: '03',
        title: 'Turn reviews into an asset instead of a liability',
        why:
          'Reviews are the single highest-leverage lever in senior care, because this is a maximum-trust purchase made by a frightened family. One detailed one-star story outweighs a dozen generic five-stars. And families read your response as closely as the complaint — they are deciding how you will treat them when something goes wrong.',
        actions: [
          'Respond to every review within 48 hours, negative ones first',
          'Structure negative responses in four parts: thank them, acknowledge the specific concern without arguing, state what you did about it, and move it offline with a named person and direct number',
          'Never confirm or discuss any resident\'s care publicly — HIPAA applies to your review responses',
          'Ask for reviews systematically: after a smooth move-in, after a family event, after a family compliments a caregiver. A text with a direct link converts far better than a lobby sign',
          'Target a steady few reviews per month rather than a one-time push — recency signals a well-run building, and bursts look manufactured',
          'Monitor Yelp, Facebook, and the senior-care directories too. A 4.7 on Google undermined by an unanswered 2.1 elsewhere still loses the move-in',
          'Route every new review to one named owner on your team the day it lands',
        ],
        proof:
          'Your last twenty reviews all have responses. Your newest review is less than three weeks old. Your rating is 4.5 or better across Google, Yelp, and Facebook.',
      },
      {
        number: '04',
        title: 'Answer inquiries in under five minutes',
        why:
          'A family that contacts you is usually contacting three communities in the same sitting. The first real human conversation wins a disproportionate share of tours. Speed is not a nice-to-have here — it is the highest-ROI operational change available to you, and it costs nothing but a decision about who picks up.',
        actions: [
          'Name one person responsible for inbound inquiries during business hours, and a named backup',
          'Set an explicit internal standard: five minutes during business hours, first thing next morning for overnight',
          'Track every inquiry in one place — a shared inbox or simple CRM. Sticky notes lose move-ins',
          'Send an automatic acknowledgment the moment a form is submitted, with a real name and what happens next',
          'Call, then text, then email. Families in crisis answer texts they will not answer calls for',
          'Make five attempts across two weeks before you stop. Most operators quit after one',
          'Have an after-hours plan and say it out loud on your voicemail and website',
        ],
        proof:
          'Submit your own web form from a phone you do not own. You get an acknowledgment instantly and a human call within five minutes.',
      },
      {
        number: '05',
        title: 'Make the tour convert',
        why:
          'Everything upstream buys you one tour. Communities with similar buildings and similar pricing convert tours at wildly different rates, and the difference is almost never the building — it is whether the family left with their real fears answered and a concrete next step.',
        actions: [
          'Ask what prompted the search before you show anything. A fall, a diagnosis, and caregiver burnout are three different conversations',
          'Time tours to a meal or an activity so the family sees residents living, not empty hallways',
          'Introduce them to a caregiver by name, not just the sales team',
          'Walk through pricing in writing on the tour — including what triggers a care-level increase. Surprise charges cause move-outs and one-star reviews',
          'Answer the question they are afraid to ask: what happens if her needs increase beyond what you provide',
          'End with a specific next step and a date — a second visit, a meal with their mother, a call after they talk to siblings',
          'Follow up within 24 hours with a written summary of the pricing you discussed',
        ],
        proof:
          'You know your tour-to-move-in rate as a number. It is above 25%, and you can name why each lost family chose otherwise.',
      },
      {
        number: '06',
        title: 'Measure the four numbers that matter',
        why:
          'Most communities track occupancy and nothing else, which tells you the score after the game ended. Four upstream numbers tell you what to fix while you can still fix it — and they take about twenty minutes a month to maintain.',
        actions: [
          'Inquiries per month, by source: organic search, Google Business Profile, referral agency, word of mouth',
          'Inquiry-to-tour rate — if this is low, the problem is your response speed or your pricing transparency',
          'Tour-to-move-in rate — if this is low, the problem is the tour itself or expectation-setting',
          'Cost per move-in by channel — this is the number that shows what referral dependency truly costs you',
          'Review the four together monthly, not quarterly. Fix the worst one before adding anything new',
          'Keep it in a single spreadsheet. A dashboard nobody opens is worse than a spreadsheet somebody does',
        ],
        proof:
          'You can state all four numbers from memory, and you know which one you are working on this month.',
      },
    ],
    metrics: [
      { label: 'Inquiry response time', target: 'Under 5 min', note: 'Business hours. The single highest-ROI change most operators can make.' },
      { label: 'Google rating', target: '4.5+', note: 'Below 4.3 and families filter you out before clicking.' },
      { label: 'Review velocity', target: '3–8 / month', note: 'Steady beats bursts. Recency signals a well-run building.' },
      { label: 'Tour-to-move-in', target: '25–40%', note: 'Below 25% points at the tour or expectation-setting, not the building.' },
      { label: 'Days on market per bed', target: 'Under 45', note: 'Track per unit type. Memory care and studios behave differently.' },
      { label: 'Cost per move-in', target: 'Know it by channel', note: 'The number that reveals what referral dependency actually costs.' },
    ],
    mistakes: [
      {
        mistake: 'Treating referral agencies as a growth strategy',
        fix:
          'They are a useful stopgap and a terrible foundation — you rent occupancy at roughly a month of rent per placement and own nothing at the end. Use them while you build stages 1–3, then let the ratio shift.',
      },
      {
        mistake: 'Hiding all pricing behind "contact us"',
        fix:
          'Families read that as expensive and evasive, and it filters out the ones who could afford you. Publish a starting range and explain what moves it.',
      },
      {
        mistake: 'Answering the phone only during business hours',
        fix:
          'Families research at night, after the hard phone call with their siblings. Cover evenings or state plainly when you will call back — and then do it.',
      },
      {
        mistake: 'Arguing with a negative review',
        fix:
          'Every public argument is read by fifty future families. Acknowledge, state your action, move it offline. You are performing for the audience, not the reviewer.',
      },
      {
        mistake: 'Stock photography of models',
        fix:
          'Families recognize it instantly and read it as concealment. One honest photo of your actual dining room outperforms a gallery of strangers.',
      },
      {
        mistake: 'Rebuilding the website before fixing response speed',
        fix:
          'A beautiful site feeding an inbox nobody checks for two days loses more move-ins than an ugly site with a five-minute callback. Sequence matters.',
      },
    ],
    software: {
      name: 'ALF Reputation Engine',
      price: 'from $297/mo',
      pitch:
        'Stage 3 is the one most operators cannot sustain by hand, because reviews arrive nights and weekends and nobody owns them. This is that stage, managed.',
      bullets: [
        'Daily monitoring across Google, Yelp, Facebook, and senior-care directories',
        'Instant alerts on negative reviews, before they sit for a week',
        'AI-drafted responses written in your voice, HIPAA-safe by default',
        'Automated review-request campaigns that keep velocity steady',
        'Monthly reputation reporting you can hand to ownership',
      ],
      href: '/alf-reputation-engine',
      cta: 'See the Reputation Engine',
    },
    faqs: [
      {
        q: 'How long before this shows up in occupancy?',
        a:
          'Stage 1 and stage 4 can move inquiry volume and tour rate within two to four weeks, because they fix leaks rather than build new demand. Stages 2 and 3 compound over three to six months — review velocity and search visibility are cumulative by nature. Nothing here is a two-week miracle, and anyone promising one is selling you leads.',
      },
      {
        q: 'We are a single small community. Is this realistic without a marketing team?',
        a:
          'Stages 1, 4, 5, and 6 are operational decisions, not marketing budget — they cost attention, not money, and a single administrator can run them. Stages 2 and 3 are where most small operators need outside help, which is exactly why the software exists for stage 3 and why a build handles stage 2.',
      },
      {
        q: 'Does this work for independent living?',
        a:
          'The structure holds, but the emotional driver changes. ILF prospects are often the senior themselves rather than an adult child, and they are solving a lifestyle problem rather than a care crisis. Lead with community, freedom from home maintenance, and what a day actually looks like — and expect a longer, calmer decision cycle.',
      },
      {
        q: 'Can I do this myself instead of hiring you?',
        a:
          'Yes, and that is genuinely why this page is free and ungated. Work the six stages in order with a named owner for each. Bring us in when you want stage 2 built properly or stage 3 run without adding it to someone\'s plate.',
      },
    ],
  },
  {
    slug: 'church',
    audience: 'church',
    audienceLabel: 'For churches & ministries',
    eyebrow: 'The Church Growth Blueprint',
    titleLead: 'How growing churches turn online visitors into',
    titleAccent: 'people in the room',
    description:
      'A free six-stage growth blueprint for churches and ministries: local search, the five pages a first-time visitor needs, answering the real questions before they arrive, creating a genuine next step, guest follow-up, and what to measure.',
    readTime: '12 min read',
    intro:
      'Almost nobody walks into a church cold anymore. They find you online first — usually on a phone, usually late, often after something hard happened — and they decide whether to come before anyone in your congregation knows they exist. Most churches lose people at that invisible stage, for reasons that are entirely fixable and almost entirely free. Here are the six stages, in order.',
    forWho: [
      'Pastors and church leaders of congregations from 50 to 2,000',
      'Churches whose website has not meaningfully changed in three or more years',
      'Ministries with attendance that is flat while the community around them grows',
      'Any congregation that cannot say what happens to a first-time guest in the week after they visit',
    ],
    stages: [
      {
        number: '01',
        title: 'Make your church findable',
        why:
          'Someone new to town, or new to faith, searches "churches near me" on a Saturday night. If your Google listing shows the wrong service time, no photos, and an address without parking guidance, you have been eliminated by a stranger who will never know they eliminated you.',
        actions: [
          'Claim and verify your Google Business Profile — most churches have a listing nobody controls',
          'Make service times correct and current. Nothing costs more trust than someone arriving to an empty building',
          'Add holiday and special-service hours every year before the season, not during it',
          'Upload real photos: the sanctuary during a service, the entrance, the parking lot, kids ministry space, actual people',
          'Write a description a newcomer understands, with no insider language and no denominational shorthand they will not recognize',
          'Ask ten members to leave an honest review. Churches with reviews get chosen over churches without them',
        ],
        proof:
          'Search your town plus "church" on a phone. You appear with correct times, recent photos, and directions that make sense to someone who has never been.',
      },
      {
        number: '02',
        title: 'Build the five pages a first-time visitor needs',
        why:
          'Church websites are usually built for members — bulletins, committee minutes, giving portals. A first-time visitor needs five things, and every additional page you add between them and those five makes the decision harder.',
        actions: [
          'Home: who you are, where you are, when you meet, and one clear "plan your visit" action',
          'Plan Your Visit: what to wear, where to park, what happens to your kids, how long the service runs, what happens when you walk in',
          'What We Believe: plain language, short, no jargon. People want to know if they are safe here',
          'Our People: real photos and names of your pastor and staff. Faces build more trust than a mission statement',
          'Ministries: what exists for their specific life stage — kids, youth, young adults, seniors, recovery, grief',
          'Put service times and address in the footer of every page, and make the phone number tappable',
          'Check the whole thing on a phone. Most of your visitors will never see it on a desktop',
        ],
        proof:
          'A stranger can answer "when do they meet, where do I park, what do I wear, and what happens to my kids" in under a minute, on a phone, without asking anyone.',
      },
      {
        number: '03',
        title: 'Answer the questions they are afraid to ask',
        why:
          'Nobody emails a church to ask "will I be singled out as the new person" or "will you ask me for money." But those fears keep more people home on Sunday than theology ever will. Name them out loud on your website and you remove the actual barrier.',
        actions: [
          'Say explicitly that guests are not asked to stand, introduce themselves, or give',
          'Describe the first five minutes: who greets them, where they go, what to do if they arrive late',
          'Show how long the service is and what it includes. Uncertainty about time is a real objection',
          'Explain children\'s check-in and security procedures in detail. Parents will not come without this',
          'Post a recent service video or livestream so they can see the room and the tone before committing to it',
          'Be honest about size and style. Someone expecting 40 people should not walk into 900',
        ],
        proof:
          'Someone who has never attended a church could read your site and describe their whole first visit before arriving.',
      },
      {
        number: '04',
        title: 'Create a next step that is actually next',
        why:
          '"Join us Sunday" asks a stranger to make the largest possible commitment as their first move. Growing churches build a ladder with a low first rung — something that costs almost nothing in social risk.',
        actions: [
          'Offer one low-commitment step: a newsletter, a coffee with the pastor, a midweek class, a service project',
          'Make a "Plan Your Visit" form that tells you they are coming so someone can watch for them by name',
          'Give an online option that is genuinely welcoming, not a leftover pandemic artifact',
          'Create one pathway per life stage — a young family and a widow need different first rungs',
          'Keep the form to name, email, and what they are interested in. Every extra field drops completion',
          'Say what happens after they submit it, and then actually do that',
        ],
        proof:
          'Someone interested but not ready for Sunday has an obvious, low-risk way to connect — and you know their name before they arrive.',
      },
      {
        number: '05',
        title: 'Follow up with guests within 48 hours',
        why:
          'The single strongest predictor of whether a first-time guest returns is whether a real person made contact in the first two days. Most churches do nothing, or send an automated email signed by the church office, which reads as nothing.',
        actions: [
          'Capture guest information in a way that is not awkward: a connect card, a text-to-number on the screen, the visit form',
          'Have a named person — not "the office" — make contact within 48 hours',
          'Send a personal note, not a newsletter blast. A three-sentence text from a real human beats a designed template',
          'Invite them to one specific thing with a date, not to everything in general',
          'Make a second contact at two weeks. One touch is not follow-up',
          'Track who returned, so you learn which pathways actually work',
        ],
        proof:
          'You can name every first-time guest from the last three Sundays and say who contacted them and when.',
      },
      {
        number: '06',
        title: 'Measure what indicates growth',
        why:
          'Sunday attendance is a lagging number that moves for reasons you cannot control, like weather and flu season. Four upstream numbers tell you whether your front door is actually working.',
        actions: [
          'First-time guests per month — the true top of your funnel',
          'Guest return rate: of first-timers, how many came back within a month. Under 20% means the problem is your welcome, not your marketing',
          'Website visits to plan-your-visit submissions — measures whether the site persuades',
          'Google Business Profile actions: calls, direction requests, website clicks. Free, and most churches never look',
          'Review them monthly with the same people. Numbers nobody discusses change nothing',
        ],
        proof:
          'You know your guest return rate as a number, and you know which stage you are working on because of it.',
      },
    ],
    metrics: [
      { label: 'Guest follow-up time', target: 'Under 48 hrs', note: 'By a named person, not the church office. The strongest predictor of return.' },
      { label: 'Guest return rate', target: '20–40%', note: 'Under 20% points at your welcome experience, not your outreach.' },
      { label: 'Correct info online', target: '100%', note: 'Service times, address, parking. A single wrong time costs real people.' },
      { label: 'Site to visit-form rate', target: '2–5%', note: 'Below 2% means the site is informing but not persuading.' },
      { label: 'Google profile actions', target: 'Track monthly', note: 'Calls, directions, website clicks. Free signal almost nobody checks.' },
      { label: 'Reviews', target: '10+, honest', note: 'Churches with reviews get chosen over churches without them.' },
    ],
    mistakes: [
      {
        mistake: 'A website built for members instead of visitors',
        fix:
          'Members already know when you meet. Put the newcomer first on the homepage and move committee documents behind a member login or a footer link.',
      },
      {
        mistake: 'Insider language everywhere',
        fix:
          '"Discipleship pathway," "life groups," "the narthex" — a newcomer does not know what these are and will not ask. Write like you are talking to someone who has never been in a church.',
      },
      {
        mistake: 'No photos of actual people',
        fix:
          'Empty sanctuary photos make a church look closed. Show real faces mid-service, with permission, so a visitor can picture themselves in the room.',
      },
      {
        mistake: 'Guest follow-up that never happens',
        fix:
          'This is the most common and most expensive failure in the whole blueprint. Assign one name, one deadline, one method — and check it weekly.',
      },
      {
        mistake: 'Asking for commitment as the first step',
        fix:
          'Membership classes and small-group signups are rung four, not rung one. Give a stranger something that costs them almost nothing first.',
      },
      {
        mistake: 'Leaving the Google listing to whoever claimed it in 2014',
        fix:
          'Claim it back. Wrong service times on Google send more people to an empty parking lot than any other single error on this list.',
      },
    ],
    software: {
      name: 'Presence & Reputation Engine',
      price: 'custom for ministries',
      pitch:
        'Stages 1 and 5 are the ones that quietly fail, because nobody owns them on a Monday. Our reputation engine — built for assisted living and adapted for churches and ministries — keeps your listing accurate, your reviews answered, and your guest follow-up on a schedule.',
      bullets: [
        'Google Business Profile monitoring, so wrong service times never go live',
        'Review monitoring and drafted responses across Google and Facebook',
        'Guest follow-up cadence and templates your team can actually keep',
        'Monthly reporting on guests, return rate, and profile actions',
        'Website build and messaging available alongside, if stage 2 needs real work',
      ],
      href: '/alf-reputation-engine',
      cta: 'See how the engine works',
    },
    faqs: [
      {
        q: 'Is it appropriate to think about a church this way?',
        a:
          'Clarity is hospitality. Nothing in this blueprint touches what you teach — it removes the practical obstacles between a person who is looking and a congregation that would welcome them. Wrong service times on Google are not a theological position; they are a barrier you did not intend to build.',
      },
      {
        q: 'We have almost no budget. Where do we start?',
        a:
          'Stages 1, 3, 4, 5, and 6 cost nothing but attention. Claim your Google profile this week and fix your service times — that alone outperforms most paid outreach a small church could buy. Stage 2 is the only one that usually needs money, and it can wait.',
      },
      {
        q: 'Who should own this?',
        a:
          'One person, named, with about two hours a week. A volunteer with administrative instincts often does this better than a committee, because committees discuss and individuals ship. What kills it every time is assigning it to "the team."',
      },
      {
        q: 'Can we use this if we are not a church — a nonprofit, a clinic, a school?',
        a:
          'Largely yes. Any organization where someone has to trust you before they show up runs on the same mechanics: be findable, answer the unasked fears, offer a low-risk first step, follow up like a human, measure the front door. Swap "guest" for whatever you call a first-time visitor.',
      },
    ],
  },
]
