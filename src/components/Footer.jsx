import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger"; 

export default function Footer() {

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "footer",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1
            } 
        })

        tl.from("footer h3", {
            opacity: 0,
            y: "-100%", 
            delay: 5, 
        })
         .from("footer a", {
            scale: 0,
            stagger: 1
         })
         .from("footer hr", {
            scale: 0,
         })
         .from("footer p", {
            opacity: 0,
            y: "100%"
         })
    })

    return (
        <footer  className="text-center bg-slate-900 text-white font-light p-6 z-[10] relative overflow-hidden">
            <h3 className="font-semibold text-xl">Connect with me: </h3>
            <div className="text-xl flex gap-5 justify-center items-center mt-2 mb-4">
                <a href="https://www.instagram.com/mohitpramanik_/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/mohitkumarpramanik/" target="_blank"><i className="fa-brands fa-linkedin"></i> </a>
                <a href="https://github.com/MohitPramanik" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="mailto:mohitpramanik548@gmail.com"><i className="fa-solid fa-envelope"></i></a>
            </div>

            <hr />
            <p className="text-sm mt-2">© 2024 MohitPramanik. All rights reserved.</p>
        </footer>
    );
}
