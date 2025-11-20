import { Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-blue-400" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Maedot Metsihet
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I am <strong className="text-white">Maedot Metsihet</strong>, a professional developer,
              IT manager, and project manager based in Ethiopia. I work across
              multiple industries, supporting organizations in healthcare, real estate,
              import & export, and other sectors through modern technology and digital solutions.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              I contribute as a technology expert and work on development projects of those all mentioned industries,
              helping businesses improve their systems, workflows, and digital presence.
              My focus is delivering efficient, reliable, and scalable solutions that support
              real-world operations.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              I am currently working toward building my own software company, with the goal of
              creating innovative products that support Ethiopian businesses and the global market.
              With experience in development, IT management, and cross-industry project leadership,
              I am committed to excellence and long-term growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
            {/* IMAGE SECTION */}
            <div className="flex justify-center mb-6">
              <img
                src="/dist/img/maedot.jpg"
                alt="Maedot Metsihet"
                className="w-40 h-40 rounded-2xl object-cover shadow-xl ring-2 ring-white/20"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional Roles</h3>
              <p className="text-slate-300">
                Developer • IT Manager • Project Manager
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Industries I Work With</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg text-sm border border-red-500/30">
                  Healthcare
                </span>
                <span className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-lg text-sm border border-amber-500/30">
                  Real Estate
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm border border-blue-500/30">
                  Import & Export
                </span>
                <span className="px-4 py-2 bg-slate-500/20 text-slate-300 rounded-lg text-sm border border-slate-500/30">
                  More industries coming soon...
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Future Vision
              </h3>
              <p className="text-slate-300">
                Building my own software company to deliver innovative solutions in Ethiopia
                and beyond.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
