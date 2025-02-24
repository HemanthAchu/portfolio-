import ComputersCanvas from "./Computer";


function Home() {
  return (
    <div className="sm:min-h-[80vh] min-h-fit  flex justify-between  relative inset-0 max-w-7xl px-10 mx-auto flex flex-row items-start gap-5">
      <div className="flex  ">
        <div className="flex flex-col me-5 justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-[#6670F1]" />

          <div className="w-1 sm:h-80 h-40  bg-gradient-to-b  from-[#6670F1] " />
        </div>
        <div className="mt-5">
          <h1 className="text-white text-3xl font-bold ">
            Hi I'am <span className="text-[#6670F1]">Hemanth</span>
          </h1>
          <p className="text-gray-400 text-justify text-sm  mt-2">
            I'm a Junior Developer passionate about building dynamic and
            responsive web applications. I specialize in front-end technologies
            like React, JavaScript, HTML, and CSS. My goal is to continue
            learning and growing in the development field, and contribute to
            creating amazing user experiences. I enjoy working on projects that
            challenge me and allow me to improve my skills while delivering
            high-quality results.
          </p>
     
        </div>
      
      </div>
      <div className=" absolute  min-w-full pt-20 min-h-[370px] flex justify-center items-center  hidden lg:block">
          <ComputersCanvas />
        </div>

    </div>
  );
}

export default Home;
