import { stackAnimation } from './StackAnimate';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Experience() {

    stackAnimation('#experience-section', 'bottom', 'bottom')

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#experience-section",
                start: "10% bottom",
                end: "top top",
                scrub: 1
            }
        });

        tl.from("#experience-section h2", {
            opacity: 0,
            scale: 2, 
            letterSpacing: "1rem",
        })
        .from(".experience", {
            opacity: 0,
            x: "-50%",
            stagger: 0.5,
        })

    })


    const experience = [
        {
            id: 1,
            title: "Asssociate Product Configurator",
            company: "Inadev India Pvt. Ltd.",
            duration: "26 Dec 2024 - Present",
            description: "Developed and configured responsive, client-focused web applications by applying logical conditions, business rules, and structured layouts. || Wrote custom JavaScript code to implement advanced functionalities beyond default platform capabilities, enhancing user experience and product performance. || Collaborated with cross-functional teams to translate complex requirements into scalable, maintainable web solutions with consistent UI and behavior.",
        }, 
        {
            id: 2,
            title: "Frontend Developer Intern",
            company: "Code Nimbus Solutions",
            duration: "1 June 2024 - 30 Nov 2024",
            description: "Developed dynamic and responsive web applications using React.js and JavaScript. || Created reusable components to improve development efficiency and maintainability. || Ensured cross-browser compatibility and responsive design for a seamless user experience across devices. || Collaborated with back-end developers to integrate RESTful APIs into the front-end components. ||  Applied mobile-first development strategies and focused on optimizing performance. ",
        }, 
        {
            id: 3,
            title: "Web Developer Intern",
            company: "Central Coalfields Limited",
            duration: "1 Sept 2023 – 30 Sept 2023 ",
            description: "Created interactive web pages using HTML, CSS and JavaScript. ||  Applied responsive design techniques to ensure compatibility across multiple devices.",
        },
    ]


  return (
        <div id='experience-section' className='p-6 pt-16 min-h-screen bg-sky-300 bg-gradient-to-br from-teal-500 to-[#22bfc5] relative z-[7] overflow-hidden pb-20'>
        <h2 className="text-center text-3xl mitr-font sm:mb-20 mb-10 text-[#054f4a]">Professional Journey</h2>

        <div className='flex gap-6 flex-col relative'>

            {
                experience.map((item, index) => (
                    <div key={item.id} id={`${experience.length - 1 === index ? "last-experience" : ""}`} className='experience flex gap-4 items-start'>
                        <div className='h-8 w-8 rounded-full flex-shrink-0 bg z-[2] relative bg-white overflow-hidden'>
                            <div className='bg-gradient-to-r from-blue-500 to-sky-500 h-full w-full flex justify-center items-center text-white font-bold'> {index + 1} </div>
                                </div>
                        <div>
                            <h3 className='font-semibold text-xl text-[#0c445e] mb-2'>{item.title}</h3>
                            <p className='font-medium'>{item.company}</p>
                            <p className='italic mb-2'>Duration: {item.duration}</p>
                            <ul className='sm:ps-6'>
                                {item.description.split("||").map((item, index) => (
                                    <li key={index} className='list-disc'>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            }

        </div>
        </div>
  )
}
