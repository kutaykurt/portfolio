import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import dilyuvamLogo from '../assets/dilyuvam_logo.png';
import adminDashboardImg from '../assets/admin_dashboard.png';

const projects = [
    {
        title: 'TogeLink',
        description: 'Plattform für synchronisiertes Videostreaming mit globaler Player-Sync.',
        longDescription: 'TogeLink ist eine Social Media & Watch-Party Plattform. Sie bietet synchronisiertes Videostreaming mit einem globalen Player-Sync und nutzt Echtzeit-Kommunikation für eine nahtlose User-Experience.',
        features: [
            'Entwicklung mit Next.js 15, React 19 und TypeScript',
            'WebSocket-Live-Events für Echtzeit-Synchronisation',
            'Echtzeit-Kommunikation und Chat-System',
            'Skalierbare Supabase-Backend-Architektur',
            'Modernes UI/UX Design System'
        ],
        tags: ['Next.js 15', 'React 19', 'WebSockets', 'Supabase'],
        image: null,
        isCustomLogo: true,
        logoType: 'togelink',
        link: 'https://togelink.com/de'
    },
    {
        title: 'Apply Tracker',
        description: 'Produktivitäts-Tool zur Nachverfolgung von Bewerbungsprozessen.',
        longDescription: 'ApplyTracker ist ein umfassender Bewerbungs-Manager. Ein Privacy-First Ansatz durch optimierte lokale Datenspeicherung (LocalStorage) sorgt für maximale Sicherheit der Nutzerdaten.',
        features: [
            'Interaktiver Datums-Navigator',
            'UX-Animationen mit Framer Motion',
            'Privacy-First Ansatz via LocalStorage',
            'Status-Tracking für alle Bewerbungsphasen',
            'Übersichtliches Dashboard für Karriere-Schritte'
        ],
        tags: ['React', 'Framer Motion', 'LocalStorage', 'UX-Design'],
        image: null,
        isCustomLogo: true,
        logoType: 'applytracker',
        link: 'https://apply-tracker-rho.vercel.app/'
    },
    {
        title: 'KaufWelt',
        description: 'Ein modernes E-Commerce Erlebnis für qualitativ hochwertige Produkte.',
        longDescription: 'KaufWelt kombiniert modernes Design mit leistungsstarken E-Commerce Features. Der Fokus liegt auf einer intuitiven Shopping-Experience und einer performanten Nutzeroberfläche.',
        features: [
            'Redux-basiertes State Management für den Warenkorb',
            'Performantes Produkt-Listing und Filter',
            'Vollständig responsives Interface'
        ],
        tags: ['React', 'Redux', 'Node.js'],
        image: null,
        isCustomLogo: true,
        logoType: 'kaufwelt',
        link: 'https://kaufwelt.vercel.app/'
    },
    {
        title: 'DilYuvam',
        description: 'Interaktive E-Learning-App mit integriertem Redux-Prüfungssystem.',
        longDescription: 'DilYuvam ist eine Sprachlern-Website, die High-Performance mit sicherer Authentifizierung kombiniert. Ein integriertes Prüfungssystem hilft bei der Wortschatzerweiterung.',
        features: [
            'Integrierte Redux-Prüfungssysteme',
            'Anbindung von Stripe für sichere Zahlungsabwicklung',
            'Fokus auf High-Performance und Sicherheit',
            'Sichere Authentifizierung via Supabase',
            'Fortschrittsanalyse für Lernende'
        ],
        tags: ['React', 'Redux Toolkit', 'Stripe', 'Supabase'],
        image: dilyuvamLogo,
        isCustomLogo: true,
        logoType: 'dilyuvam',
        link: 'https://www.dilyuvam.com'
    },
    {
        title: 'Admin Dashboard',
        description: 'Business-Interface zur Verwaltung komplexer Business-Module.',
        longDescription: 'Das Admin Dashboard bietet ein professionelles Interface zur Verwaltung von Daten. Durch die Implementierung von Kanban-Boards und interaktiven Charts ist es das ideale Tool für Business-Workflows.',
        features: [
            'Implementierung von Kanban-Boards',
            'Interaktive Daten-Charts für Business-Analysen',
            'Entwickelt mit React & TypeScript für Typsicherheit',
            'Skalierbare Architektur für komplexe Module',
            'Intuitive Verwaltung von Systemeinstellungen'
        ],
        tags: ['React', 'TypeScript', 'Kanban', 'Charts'],
        image: null,
        isCustomLogo: true,
        logoType: 'admindashboard',
        link: 'https://admin-dashboard-two-swart-28.vercel.app/'
    },
    {
        title: 'Lebens-Planer',
        description: 'Ihr persönlicher Begleiter für Struktur und Lebensqualität.',
        longDescription: 'Der Lebens-Planer ist eine ganzheitliche Plattform zur Organisation Ihres Alltags. Er kombiniert Aufgabenmanagement mit mentalem Wohlbefinden und hilft Ihnen, Ihre Ziele spielerisch zu erreichen.',
        features: [
            'Modernes Dashboard für tägliche Aufgaben',
            'Zielsetzung und Fortschrittstracking',
            'Gamification-Elemente zur Motivation',
            'Fokus auf User Experience und klares Design',
            'Optimiert für mobile und Desktop-Nutzung'
        ],
        tags: ['React', 'Productivity', 'UX/UI', 'Gamification'],
        image: null,
        isCustomLogo: true,
        logoType: 'lebensplaner',
        link: '#'
    }
];

