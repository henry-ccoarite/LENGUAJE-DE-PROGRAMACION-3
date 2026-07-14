// ============================================================
// FadingVideo.jsx — background video that crossfades in/out on
// loop using requestAnimationFrame (no CSS transitions).
// Tune FADE_MS (fade duration) and FADE_OUT_LEAD (seconds before
// the clip ends when the fade-out starts) below.
// ============================================================

const { useRef, useEffect } = React;

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

function FadingVideo({ src, className, style }) {
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function fadeTo(target, duration) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const startOpacity = parseFloat(video.style.opacity) || 0;
      const startTime = performance.now();

      function step(now) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        const value = startOpacity + (target - startOpacity) * t;
        video.style.opacity = value;
        if (t < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    }

    function handleLoadedData() {
      video.style.opacity = 0;
      video.play().catch(() => {});
      fadeTo(1, FADE_MS);
    }

    function handleTimeUpdate() {
      if (
        !fadingOutRef.current &&
        video.duration &&
        video.duration - video.currentTime <= FADE_OUT_LEAD &&
        video.duration - video.currentTime > 0
      ) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    }

    function handleEnded() {
      video.style.opacity = 0;
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1, FADE_MS);
      }, 100);
    }

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
      src={src}
    />
  );
}

window.FadingVideo = FadingVideo;
