import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black lg:h-72 lg:flex justify-between items-center px-4 lg:px-12 py-12">
      <div>
        <p className="text-white text-3xl font-semibold">Brixey Inc.</p>
      </div>
      <div>
        <p className="text-neutral-500 py-4">VISIT US----</p>
        <p className="text-neutral-500 ">
          489 Saxony Place, Ste #101 Encinitas, CA 92024
        </p>
        <p className="text-neutral-500 ">GET DIRECTIONS</p>
      </div>
      <div>
        <p className="text-neutral-500 py-4">CALL US----</p>
        <p className="text-neutral-500 ">P +1 760 487 1301</p>
        <p className="text-neutral-500 ">P +1 760 487 1301</p>
      </div>
      <div>
        <p className="text-neutral-500 py-4">EMAIL----</p>
        <p className="text-neutral-500 ">info@victorthemes.com</p>
        <p className="text-neutral-500 ">office@architec.com</p>
      </div>
    </div>
  );
};

export default Footer;
