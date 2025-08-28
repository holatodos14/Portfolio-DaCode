import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
      id:1,
      title: "Travel Landing Page",
      description: "A beautiful travel landing page app using React and Tailwind",
      image:"/projects/web2.PNG",
      tags: ["React", "Tailwind"],
      demoURL: "#",
      githubURL: "#",
    },
    {
      id:2,
      title: "E-commerce platform",
      description: "Engineered for velocity and conversion—scalable, seamless, and built to perform.",
      image:"/projects/web3.PNG",
      tags: ["React", "Tailwind", "Node.js", "MongoDB"],
      demoURL: "#",
      githubURL: "#",
    },
    {
      id:3,
      title: "Incident Reporting System",
      description: "From alert to resolution—streamlined reporting, smarter response, and minimized downtime.",
      image:"/projects/web4.PNG",
      tags: ["React", "Tailwind", "Node.js", "MySQL"],
      demoURL: "#",
      githubURL: "#",
    }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project,key) =>  (
            <div 
              key={key} 
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) =>(
                      <span className="px-1.5 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}
                      </span>
                    ))}
                  </div>
                

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoURL} 
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20}/>
                    </a>
                    <a 
                      href={project.githubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/holatodos14"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2">
            Check My Github <ArrowRight size={16}/>
          </a>
        </div>

      </div>
    </section>
  )
}
