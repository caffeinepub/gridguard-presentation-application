import { ArrowRight } from 'lucide-react';

export function Slide6Architecture() {
  const pipelineSteps = [
    'Data Ingestion',
    'Feature Computation',
    'Isolation Forest',
    'Risk Scoring',
    'Explainable Output',
  ];

  return (
    <div className="flex-1 flex flex-col p-12 md:p-16 bg-gradient-to-br from-black via-slate-950 to-black">
      {/* Header */}
      <div className="mb-10 px-6 py-4 bg-black/50 rounded-sm inline-block">
        <h2 className="text-4xl md:text-5xl font-bold text-silver mb-3 tracking-tight">
          Processing Pipeline / System Flow
        </h2>
        <div className="w-20 h-px bg-gold" />
      </div>

      {/* Pipeline Visualization */}
      <div className="mb-10">
        <div className="mb-6 px-4 py-2 bg-black/50 rounded-sm inline-block">
          <h3 className="text-xl font-semibold text-silver tracking-wide">Processing Pipeline</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {pipelineSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="px-5 py-3 bg-black/70 rounded-sm border border-gold/40 min-w-[160px] text-center">
                <p className="font-medium text-silver text-sm tracking-wide">{step}</p>
              </div>
              {index < pipelineSteps.length - 1 && (
                <ArrowRight className="h-5 w-5 text-gold" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Demo Flow */}
      <div className="flex-1">
        <div className="mb-6 px-4 py-2 bg-black/50 rounded-sm inline-block">
          <h3 className="text-xl font-semibold text-silver tracking-wide">System Workflow</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/60 p-6 rounded-sm border border-gold/30">
            <h4 className="text-lg font-semibold text-silver mb-4 tracking-wide">Processing Steps</h4>
            <ul className="space-y-3 text-silver text-sm">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">1.</span>
                <span>Model computes anomalies from consumption data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">2.</span>
                <span>Generates ranked leads by risk score</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">3.</span>
                <span>Visual outputs: scatter plots & thresholds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">4.</span>
                <span>Field officers validate flagged consumers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">5.</span>
                <span>Feedback loop confirms learning accuracy</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/60 p-6 rounded-sm border border-silver/20">
            <h4 className="text-lg font-semibold text-silver mb-4 tracking-wide">Key Components</h4>
            <ul className="space-y-3 text-silver text-sm">
              <li className="flex items-start gap-3">
                <span className="text-gold">▪</span>
                <span>MDMS data integration layer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">▪</span>
                <span>Real-time feature engineering pipeline</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">▪</span>
                <span>Isolation Forest anomaly detection engine</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">▪</span>
                <span>Risk scoring and prioritization module</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">▪</span>
                <span>Dashboard for field team coordination</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 p-5 bg-gold/10 border border-gold/30 rounded-sm">
        <p className="text-base font-medium text-silver text-center tracking-wide">
          End-to-end automated pipeline from data ingestion to actionable insights
        </p>
      </div>
    </div>
  );
}
