const { useState, useEffect, useRef } = window.React;
const { motion, useInView } = window.Motion;

window.Capabilities = function Capabilities() {
    const { FadingVideo } = window;
    const { Image, Movie, Lightbulb } = window.Icons;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const cards = [
        {
            icon: Image,
            tags: ['Natural Context', 'Photo Realism', 'Infinite Settings', 'Eco-Vibe'],
            title: 'AI Scenery',
            description: 'AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.',
        },
        {
            icon: Movie,
            tags: ['Scale Fast', 'Visual Consistency', 'Time Saver', 'Ready to Post'],
            title: 'Batch Production',
            description: 'Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.',
        },
        {
            icon: Lightbulb,
            tags: ['Ray Tracing', 'Physical Shadows', 'Studio Quality', 'Sunlight Sync'],
            title: 'Smart Lighting',
            description: 'Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.',
        },
    ];

    return (
        <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Video de fondo */}
            <FadingVideo
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ width: '100%', height: '100%' }}
            />

            {/* Contenido */}
            <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
                {/* Header */}
                <div className="mb-auto">
                    <motion.p
                        className="text-sm font-body text-white/80 mb-6"
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                        animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        // Capabilities
                    </motion.p>
                    <motion.h2
                        className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]"
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                        animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    >
                        Production
                        <br />
                        evolved
                    </motion.h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col"
                            initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
                            animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 + index * 0.15, ease: 'easeOut' }}
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="liquid-glass w-11 h-11 rounded-[0.75rem] flex items-center justify-center flex-shrink-0">
                                    <card.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                                    {card.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Spacer */}
                            <div className="flex-1" />

                            {/* Bottom */}
                            <div className="mt-6">
                                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                                    {card.title}
                                </h3>
                                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};