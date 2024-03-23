import React from "react";
import TeamMates from "./TeamMates";

const Team = () => {
  return (
    <div className="py-24 flex flex-col justify-center items-center align-middle">
      <p className="text-3xl font-semibold  text-center">GENIUS TEAM MATES</p>
      <p className="text-xl font-sans text-zinc-500 text-center pt-4">
        Our experienced & creative architects behind with Brixey
      </p>
      <div className="flex-cols lg:flex gap-6">
        <TeamMates
          memberName="Adam Milne"
          role="Interior Designer-Partner"
          src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
        />
        <TeamMates
          memberName="Landine Luke"
          role="Architect Director-Partner"
          src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <TeamMates
          memberName="Ben Thomson"
          role="Architect Manager-Partner"
          src="https://images.unsplash.com/photo-1509868918748-a554ad25f858?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <TeamMates
          memberName="Bruce Robinson"
          role="Interior Director-Partner"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Team;
