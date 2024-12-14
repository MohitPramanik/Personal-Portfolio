import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import NotificationMsg from "./NotificationMsg";
import { useState } from "react";

export default function Contact() {

  const [msgStatus, setmsgStatus] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      emailjs
        .send('service_1snpyoi', 'template_ulxptlc', data, {
          publicKey: "kNFe0iWcz-n0QIeAo",
        })
        .then(
          (response) => {
            setmsgStatus(true);
            console.log('SUCCESS!', response.status, response.text);
            reset(); 
          },
          (err) => {
            setmsgStatus(false);
            console.log('FAILED...', err);
          },
        );
      console.log(data);
      console.log(onSubmit)
  }

 


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact-section",
        start: "50% bottom",
        end: "50% 70%",
        endTrigger: "#contact-form-wrapper",
        scrub: 1
      }
    });

    tl.from("#contact-form-wrapper", {
      opacity: 0,
      x: "50%", 
    })
    .from("#contact-form-wrapper h2", {
      opacity: 0, 
      y: "-100%"
    })
    .from("#contact-form-wrapper input, #contact-form-wrapper textarea, #contact-form-wrapper button", {
      rotateX: 90,
      opacity: 0,
      stagger: 0.6,
    })
  })

  return (
    <div id="contact-section" className='min-h-screen p-6 flex justify-center items-center bg-gradient-to-br from-green-500 to-sky-500 z-[8] relative overflow-hidden'>
      

      <div id="contact-form-wrapper" className='rounded-lg overflow-hidden' style={{minWidth: "min(100%, 50rem)"}}>
        <h2 className='text-center text-white font-bold text-3xl p-4 bg-slate-800'>Contact me</h2>
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-3 w-full'>

                {/* --------- name input --------- */}
                <input type="text" name="name" placeholder='Enter your name' className='w-full p-3 my-1 rounded-md focus:outline-green-500 outline-4' 
                  {...register("name", {required: true})}  />
                {errors.name && <span className="text-red-600 text-sm">This field is required</span>}

                {/* --------- email input --------- */}
                <input type="email" name="email" placeholder='Enter your email' className='w-full p-3 my-1 rounded-md focus:outline-green-500 outline-4' 
                  {...register("email", { required: true })} />
                {errors.email && <span className="text-red-600 text-sm">This field is required</span>}

                {/* --------- message input --------- */}
                <textarea name="message" placeholder="Enter your message" className="w-full p-3 my-1 rounded-md focus:outline-green-500 outline-4 resize-none" rows="5" 
                {...register("message", {
                    required: "This field is required", // Message for empty field
                    validate: {
                      minLength: (value) =>
                        value.length >= 20 || "Message must be at least 20 characters long", // Custom message for min length
                    },
                  })}
                ></textarea>
                {errors.message && <span className="text-red-600 text-sm">{errors.message.message}</span>}


                <button className='bg-[#940aff] hover:bg-[#ce00ff] py-3 rounded-md text-white font-semibold text-xl mt-4'>Submit</button>
            </form>
        </div>
      </div>

      <div className="fixed top-16 left-0 w-screen z-[60]">
          <NotificationMsg status={msgStatus} />
      </div>

    </div>
  )
}
