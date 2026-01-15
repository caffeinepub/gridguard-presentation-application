import { Wifi, Map, Brain, Heart } from 'lucide-react';

export function Slide8Future() {
  const roadmapItems = [
    {
      icon: Wifi,
      title: 'Smart Meter Integration',
      description: 'Integration with Smart Meters (AMI) for real-time anomaly streaming and instant detection.',
    },
    {
      icon: Map,
      title: 'GIS-Based Analysis',
      description: 'GIS-based cluster analysis and alert visualization for geographic pattern recognition.',
    },
    {
      icon: Brain,
      title: 'Enhanced ML Models',
      description: 'Future inclusion of household consumption patterns and ML drift correction mechanisms.',
    },
  ];

  return (
    <div className="flex-1 flex flex-col p-12 md:p-16 bg-gradient-to-br from-black via-slate-950 to-black">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-silver mb-3 tracking-tight">
          Feasibility & Scalability
        </h2>
        <div className="w-20 h-px bg-gold" />
      </div>

      {/* Feasibility Content */}
      <div className="mb-10 grid md:grid-cols-2 gap-6">
        <div className="bg-black/40 p-6 rounded-sm border border-gold/30">
          <h3 className="text-xl font-semibold text-silver mb-4 tracking-wide">Implementation Feasibility</h3>
          <ul className="space-y-3 text-silver/70 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold">•</span>
              <span>Leverages existing MDMS infrastructure</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold">•</span>
              <span>No additional hardware deployment required</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold">•</span>
              <span>Software-only solution with rapid deployment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold">•</span>
              <span>Minimal training required for field teams</span>
            </li>
          </ul>
        </div>

        <div className="bg-black/40 p-6 rounded-sm border border-silver/20">
          <h3 className="text-xl font-semibold text-silver mb-4 tracking-wide">Scalability Factors</h3>
          <ul className="space-y-3 text-silver/70 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold">•</span>
              <span>Cloud-native architecture for horizontal scaling</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold">•</span>
              <span>Adaptable to different regional consumption patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold">•</span>
              <span>Modular design allows incremental rollout</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold">•</span>
              <span>Performance improves with increased data volume</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Roadmap */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-silver mb-6 tracking-wide">Future Enhancements</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className="bg-black/40 p-6 rounded-sm border border-silver/20 hover:border-gold/40 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-gold/10 rounded-sm mb-4">
                  <item.icon className="h-6 w-6 text-gold" />
                </div>
                <h4 className="text-base font-semibold text-silver mb-3 tracking-wide">
                  {item.title}
                </h4>
                <p className="text-silver/70 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto text-center text-xs text-silver/60">
        <p className="flex items-center justify-center gap-2">
          © 2025. Built with <Heart className="h-3 w-3 text-gold fill-gold" /> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
