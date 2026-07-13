const { motion } = window.Motion;

window.Navbar = function Navbar() {
    return ( <
        motion.nav className = "fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16"
        initial = {
            { y: -20, opacity: 0 }
        }
        animate = {
            { y: 0, opacity: 1 }
        }
        transition = {
            { duration: 0.6, ease: 'easeOut' }
        } >
        <
        div className = "flex items-center justify-between" >
        <
        div className = "liquid-glass w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" >
        <
        span className = "font-heading italic text-white text-2xl" > a < /span> < /
        div >

        <
        div className = "hidden lg:flex items-center liquid-glass rounded-full px-1.5 py-1.5 gap-0.5" > {
            ['Home', 'Voyages', 'Worlds', 'Innovation', 'Plan Launch'].map((item) => ( <
                a key = { item }
                href = "#"
                className = "px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors whitespace-nowrap" > { item } <
                /a>
            ))
        } <
        button className = "flex items-center gap-1.5 bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body whitespace-nowrap ml-1" >
        Claim a Spot <
        svg className = "w-4 h-4"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        strokeWidth = "2.5"
        strokeLinecap = "round"
        strokeLinejoin = "round" >
        <
        path d = "M7 17L17 7" / >
        <
        path d = "M7 7h10v10" / >
        <
        /svg> < /
        button > <
        /div>

        <
        div className = "w-12 h-12 flex-shrink-0 invisible" / >
        <
        /div> < /
        motion.nav >
    );
};