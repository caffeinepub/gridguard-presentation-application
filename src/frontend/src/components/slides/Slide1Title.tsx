export function Slide1Title() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-12 md:p-16 text-center relative overflow-hidden bg-gradient-to-br from-black via-slate-950 to-black">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(192, 192, 192, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 192, 192, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-5xl">
        {/* Project Name */}
        <div className="mb-6 px-8 py-4 bg-black/60 rounded-sm">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-silver via-gold to-silver bg-clip-text text-transparent">
              GridGuard
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="mb-4 px-6 py-3 bg-black/50 rounded-sm">
          <p className="text-xl md:text-2xl font-light text-silver tracking-wide">
            Intelligent Detection of Power Theft & Meter Anomalies using Explainable AI
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-12 px-6 py-3 bg-black/40 rounded-sm">
          <p className="text-lg md:text-xl text-silver tracking-wide">
            Reducing AT&C Losses through Unsupervised Machine Learning
          </p>
        </div>

        {/* Divider */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12" />

        {/* Team Info */}
        <div className="space-y-3 text-base px-6 py-4 bg-black/50 rounded-sm inline-block">
          <p className="font-semibold text-gold tracking-wide">Team: Daevis</p>
          <p className="text-silver tracking-wide">Member: Daevis.W</p>
        </div>

        {/* Hackathon Badge */}
        <div className="mt-12 inline-block px-8 py-4 bg-black/60 border border-gold/50 rounded-sm">
          <p className="text-lg font-semibold text-gold tracking-wider">TechSprint Manipur 1.0</p>
        </div>
      </div>
    </div>
  );
}
