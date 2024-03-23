import React from "react";
import SingleProject from "./SingleProject";
const FeaturedProjects = () => {
  return (
    <div className="py-24 flex flex-col justify-center items-center align-middle">
      <p className="text-3xl font-semibold  text-center">FEATURED PROJECTS</p>
      <p className="text-xl font-sans text-zinc-500 text-center pt-4">
        Successfully Completed more than 200+ projects in worldwide.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-12">
        <SingleProject
          projectName="CREATIVE ART PLANS"
          category="Design & Planning"
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZXJuJTIwaG91c2VzfGVufDB8fDB8fHww"
        />
        <SingleProject
          projectName="ADOBE ARCHITECTURES"
          category="Design & Planning"
          src="https://images.unsplash.com/photo-1594540992254-0e2239661647?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVybiUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D"
        />
        <SingleProject
          projectName="MID-CENTURY MODERN"
          category="Design & Planning"
          src="https://images.unsplash.com/photo-1614255976202-8ce52bfcb655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVybiUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D"
        />
        <SingleProject
          projectName="CONTEMPORARY MODERN HOMES"
          category="Design & Planning"
          src="https://images.unsplash.com/photo-1611444713509-13551307f623?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1vZGVybiUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D"
        />
        <SingleProject
          projectName="CRAFTSMAN DESIGNS"
          category="Design & Planning"
          src="https://images.unsplash.com/photo-1523351964962-1ee5847816c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxtb2Rlcm4lMjBob3VzZXN8ZW58MHx8MHx8fDA%3D"
        />
        <SingleProject
          projectName="ELEGANT SCANDINAVIAN INTERIOR"
          category="Commercial & Interior"
          src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHVsdHJhJTIwbW9kZXJuJTIwaG91c2VzfGVufDB8fDB8fHww"
        />
      </div>
      <button
        type="button"
        className="inline-block rounded-full bg-neutral-800 px-12 py-3 mt-8 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      >
        MORE PROJECTS
      </button>
    </div>
  );
};

export default FeaturedProjects;
