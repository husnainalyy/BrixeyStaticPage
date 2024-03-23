import React from "react";

const ProjectNumber = () => {
  return (
    <div className="flex  items-center  bg-neutral-900		">
      <div className=" w-80 h-48  flex flex-col items-center justify-center">
        <p className="text-xl lg:text-4xl text-white text-center">56</p>
        <p className="text-sm lg:text-2xl text-zinc-600 text-center">
          Awards Winning
        </p>
      </div>

      <div className="border border-zinc-800 h-36 "></div>

      <div className=" w-80  h-48  flex flex-col items-center justify-center">
        <p className="text-xl lg:text-4xl text-white text-center">954 +</p>
        <p className="text-sm lg:text-2xl text-zinc-600 text-center">
          Project Completed
        </p>
      </div>

      <div className="border border-zinc-800 h-36 "></div>

      <div className=" w-80 h-48  flex flex-col items-center justify-center">
        <p className="text-xl lg:text-4xl text-white text-center">845 +</p>
        <p className="text-sm lg:text-2xl text-zinc-600 text-center">
          Happy Customers
        </p>
      </div>
      <div className="border border-zinc-800 h-36 "></div>
      <div className=" w-80 h-48  flex flex-col items-center justify-center">
        <p className="text-xl lg:text-4xl text-white text-center">7165</p>
        <p className="text-sm lg:text-2xl text-zinc-600 text-center">
          Hours Worked
        </p>
      </div>
    </div>
  );
};

export default ProjectNumber;
