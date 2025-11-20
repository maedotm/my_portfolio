import { Mail, Linkedin, Github, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Work Together
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <Mail className="w-6 h-6 text-blue-400" />
            <span className="text-white font-semibold">maedotmetsihet4@gmail.com</span>
          </a>

          <div className="flex items-center justify-center gap-3 p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl">
            <span className="text-white font-semibold">Maedot Metsihet is always there for you</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/maedotm"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-slate-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/maedot-metsihet-140679263/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-slate-300" />
          </a>
          <a
            href="https://wa.me/0967502090"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-110 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-slate-300" />
          </a>
          <a
            href="https://t.me/maedotme"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-110 transition-all duration-300"
            aria-label="Telegram"
          >
            <Send className="w-6 h-6 text-slate-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
