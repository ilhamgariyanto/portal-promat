import MyDataTable from "./MyDataTable";
import p1 from "../../assets/img/service.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        className="bg-background min-h-screen flex flex-col items-center px-6 py-10"
        initial="hidden"
        animate={show ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Breadcrumb */}
        <motion.div 
          className="w-full max-w-6xl text-text-color text-sm mt-12"
          variants={fadeIn}
        >
          <span className="text-secondary font-medium">🏠 Beranda</span> / Services
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between text-center lg:text-left mt-10"
          variants={fadeInUp}
        >
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-secondary leading-snug drop-shadow-lg">
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                API Geoportal
              </motion.span>
              <motion.span 
                className="block text-primary"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              >
                Akses Data Spasial Mudah
              </motion.span>
            </h1>
            <motion.p 
              className="text-dark mt-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              Akses data spasial dengan mudah melalui layanan{" "}
              <span className="font-semibold text-accent">
                Geoportal Profesional Management Aset Tanah (PROMAT)
              </span>.  
              Tingkatkan integrasi dan efisiensi dalam pengelolaan informasi geospasial.
            </motion.p>
          </div>

          <motion.img
            src={p1}
            alt="Illustration"
            className="w-80 lg:w-[400px] mt-6 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          />
        </motion.div>

        {/* Section Deskripsi */}
        <motion.div
          className="text-center mb-10 mt-14"
          variants={fadeInUp}
        >
          <p className="text-text-color text-lg">
            Daftar Geoservices{" "}
            <span className="font-semibold text-accent">WMS</span> dan{" "}
            <span className="font-semibold text-accent">WFS</span> yang tersedia di Geoportal Profesional Management Aset Tanah (PROMAT).
          </p>
          <motion.hr 
            className="w-32 border-t-2 border-secondary mx-auto mt-4" 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          />
        </motion.div>

        {/* DataTable Section */}
        <motion.div
          className="w-full max-w-6xl shadow-lg bg-white p-8 rounded-2xl overflow-hidden transition-all duration-1000 ease-in-out hover:shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          whileHover={{ scale: 1.02, boxShadow: "0px 20px 40px rgba(0,0,0,0.2)" }}
        >
          <MyDataTable />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Main;
