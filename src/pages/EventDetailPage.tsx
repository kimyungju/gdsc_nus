import { NavLink, useParams, Navigate } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import DontMissOutSection from "../components/DontMissOutSection";
import { getEventData } from "../data/pastEvents";

export default function EventDetailPage() {
  const { year, slug } = useParams<{ year: string; slug: string }>();

  if (!year || !slug) {
    return <Navigate to="/events" replace />;
  }

  const data = getEventData(year, slug);

  if (!data) {
    return <Navigate to={`/events/${year}`} replace />;
  }

  const { event, yearData } = data;

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <NavLink
          to={`/events/${year}`}
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8"
        >
          ← Back to {yearData.displayName} Events
        </NavLink>

        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold mb-4">
            {event.tag}
          </div>
          <h1 className="text-4xl font-bold mb-6">{event.title}</h1>

          <div className="space-y-2 text-slate-600">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{event.date}</span>
            </div>
            {event.time && (
              <div className="flex items-center gap-2">
                <span>🕐</span>
                <span>{event.time}</span>
              </div>
            )}
            {event.venue && (
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>{event.venue}</span>
              </div>
            )}
            {event.attendees && (
              <div className="flex items-center gap-2">
                <span>👥</span>
                <span>{event.attendees}</span>
              </div>
            )}
          </div>
        </div>

        {/* Image Gallery */}
        {event.images && event.images.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${event.title} ${i + 1}`}
                  className="w-full max-h-80 object-cover rounded-2xl shadow-lg"
                />
              ))}
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">About This Event</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {event.description}
            </p>

            {/* Speakers Section */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Speakers</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {event.speakers.map((speaker, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-50"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg shrink-0">
                        {speaker.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {speaker.name}
                        </div>
                        <div className="text-sm text-slate-600">{speaker.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Partners Section */}
            {event.partners && event.partners.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-50">
                <h2 className="text-lg font-bold mb-4">Partners & Clubs</h2>
                <div className="flex flex-wrap gap-2">
                  {event.partners.map((partner, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white text-slate-700 text-sm shadow-sm"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Sponsor Section */}
            {event.sponsor && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border border-orange-100">
                <h2 className="text-lg font-bold mb-3">Sponsored By</h2>
                <div className="text-xl font-semibold text-orange-600">
                  {event.sponsor}
                </div>
              </div>
            )}
          </div>
        </div>

        <DontMissOutSection />
      </main>
      <Footer />
    </div>
  );
}
