// ============================================================
// BlurText.jsx — word-by-word blur-in reveal, triggered once the
// text scrolls into view (IntersectionObserver at 10% visible).
// ============================================================

const { useRef: useRefBlur, useState: useStateBlur, useEffect: useEffectBlur } = React;
const { motion: motionBlur } = window.FramerMotion;

function BlurText({ text, className }) {
  const ref = useRefBlur(null);
  const [visible, setVisible] = useStateBlur(false);

  useEffectBlur(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");
  const stepDuration = 0.35;

  return (
    <p
      ref={ref}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", rowGap: "0.1em" }}
    >
      {words.map((word, i) => (
        <motionBlur.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={
            visible
              ? {
                  filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                  opacity: [0, 0.5, 1],
                  y: [50, -5, 0],
                }
              : {}
          }
          transition={{
            duration: stepDuration * 2,
            times: [0, 0.5, 1],
            ease: "easeOut",
            delay: (i * 100) / 1000,
          }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motionBlur.span>
      ))}
    </p>
  );
}

window.BlurText = BlurText;
