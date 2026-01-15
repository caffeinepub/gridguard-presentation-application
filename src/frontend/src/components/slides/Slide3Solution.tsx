import { Brain, Target, ListChecks, Eye, Database, Zap } from 'lucide-react';

export function Slide3Solution() {
  return (
    <div className="flex-1 flex flex-col p-12 md:p-16 bg-gradient-to-br from-black via-slate-950 to-black">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-silver mb-3 tracking-tight">
          Proposed Solution
        </h2>
        <div className="w-20 h-px bg-gold" />
      </div>

      {/* Solution Overview */}
      <div className="mb-8 p-6 bg-gradient-to-r from-gold/10 to-silver/10 rounded-sm border border-gold/30">
        <p className="text-xl font-medium text-silver text-center tracking-wide">
          GridGuard leverages machine learning to proactively identify anomalies and prioritize investigations
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-black/40 p-6 rounded-sm border border-silver/20 hover:border-gold/40 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gold/10 rounded-sm">
              <Brain className="h-6 w-6 text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-silver mb-2 tracking-wide">
                Unsupervised AI Detection
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Uses unsupervised AI to detect consumption anomalies without labeled data.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black/40 p-6 rounded-sm border border-silver/20 hover:border-gold/40 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gold/10 rounded-sm">
              <Target className="h-6 w-6 text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-silver mb-2 tracking-wide">
                Risk-Based Prioritization
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Employs a risk-based prioritization to flag the most suspicious consumers.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black/40 p-6 rounded-sm border border-silver/20 hover:border-gold/40 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gold/10 rounded-sm">
              <ListChecks className="h-6 w-6 text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-silver mb-2 tracking-wide">
                High-Risk Lead List
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Generates a "High-Risk Lead List" for optimized field inspections.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black/40 p-6 rounded-sm border border-silver/20 hover:border-gold/40 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gold/10 rounded-sm">
              <Eye className="h-6 w-6 text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-silver mb-2 tracking-wide">
                Explainable AI
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Integrates Explainable AI for transparency in decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure Reuse Section */}
      <div className="bg-black/60 p-6 rounded-sm border-l-2 border-gold">
        <div className="flex items-start gap-4">
          <Database className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-silver mb-3 tracking-wide">
              Leveraging Existing Infrastructure
            </h3>
            <ul className="space-y-2 text-silver/70 text-sm leading-relaxed">
              <li>• Indian DISCOMs already collect large volumes of smart meter data stored in MDMS (Meter Data Management Systems)</li>
              <li>• Currently, this data is mainly used for billing purposes</li>
              <li>• GridGuard reuses existing data and systems—no new hardware required</li>
              <li>• Intelligent analysis enables targeted theft detection in high-risk areas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Highlight */}
      <div className="mt-6 p-5 bg-gold/5 border border-gold/30 rounded-sm flex items-center justify-center gap-3">
        <Zap className="h-5 w-5 text-gold" />
        <p className="text-base font-medium text-silver/90 tracking-wide">
          Cost-efficient solution maximizing existing infrastructure investments
        </p>
      </div>
    </div>
  );
}
