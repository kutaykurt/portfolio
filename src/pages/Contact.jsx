import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            })
            .finally(() => {
                setLoading(false);
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <div className="contact-page">
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-header"
                >
                    <h1 className="section-title">Lassen Sie uns <span className="gradient-text">sprechen</span></h1>
                    <p className="section-subtitle">Haben Sie ein Projekt im Sinn? Ich freue mich darauf, von Ihnen zu hören.</p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="contact-info glass"
                    >
                        <h3>Kontaktinformationen</h3>
                        <div className="info-item">
                            <HiMail className="info-icon" />
                            <div>
                                <p className="info-label">Email</p>
                                <p className="info-value">asimkutaykurt@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <HiPhone className="info-icon" />
                            <div>
                                <p className="info-label">Telefon</p>
                                <p className="info-value">+49 176 63862718</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <HiLocationMarker className="info-icon" />
                            <div>
                                <p className="info-label">Standort</p>
                                <p className="info-value">Hamburg, Deutschland</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={form}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="contact-form glass"
                        onSubmit={sendEmail}
                    >
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="user_name" placeholder="Ihr Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="user_email" placeholder="ihre@email.de" required />
                        </div>
                        <div className="form-group">
                            <label>Nachricht</label>
                            <textarea name="message" placeholder="Wie kann ich Ihnen helfen?" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn-primary" disabled={loading}>
                            {loading ? 'Sende...' : 'Nachricht senden'}
                        </button>

                        {status === 'success' && (
                            <p className="status-msg success">Nachricht erfolgreich gesendet!</p>
                        )}
                        {status === 'error' && (
                            <p className="status-msg error">Etwas ist schief gelaufen. Bitte versuchen Sie es später erneut.</p>
                        )}
                    </motion.form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
