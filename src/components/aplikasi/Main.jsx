import p1 from '../../assets/img/p1.png';
import bgaplikasi from '../../assets/img/aplication.png';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Main = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    // Variants untuk animasi
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    return (
        <>
            <motion.section 
                className="bg-[var(--color-background)] min-h-screen flex flex-col items-center px-6 py-10"
                initial="hidden"
                animate={show ? "visible" : "hidden"}
                variants={staggerContainer}
            >
                {/* Breadcrumb */}
                <motion.div
                    className="w-full max-w-6xl text-[var(--color-text)] text-sm mb-3 mt-12"
                    variants={fadeIn}
                >
                    <span className="font-medium">🏠 Beranda</span> / Aplikasi
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    className="w-full max-w-6xl mb-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left"
                    variants={fadeInUp}
                >
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold text-[var(--color-secondary)] leading-snug drop-shadow-lg">
                            <motion.span 
                                className="block"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                Transformasi Digital
                            </motion.span>
                            <motion.span 
                                className="block text-[var(--color-primary)]"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                            >
                                Dengan Empat Solusi Terbaik
                            </motion.span>
                        </h1>
                        <motion.p 
                            className="text-[var(--color-text)] mt-4 text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        >
                            Temukan informasi terkait{" "}
                            <span className="font-semibold text-[var(--color-secondary)]">
                                Services Geoportal Profesional Management Aset Tanah (PROMAT)
                            </span>{" "}
                            yang akan membantu Anda memahami lebih dalam.
                        </motion.p>
                    </div>

                    <motion.img
                        src={bgaplikasi}
                        alt="Illustration"
                        className="w-80 lg:w-80 mt-6 lg:mt-0"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                    />
                </motion.div>

                {/* Section Deskripsi */}
                <motion.div
                    className="mb-6 text-center"
                    variants={fadeInUp}
                >
                    <p className="text-[var(--color-text)] text-lg font-medium">
                        <span className="text-[var(--color-accent)] font-semibold">Empat Aplikasi Unggulan</span> kami yang bisa diakses <span className="text-[var(--color-primary)] font-semibold">kapan saja</span> dan di mana saja.
                    </p>

                    <motion.hr 
                        className="w-32 border-t-2 border-[var(--color-secondary)] mx-auto mt-2" 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                    />
                </motion.div>

                {/* Grid dengan 4 kolom */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl"
                    variants={staggerContainer}
                >
                    {[
                        {
                            title: "CMDBUILD Promat",
                            desc: "Platform berbasis web untuk mengakses data Sumur Bandung.",
                            link: "http://103.233.103.22:8080/promat/ui/#classes/tutupan_lahan/cards"
                        },
                        {
                            title: "Mobile Promat",
                            desc: "Aplikasi mobile untuk akses mudah di smartphone.",
                            link: "https://play.google.com/store/games?hl=id"
                        },
                        {
                            title: "Mapstore Promat",
                            desc: "Penyimpanan peta digital dan data geospasial.",
                            link: "https://play.google.com/store/games?hl=id"
                        },
                        {
                            title: "Geoserver Promat",
                            desc: "Jelajahi data geospasial dengan mudah.",
                            link: "https://play.google.com/store/games?hl=id"
                        }
                    ].map((card, index) => (
                        <motion.div
                        key={index}
                        className="card border border-gray-200 bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-700 ease-out transform hover-card group"
                        variants={fadeInUp}
                    >
                        <figure className="w-full">
                            <img 
                                className="w-full h-36 object-cover rounded-t-2xl transition duration-300 group-hover:opacity-90" 
                                src={p1} 
                                alt={card.title} 
                            />
                        </figure>
                    
                        <div className="p-4 space-y-2">
                            <h4 className="text-lg font-semibold text-[var(--color-secondary)] transition duration-300 text-left group-hover:text-[var(--color-white)]">
                                {card.title}
                            </h4>
                            <p className="text-gray-600 text-sm transition duration-300 text-left group-hover:text-[var(--color-white)] leading-relaxed">
                                {card.desc}
                            </p>
                    
                            {/* Tombol di Sebelah Kanan */}
                            <div className="flex justify-end">
                                <a
                                    href={card.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block btn btn-primary hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)] text-sm"
                                >
                                    Telusuri
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    
                    
                    

                    
                    ))}
                </motion.div>
            </motion.section>
        </>
    );
}

export default Main;
