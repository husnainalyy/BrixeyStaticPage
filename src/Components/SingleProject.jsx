import React from "react";

const SingleProject = ({src, projectName, category }) => {
  return (
    <div className="pt-8 lg:py-8">
      <div>
        <div className="overflow-hidden h-56 w-80">
          <img
            className="object-cover w-full h-full  transform transition-all duration-500 ease-in-out hover:scale-110 "
            src={src}
            alt=""
          />
        </div>
        <div className=" py-3 lg:py-4">
          <p className="text-center font-semibold">{projectName}</p>
          <p className="text-center">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