const LogoRenderer = ({ type }) => {
    switch (type) {
        case 'togelink':
            return (
                <div className="custom-logo togelink-logo">
                    <span className="logo-white">TogeLink</span><span className="logo-blue">.com</span>
                </div>
            );
        case 'applytracker':
            return (
                <div className="custom-logo applytracker-logo">
                    <div className="logo-icon">
                        <div className="circle outer"></div>
                        <div className="circle middle"></div>
                        <div className="circle inner"></div>
                    </div>
                    <span className="logo-text">ApplyTracker</span>
                </div>
            );
        case 'kaufwelt':
            return (
                <div className="custom-logo kaufwelt-logo">
                    <span className="logo-k">K</span><span className="logo-text">aufWelt</span>
                </div>
            );
        case 'dilyuvam':
            return (
                <div className="custom-logo dilyuvam-logo">
                    <img src={dilyuvamLogo} alt="DilYuvam" />
                </div>
            );
        case 'admindashboard':
            return (
                <div className="custom-logo admindashboard-logo">
                    <div className="logo-icon">
                        <div className="bar bar-1"></div>
                        <div className="bar bar-2"></div>
                        <div className="bar bar-3"></div>
                    </div>
                    <span className="logo-text">Dashboard</span>
                </div>
            );
        case 'lebensplaner':
            return (
                <div className="custom-logo lebensplaner-logo">
                    <div className="logo-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                    <span className="logo-text">LEBENS-PLANER</span>
                </div>
            );
        default:
            return null;
    }
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="projects-page">
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h1 className="section-title">Meine <span className="gradient-text">Projekte</span></h1>
                    <p className="section-subtitle">Eine Übersicht meiner jüngsten Arbeiten.</p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="project-card glass"
                        >
                            <div className={`project-image ${project.isLogo ? 'logo-container' : ''} ${project.isCustomLogo ? 'custom-logo-container' : ''}`}>
                                {project.isCustomLogo ? (
                                    <LogoRenderer type={project.logoType} />
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
                                        Details
                                    </button>
                                    {project.link && project.link !== '#' && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link-btn"
                                        >
                                            Live Demo
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
                                {selectedProject.isCustomLogo ? (
                                    <div className="modal-image custom-logo-container">
                                        <LogoRenderer type={selectedProject.logoType} />
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

