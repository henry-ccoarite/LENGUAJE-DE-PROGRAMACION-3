const { useState, useEffect, useRef } = window.React;
const { motion } = window.Motion;

window.BlurText = function BlurText({ text, className = '', delay = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            }, { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect();
        };
    }, []);

    const words = text.split(' ');

    return ( <
        p ref = { ref }
        className = { `flex flex-wrap justify-center gap-x-[0.28em] gap-y-[0.1em] ${className}` } > {
            words.map((word, i) => ( <
                motion.span key = { i }
                className = "inline-block"
                initial = {
                    { filter: 'blur(10px)', opacity: 0, y: 50 }
                }
                animate = {
                    isVisible ? {
                        filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                        opacity: [0, 0.5, 1],
                        y: [50, -5, 0],
                    } : {}
                }
                transition = {
                    {
                        duration: 0.7,
                        times: [0, 0.5, 1],
                        ease: [0.33, 1, 0.68, 1],
                        delay: delay + (i * 100) / 1000,
                    }
                } > { word } <
                /motion.span>
            ))
        } <
        /p>
    );
};