import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { title: 'Startseite', path: '/' },
        { title: 'Projekte', path: '/projekte' },
        { title: 'Über mich', path: '/ueber-mich' },
        { title: 'Kontakt', path: '/kontakt' },
    ];

    return (
        <nav className="navbar glass">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    Kutay<span>Kurt</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                            >
                                {link.title}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="nav-underline"
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mobile-links glass"
                    >
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={location.pathname === link.path ? 'active' : ''}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
