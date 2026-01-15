import { Cpu, GitBranch, Lightbulb, FileText, TrendingUp, Users, Target } from 'lucide-react';

export function Slide4AI() {
  return (
    <div className="flex-1 flex flex-col p-12 md:p-16 bg-gradient-to-br from-black via-slate-950 to-black">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-silver mb-3 tracking-tight">
          Use of AI & Adaptive Learning
        </h2>
        <div className="w-20 h-px bg-gold" />
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* AI Features */}
        <div className="space-y-4">
          <div className="bg-black/40 p-5 rounded-sm border border-silver/20">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gold/10 rounded-sm">
                <Cpu className="h-5 w-5 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-silver mb-2 tracking-wide">
                  Adaptive Learning
                </h3>
                <p className="text-silver/70 text-sm leading-relaxed">
                  Replaces fixed rules with adaptive, learning-based anomaly detection.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 p-5 rounded-sm border border-silver/20">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gold/10 rounded-sm">
                <GitBranch className="h-5 w-5 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-silver mb-2 tracking-wide">
                  Isolation Forest Algorithm
                </h3>
                <p className="text-silver/70 text-sm leading-relaxed">
                  Uses Isolation Forest to "isolate" irregular consumers from normal grid behavior.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 p-5 rounded-sm border border-silver/20">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gold/10 rounded-sm">
                <Lightbulb className="h-5 w-5 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-silver mb-2 tracking-wide">
                  Autonomous Learning
                </h3>
                <p className="text-silver/70 text-sm leading-relaxed">
                  Learns the natural distribution of grid consumption autonomously.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 p-5 rounded-sm border border-silver/20">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gold/10 rounded-sm">
                <FileText className="h-5 w-5 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-silver mb-2 tracking-wide">
                  Interpretable Outputs
                </h3>
                <p className="text-silver/70 text-sm leading-relaxed">
                  Provides interpretable outputs — every anomaly includes the key cause.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Adaptive Learning & Integration */}
        <div className="space-y-4">
          <div className="bg-black/60 p-6 rounded-sm border-l-2 border-gold">
            <div className="flex items-start gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-gold flex-shrink-0" />
              <h3 className="text-lg font-semibold text-silver tracking-wide">
                Continuous Improvement
              </h3>
            </div>
            <ul className="space-y-2 text-silver/70 text-sm leading-relaxed">
              <li>• GridGuard uses adaptive learning; performance improves as data grows</li>
              <li>• 1–2% detection improvement can save the state crores in recovered revenue</li>
              <li>• AI integrates external signals: weather patterns, seasonal consumption changes, regional factors</li>
            </ul>
          </div>

          <div className="bg-black/60 p-6 rounded-sm border-l-2 border-gold">
            <div className="flex items-start gap-3 mb-4">
              <Users className="h-6 w-6 text-gold flex-shrink-0" />
              <h3 className="text-lg font-semibold text-silver tracking-wide">
                Operational Efficiency
              </h3>
            </div>
            <ul className="space-y-2 text-silver/70 text-sm leading-relaxed">
              <li>• DISCOMs have limited inspection staff</li>
              <li>• Traditional random inspections are inefficient</li>
              <li>• GridGuard ranks consumers by risk score</li>
              <li>• Field teams inspect top 50 most suspicious consumers for maximum efficiency and cost reduction</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Highlight */}
      <div className="p-5 bg-gold/5 border border-gold/30 rounded-sm flex items-center justify-center gap-3">
        <Target className="h-5 w-5 text-gold" />
        <p className="text-base font-medium text-silver/90 tracking-wide">
          Smart prioritization maximizes field team effectiveness and revenue recovery
        </p>
      </div>
    </div>
  );
}
