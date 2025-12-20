export interface Event {
  slug: string;
  title: string;
  date: string;
  tag: string;
  attendees: string;
  description: string;
  color: string;
  images?: string[];
  time?: string;
  venue?: string;
  speakers?: { name: string; role: string }[];
  partners?: string[];
  sponsor?: string;
}

export interface YearData {
  year: string;
  displayName: string;
  events: Event[];
}

export const pastEventsData: Record<string, YearData> = {
  ay2526: {
    year: "ay2526",
    displayName: "AY 25/26",
    events: [
      {
        slug: "openmentor-ai-swe-networking",
        title: "OpenMentor's AI & SWE Networking",
        date: "Nov 8, 2025",
        tag: "Networking",
        attendees: "100 attendees",
        time: "2PM – 5PM",
        venue: "StartupX, 79 Ayer Rajah Crescent #04-07",
        description:
          "An afternoon of good food, agentic AI with Tavily, and meaningful mentorship from software engineers.",
        color: "from-green-400 via-teal-400 to-cyan-400",
        images: ["/events/openmentor_dgnus_1.jpg"],
        speakers: [
          { name: "Brian Choon", role: "ex-J.P. Morgan SWE" },
          { name: "Jewel Aw", role: "Ambassador @ NVIDIA, ex-AWS, ex-SAP" },
          { name: "Shaoqin Lu", role: "ex-GovTech SWE, Head of Technology at Developer Group @ NUS Computing" },
          { name: "Rach Pradhan", role: "Design Engineer & Founder, startup research at Menlo (Homebrew)" },
        ],
        partners: [
          "Developer Group @ NUS Computing",
          "Google Developer Group",
          "Nanyang Polytechnic",
          "SUSS ICT IG",
          "Apple Developer Society",
          "SUTD Digital Design and Development Club",
          "SITech Developers Club",
        ],
        sponsor: "Tavily",
      },
      {
        slug: "aws-genai-workshop",
        title: "AWS x DG NUS: Gen AI & Applications Workshop",
        date: "Oct 31, 2025",
        tag: "Workshop",
        attendees: "60 attendees",
        time: "2PM – 6PM",
        venue: "AWS Office, 2 Central Blvd, Amazon Web Services Singapore Pte. Ltd.",
        description:
          "Explore how Generative AI is transforming the world of innovation through presentations, hands-on workshops, and networking with industry professionals.",
        color: "from-blue-400 via-purple-400 to-pink-400",
        images: ["/events/aws_dgnus_1.jpg"],
      },
      {
        slug: "welcome-dinner",
        title: "Welcome Dinner",
        date: "Sept 24, 2025",
        tag: "Social",
        attendees: "",
        time: "7PM – 9:30PM",
        venue: "LT18",
        description:
          "We hosted our welcome dinner for this academic year where the different teams and the EXCO got to meet and bond with one another.",
        color: "from-yellow-300 via-orange-300 to-yellow-400",
        images: ["/events/welcomedinner_1.jpg", "/events/welcomedinner_2.jpg"],
      },
    ],
  },
  ay2425: {
    year: "ay2425",
    displayName: "AY 24/25",
    events: [
      {
        slug: "fireside-chat",
        title: "Fireside Chat",
        date: "Sept 2, 2024",
        tag: "Talk",
        attendees: "120 attendees",
        description:
          "🎤 Name, Position @ Company\n👥 120 attendees\n📍COM1-0210\nStudents gained insights on tech careers, interview prep, and life at Company through an interactive Q&A session.",
        color: "from-blue-400 via-purple-400 to-pink-400",
      },
      {
        slug: "hack4good-hackathon",
        title: "Hack4Good Hackathon",
        date: "Feb 18, 2025",
        tag: "Hackathon",
        attendees: "80 participants (20 teams)",
        description:
          "🏆 24-hour social impact hackathon\n👥 80 participants (20 teams)\n📍Innovation 4.0, i4\nTeams built tech solutions for social good. Top 3 projects won prizes and mentorship from Google engineers.",
        color: "from-green-400 via-teal-400 to-cyan-400",
      },
      {
        slug: "android-development-workshop",
        title: "Android Development Workshop",
        date: "March 21, 2025",
        tag: "Workshop",
        attendees: "40 participants",
        description:
          "👩‍💻 Name, Position @ Company\n👥 40 participants\nParticipants built their first Android app using Kotlin and Jetpack Compose in this hands-on 3-hour workshop.",
        color: "from-yellow-300 via-orange-300 to-yellow-400",
      },
    ],
  },
};

export const getYearData = (year: string): YearData | null => {
  return pastEventsData[year] || null;
};

export const getEventData = (
  year: string,
  slug: string
): { event: Event; yearData: YearData } | null => {
  const yearData = pastEventsData[year];
  if (!yearData) return null;
  const event = yearData.events.find((e) => e.slug === slug);
  if (!event) return null;
  return { event, yearData };
};
