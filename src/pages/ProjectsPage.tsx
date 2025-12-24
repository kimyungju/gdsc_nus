import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-bold text-center">Our Projects</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <Link
              key={i}
              to={`/projects/${p.slug}`}
              className="group block overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in"
              style={{
                animationDelay: `${i * 50}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="aspect-video overflow-hidden bg-white p-4 flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">{p.summary}</p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-blue-500 group-hover:text-blue-400">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
