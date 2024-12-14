import Slider from './Slider'
import FlipCard from './FlipCard'
import { stackAnimation } from './StackAnimate'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger';
import calculator from "../assets/Projects/Calculator.jpg";
import dspmu from "../assets/Projects/Dspmu.png";
import ekalyan from "../assets/Projects/E-kalyan.png";
import randomJokes from "../assets/Projects/Random-joke-generator.png";
import ticTacToe from "../assets/Projects/Tic-tac-toe-Game.png";
import todoList from "../assets/Projects/To-do-list-app.jpg";
import textify from "../assets/Projects/textify.png";

export default function Projects() {

  stackAnimation("#projects-section");

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects-section",
        start: "top bottom",
        end: "top top",
        scrub: 1,
      }
    })

    tl.from("#projects-section h2", {
      opacity: 0, 
      letterSpacing: "1rem",
    })
      .from("#projects-section .swiper", {
        opacity: 0,
        y: "25%"
      })

  })

  const projectData = [
    { 
      id: 1, 
      title: "Textify", 
      description: "An innovative text modification app crafted using React.js and Bootstrap. Transform and format your text with ease, and export it as text or PDF for added convenience.", 
      projectLink: "https://66af8bf0a7f4c7a03b1e2126--cerulean-hamster-8f0d4d.netlify.app/",
      image: textify
    },
    { 
      id: 2, 
      title: "DSPMU Clone", 
      description: "An engaging front-end clone of the DSPMU website, designed using HTML, CSS, and JavaScript. While focusing on the visual and functional aspects, I implemented many of the original features to bring it to life.", 
      projectLink: "https://mohitpramanik.github.io/DSPMU-wesbsite-clone/HTML/",
      image: dspmu
    },
    { 
      id: 3, 
      title: "E-Kalyan Clone", 
      description: "A stunning front-end clone of the E-Kalyan website, developed with HTML, CSS, and JavaScript. It replicates most features of the original site, showcasing attention to detail and design.", 
      projectLink: "https://mohitpramanik.github.io/E-kalyan-website-clone/HTML/index.html",
      image: ekalyan
    },
    { 
      id: 4, 
      title: "To-Do List", 
      description: "A feature-rich task management app built with React.js and Tailwind CSS. Add, organize, and remove tasks effortlessly, with an intuitive interface that makes staying productive a breeze.", 
      projectLink: "https://mohitpramanik.github.io/To-do-list-App/",
      image: todoList
    }, 
    { 
      id: 5, 
      title: "Tic-Tac-Toe Game", 
      description: "A modern twist on the classic game, created with HTML, CSS, and JavaScript. This responsive version ensures endless fun while keeping gameplay intuitive and engaging.", 
      projectLink: "https://mohitpramanik.github.io/Tic-tac-toe-game-website/",
      image: ticTacToe
    },
    { 
      id: 6, 
      title: "Calculator", 
      description: "A sleek and fully responsive calculator built with HTML, CSS, and JavaScript. It delivers real-time results with precision, ensuring a smooth user experience. Every functionality is crafted to perfection.", 
      projectLink: "https://mohitpramanik.github.io/Calculator/", 
      image: calculator
    },
    { 
      id: 7, 
      title: "Random Joke Generator", 
      description: "A fun and lighthearted project using HTML, CSS, and JavaScript. This app delivers random jokes to brighten your day, one chuckle at a time.", 
      projectLink: "https://mohitpramanik.github.io/Random-joke-generator/",
      image: randomJokes
    },
  ];
  
  return (
    <div id="projects-section-wrapper" className='h-[105%] overflow-hidden'>

    <div id='projects-section' className='py-6 bg-gradient-to-b from-indigo-700 to-blue-500 z-[6] relative'>
      <h2 className="text-center text-3xl mitr-font mt-6 text-[#0afff5]">Turning Ideas into Reality</h2>

      <Slider>
        {
          projectData.map((item) => (
            <FlipCard key={item.id} project={item} />
          ))
        }
      </Slider>
    </div>
    </div>

  )
}
