import { Database, TrendingUp, Shield, Code } from 'lucide-react';

export function Slide5Features() {
  return (
    <div className="flex-1 flex flex-col p-12 md:p-16 bg-gradient-to-br from-black via-slate-950 to-black">
      {/* Header */}
      <div className="mb-10 px-6 py-4 bg-black/50 rounded-sm inline-block">
        <h2 className="text-4xl md:text-5xl font-bold text-silver mb-3 tracking-tight">
          Technology Stack
        </h2>
        <div className="w-20 h-px bg-gold" />
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 flex-1">
        {/* Left: Input Data */}
        <div className="space-y-6">
          <div className="bg-black/60 p-6 rounded-sm border border-gold/30">
            <div className="flex items-center gap-3 mb-5">
              <Database className="h-6 w-6 text-gold" />
              <h3 className="text-xl font-semibold text-silver tracking-wide">Input Data</h3>
            </div>
            <ul className="space-y-3 text-silver text-sm">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">•</span>
                <span>Monthly usage patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">•</span>
                <span>Historical consumption comparisons</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">•</span>
                <span>Neighborhood consumption patterns</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/60 p-6 rounded-sm border border-silver/20">
            <div className="flex items-center gap-3 mb-5">
              <Shield className="h-6 w-6 text-gold" />
              <h3 className="text-xl font-semibold text-silver tracking-wide">Data Source</h3>
            </div>
            <p className="text-silver text-sm leading-relaxed">
              Synthetic dataset used for Proof of Concept demonstration and model validation.
            </p>
          </div>

          <div className="bg-black/60 p-6 rounded-sm border border-silver/20">
            <div className="flex items-center gap-3 mb-5">
              <Code className="h-6 w-6 text-gold" />
              <h3 className="text-xl font-semibold text-silver tracking-wide">Implementation</h3>
            </div>
            <p className="text-silver text-sm leading-relaxed">
              Built with Python, scikit-learn, and modern data processing frameworks for scalable deployment.
            </p>
          </div>
        </div>

        {/* Right: Derived Features */}
        <div className="space-y-6">
          <div className="bg-black/60 p-6 rounded-sm border border-gold/30">
            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="h-6 w-6 text-gold" />
              <h3 className="text-xl font-semibold text-silver tracking-wide">Derived Features</h3>
            </div>
            <div className="space-y-5">
              <div className="p-5 bg-black/70 rounded-sm border border-silver/20">
                <h4 className="font-semibold text-silver mb-2 text-base tracking-wide">
                  Usage vs. History Ratio
                </h4>
                <p className="text-silver text-sm mb-2">
                  Current month ÷ Historical mean
                </p>
                <p className="text-xs text-silver/80 italic">
                  Detects sudden changes in consumption patterns
                </p>
              </div>

              <div className="p-5 bg-black/70 rounded-sm border border-silver/20">
                <h4 className="font-semibold text-silver mb-2 text-base tracking-wide">
                  Usage vs. Peer Ratio
                </h4>
                <p className="text-silver text-sm mb-2">
                  Consumer use ÷ Peer cluster mean
                </p>
                <p className="text-xs text-silver/80 italic">
                  Identifies outliers within similar consumer groups
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gold/10 rounded-sm border border-gold/30">
            <p className="text-silver font-medium text-sm text-center tracking-wide">
              Creates manipulation-resistant multi-dimensional features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
