import Image from "next/image";

const skillImages: string[] = [
  "/html.png",
  "/css.png",
  "/bootstrap.png",
  "/tailwind.png",
  "/php.png",
  "/laravel.png",
];

const Skills = () => {
  return (
    <main id="Skills" className="w-full flex flex-col md:gap-5 gap-3 md:py-16 py-8 items-center bg-[#eafefe]">
      <h1 className="text-[#457b9d] sm:text-2xl text-xl font-semibold ">Skills</h1>
      <h1 className="lg:text-5xl xs:text-4xl text-3xl font-bold">What I am capable of?</h1>
      <ul className="flex md:gap-5 gap-3 items-center md:mt-0 xs:mt-5 mt-3">
        {skillImages.map((image, i) => (
          <li key={i} className="sm:h-20 xs:h-14 h-10 sm:w-20 xs:w-14 w-10 relative">
            <Image src={image} alt="icon" objectFit="contain" fill={true} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Skills;
