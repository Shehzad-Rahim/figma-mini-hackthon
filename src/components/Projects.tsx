import ProjectCards from "./ProjectsCard";

const Projects = () => {
  return (
    <div id="Projects" className="w-full flex flex-col items-center font-main py-20">
      <div className="flex flex-col items-center">
      <h1  className="text-[#457b9d] sm:text-2xl text-xl font-semibold ">Projects</h1>
        <h2 className="lg:text-5xl xs:text-4xl text-3xl font-bold">What I have made?</h2>
      </div>
      <ProjectCards />
    </div>
  );
};

export default Projects;