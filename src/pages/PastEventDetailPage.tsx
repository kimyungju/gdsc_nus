import { NavLink, useParams, Navigate } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import DontMissOutSection from "../components/DontMissOutSection";
import { getYearData } from "../data/pastEvents";
import type { Event } from "../data/pastEvents";

function EventCard({ event, year }: { event: Event; year: string }) {
  const hasImages = event.images && event.images.length > 0;

  if (hasImages) {
    return (
      <NavLink to={`/events/${year}/${event.slug}`} className="block h-full">
        <article className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all group h-full flex flex-col">
          <img
            src={event.images![0]}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              {event.title}
            </h3>
            <div className="text-sm text-blue-600 mb-2">{event.date}</div>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold mb-3 self-start">
              {event.tag}
            </div>
            <p className="text-sm text-slate-600 line-clamp-3 flex-1">{event.description}</p>
            <p className="mt-4 text-sm font-semibold text-blue-600">View details →</p>
          </div>
        </article>
      </NavLink>
    );
  }

  // For events without images (AY 24/25) use full description
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg">
      <div className={`h-32 rounded-xl bg-gradient-to-r ${event.color} mb-4`}></div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
      <div className="text-sm text-blue-600 mb-2">{event.date}</div>
      <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold mb-3">
        {event.tag}
      </div>
      <p className="text-sm text-slate-600 whitespace-pre-line">{event.description}</p>
    </article>
  );
}

export default function PastEventDetailPage() {
  const { year } = useParams<{ year: string }>();

  if (!year) {
    return <Navigate to="/events" replace />;
  }

  const yearData = getYearData(year);

  if (!yearData) {
    return <Navigate to="/events" replace />;
  }

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <NavLink
          to="/events"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8"
        >
          ← Back to All Events
        </NavLink>

        <h1 className="text-3xl font-bold mb-8">{yearData.displayName} EVENTS</h1>

        <div className="grid gap-6 md:grid-cols-3">
          {yearData.events.map((e, i) => (
            <EventCard key={i} event={e} year={year} />
          ))}
        </div>

        <DontMissOutSection />
      </main>
      <Footer />
    </div>
  );
}
