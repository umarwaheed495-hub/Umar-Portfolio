import { projects } from '../data/projects'
import { useInView } from '../hooks/useInView'

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()

  return (
    <article
      ref={ref}
      className={`card-glass group flex flex-col p-6 transition hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 ${
        inView ? 'reveal-visible' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="mb-4 h-36 rounded-xl bg-gradient-to-br from-blue-500/20 via-slate-800/50 to-cyan-500/10 flex items-center justify-center text-4xl opacity-80 group-hover:scale-[1.02] transition">
        {'</>'}
      </div>
      <h3 className="text-lg font-bold text-white">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs text-blue-300"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 5 && (
          <span className="text-xs text-slate-500">
            +{project.tags.length - 5}
          </span>
        )}
      </div>
      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-5 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-cyan-400 hover:underline"
            >
              Live demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-400 hover:text-white"
            >
              Source
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle mb-12">
          Selected work across healthcare, events, and enterprise platforms.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
