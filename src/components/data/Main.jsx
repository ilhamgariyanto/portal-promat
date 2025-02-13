import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import p1 from "../../assets/img/Search.png";
import { useLocation } from "react-router-dom";

const MetadataPage = () => {
  const [category, setCategory] = useState("");
  const [organization, setOrganization] = useState("");
  const [sort, setSort] = useState("Terpopuler");
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    window.scrollTo(0, 0); // Scroll ke atas saat halaman berubah
  }, [location]);

  // Variants Animasi
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
    <motion.section 
      className="bg-background min-h-screen flex flex-col items-center px-6 py-10"
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Breadcrumb */}
      <motion.div 
        className="w-full max-w-6xl text-dark text-sm mt-12"
        variants={fadeIn}
      >
        <span className="text-secondary font-medium">🏠 Beranda</span> / Data
      </motion.div>

      {/* Hero Section */}
      <motion.div
        className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between text-center lg:text-left mt-10"
        variants={fadeInUp}
      >
        <div className="max-w-2xl">
          <motion.h1 
            className="text-5xl font-bold text-secondary drop-shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Metadata
          </motion.h1>
          <motion.h2 
            className="text-4xl font-bold text-primary"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Pengelolaan Data Lebih Mudah
          </motion.h2>
          <motion.p 
            className="text-dark mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            Temukan informasi dalam bentuk struktur dan format baku untuk{" "}
            <span className="font-semibold text-secondary">
              menggambarkan data
            </span>
            , menjelaskan data, serta memudahkan pencarian, penggunaan, dan
            pengelolaan informasi data.
          </motion.p>
        </div>

        <motion.img
          src={p1}
          alt="Illustration"
          className="w-80 lg:w-[400px] mt-6 lg:mt-0 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        />
      </motion.div>

      {/* Search Section */}
      <motion.div
        className="w-full max-w-6xl mt-12"
        variants={staggerContainer}
      >
        <motion.div
          className="relative w-full rounded-full shadow-md overflow-hidden"
          variants={fadeInUp}
        >
          <input
            type="text"
            placeholder="Cari Metadata..."
            className="w-full p-4 pl-6 text-dark focus:outline-none rounded-full bg-white"
          />
          <motion.button 
            className="absolute right-0 top-0 bottom-0 px-5 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-hover transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            <FaSearch />
          </motion.button>
        </motion.div>

        <motion.div variants={staggerContainer} className="flex flex-wrap gap-4 mt-4">
          <motion.select
            variants={fadeInUp}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-auto p-3 border border-accent rounded-lg bg-white text-dark"
          >
            <option value="">Pilih Kategori</option>
            <option value="kategori1">Kategori 1</option>
            <option value="kategori2">Kategori 2</option>
          </motion.select>

          <motion.select
            variants={fadeInUp}
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="w-full md:w-auto p-3 border border-accent rounded-lg bg-white text-dark"
          >
            <option value="">Pilih Organisasi</option>
            <option value="org1">Organisasi 1</option>
            <option value="org2">Organisasi 2</option>
          </motion.select>

          <motion.div variants={fadeInUp} className="flex items-center space-x-2">
            <span className="text-dark">Urutkan:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="p-3 border border-accent rounded-lg bg-white text-dark"
            >
              <option value="Terpopuler">Terpopuler</option>
              <option value="Terbaru">Terbaru</option>
            </select>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="w-full max-w-6xl mt-6 text-dark"
      >
        <p className="font-semibold">0 Metadata ditemukan</p>
      </motion.div>
    </motion.section>
  );
};

export default MetadataPage;
