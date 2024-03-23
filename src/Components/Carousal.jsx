const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function Example() {
  return (
    <div
      style={{
        backgroundImage: `url(https://victorthemes.com/themes/brixey/wp-content/uploads/2017/05/slide2.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" flex flex-col  items-center justify-center  py-44 lg:py-[250px]">
        <p className="text-sm sm:text-base font-bold text-white">
          STUDIO EST. 2008
        </p>
        <p className="text-[45px] sm:text-3xl lg:text-6xl  font-bold  text-white text-center">
          BRIXEY ARCHITECTURE STUDIO
        </p>
        <button
          type="button"
          className="inline-block rounded-full bg-neutral-800 px-4 sm:px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        >
          Site visit
        </button>
      </div>
    </div>
  );
}
