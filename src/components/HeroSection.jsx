import SplitBox from './SplitBox';
import mohit from "../assets/HeroSection/mohit.jpeg";
import resume from "../assets/HeroSection/resume.pdf";

export default function HeroSection() {

  const handleDownloadResume = () => {
    const fileUrl = resume; // Replace with your file URL
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Mohit Kumar Pramanik.pdf"; // Name of the downloaded file
    link.click();
  }

  const handleHireBtn = () => {
    let contactSection = document.querySelector("#contact-section");

    contactSection.scrollIntoView();
  }

  return (
    <div id='hero-section' className='min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 p-5 flex lg:flex-row flex-col-reverse justify-center gap-5 overflow-hidden'>
        
        {/* ------------- left area ------------ */}
        
        <div className='text-white flex items-center flex-col justify-center text-center lg:w-1/2 '>
            <h1 className='rye-font tracking-wider uppercase sm:text-4xl text-2xl gradient-text'>HELLO THERE, <br /> I AM A FULL STACK DEVELOPER</h1>

            <div className='flex gap-4 my-7'>
              
              <button id='resume-btn' className='border-2 rounded-full w-36 hover:bg-gradient-to-r from-[#00daff] to-[#ff00fb] hover:text-white text-[#2dc4fe] hover:border-[#0c0b1fc9] transition-all duration-300 flex gap-2 justify-center items-center border-[#2dc4fe]'
              onClick={handleDownloadResume}
              >
                  <SplitBox className="ms-4">Resume</SplitBox>
                  <i className="fa-solid fa-download fa-beat-fade me-4"></i>
              </button>
              
              <button id='hire-btn' className='border-2 px-4 rounded-full w-36 hover:bg-gradient-to-r from-[#00daff] to-[#ff00fb] hover:text-white text-[#2dc4fe] hover:border-[#0c0b1fc9] transition-all duration-300 flex gap-2 justify-center items-center border-[#2dc4fe]'
              onClick={handleHireBtn}
              >
                  <SplitBox>Hire me</SplitBox>
                  <i className="fa-solid fa-briefcase fa-beat-fade"></i>
              </button>

            </div>
        </div>

         {/* ------------- right area ------------ */}

          <div className='flex justify-center items-center lg:w-1/2'>

            <div id='my-image' className='lg:h-[30rem] lg:w-[30rem] sm:h-[25rem] sm:w-[25rem] h-[80vw] w-[80vw] sm:max-h-none sm:max-w-none max-h-[20rem] max-w-[20rem] rounded-full overflow-hidden relative'>
                <img src={mohit} alt="my-image" className='h-full w-full object-cover rounded-full z-[1] relative p-[0.3rem]' />
                <div className="h-full w-full bg-gradient absolute top-0 left-0"></div>
            </div>

            
          </div>

    </div>
  )
}
