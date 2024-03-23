import React from "react";

const Reviews = () => {
  return (
    <div>
      {/* Slider */}
      <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": false
  }'
        className="relative"
      >
        <div className="  hs-carousel relative overflow-hidden w-full min-h-[350px] bg-gray-100 rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide">
              <div className=" flex flex-col justify-center items-center h-full bg-zinc-900 p-6">
                <p className="text-center text-1xl lg:text-2xl text-neutral-300 lg:px-24">
                  I would like to thank Brixey Architectural Design Services for
                  all of their hard work, ideas and inspiration and for being so
                  approachable and easy to deal with. I would happily recommend
                  them to anyone starting a project.
                </p>
                <p className="text-neutral-500 pt-6">
                  JACK SPARROWCEO, Care Builders
                </p>
              </div>
            </div>
            <div className="hs-carousel-slide">
              <div className=" flex flex-col justify-center items-center h-full bg-zinc-900 p-6">
                <p className="text-center text-1xl lg:text-2xl text-neutral-300 lg:px-24">
                  Having no previous building experience we searched the
                  internet for an architectural designer and after seeing Brixey
                  we decided to engage the services of Architectural Design
                  Services.
                </p>
                <p className="text-neutral-500 pt-6">
                  WILL TURNERMD, Genuine Creators
                </p>
              </div>
            </div>
            <div className="hs-carousel-slide">
              <div className=" flex flex-col justify-center items-center h-full bg-zinc-900 p-6">
                <p className="text-center text-1xl lg:text-2xl text-neutral-300 lg:px-24">
                  Interior design needs to recognize and adapt to its
                  surroundings , The role of the team in understanding how
                  interior,exterior design choices impact the budget a
                  specialist team of interior designers
                </p>
                <p className="text-neutral-500 pt-6">
                  PHILIP HUGHESTL, Oca Bank
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
        </div>
      </div>
      {/* End Slider */}
    </div>
  );
};

export default Reviews;
