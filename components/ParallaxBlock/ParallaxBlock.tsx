"use client"

import {ReactNode, useEffect, useRef, useState} from "react";

/*height = 200 is a good starting value*/
export default function ParallaxBlock({children, bgSrc}: {children: ReactNode, bgSrc: string, }) {
    const ref = useRef<HTMLDivElement>(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // The amount the element has entered the viewport (0 when off-screen, 1 when centered)
            const visibleProgress = 1 - rect.top / windowHeight;

            // Adjust how strong the parallax effect is
            const parallaxSpeed = 100;

            // Clamp the movement so it doesn’t get weird
            const clamped = Math.max(0, visibleProgress);

            setOffsetY(clamped * parallaxSpeed);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // run once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(
        <div ref={ref} className="relative">
            <img
                className="absolute z-[-5] w-full"
                style={{
                    transform: `translateY(${-offsetY}px)`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                }}
                src={bgSrc}
                alt={"hatter"}
            >
            </img>
            {children}
        </div>
    )
}