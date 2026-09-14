import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { excoMembers, internalTeams, externalTeams, type Member } from "../data/teamData";

/**
 * Normalises a social link from the team data into a usable URL, or null when
 * there is no real link. The data uses "NA" for missing links and sometimes
 * omits the protocol (e.g. "www.linkedin.com/...") or only has the bare
 * homepage ("https://github.com"), all of which should not render a link.
 */
function normaliseSocialUrl(value: string | undefined): string | null {
  if (!value) return null;
  const v = value.trim();
  if (!v || v.toUpperCase() === "NA") return null;
  const bare = v
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .replace(/\/+$/, "")
    .toLowerCase();
  // bare homepage placeholders carry no personal profile
  if (bare === "github.com" || bare === "linkedin.com") return null;
  return /^https?:\/\//i.test(v) ? v : `https://${v}`;
}

type InternalTeamKey = keyof typeof internalTeams;
type ExternalTeamKey = keyof typeof externalTeams;

/* ========================= PAGE ========================= */
export default function TeamPage() {
  const [activeTeam, setActiveTeam] = useState<"internal" | "external">("internal");
  const [activeInternal, setActiveInternal] =
    useState<InternalTeamKey>("Branding + Marketing");
  const [activeExternal, setActiveExternal] =
    useState<ExternalTeamKey>("Caring for Life");

  const subteamKeys =
    activeTeam === "internal"
      ? (Object.keys(internalTeams) as InternalTeamKey[])
      : (Object.keys(externalTeams) as ExternalTeamKey[]);

  const activeGroupName = activeTeam === "internal" ? activeInternal : activeExternal;

  const activeMembers: Member[] =
    activeTeam === "internal"
      ? [...internalTeams[activeInternal]]
      : [...externalTeams[activeExternal]];

  return (
    <div className="min-h-dvh bg-white text-slate-900 selection:bg-indigo-500/40">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-center text-4xl font-bold mb-12">Meet The Team</h1>

        {/* EXCO */}
        <section className="rounded-2xl bg-slate-100 p-4 sm:p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-center text-green-600">EXCO</h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            The group that forms the backbone and oversees all projects and events.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {excoMembers.map((person) => (
              <MemberCard key={`exco-${person.name}`} {...person} />
            ))}
          </div>
        </section>

        {/* Internal / External Toggle */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-10">
          <button
            type="button"
            aria-pressed={activeTeam === "internal"}
            className={`w-full sm:w-96 py-2.5 rounded-md border text-base font-semibold transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              activeTeam === "internal"
                ? "bg-[#6A8DFF] border-[#6A8DFF] text-white"
                : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
            onClick={() => setActiveTeam("internal")}
          >
            Internal Team
          </button>

          <button
            type="button"
            aria-pressed={activeTeam === "external"}
            className={`w-full sm:w-96 py-2.5 rounded-md border text-base font-semibold transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              activeTeam === "external"
                ? "bg-[#6A8DFF] border-[#6A8DFF] text-white"
                : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
            onClick={() => setActiveTeam("external")}
          >
            External Team
          </button>
        </div>



        {/* Dynamic Section */}
        <section className="mt-12 rounded-2xl bg-slate-100 p-4 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-wrap justify-center gap-3 mb-4 text-sm">
            {subteamKeys.map((name) => (
              <button
                key={name}
                type="button"
                aria-pressed={name === activeGroupName}
                onClick={() =>
                  activeTeam === "internal"
                    ? setActiveInternal(name as InternalTeamKey)
                    : setActiveExternal(name as ExternalTeamKey)
                }
                className={`px-4 py-1 rounded-full transition-colors motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                  name === activeGroupName
                    ? "bg-blue-200 text-black shadow-sm"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-slate-600 mb-6">
            {activeTeam === "internal"
              ? `Currently viewing ${activeInternal}.`
              : `Currently viewing ${activeExternal}.`}
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {activeMembers.map((person) => (
              <MemberCard
                key={`${activeTeam}-${activeGroupName}-${person.name}`}
                {...person}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ====================== CARD ====================== */
function MemberCard({ name, role, img, linkedIn, github }: Member) {
  const linkedInUrl = normaliseSocialUrl(linkedIn);
  const githubUrl = normaliseSocialUrl(github);

  return (
    <article className="row-span-4 grid min-w-0 grid-rows-subgrid justify-items-center gap-y-0 rounded-xl bg-white p-3 sm:p-4 border border-slate-200 shadow-sm">
      <Avatar
        src={img}
        alt={name}
        name={name}
        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-slate-300"
      />
      <h3 className="mt-2 w-full whitespace-normal break-words text-balance text-center text-sm font-medium leading-5 text-slate-900 sm:text-base sm:leading-6">{name}</h3>
      <p className="mt-1 w-full whitespace-normal break-words text-balance text-center text-sm leading-5 text-slate-600">{role}</p>

        <div className="mt-1 flex min-h-11 items-center justify-center gap-2 text-lg text-slate-500">
          {linkedInUrl && (
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-md hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors motion-reduce:transition-none"
              aria-label={`${name} LinkedIn`}
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-md hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors motion-reduce:transition-none"
              aria-label={`${name} GitHub`}
              title="GitHub"
            >
              <FaGithub />
            </a>
          )}
        </div>
    </article>
  );
}
