import { toast } from "sonner";

const Downloadcv = () => {
  return (
    <nav className=" sm:px-16 w-full flex justify-center items-center  top-0 z-20">
      <div className=" flex justify-between  items-center max-w-7xl w-full  h-14 relative ">
        <button
          onClick={() => toast.warning("update be later")}
          className=" 
    p-2 sm:p-3 bg-[#6670F1] 
    absolute  right-4    sm:right-0 
    my-2 min-w-[140px] z-10 rounded-xl 
    
    transition-all duration-500 ease-in-out

    shadow-[0px_0px_10px_4px_rgba(255,255,255,0.1)] 
  
   
    hover:-translate-y-1 hover:scale-105 cursor-pointer
    active:scale-95 "
        >
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default Downloadcv;
