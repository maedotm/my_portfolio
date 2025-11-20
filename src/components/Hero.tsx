import { ChevronDown, Briefcase } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="p-4 bg-blue-500/10 rounded-2xl backdrop-blur-sm border border-blue-500/20">
            <Briefcase className="w-12 h-12 text-blue-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          Business Portfolio  <br />Maedot Metsihet
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            & Services
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto animate-slide-up-delay">
          Delivering excellence across healthcare, real estate, international trade and up coming industries.
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-slide-up-delay-2">
          <a
            href="#services"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to services section"
      >
        <ChevronDown className="w-8 h-8 text-slate-400" />
      </button>
    </section>
  );
}
