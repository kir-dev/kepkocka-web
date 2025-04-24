"use client"

import {ReactNode, useEffect, useRef, useState} from "react";

/*height = 200 is a good starting value*/
export default function ParallaxBlock({children, bgSrc, floatRight}: {children: ReactNode, bgSrc: string, floatRight?: boolean}) {
    const ref = useRef<HTMLDivElement>(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const visibleProgress = 1 - rect.top / windowHeight;

            const parallaxSpeed = 250;

            const clamped = Math.max(0, visibleProgress);

            setOffsetY((clamped * parallaxSpeed) - rect.height / 2);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // run once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(
        <div ref={ref} className="relative">
            <img
                className={`absolute z-[-5] min-h-[100vh] min-w-screen max-w-screen object-cover ${ floatRight ? "right-0" : "" }`}
                style={{
                    transform: `translateY(${offsetY}px)`,
                }}
                src={bgSrc}
                alt={"hatter"}
            >
            </img>
            {children}
        </div>
    )
}