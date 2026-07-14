// ============================================================
// Hero.jsx — Section 1: full-viewport hero with background video,
// navbar, headline, subheading, CTAs, stats and partner strip.
// Change HERO_VIDEO below to swap the background clip.
// ============================================================

const { motion: motionHero } = window.FramerMotion;

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";

const HERO_FADE_UP = {
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
};

function StatCard({ icon, value, label }) {
  return (
    <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col">
      <div className="text-white">{icon}</div>
      <div className="mt-auto pt-4">
        <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">{value}</div>
        <div className="text-xs text-white font-body font-light mt-2">{label}</div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col">
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />

      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />

        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4">
          <motionHero.div
            initial={HERO_FADE_UP.initial}
            animate={HERO_FADE_UP.animate}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="liquid-glass rounded-full flex items-center pl-1 pr-3 py-1 mb-6"
          >
            <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full">New</span>
            <span className="text-sm text-white/90 pl-3 font-body">Maiden Crewed Voyage to Mars Arrives 2026</span>
          </motionHero.div>

          <BlurText
            text="Lenguaje De Programación III"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl tracking-[-4px] text-center"
          />

          <motionHero.p
            initial={HERO_FADE_UP.initial}
            animate={HERO_FADE_UP.animate}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight text-center"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering
            bring deep-space exploration within reach—secure and extraordinary.
          </motionHero.p>

          <motionHero.div
            initial={HERO_FADE_UP.initial}
            animate={HERO_FADE_UP.animate}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
            className="flex items-center gap-6 mt-6"
          >
            <a href="#" className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2">
              Start Your Voyage <ArrowUpRight className="h-5 w-5" />
            </a>
            <a href="#" className="text-white text-sm font-medium font-body flex items-center gap-2">
              View Liftoff <PlayIcon className="h-4 w-4" />
            </a>
          </motionHero.div>

          <motionHero.div
            initial={HERO_FADE_UP.initial}
            animate={HERO_FADE_UP.animate}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
            className="flex items-stretch gap-4 mt-8"
          >
            <StatCard icon={<ClockIcon className="w-7 h-7" />} value="34.5 Min" label="Average Videos Watch Time" />
            <StatCard icon={<GlobeIcon className="w-7 h-7" />} value="2.8B+" label="Users Across the Globe" />
          </motionHero.div>
        </div>

        <motionHero.div
          initial={HERO_FADE_UP.initial}
          animate={HERO_FADE_UP.animate}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="flex gap-12 md:gap-16">
            {["Aeon", "Vela", "Apex", "Orbit", "Zeno"].map((name) => (
              <span key={name} className="font-heading italic text-white text-2xl md:text-3xl tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </motionHero.div>
      </div>
    </section>
  );
}

window.Hero = Hero;
