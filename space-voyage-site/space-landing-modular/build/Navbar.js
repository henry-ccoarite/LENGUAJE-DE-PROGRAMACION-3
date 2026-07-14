"use strict";
// ============================================================
// Navbar.jsx — fixed top nav: logo, center pill links + CTA.
// Edit NAV_LINKS below to change/add/remove menu items.
// ============================================================
const NAV_LINKS = ["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"];
function Navbar() {
    return (React.createElement("div", { className: "fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 flex items-center justify-between" },
        React.createElement("div", { className: "liquid-glass w-12 h-12 rounded-full flex items-center justify-center" },
            React.createElement("span", { className: "font-heading italic text-white text-2xl lowercase" }, "a")),
        React.createElement("div", { className: "hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1.5" },
            NAV_LINKS.map((link) => (React.createElement("a", { key: link, href: "#", className: "px-3 py-2 text-sm font-medium text-white/90 font-body" }, link))),
            React.createElement("a", { href: "#", className: "flex items-center gap-1.5 bg-white text-black rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap ml-1" },
                "Claim a Spot ",
                React.createElement(ArrowUpRight, { className: "h-4 w-4" }))),
        React.createElement("div", { className: "w-12 h-12 invisible" })));
}
window.Navbar = Navbar;
