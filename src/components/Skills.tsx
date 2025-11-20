import { Code2, Network, Database, Server, Globe, Shield } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Development',
      icon: Code2,
      skills: ['React', 'TypeScript', 'Node.js', 'Python', 'RESTful APIs', 'Git'],
      color: 'blue'
    },
    {
      title: 'Networking',
      icon: Network,
      skills: ['TCP/IP', 'Routing & Switching', 'Network Security', 'VPN', 'Firewalls', 'DNS'],
      color: 'emerald'
    },
    {
      title: 'Infrastructure',
      icon: Server,
      skills: ['Linux', 'Docker', 'CI/CD', 'Cloud Platforms', 'Monitoring', 'Automation'],
      color: 'orange'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Database Design', 'Query Optimization'],
      color: 'cyan'
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['HTML/CSS', 'Responsive Design', 'Web Performance', 'SEO', 'Accessibility'],
      color: 'violet'
    },
    {
      title: 'Security',
      icon: Shield,
      skills: ['SSL/TLS', 'Authentication', 'Encryption', 'Security Best Practices', 'Compliance'],
      color: 'red'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500/10 to-blue-600/10 border-blue-500/20',
    emerald: 'from-emerald-500/10 to-emerald-600/10 border-emerald-500/20',
    orange: 'from-orange-500/10 to-orange-600/10 border-orange-500/20',
    cyan: 'from-cyan-500/10 to-cyan-600/10 border-cyan-500/20',
    violet: 'from-violet-500/10 to-violet-600/10 border-violet-500/20',
    red: 'from-red-500/10 to-red-600/10 border-red-500/20'
  };

  const iconColorClasses = {
    blue: 'text-blue-400',
    emerald: 'text-emerald-400',
    orange: 'text-orange-400',
    cyan: 'text-cyan-400',
    violet: 'text-violet-400',
    red: 'text-red-400'
  };

  return (
    <section className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses]} backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${iconColorClasses[category.color as keyof typeof iconColorClasses]}`} />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
