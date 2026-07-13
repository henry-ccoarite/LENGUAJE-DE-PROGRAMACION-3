const { useState, useEffect, useRef, useCallback } = window.React;

const FADING_VIDEO_FADE_MS = 500;
const FADING_VIDEO_FADE_OUT_LEAD = 0.55;

window.FadingVideo = function FadingVideo({ src, className, style, scale = false }) {
    const videoRef = useRef(null);
    const rafRef = useRef(null);
    const fadingOutRef = useRef(false);
    const currentOpacityRef = useRef(0);

    const fadeTo = useCallback((target, duration) => {
        const video = videoRef.current;
        if (!video) return;

        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }

        const startOpacity = currentOpacityRef.current;
        const startTime = performance.now();

        const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = startOpacity + (target - startOpacity) * eased;

            video.style.opacity = current;
            currentOpacityRef.current = current;

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            } else {
                video.style.opacity = target;
                currentOpacityRef.current = target;
                rafRef.current = null;
            }
        };

        rafRef.current = requestAnimationFrame(animate);
    }, []);

    const handleLoadedData = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;

        video.style.opacity = 0;
        currentOpacityRef.current = 0;
        video.play();
        fadeTo(1, FADING_VIDEO_FADE_MS);
    }, [fadeTo]);

    const handleTimeUpdate = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;

        const remaining = video.duration - video.currentTime;
        if (
            !fadingOutRef.current &&
            remaining <= FADING_VIDEO_FADE_OUT_LEAD &&
            remaining > 0
        ) {
            fadingOutRef.current = true;
            fadeTo(0, FADING_VIDEO_FADE_MS);
        }
    }, [fadeTo]);

    const handleEnded = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;

        video.style.opacity = 0;
        currentOpacityRef.current = 0;

        setTimeout(() => {
            if (video) {
                video.currentTime = 0;
                video.play();
                fadingOutRef.current = false;
                fadeTo(1, FADING_VIDEO_FADE_MS);
            }
        }, 100);
    }, [fadeTo]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('ended', handleEnded);

        return () => {
            video.removeEventListener('loadeddata', handleLoadedData);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('ended', handleEnded);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        };
    }, [handleLoadedData, handleTimeUpdate, handleEnded]);

    const videoStyles = {
        ...style,
        opacity: 0,
    };

    if (scale) {
        videoStyles.width = '120%';
        videoStyles.height = '120%';
    }

    return (
        <video
            ref={videoRef}
            src={src}
            autoPlay
            muted
            playsInline
            preload="auto"
            loop={false}
            className={className}
            style={videoStyles}
        />
    );
};