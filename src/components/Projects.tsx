import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Web Development & Web Apps',
      description:
        'Custom-built, high-performance websites and full web applications tailored to your business needs.',
      tags: ['React', 'TypeScript', 'Node.js', 'Tailwind'],
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Telegram Bots',
      description:
        'Fully functional Telegram bots with advanced interfaces, automation capabilities, and seamless integrations.',
      tags: ['Python', 'Bot API', 'Automation', 'AI'],
      gradient: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      title: 'ERP Systems',
      description:
        'End-to-end ERP solutions for any sector, including inventory, HR, finance, analytics, and workflow automation.',
      tags: ['ERP', 'PostgreSQL', 'Django', 'Business Logic'],
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      title: 'Mobile App Development',
      description:
        'Cross-platform mobile applications for Android and iOS with modern design and powerful functionality.',
      tags: ['React Native', 'iOS', 'Android', 'API'],
      gradient: 'from-violet-500/20 to-purple-500/20'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Featured Services
        </h2>

        <p className="text-center text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
          I have a great team ready to bring your project to life with high-quality results at an affordable price.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`w-full h-40 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center`}
              >
                <div className="text-white/40 text-6xl font-bold">
                  {project.title.charAt(0)}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 text-slate-300 text-sm rounded-lg border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
