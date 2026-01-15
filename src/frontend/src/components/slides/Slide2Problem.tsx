import { AlertTriangle, TrendingDown, Clock, Shield, Target } from 'lucide-react';

export function Slide2Problem() {
  return (
    <div className="flex-1 flex flex-col p-12 md:p-16 bg-gradient-to-br from-black via-slate-950 to-black">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-silver mb-3 tracking-tight">
          Problem Statement
        </h2>
        <div className="w-20 h-px bg-gold" />
      </div>

      {/* Main Problems */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-black/40 p-6 rounded-sm border border-silver/20 hover:border-gold/40 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gold/10 rounded-sm">
              <AlertTriangle className="h-6 w-6 text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-silver mb-2 tracking-wide">
                Non-Technical Losses
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Electricity theft and meter tampering cause major DISCOM inefficiencies and revenue losses.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black/40 p-6 rounded-sm border border-silver/20 hover:border-gold/40 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gold/10 rounded-sm">
              <Clock className="h-6 w-6 text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-silver mb-2 tracking-wide">
                Slow Manual Auditing
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Manual auditing and static rule-based detection are time-consuming and ineffective.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black/40 p-6 rounded-sm border border-silver/20 hover:border-gold/40 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gold/10 rounded-sm">
              <TrendingDown className="h-6 w-6 text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-silver mb-2 tracking-wide">
                Adaptive Theft Tactics
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Thieves adapt consumption patterns to stay below static alert thresholds.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black/40 p-6 rounded-sm border border-silver/20 hover:border-gold/40 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gold/10 rounded-sm">
              <Shield className="h-6 w-6 text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-silver mb-2 tracking-wide">
                Hidden Fraud
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Result: persistent AT&C losses, hidden fraud, and continuous revenue leakage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Context */}
      <div className="bg-black/60 p-6 rounded-sm border-l-2 border-gold">
        <div className="flex items-start gap-4">
          <Target className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-silver mb-3 tracking-wide">
              Why Static Systems Fail
            </h3>
            <ul className="space-y-2 text-silver/70 text-sm leading-relaxed">
              <li>• Current electricity theft detection relies on simple threshold-based filters</li>
              <li>• These filters are predictable and easily bypassed by experienced thieves</li>
              <li>• Thieves manipulate consumption just above thresholds to evade detection</li>
              <li>• As a result, static systems fail to identify sophisticated theft patterns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Highlight */}
      <div className="mt-6 p-5 bg-gold/5 border border-gold/30 rounded-sm">
        <p className="text-base font-medium text-silver/90 text-center tracking-wide">
          Current detection methods are reactive, not proactive — leading to sustained financial losses.
        </p>
      </div>
    </div>
  );
}
