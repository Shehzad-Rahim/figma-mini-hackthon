import Image from "next/image";
import { IoCloudDownloadOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <main className="w-full flex md:flex-row flex-col-reverse items-center lg:px-20 sm:px-10 px-5 overflow-hidden bg-[#eafefe]">
      {/* Content Section  */}
      <section className="md:w-1/2 w-full flex flex-col justify-center md:items-start items-center lg:gap-5 gap-3 md:py-36 py-0 md:pb-36 pb-5 z-10">
      <h1 className="text-[#457b9d] text-lg font-semibold">Hi Everyone, I am</h1>
      <h1 className="lg:text-5xl text-4xl font-bold">Rizfan Herlaya</h1>
      <p className="lg:text-xl text-nr md:text-start text-center">
        Lorem ipsum dolor sit amet consectetur. Vitae maecenas pellentesque
        tellus tempus purus integer nisi cras fermentum.
      </p>
      <span className="flex gap-5">
        <button className="sm:w-[174px] w-[130px] sm:h-[54px] h-11 rounded-md sm:text-lg text-sm bg-[#457b9d] text-[#eafefe]  flex justify-center items-center gap-2">
          Download CV
          <IoCloudDownloadOutline className="sm:text-lg mt-1" />
        </button>
        <button className="sm:w-[174px] w-[130px] sm:h-[54px] h-11 rounded-md sm:text-lg text-sm border bg-[#def4f4] border-[#457b9d] text-[#457b9d] ">
          Explore More
        </button>
      </span>
    </section>
      {/* Image Section  */}
      <section className="md:w-1/2 w-full flex items-center md:justify-end justify-center md:py-36 py-10 lg:pt-36 pt-28">
      <div className="relative lg:h-[300px] h-[250px] lg:w-[400px] w-[350px] bg-[#457b9d] rounded-[30px]">
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:h-96 h-80 w-96">
          <Image src="/hero.png" alt="profile" objectFit="contain" fill={true}/>
        </span>
      </div>
    </section>

    </main>
  );
};

export default Hero;
