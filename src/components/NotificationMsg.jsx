import gsap from "gsap";
import { useEffect } from "react";

export default function NotificationMsg({status=false}) {

    useEffect(() => {
        const tl = gsap.timeline();

        tl
            .fromTo("#notification", {
                opacity: 0,
                x: "100%",
            },{
                opacity: 1,
                x: "0%",
                duration: 0.5,
            })
            .fromTo("#timing-line", {
                width: "0%",
            }, {
                width: "100%",
                duration: 3
            })
            .to("#notification", {
                opacity: 0,
                x: "100%",
                duration: 0.5,
            })


    }, [status])

  return (
    <div id="notification" className="h-16 w-[25rem] mx-auto bg-white flex text-lg flex-col border-2 border-sky-400 opacity-1">
        <div className="flex-grow flex items-center px-5">
            <span>
                {status ? <i className="fa-solid fa-circle-check text-green-600"></i> : <i className="fa-solid fa-circle-exclamation text-red-500"></i>}
            </span>
            <span className="ml-2 ps-1">
                {status ? "Message successfully sent." : "Error sending message"}    
            </span>    
        </div>
        <div id="timing-line" className={`w-full h-2 ${status ? "bg-green-600" : "bg-red-500"}`}></div>    
    </div>

// "Message successfully sent."
// : ""}
  )
}
