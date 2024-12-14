import html from "../assets/Skills/html.svg";
import css from "../assets/Skills/css.svg";
import js from "../assets/Skills/js.svg";
import jquery from "../assets/Skills/jquery.svg";
import figma from "../assets/Skills/figma.svg";
import git from "../assets/Skills/git.svg";
import java from "../assets/Skills/java.svg";
import mongodb from "../assets/Skills/mongodb.svg";
import mysql from "../assets/Skills/mysql.svg";
import nodejs from "../assets/Skills/nodejs.svg";
import python from "../assets/Skills/python.svg";
import sass from "../assets/Skills/sass.svg";
import tailwindCss from "../assets/Skills/tailwind-css.svg";
import bootstrap from "../assets/Skills/bootstrap.svg";
import reactJs from "../assets/Skills/react.svg";
import cpp from "../assets/Skills/cpp.svg";
import c from "../assets/Skills/c-programming.svg";
import InfiniteSlider from "./InfiniteSlider";
import { stackAnimation } from './StackAnimate';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Skills() {

  stackAnimation("#skills-section", "top", "56px");

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills-section",
        start: "10% bottom",
        end: "bottom bottom",
        scrub: 1
      }
    })

    tl.from("#skills-section h2", {
      scale: 0,
      opacity: 0, 
    })

    .from("#skills-section #logos", {
      opacity: 0, 
      y: "100%", 
    })
  })

  const mySkills = [
    { image: c, text: "c"},
    { image: cpp, text: "c++"},
    { image: html, text: "html"},
    { image: css, text: "css"},
    { image: js, text: "javascript"},
    { image: jquery, text: "jquery"},
    { image: figma, text: "figma"},
    { image: git, text: "git"},
    { image: java, text: "java"},
    { image: mongodb, text: "mongodb"},
    { image: mysql, text: "mysql"},
    { image: nodejs, text: "nodejs"},
    { image: python, text: "python"},
    { image: sass, text: "sass"},
    { image: tailwindCss, text: "tailwind css"},
    { image: bootstrap, text: "bootstrap"},
    { image: reactJs, text: "react js"}
  ]

  return (
    <div id='skills-section' className='bg-gradient-to-br from-blue-700 to-sky-500 text-white py-10 text-center w-full overflow-hidden'>
       <h2 className="text-center text-3xl mitr-font mb-20">Skills That Make It Happen</h2>

      <InfiniteSlider>

        <div className='flex justify-center items-center w-max'>
          {
            mySkills.map((item) => (
              <div key={item.text} className='flex flex-col items-center justify-center gap-2 relative skill-item cursor-pointer md:mx-10 mx-5 z-40'>
                <img src={item.image} alt={item.text} className='h-24' />
                <span className='bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-1 text-sm absolute -top-10 uppercase rounded-md mitr-font italic'>{item.text}</span>
              </div>
            ))
          }
        </div>
      </InfiniteSlider>
    </div>
  )
}
