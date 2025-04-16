
const ProjectShowcase = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1.',
      image: 'https://picsum.photos/600/400',
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2.',
      image: 'https://picsum.photos/600/400',
      githubLink: '#',
      demoLink: '#',
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-accent mb-6">
        Project Showcase
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-foreground">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project.githubLink}
                  className="text-primary hover:text-accent mr-4"
                >
                  GitHub
                </a>
                <a
                  href={project.demoLink}
                  className="text-primary hover:text-accent"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
