import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import dilyuvamFull from '../assets/dilyuvam_full.png';
import adminDashboardImg from '../assets/admin_dashboard.png';
import togespotLogo from '../assets/togespot_logo.png';

const projects = [
    {
        title: 'Togespot',
        description: 'Eine hochmoderne Social-Media-Plattform für vernetztes Arbeiten und Entertainment.',
        longDescription: 'Togespot ist eine All-in-One Social-Media-Plattform, die Kommunikation, Unterhaltung und Karriereplanung vereint. Entwickelt mit Next.js und Supabase, bietet sie eine performante und skalierbare Architektur für tausende Nutzer.',
        features: [
            'Echtzeit-Chat & WebRTC Video-Calls direkt im Browser',
            'Watch-Partys für gemeinsames Ansehen von Filmen und Videos',
            'Dynamisches Gruppen-System mit individuellen Themes',
            'Integriertes Job-Portal für Karrieremöglichkeiten',
            'Live-Streaming-Funktionalität für Content Creator',
            'Discovery-Feed für personalisierte Inhalte und Trends',
            'Vollständige Supabase-Integration für Auth und Echtzeit-Daten'
        ],
        tags: ['Next.js', 'Supabase', 'TypeScript', 'WebRTC', 'Sass'],
        image: null,
        isTextLogo: true,
        link: 'https://togespot.com'
    },
    {
        title: 'DilYuvam',
        description: 'Eine interaktive Sprachlernplattform mit Fokus auf Wortschatzerweiterung und Fortschrittsanalyse.',
        longDescription: 'DilYuvam hilft Sprachlernenden dabei, ihren Wortschatz effizient zu erweitern. Durch personalisierte Listen und KI-gestützte Analysen wird der Lernprozess optimiert.',
        features: [
            'Detaillierte Fortschrittsstatistiken und Lernanalysen',
            'Vokabeltraining mit intelligentem Wiederholungssystem',
            'Individuelle Wortlisten für gezieltes Lernen',
            'Supabase-Backend für sichere Datenspeicherung',
            'Responsive Design für das Lernen unterwegs'
        ],
        tags: ['React', 'Redux Toolkit', 'Node.js', 'Supabase'],
        image: dilyuvamFull,
        isLogo: true,
        link: 'https://www.dilyuvam.com'
    },
    {
        title: 'Admin Dashboard',
        description: 'Ein umfassendes Dashboard zur Verwaltung von Benutzerdaten, Statistiken und Systemeinstellungen.',
        longDescription: 'Dieses Dashboard wurde entwickelt, um komplexe Datenstrukturen einfach visualisierbar und bearbeitbar zu machen. Es nutzt modernste UI-Komponenten für maximale Effizienz.',
        features: [
            'Interaktive Graphen und Datenvisualisierungen',
            'Komplettes User-Management-System',
            'Dark/Light Mode Unterstützung',
            'Integration von Syncfusion-Komponenten für professionelle Tabellen',
            'Theme-Anpassungen in Echtzeit'
        ],
        tags: ['React', 'Syncfusion', 'Tailwind', 'Context API'],
        image: adminDashboardImg,
        link: 'https://admin-dashboard-two-swart-28.vercel.app/'
    },
    {
        title: 'Fintech App',
        description: 'Mobile-first Anwendung für persönliches Finanzmanagement und Investment-Tracking.',
        longDescription: 'Eine moderne App zur Verwaltung persönlicher Ausgaben und Investitionen. Mit Fokus auf Sicherheit und Benutzerfreundlichkeit bietet sie eine klare Übersicht der eigenen Finanzen.',
        features: [
            'Transaktions-Tracking mit Kategorisierung',
            'Investment-Portfolio-Analyse',
            'Budget-Planung und Sparziele',
            'Firebase-Integration für sichere Datenhaltung',
            'Intuitive Mobile-First Benutzeroberfläche'
        ],
        tags: ['React Native', 'Firebase', 'Redux'],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        link: '#'
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

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
                            <div className={`project-image ${project.isLogo ? 'logo-container' : ''} ${project.isTextLogo ? 'text-logo-container' : ''}`}>
                                {project.isTextLogo ? (
                                    <span className="text-logo">togespot</span>
                                ) : (
                                    <img src={project.image} alt={project.title} />
                                )}
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-actions">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="btn-details"
                                    >
                                        Mehr erfahren
                                    </button>
                                    {project.link && project.link !== '#' && (
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="modal-content glass"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>

                            <div className="modal-header">
                                {selectedProject.isTextLogo ? (
                                    <div className="modal-image text-logo-container">
                                        <span className="text-logo">togespot</span>
                                    </div>
                                ) : (
                                    <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                                )}
                                <div className="modal-header-info">
                                    <h2>{selectedProject.title}</h2>
                                    <div className="project-tags">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body">
                                <h3>Über das Projekt</h3>
                                <p>{selectedProject.longDescription}</p>

                                <h3>Key Features</h3>
                                <ul className="features-list">
                                    {selectedProject.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>

                                {selectedProject.link && selectedProject.link !== '#' && (
                                    <div className="modal-footer">
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            Projekt Live ansehen
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;

