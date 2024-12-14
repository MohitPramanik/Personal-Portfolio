import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const stackAnimation = (elem, elemStart="top", screenStart="56px", mark=false) =>  {
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: elem,
            start: `${elemStart} ${screenStart}`,
            end: "max",
            pin: true,
            scrub: true,
            pinSpacing: false,
            markers: mark
        })
    })
}

