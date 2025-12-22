import { motion } from 'framer-motion';
import './About.css';
import mypicture from '../assets/Mein-Foto2.JPG';

const About = () => {
    const skills = [
        { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
        { name: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
        { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] }
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
                            Hallo! Ich bin Kutay Kurt, ein leidenschaftlicher Entwickler mit einem Auge für Details.
                            Seit über 5 Jahren helfe ich Unternehmen dabei, ihre digitalen Visionen in die Realität umzusetzen.
                        </p>
                        <p className="about-text">
                            Mein Fokus liegt auf der Erstellung von performanten Webanwendungen, die nicht nur technisch
                            einwandfrei sind, sondern auch durch ein exzellentes Nutzererlebnis überzeugen.
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
