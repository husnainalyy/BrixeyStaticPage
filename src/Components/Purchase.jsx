import React from "react";

const Purchase = () => {
  return (
    <div className="flex-cols lg:flex  h-92">
      <div className="h-96 w-full">
        <img
          className="h-96 w-full object-cover"
          src="https://images.unsplash.com/photo-1535007135893-61091db8c179?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
          alt=""
        />
      </div>
      <div className=" relative  h-96  w-full flex flex-col items-center   bg-no-repeat bg-[url('')]">
        <img
          className="h-96 w-full"
          src="https://images.unsplash.com/photo-1698847102523-cb8643d755a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJsYWNrJTIwd2hpdGUlMjBhYnN0cmFjdCUyMG1hemUlMjBzY2llbnRpZmljfGVufDB8fDB8fHww"
          alt=""
        />
        <p className="absolute z-3 top-8 lg:top-12 text-purple-300 text-center text-2xl lg:text-3xl">
          BRIXEY ARCHITECTURE & INTERIOR WORDPRESS THEME
        </p>
        <p className=" absolute z-3 top-20 lg:top-24 p-10 text-zinc-700 text-center text-1xl lg:text-[20px]">
          We’re a Moder Architect Studio Based in London UK. We are the top 3
          earners of 2012, each making over $400 million US Dollars in Fee
          Income.it has developed a passionate audience of more than 25 million
          active monthly users.
        </p>
        <button 
          type="button"
          className="absolute z-3 bottom-7 lg:bottom-16 inline-block rounded-full bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        >
          PURCHASE NOW
        </button>
      </div>
    </div>
  );
};

export default Purchase;
