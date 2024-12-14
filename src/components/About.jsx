import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function About() {

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(() => {

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#about-section", 
                start: "top bottom",
                end: "top top",
                scrub: 1
            }
        })

        tl1.from("#about-section h2", {
            color: "pink",
            scale: 2
        }, 0)
          .from("#scroll-content-area div:nth-of-type(1) p:nth-of-type(1)", {
            opacity: 0,
            x: "-50%"
          }, 0.4)
          
          .from("#scroll-content-area div:nth-of-type(1) p:nth-of-type(2), #scroll-content-area div:nth-of-type(1) p:nth-of-type(3)", {
            opacity: 0,
            x: "50%"
          }, 0.4)
          
           

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#about-section",
                start: `top top`,
                end: "300%",
                pin: true,
                scrub: 1,
                // markers: true
            }
        })

        tl2.to("#scroll-content-area div:nth-of-type(1)", {
            y: "-100%",
            opacity: 0,
        }, 0.3)
            .to("#scroll-content-area div:nth-of-type(2)", {
                y: "0",
                opacity: 1
            })
            .to("#scroll-content-area div:nth-of-type(2)", {
                y: "-100%",
                opacity: 0
            })
            .to("#scroll-content-area div:nth-of-type(3", {
                y: "0",
                opacity: 1
            })
    })

    return (
        <div id="about-section" className="py-6 pt-16 sm:px-10 px-5 min-h-screen bg-[#0000ff36] overflow-hidden">
            <h2 className="text-center text-3xl mitr-font my-4 text-[#9c0e3f]">Beyond the Code</h2>

            <div id="scroll-content-area" className="flex relative sm:mt-20 mt-10">


                {/* ---------- Brief intro ------------ */}
                <div>
                    <p className="mb-4 font-semibold text-lg text-[#7d2482]">Hi, I'm Mohit Kumar Pramanik! 👋</p>
                    <p className="mb-2">I am a passionate Full-Stack Developer with a knack for
                    transforming ideas into impactful digital solutions. With a
                    strong foundation in both frontend and backend technologies, I
                    focus on building applications that are not only functional but
                    also visually engaging and user-friendly.</p>
                    <p>My journey in web development started with curiosity and has
                    grown into a profession I deeply enjoy. Over the years, I’ve
                    honed my skills in creating dynamic, responsive, and scalable
                    web applications, with a particular interest in crafting
                    seamless user experiences.</p>
                </div>


                {/* ---------- About my work ------------ */}
                <div className="absolute opacity-0 translate-y-full">
                        <h3 className="mb-4 font-semibold text-lg text-[#7d2482]">What I Do</h3>
                    <p className="mb-2"> I specialize in: </p>
                    <ul className="list-disc ps-4">
                        <li><span className="font-medium">Frontend Development:</span> Crafting intuitive and visually appealing user interfaces using React.js, Tailwind CSS, Bootstrap, and Sass.</li>
                        <li><span className="font-medium">Full-Stack Expertise:</span> Creating seamless end-to-end applications with responsive designs, animations, and efficient functionality.</li> 
                        <li><span className="font-medium">Backend Development:</span> Building robust and secure APIs, handling databases, and implementing authentication using Node.js, Express.js, MongoDB, and MySQL.</li>
                        <li><span className="font-medium">Advanced Skills:</span> REST APIs, GSAP animations, Framer Motion, middleware, and Git version control.</li> 
                    </ul>
                </div>


                {/* ----------- My motivation -------------- */}
                <div className="absolute opacity-0 translate-y-full">
                    <h3 className="mb-4 font-semibold text-lg text-[#7d2482]">What Drives Me</h3>
                    <p> Technology is more than a profession for me—it’s my passion. I
                    thrive on creating meaningful user experiences, exploring new
                    tools and frameworks, and continuously improving my skills. My
                    goal is to build applications that not only meet requirements
                    but also delight users with thoughtful design and seamless
                    functionality. </p>
                </div>
            </div>



        </div>
    );
}
