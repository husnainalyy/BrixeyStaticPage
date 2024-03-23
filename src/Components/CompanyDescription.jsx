import React from "react";

const CompanyDescription = () => {
  return (
    <div className=" flex flex-col   py-24">
      <div className="flex flex-col items-center  ">
        <p className="text-3xl  font-semibold  text-center  ">
          We have 10 years of experience in this.
          <br />
          We know what you want.
        </p>
        <p className="font-mono  text-xl text-center text-gray-500 py-8">
          We’re a Modern
          <strong className="text-black"> Architect Studio</strong> Based in
          London UK. We are the top 3 earners of 2012, each making over $400
          million US Dollars in Fee Income.it has developed a passionate
          audience of more than 25 million active monthly users and seemingly
          endless opportunities to shape the $300 billion designs.
        </p>
      </div>

      <div className="mx-8  flex flex-col gap-8 sm-flex-row lg:flex-row   items-center justify-between">
        <div className="border w-96 h-72  flex flex-col items-center justify-center  hover:bg-slate-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-24 h-24"
          >
            <path
              strokeLinecap="round "
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <p className="text-2xl">INTERIOR DESIGN</p>
        </div>

        <div className="border w-96 h-72  flex flex-col items-center justify-center hover:bg-slate-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-24 h-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
            />
          </svg>
          <p className="text-2xl">INDUSTRIAL ARCHITECTURE</p>
        </div>

        <div className="border  w-96 h-72  flex flex-col items-center justify-center hover:bg-slate-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-24 h-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <p className="text-2xl">PRODUCT DESIGN</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDescription;
