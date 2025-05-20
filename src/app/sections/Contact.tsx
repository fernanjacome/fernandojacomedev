'use client';

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhoneAlt,
    FaWhatsapp,
    FaFileDownload
} from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.contactSection} id="contacto">
            <div className={styles.contactCard}>
                <h2 className={styles.title}>Contacto</h2>
                <p className={styles.description}>
                    Estoy disponible para colaborar en proyectos, contactame.
                </p>

                <div className={styles.grid}>
                    <a
                        href="https://www.linkedin.com/in/fernando-j%C3%A1come-v%C3%A9liz-408b7a281/"
                        target="_blank"
                        className={styles.item}
                    >
                        <FaLinkedin className={styles.icon} />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/fernanjacome"
                        target="_blank"
                        className={styles.item}
                    >
                        <FaGithub className={styles.icon} />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="mailto:fernanjacome0sb@gmail.com"
                        className={styles.item}
                    >
                        <FaEnvelope className={styles.icon} />
                        <span>fernanjacome0sb@gmail.com</span>
                    </a>

                    <a
                        href="tel:+593959928535"
                        className={styles.item}
                    >
                        <FaPhoneAlt className={styles.icon} />
                        <span>Llamar</span>
                    </a>

                    <a
                        href="https://wa.me/593959928535"
                        target="_blank"
                        className={styles.item}
                    >
                        <FaWhatsapp className={styles.icon} />
                        <span>WhatsApp</span>
                    </a>

                    <a
                        href="/FernandoJacome_CV.pdf"
                        download
                        className={styles.item}
                    >
                        <FaFileDownload className={styles.icon} />
                        <span>Descargar CV</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
