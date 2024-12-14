export default function Preloader() {

  return (
    <div id="preloader" className="fixed top-0 left-0 w-screen h-screen bg-black z-50 text-white flex justify-center items-center overflow-hidden">
        <h1 className="text-3xl text-sky-500">
            {"Loading...".split("").map((item, index) => (
                <span className="inline-block" key={index}>{item}</span>
            ))}
        </h1>
    </div>
  )
}
