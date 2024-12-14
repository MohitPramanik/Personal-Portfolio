import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SplitBox({ children, duration = 0.04, tempBG = false, className }) {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Select spans specifically within this container
    const firstLineSpans = container.querySelectorAll(".first-line span");
    const secondLineSpans = container.querySelectorAll(".second-line span");

    // Create a unique GSAP timeline for this component instance
    const tl = gsap.timeline({ paused: true });

    tl.to(firstLineSpans, {
            y: "-100%",
            stagger: duration,
            opacity: 0,
        }, 0)
        .to(secondLineSpans, {
            y: "-100%",
            stagger: duration,
            opacity: 1,
        }, 0);

    // Save the timeline in a ref to control it on hover
    timelineRef.current = tl;
  }, [duration]);

  const handleMouseEnter = () => {
    timelineRef.current && timelineRef.current.play();
  };

  const handleMouseLeave = () => {
    timelineRef.current && timelineRef.current.reverse();
  };

  return (
    <div
      ref={containerRef}
      className={`h-full w-full py-2 flex items-center justify-center relative split-text-area overflow-hidden ${className} ${
        tempBG && "bg-red-500"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* First line */}
      <p className="flex items-center justify-center h-full first-line">
        {children?.split("").map((item, index) => (
          <span className={`h-full flex items-center ${item === " " && "w-1"}`} key={index}>
            {item}
          </span>
        ))}
      </p>
      {/* Second line */}
      <p className="absolute bg-green-500 h-full w-full flex items-center justify-center translate-y-full second-line">
        {children?.split("").map((item, index) => (
          <span className={`h-full flex items-center opacity-0 ${item === " " && "w-1"}`} key={index}>
            {item}
          </span>
        ))}
      </p>
    </div>
  );
}
