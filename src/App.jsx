import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function App() {

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {

        const tl = gsap.timeline({
            onComplete: () => tl2.play()
        });
        
        // Preloader animation
        tl.from("#preloader h1 span", {
            y: "-100vh",
            stagger: 0.4,
            duration: 1,
            ease: "elastic.inOut"
        })
         .to("#preloader h1 span", {
            color: "red",
         })
        .to("#preloader h1", {
             fontWeight: 600,
            scale: 4,
            opacity: 0
         })
         .to("#preloader", {
            opacity: 0,
            duration: 0.4,
         })
         .to("#preloader", {
            display: "none",
         })


        //  header animation
         .fromTo("#header-logo", {
             rotateX: 90
         }, {
             rotateX: "0",
             duration: 1,
             delay: 1
         })
          .fromTo("header ul li", {
             y: "-200%",
          }, {
             y: "0%",
             stagger: 0.2,
          })

        //   hero section animation
         const tl2 = gsap.timeline({ 
            defaults: {
              opacity: 0
            }
        });
        
            tl2.fromTo("#my-image", { y: "25%" }, {opacity: 1, y: "0"})
              .fromTo("#my-image img", { scale: 0, opacity: 1}, {scale: 1, opacity: 1, duration: 0.4})
              .fromTo("#hero-section h1", { x: "-50%"}, {opacity: 1, x: "0"})
              .fromTo("#hero-section button", { x: "50%" }, { opacity: 1, x: 0 })
        
              tl2.pause();
    })

    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>
    );
}
