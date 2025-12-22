import { motion } from 'framer-motion';
import './Projects.css';
import dilyuvamFull from '../assets/dilyuvam_full.png';

const projects = [
    {
        title: 'DilYuvam',
        description: 'Eine interaktive Sprachlernplattform mit Fokus auf Wortschatzerweiterung und Fortschrittsanalyse.',
        tags: ['React', 'Redux Toolkit', 'Node.js', 'Supabase'],
        image: dilyuvamFull,
        isLogo: true,
        link: 'https://www.dilyuvam.com'
    },
    {
        title: 'KI-Dashboard',
        description: 'Datenvisualisierungstool für KI-Modelle mit interaktiven Graphen und Analysen.',
        tags: ['Next.js', 'Python', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f36e?auto=format&fit=crop&w=800&q=80',
        link: '#'
    },
    {
        title: 'Fintech App',
        description: 'Mobile-first Anwendung für persönliches Finanzmanagement und Investment-Tracking.',
        tags: ['React Native', 'Firebase', 'Redux'],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        link: '#'
    }
];

const Projects = () => {
    return (
        <div className="projects-page">
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-header"
                >
                    <h1 className="section-title">Meine <span className="gradient-text">Projekte</span></h1>
                    <p className="section-subtitle">Eine Übersicht meiner Projekte.</p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="project-card glass"
                        >
                            <div className={`project-image ${project.isLogo ? 'logo-container' : ''}`}>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link-btn"
                                    >
                                        Zum Projekt
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
