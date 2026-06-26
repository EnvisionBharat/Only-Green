import { Pillar, MetricCard, RevenueStream, RoadmapPhase, AdvantagePoint } from "./types";

export const COMPANY_NAME = "Only Green";
export const TAGLINE = "India's First Hedge Fund-Led Investment Operating System";
export const MOTTO = "Invest. Intelligence. Impact.";

export const FOUNDER_QUOTE = {
  text: "We are building India's first investment institution that is also a community, a technology platform, and a physical home for serious capital.",
  author: "Sumit Bharodiya",
  role: "Founder"
};

export const CONTACT_INFO = {
  email: "sumitbharodiya09@gmail.com",
  phone: "+91-960-916-9555",
  location: "Sola, Ahmedabad, India",
  displayAddress: "Sola, Ahmedabad, India"
};

export const OPPORTUNITY_DATA = {
  problem: "India has tens of thousands of high-net-worth investors, active traders, and aspiring entrepreneurs — yet there is no single platform where professional fund management, live institutional-grade trading infrastructure, startup access, and a curated peer community exist under one roof.",
  consequence: "They are forced to use a patchwork of Zerodha and other platforms for execution, WhatsApp groups for ideas, random events for networking, and unverified signals for intelligence.",
  solution: "Only Green Community solves this completely by merging professional asset management, state-of-the-art physical spaces, proprietary signal tech, and an elite curated network into one unified Investment Operating System."
};

export const PILLARS: Pillar[] = [
  {
    id: "fund",
    title: "The Fund",
    badge: "SEBI-Registered AIF",
    description: "An Alternative Investment Fund (AIF) registered hedge fund deploying capital with professional rigor.",
    details: [
      "Deploys capital across liquid Indian public markets",
      "Incubates internally created startups and early ventures",
      "Uses highly disciplined proprietary absolute-return strategies",
      "Targeting 16–22% blended annual returns for investors"
    ],
    metricValue: "16-22%",
    metricLabel: "Target Annual Returns"
  },
  {
    id: "tech",
    title: "The Technology (DRF)",
    badge: "Proprietary IP",
    description: "Our proprietary signal intelligence system that powers the fund and drives member trading decisions.",
    details: [
      "7 integrated components analyzing market trends in real-time",
      "85–92% historical win rate across high-conviction trades",
      "Validated performance across 5,855+ simulated and live trades",
      "Defensible IP moat that cannot be purchased off-the-shelf"
    ],
    metricValue: "85-92%",
    metricLabel: "Historical Win Rate"
  },
  {
    id: "community",
    title: "The Community",
    badge: "Curated Network",
    description: "A highly curated, private ecosystem of active traders, builders, HNIs, and operators.",
    details: [
      "Strict application process to maintain highest peer caliber",
      "Three membership tiers starting from ₹50K up to custom bespoke access",
      "Direct channel for genuine deal flow, co-investment opportunities, and collaborative ideas",
      "No promises, just actual access and shared intelligence"
    ],
    metricValue: "3 Tiers",
    metricLabel: "Starting from ₹50K"
  },
  {
    id: "space",
    title: "The Space",
    badge: "Ahmedabad Physical Hub",
    description: "A state-of-the-art physical ecosystem designed as a home for serious financial capital.",
    details: [
      "1,000 sq yard physical hub situated in Sola, Ahmedabad",
      "Live institutional-grade trading floor with high-speed multi-monitor terminals",
      "Premium in-house member café and executive lounges",
      "Professional audio/video podcast studio and fund management headquarters"
    ],
    metricValue: "1,000 yd²",
    metricLabel: "Physical Hub"
  }
];

