import { Heart, Home, Building2, TrendingUp, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      name: 'Lifeline Addis',
      category: 'Healthcare',
      description: 'Professional homecare and health services providing quality patient care',
      icon: Heart,
      color: 'from-red-500/20 to-pink-500/20',
      borderColor: 'border-red-500/20',
      iconColor: 'text-red-400'
    },
    {
      name: 'Hage Health Service',
      category: 'Healthcare',
      description: 'Dedicated health services and medical care support',
      icon: Heart,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/20',
      iconColor: 'text-emerald-400'
    },
{
  name: 'Upscale Real Estate',
  category: 'Real Estate',
  description: 'Premium property sales and management services',
  icon: Building2,
  color: 'from-black to-red-900/40',
  borderColor: 'border-red-700/40',
  iconColor: 'text-red-600'
},
    {
  name: 'Wondmneh Tsegaye',
  category: 'Import & Export',
  description: 'International trade and logistics solutions',
  icon: Globe,
  color: 'from-[#0088cc]/80 to-blue-700/60',   
  borderColor: 'border-[#0088cc]/50',         
  iconColor: 'text-white'                      
}
  ];

  return (
    <section id="services" className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          working with great companies
        </h2>
        <p className="text-slate-300 text-center mb-16 max-w-2xl mx-auto">
          Comprehensive portfolio of professional services across multiple industries
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className={`bg-gradient-to-br ${service.color} backdrop-blur-sm border ${service.borderColor} rounded-2xl p-8 hover:scale-105 transition-transform duration-300 flex flex-col`}
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <span className="px-3 py-1 bg-white/10 text-slate-300 text-xs font-semibold rounded-full border border-white/10">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-slate-300 mb-6 flex-grow">{service.description}</p>

                <button className="w-full px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors border border-white/20 font-medium">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
