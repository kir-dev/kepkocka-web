"use client"

import {ReactNode, useEffect, useRef, useState} from "react";

/*height = 200 is a good starting value*/
export default function ParallaxBlock({children, bgSrc, height}: {children: ReactNode, bgSrc: string, height: number}) {

    const [isInView, setIsInView] = useState(false)
    const [bgPos, setBgPos] = useState(0)
    const imageRef = useRef(null)


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    } else {
                        setIsInView(false);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if(!isInView) return;
        const handleScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scroll = window.scrollY;
            const maxMovement = (window.innerHeight - height);
            const movement = -(scroll / maxScroll) * maxMovement;
            setBgPos(movement);
            };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }, [isInView]);

    return(
        <div ref={imageRef} className="relative h-[500px] text-white text-justify p-14">
            <img className="absolute left-0 right-0 z-[-5]" src={bgSrc} alt="Háttér" style={{top: bgPos, transition: `top 0.3s ease-out`}} />
            {children}
        </div>
    )
}