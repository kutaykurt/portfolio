import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h2 className="hero-subtitle">Willkommen in meinem digitalen Raum</h2>
                    <h1 className="hero-title">
                        Ich bin <span className="gradient-text">Kutay Kurt</span>
                    </h1>
                    <p className="hero-description">
                        Ein leidenschaftlicher Full-Stack-Entwickler, der sich auf die Entwicklung moderner,
                        benutzerzentrierter Webanwendungen mit Fokus auf exzellentes Design und Performance spezialisiert hat.
                    </p>
                    <div className="hero-actions">
                        <a href="/projekte" className="btn-primary">Meine Arbeit ansehen</a>
                        <a href="/kontakt" className="btn-outline">Kontaktieren Sie mich</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-visual"
                >
                    <div className="hero-blob"></div>
                </motion.div>
            </section>

            {/* Highlights Section */}
            <section className="highlights">
                <div className="highlight-grid">
                    <div className="highlight-item glass">
                        <h3>Modernes Design</h3>
                        <p>UI/UX-Ansätze, die Nutzer begeistern und überzeugen.</p>
                    </div>
                    <div className="highlight-item glass">
                        <h3>Sauberer Code</h3>
                        <p>Wartbare und skalierbare Architektur für langfristigen Erfolg.</p>
                    </div>
                    <div className="highlight-item glass">
                        <h3>Performance</h3>
                        <p>Optimierte Ladezeiten für ein reibungsloses Nutzererlebnis.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
