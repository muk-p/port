import ProjectCard from "./ProjectCard"

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">My Projects</h2>
        <p className="text-lg text-primary-foreground/80 mb-8">
          Here are some of the projects I've worked on recently:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Project Cards */}
          <ProjectCard
            title="Project One"
            description="A brief description of Project One."
            link="#"
          />
          <ProjectCard
            title="Project Two"
            description="A brief description of Project Two."
            link="#"
          />
          <ProjectCard
            title="Project Three"
            description="A brief description of Project Three."
            link="#"
          />
          <ProjectCard
            title="Project Four"
            description="A brief description of Project Four."
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
