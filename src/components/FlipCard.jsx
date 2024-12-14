import { useState } from "react";
import cover from "../assets/FlipCard/cover.jpg";

export default function FlipCard({project}) {

    const [flip, setFlip] = useState(false);
    
    return (
        <div className="h-[35rem] w-[25rem] flip-card-area overflow-visible flex justify-center items-center py-12 max-w-[91vw] cursor-grab active:cursor-grabbing">
            <div className={`h-full w-full bg-blue-500 rounded-xl relative transition-all duration-500 flip-card ${flip && "flip-the-card"}`}>

                {/* ----------- card front part ---------- */}
                <div className="h-full w-full bg-green-500 absolute top-0 left-0 rounded-lg overflow-hidden card-front-area flex flex-col">
                    <div className="w-full h-[70%] relative">
                        <img className="w-full h-full object-cover" src={project.image} alt="" />
                        <img className="w-full h-full object-cover absolute top-0 left-0 cover-img" src={cover} />
                    </div>
                    <div className="p-3 bg-cyan-300 flex-grow">
                        <h3 className="font-semibold my-2 text-lg">{project.title}</h3>
                        <p>{project.description.slice(0,60)}...</p>
                        <div className="flex justify-between items-center mt-4 font-medium">
                            <button onClick={() => setFlip(true)}>Read more</button>
                            <a href={project.projectLink} target="_blank">Live Demo</a>
                        </div>
                    </div>
                </div>


                {/* ----------- card back part ---------- */}
                <div className="h-full w-full bg-yellow-500 absolute top-0 left-0 rounded-lg card-back-area px-4 py-6">
                    <h3 className="text-xl mitr-font">{project.title}</h3>
                   <p className="mt-3">{project.description}</p>

                    <div className="flex justify-between items-center m-4">
                        <button className="bg-red-500 px-3 py-2 text-white rounded-md hover:bg-pink-500" onClick={() => setFlip(false)}>Go Back</button>
                        <a href={project.projectLink} target="_blank" className="bg-red-500 px-3 py-2 text-white rounded-md hover:bg-pink-500">Live Demo</a>

                    </div>
                </div>

            </div>
        </div>
    );
}
