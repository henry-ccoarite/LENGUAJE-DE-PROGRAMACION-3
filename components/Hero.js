const { motion } = window.Motion;

window.Hero = function Hero() {
    const { FadingVideo } = window;
    const { BlurText } = window;
    const { ArrowUpRight, Play, Clock, Globe } = window.Icons;

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Video de fondo */}
            <FadingVideo
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
                className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
                style={{ width: '120%', height: '120%' }}
                scale={true}
            />

            {/* Capa de contenido */}
            <div className="relative z-10 flex flex-col h-full">
                <Navbar />

                {/* Contenido principal - centrado */}
                <div className="flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-8">
                    {/* Badge */}
                    <motion.div
                        className="liquid-glass rounded-full flex items-center gap-2 mb-6"
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    >
                        <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full">
                            New
                        </span>
                        <span className="text-sm text-white/90 pr-3 font-body">
                            Maiden Crewed Voyage to Mars Arrives 2026
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <div className="max-w-2xl mx-auto text-center">
                        <BlurText
                            text="Venture Past Our Sky Across the Universe"
                            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]"
                        />
                    </div>

                    {/* Subheading */}
                    <motion.p
                        className="mt-4 text-sm md:text-base text-white max-w-2xl text-center font-body font-light leading-tight"
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                    >
                        Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex items-center gap-6 mt-6"
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
                    >
                        <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 font-body">
                            Start Your Voyage
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                        <button className="flex items-center gap-2 text-white font-body text-sm font-medium">
                            View Liftoff
                            <Play className="w-4 h-4" />
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="flex items-stretch gap-4 mt-8"
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
                    >
                        <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col">
                            <Clock className="w-7 h-7 text-white" />
                            <span className="font-heading italic text-white text-4xl tracking-[-1px] leading-none mt-3">
                                34.5 Min
                            </span>
                            <span className="text-xs text-white font-body font-light mt-2">
                                Average Videos Watch Time
                            </span>
                        </div>
                        <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col">
                            <Globe className="w-7 h-7 text-white" />
                            <span className="font-heading italic text-white text-4xl tracking-[-1px] leading-none mt-3">
                                2.8B+
                            </span>
                            <span className="text-xs text-white font-body font-light mt-2">
                                Users Across the Globe
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Partners */}
                <motion.div
                    className="flex flex-col items-center gap-4 pb-8 px-4"
                    initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                >
                    <div className="liquid-glass rounded-full px-3.5 py-1">
                        <span className="text-xs font-medium text-white font-body">
                            Collaborating with top aerospace pioneers globally
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 font-heading italic text-white text-2xl md:text-3xl tracking-tight">
                        <span>Aeon</span>
                        <span>Vela</span>
                        <span>Apex</span>
                        <span>Orbit</span>
                        <span>Zeno</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};