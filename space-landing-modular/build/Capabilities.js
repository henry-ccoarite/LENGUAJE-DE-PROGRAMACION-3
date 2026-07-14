"use strict";
// ============================================================
// Capabilities.jsx — Section 2: background video, heading, and
// the 3 feature cards. Edit CARD_DATA below to change copy/tags.
// Change CAPABILITIES_VIDEO to swap the background clip.
// ============================================================
const CAPABILITIES_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4";
const CARD_DATA = [
    {
        icon: "image",
        tags: ["Natural Context", "Photo Realism", "Infinite Settings", "Eco-Vibe"],
        title: "AI Scenery",
        body: "AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.",
    },
    {
        icon: "movie",
        tags: ["Scale Fast", "Visual Consistency", "Time Saver", "Ready to Post"],
        title: "Batch Production",
        body: "Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.",
    },
    {
        icon: "lightbulb",
        tags: ["Ray Tracing", "Physical Shadows", "Studio Quality", "Sunlight Sync"],
        title: "Smart Lighting",
        body: "Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.",
    },
];
const CARD_ICONS = {
    image: ImageIcon,
    movie: MovieIcon,
    lightbulb: LightbulbIcon,
};
function CapabilityCard({ icon, tags, title, body }) {
    const Icon = CARD_ICONS[icon];
    return (React.createElement("div", { className: "liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col" },
        React.createElement("div", { className: "flex items-start justify-between gap-4" },
            React.createElement("div", { className: "liquid-glass w-11 h-11 rounded-[0.75rem] flex items-center justify-center shrink-0" },
                React.createElement(Icon, null)),
            React.createElement("div", { className: "flex flex-wrap justify-end gap-1.5 max-w-[70%]" }, tags.map((tag) => (React.createElement("span", { key: tag, className: "liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap" }, tag))))),
        React.createElement("div", { className: "flex-1" }),
        React.createElement("div", { className: "mt-6" },
            React.createElement("h3", { className: "font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none" }, title),
            React.createElement("p", { className: "mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]" }, body))));
}
function Capabilities() {
    return (React.createElement("section", { className: "relative min-h-screen w-full overflow-hidden bg-black" },
        React.createElement(FadingVideo, { src: CAPABILITIES_VIDEO, className: "absolute inset-0 w-full h-full object-cover z-0" }),
        React.createElement("div", { className: "relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen" },
            React.createElement("div", { className: "mb-auto" },
                React.createElement("div", { className: "text-sm font-body text-white/80 mb-6" }, "// Capabilities"),
                React.createElement("h2", { className: "font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]" },
                    "Production",
                    React.createElement("br", null),
                    "evolved")),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-16" }, CARD_DATA.map((card) => (React.createElement(CapabilityCard, Object.assign({ key: card.title }, card))))))));
}
window.Capabilities = Capabilities;
