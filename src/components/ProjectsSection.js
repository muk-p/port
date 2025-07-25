import ProjectCard from "./ProjectCard"

const ProjectsSection = () => {
  return (
   <section id="projects" className="py-16 bg-gradient-to-br from-white via-blue-50 to-blue-100">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">My Projects</h2>
      <p className="text-lg sm:text-xl text-gray-600 mb-10">
        Here are some of the projects I've worked on recently:
      </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Project Cards */}
          <ProjectCard
            title="Driving School Project"
            description="A driving school website that enables the applicants to apply for classes."
            link="https://mi-tech-lime.vercel.app/"
          />
          <ProjectCard
            title="Gaming website"
            description="A gaming e-commerce website that allows selling of products."
            link="https://gaming-f.vercel.app/"
          />
          <p className = "text-grey-500">Admin:me3@gmail.com Pass:123456(deleted in 4 days)</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
