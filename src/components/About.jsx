import bgImageTentang from '../assets/img/bg-promat1.jpg';
import { FaSearch, FaPlus, FaEdit, FaUpload, FaArchive, FaCog, FaFileExport, FaCalculator } from "react-icons/fa";


const About = () => {
    return (
        <section className="tentang-sitangkal mt-5 mb-5 px-5">
            <div className="container mx-auto my-5">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Bagian Teks */}
                    <div className="space-y-6 ">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-drak leading-snug">
                            Tentang <span className="text-primary">PROMAT</span>
                        </h2>
                        <p className="text-base md:text-lg text-drak leading-relaxed">
                            <span className="font-semibold text-primary">PROMAT</span> atau <span className="font-semibold">Profesional Management Aset Tanah</span> 
                            adalah sistem informasi geospasial yang membantu pengelolaan aset tanah secara 
                            profesional dan efisien. Platform ini mempermudah:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-drak">
                            <li>
                                <span className="font-semibold">Pemetaan Lokasi:</span> Visualisasi aset tanah secara akurat di peta digital.
                            </li>
                            <li>
                                <span className="font-semibold">Pengukuran Luas:</span> Menghitung luas tanah dengan presisi tinggi.
                            </li>
                            <li>
                                <span className="font-semibold">Dokumentasi Legal:</span> Penyimpanan dokumen hukum secara digital untuk akses mudah.
                            </li>
                            <li>
                                <span className="font-semibold">Pengambilan Keputusan:</span> Mendukung analisis data untuk keputusan yang lebih tepat.
                            </li>
                        </ul>
                        <button className="mt-4 px-6 py-3 rounded-lg transition duration-300 shadow-md 
                            bg-primary text-[var(--color-white)] 
                            hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-white)]">
                            Pelajari Lebih Lanjut
                        </button>


                    </div>

                    {/* Bagian Gambar */}
                    
                    <div className="relative w-[30rem] h-[30rem] justify-self-center lg:justify-self-end lg:col-span-1.5">
                        {/* Kartu Tengah (Utama) */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-xl p-2 w-44 h-44">
                            <img src={bgImageTentang} alt="Tengah" className="w-full h-full object-cover rounded-xl" />
                        </div>

                        {/* Kartu Atas Kiri */}
                        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-xl p-2 w-36 h-36">
                            <img src={bgImageTentang} alt="Atas Kiri" className="w-full h-full object-cover rounded-xl" />
                        </div>

                        {/* Kartu Atas Kanan */}
                        <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-xl p-2 w-36 h-36">
                            <img src={bgImageTentang} alt="Atas Kanan" className="w-full h-full object-cover rounded-xl" />
                        </div>

                        {/* Kartu Bawah Kiri */}
                        <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-lg rounded-xl p-2 w-36 h-36">
                            <img src={bgImageTentang} alt="Bawah Kiri" className="w-full h-full object-cover rounded-xl" />
                        </div>

                        {/* Kartu Bawah Kanan */}
                        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-white shadow-lg rounded-xl p-2 w-36 h-36">
                            <img src={bgImageTentang} alt="Bawah Kanan" className="w-full h-full object-cover rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="fitur flex flex-col justify-center items-center mt-5 mb-5">
                <span className="badge badge-outline badge-neutral my-3 mb-3">Fitur Utama</span>
                <h1 className="font-bold text-4xl transform transition duration-500 hover:scale-105">
                    Fitur Canggih untuk Meningkatkan Alur Kerja
                </h1>
                <p className="py-2 w-9/12 text-center text-gray-600">
                    Jelajahi fitur canggih PROMAT yang dirancang untuk mempermudah pengelolaan aset tanah secara efektif. 
                    Dari pencarian aset hingga perhitungan otomatis, semua dirancang untuk membantu Anda membuat keputusan yang lebih cerdas dan akurat.
                </p>
            </div>

            <div className="px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Pencarian Aset", desc: "Cari aset tanah berdasarkan lokasi, luas area, nilai tanah, dan kategori aset.", icon: <FaSearch size={30} /> },
                        { title: "Penambahan Aset", desc: "Tambah aset tanah baru dengan mudah, lengkap dengan informasi detail dan dokumen pendukung.", icon: <FaPlus size={30} /> },
                        { title: "Pengeditan Data", desc: "Edit informasi aset seperti luas area, status kepemilikan, dan nilai pasar dengan cepat.", icon: <FaEdit size={30} /> },
                        { title: "Unggah Dokumen", desc: "Unggah dokumen terkait aset seperti sertifikat, IMB, dan foto properti.", icon: <FaUpload size={30} /> },
                        { title: "Inventarisasi Aset", desc: "Lihat dan kelola inventaris aset secara menyeluruh dengan akses yang aman dan terstruktur.", icon: <FaArchive size={30} /> },
                        { title: "Kustomisasi Pencarian", desc: "Sesuaikan filter pencarian sesuai kebutuhan, mulai dari lokasi hingga nilai aset.", icon: <FaCog size={30} /> },
                        { title: "Ekspor Data", desc: "Ekspor data aset dalam format CSV atau PDF untuk pelaporan yang lebih mudah.", icon: <FaFileExport size={30} /> },
                        { title: "Perhitungan Otomatis", desc: "Hitung nilai tanah secara otomatis berdasarkan lokasi dan tren pasar terkini.", icon: <FaCalculator size={30} /> },
                    ].map((item, index) => (
                        <div 
                        key={index} 
                        className="card border border-gray-200 bg-white shadow-lg rounded-xl p-6 transition duration-300 hover-card"
                    >
                        <div className="card-body flex flex-col items-center text-center">
                            <div className="icon-bg bg-accent p-4 rounded-full mb-4 shadow-md transition duration-300">
                                <div className="text-white">{item.icon}</div>
                            </div>
                            <h4 className="card-title text-xl font-semibold text-[var(--color-secondary)] transition duration-300">
                                {item.title}
                            </h4>
                            <p className="text-gray-600 mt-2 transition duration-300">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                    
                    
                    ))}
                </div>
            </div>
            </div>

        </section>
    );
};

export default About;
