import { motion } from 'framer-motion';
import './About.css';
import mypicture from '../assets/Mein-Foto2.JPG';

const About = () => {
    const skills = [
        { name: 'Frontend', items: ['React 19', 'Next.js 15', 'TypeScript', 'SASS', 'Framer Motion', 'Redux Toolkit'] },
        { name: 'Backend & Cloud', items: ['Node.js', 'Supabase', 'AWS Cloud Consultant', 'Cloudflare', 'RESTful APIs'] },
        { name: 'Specialized', items: ['Stripe Integration', 'WebSocket-Live-Events', 'Realtime-Chat', 'UX-Animationen', 'Kanban-Boards'] }
    ];

    return (
        <div className="about-page">
            <section>
                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="about-content"
                    >
                        <h1 className="section-title">Über <span className="gradient-text">mich</span></h1>
                        <p className="about-text">
                            Hallo! Ich bin Kutay Kurt, ein leidenschaftlicher Full-Stack-Entwickler mit einem Auge für Details.
                            Seit über 4 Jahren arbeite ich als Freelancer eigenständig an vielfältigen Projekten und setze digitale Konzepte erfolgreich in die Realität um.
                        </p>
                        <p className="about-text">
                            Mein Fokus liegt auf der Entwicklung performanter Webanwendungen, die durch exzellentes Design und ein erstklassiges Nutzererlebnis überzeugen. Als selbstständiger Entwickler begleite ich Projekte von der ersten Idee bis zum fertigen Produkt.
                        </p>

                        <div className="skills-container">
                            {skills.map((skillGroup, idx) => (
                                <div key={idx} className="skill-group">
                                    <h3>{skillGroup.name}</h3>
                                    <div className="skill-tags">
                                        {skillGroup.items.map(skill => (
                                            <span key={skill} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="about-image-container"
                    >
                        <div className="about-image glass">
                            {/* Hier könnte ein Bild stehen */}
                            {/* <div className="placeholder-image">KK</div> */}
                            <img src={mypicture} alt="KK" />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
