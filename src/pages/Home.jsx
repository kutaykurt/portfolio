import { motion } from 'framer-motion';
import './Home.css';
import myPhoto from '../assets/Kutay.jpg';

const Home = () => {
    const highlights = [
        { title: 'Fullstack Dev', text: 'Next.js 15 & React 19' },
        { title: 'Cloud Expert', text: 'AWS Cloud Consultant' },
        { title: 'UX Specialist', text: 'Framer Motion & Design' }
    ];

    return (
        <div className="home-page">
            <section className="hero-container">
                <div className="hero-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-image-wrapper"
                    >
                        <div className="hero-image-frame glass">
                            <img src={myPhoto} alt="Kutay Kurt" className="hero-img" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-main"
                    >
                        <h2 className="hero-subtitle">Willkommen</h2>
                        <h1 className="hero-title">
                            Ich bin <span className="gradient-text">Kutay Kurt</span>
                        </h1>
                        <p className="hero-description">
                            Full-Stack-Entwickler mit Fokus auf Design & Performance.
                        </p>

                        <div className="hero-highlights">
                            {highlights.map((item, i) => (
                                <div key={i} className="mini-highlight glass">
                                    <span className="dot"></span>
                                    <div>
                                        <strong>{item.title}</strong>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="hero-actions">
                            <a href="/projekte" className="btn-primary">Meine Projekte</a>
                            <a href="/kontakt" className="btn-outline">Kontakt</a>
                        </div>
                    </motion.div>
                </div>

                <div className="hero-visual">
                    <div className="hero-blob"></div>
                </div>
            </section>
        </div>
    );
};

export default Home;