export const METRICS: MetricCard[] = [
  {
    value: "15–20x",
    label: "Valuation Multiple",
    description: "High institutional multiplier due to compounding software & fund margins.",
    comparison: "vs 2–3x multiple for a standalone physical café or space"
  },
  {
    value: "9 Streams",
    label: "Day 1 Revenues",
    description: "Diversified, resilient model that performs in both bull and bear markets.",
    comparison: "Predictable, compounding income streams"
  },
  {
    value: "90%+",
    label: "Target Retention",
    description: "Strong member lock-in driven by the value of community, space, and tech.",
    comparison: "Unparalleled peer-to-peer ecosystem stickiness"
  },
  {
    value: "70%+",
    label: "EBITDA Margin",
    description: "Highly profitable operations scaling with digital signals and membership tiers.",
    comparison: "Expected blended margins by Year 3 of operation"
  }
];

export const REVENUE_STREAMS: RevenueStream[] = [
  { name: "Memberships", y1: 10, y2: 21.5, y3: 35, margin: 85 },
  { name: "DRF Signals & Licensing", y1: 3, y2: 12, y3: 27, margin: 70 },
  { name: "Fund Management & Carry", y1: 0.75, y2: 4, y3: 10, margin: 80 },
  { name: "NRI Digital Membership", y1: 2.2, y2: 6.8, y3: 12.5, margin: 92 },
  { name: "Sponsorships & Partners", y1: 0.75, y2: 4, y3: 9, margin: 95 },
  { name: "Events & Content", y1: 0.75, y2: 5, y3: 12, margin: 65 },
  { name: "Café & Merchandise", y1: 1.25, y2: 2.5, y3: 4.75, margin: 40 }
];

export const ROADMAP: RoadmapPhase[] = [
  {
    phase: "Month 0–3",
    timeframe: "Foundation",
    title: "Filing & Core Team",
    items: [
      "SEBI AIF registration filing & compliance setup",
      "Recruitment of Chief Investment Officer (CIO) and core analysts",
      "External independent audit of DRF technical signal algorithms",
      "Enrollment of 25–50 founding high-net-worth (HNI) members"
    ]
  },
  {
    phase: "Month 3–6",
    timeframe: "Build & Launch",
    title: "Space & Infrastructure",
    items: [
      "Completion of the 1,000 sq yard premium Ahmedabad hub fit-out",
      "Launch of Only Green Podcast and content studio channels",
      "Deployment of proprietary trading floor terminal systems",
      "Fund operations begin deploying initial founding partner capital"
    ]
  },
  {
    phase: "Month 6–12",
    timeframe: "Community Open",
    title: "Digital Scaling",
    items: [
      "Launch of the Observer membership tier for broader public access",
      "DRF Signals live API & dashboard deployment for enrolled members",
      "Global outreach & formal launch of the NRI Digital membership tier",
      "Milestone of 200+ active institutional-grade member investors"
    ]
  },
  {
    phase: "Month 12–24",
    timeframe: "Scale & Credibility",
    title: "Full Institution Status",
    items: [
      "Obtaining Portfolio Management Services (PMS) license from SEBI",
      "Launching customized multi-family office advisory services",
      "B2B enterprise licensing of DRF signal intelligence components",
      "Targeting ₹200 Crore in Assets Under Management (AUM)"
    ]
  }
];

export const WHY_NOW_ADVANTAGES: AdvantagePoint[] = [
  {
    title: "Proprietary DRF Technology",
    description: "Completely owned IP and algorithmic intelligence. It represents years of development and 5,855+ validated trades, giving members a structural informational edge that cannot be bought off the shelf."
  },
  {
    title: "Founder-led Capital",
    description: "Our leadership invests substantial proprietary capital alongside our members. With strong skin in the game, our interests are perfectly aligned with long-term compounding and risk management."
  },
  {
    title: "First-Mover Convergence",
    description: "No other platform in India combines a SEBI-registered fund, cutting-edge signal technology, a physical luxury networking hub, and a high-caliber curated member network under one umbrella."
  },
  {
    title: "Compounding Nine Revenue Streams",
    description: "Resilient business model designed for steady cash flows. We are diversified across high-margin licensing, management carry, sponsorships, event admissions, physical space commerce, and tiered memberships."
  },
  {
    title: "NRI Digital Expansion",
    description: "A highly profitable, friction-free gateway for non-resident Indian capital to seamlessly tap into India's structural bull market with professional fund expertise, institutional intelligence, and local trust."
  }
];
