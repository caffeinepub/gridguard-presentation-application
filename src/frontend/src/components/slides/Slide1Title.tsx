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
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-silver via-gold to-silver bg-clip-text text-transparent">
            GridGuard
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-light text-silver mb-4 tracking-wide">
          Intelligent Detection of Power Theft & Meter Anomalies using Explainable AI
        </p>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-silver/70 mb-12 tracking-wide">
          Reducing AT&C Losses through Unsupervised Machine Learning
        </p>

        {/* Divider */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12" />

        {/* Team Info */}
        <div className="space-y-3 text-base text-silver/80 tracking-wide">
          <p className="font-semibold text-gold">Team: Daevis</p>
          <p>Member: Daevis.W</p>
        </div>

        {/* Hackathon Badge */}
        <div className="mt-12 inline-block px-8 py-4 bg-black/50 border border-gold/50 rounded-sm">
          <p className="text-lg font-semibold text-gold tracking-wider">TechSprint Manipur 1.0</p>
        </div>
      </div>
    </div>
  );
}
