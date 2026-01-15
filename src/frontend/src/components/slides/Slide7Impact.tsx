import { DollarSign, Target, Zap, TrendingUp } from 'lucide-react';

export function Slide7Impact() {
  const impacts = [
    {
      icon: DollarSign,
      title: 'Reduces AT&C Losses',
      description: 'Data-driven detection significantly reduces aggregate technical and commercial losses.',
    },
    {
      icon: Target,
      title: 'Prioritizes Inspections',
      description: 'Measurable revenue recovery through targeted field inspections of high-risk consumers.',
    },
    {
      icon: Zap,
      title: 'No Hardware Upgrades',
      description: 'Software-deployable across DISCOMs without major infrastructure investments.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solution',
      description: 'Easily scalable to multiple regions with minimal retraining requirements.',
    },
  ];

  return (
    <div className="flex-1 flex flex-col p-12 md:p-16 bg-gradient-to-br from-black via-slate-950 to-black">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-silver mb-3 tracking-tight">
          Impact & Value
        </h2>
        <div className="w-20 h-px bg-gold" />
      </div>

      {/* Impact Grid */}
      <div className="grid md:grid-cols-2 gap-6 flex-1">
        {impacts.map((impact, index) => (
          <div
            key={index}
            className="bg-black/40 p-8 rounded-sm border border-silver/20 hover:border-gold/40 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gold/10 rounded-sm">
                <impact.icon className="h-7 w-7 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-silver mb-3 tracking-wide">
                  {impact.title}
                </h3>
                <p className="text-silver/70 text-sm leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Highlight */}
      <div className="mt-8 p-6 bg-gradient-to-r from-gold/10 to-silver/10 rounded-sm border border-gold/30">
        <p className="text-lg font-medium text-silver text-center tracking-wide">
          Transforming power theft detection from reactive to proactive, enabling DISCOMs to protect revenue and ensure grid reliability
        </p>
      </div>
    </div>
  );
}
