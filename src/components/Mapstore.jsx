import { useEffect, useState } from "react";
import { getCMDBuildClassesDb } from "../services/cmdbuildServices";
import p1 from '../assets/img/p1.png';
import p2 from '../assets/img/p1.png';
import p3 from '../assets/img/p1.png'; 
import Cookies from "js-cookie";

const images = [p1, p2, p3];

const Mapstore = () => {
    const [dashboardData, setDashboardData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState("Dashboards");
    const [randomImages, setRandomImages] = useState([]);

    useEffect(() => {
        const checkLoginStatus = () => {
            const sessionId = Cookies.get("CMDBuild-Authorization");
            setIsLoggedIn(!!sessionId);
        };
        checkLoginStatus();
        const interval = setInterval(checkLoginStatus, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            const fetchData = async () => {
                try {
                    const response = await getCMDBuildClassesDb();
                    setDashboardData(response.data || []);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            fetchData();
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (dashboardData.length > 0) {
            const shuffledImages = [...images].sort(() => Math.random() - 0.5);
            const imagesForItems = dashboardData.map((_, index) => shuffledImages[index % shuffledImages.length]);
            setRandomImages(imagesForItems);
        }
    }, [dashboardData]);

    const extractUrl = (htmlString) => {
        const regex = /href=['"]([^'"]*)['"]/;
        const match = regex.exec(htmlString);
        return match ? match[1] : "#";
    };

    if (!isLoggedIn) {
        return <p className="text-white text-center mt-10">Silahkan login untuk melihat konten.</p>;
    }

    return (
        <>
            <div>
                <section className="mapstore mt-10 bg-secondary-dark">
                    <div className="container mx-auto px-6 py-10 rounded-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">
                            <div className="py-4">
                                <span className="text-primary font-bold text-lg">Aplikasi Portal</span>
                                <h1 className="text-4xl text-white font-bold py-5">Dashboard Dan Geostories</h1>
                            </div>
                            <div>
                                <p className="text-white text-lg mt-12">
                                    Antarmuka pengguna yang menyajikan data secara visual dalam bentuk grafik, peta, tabel, story, dan widget lainnya.
                                </p>
                            </div>
                        </div>
                        <div className="border-b border-gray-600 flex space-x-4 pb-2">
                        {["Dashboards", "Maps", "GeoStories"].map((tab) => {
                            const count = dashboardData.filter((item) => item.kategori === tab).length;
                            return (
                                <button
                                    key={tab}
                                    className={`px-4 py-2 text-lg font-medium ${
                                        activeTab === tab
                                            ? "border-b-2 border-primary text-primary"
                                            : "text-gray-400 hover:text-primary transition-all"
                                    }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab} {count > 0 ? `(${count})` : ""}
                                </button>
                            );
                        })}
                    </div>


                        <div className="mt-6">
                        {activeTab === "Dashboards" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {dashboardData.length > 0 ? (
                                    dashboardData
                                        .filter((item) => item.kategori === "Dashboards")
                                        .map((item, index) => (
                                            <div key={item.id} className="card relative overflow-hidden border border-gray-700 rounded-lg shadow-md bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-500">
                                                <figure className="relative">
                                                    <img
                                                        className="w-full h-48 object-cover rounded-t-lg transition-all duration-300 hover:brightness-110"
                                                        src={randomImages[index]} 
                                                        alt={item.nama || "Image"}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                                </figure>
                                                <div className="p-4">
                                                    <h2 className="text-white font-semibold text-lg">{item.nama}</h2>
                                                    <div className="card-actions justify-end mt-4">
                                                        <a
                                                            href={extractUrl(item.url)}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-primary px-4 py-2 rounded-lg"
                                                        >
                                                            Lihat
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                ) : (
                                    <p className="text-white text-center">Tidak ada data tersedia.</p>
                                )}
                            </div>
                        )}

                        {activeTab === "Maps" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {dashboardData.filter((item) => item.kategori === "Maps").length > 0 ? (
                                    dashboardData
                                        .filter((item) => item.kategori === "Maps")
                                        .map((item, index) => (
                                            <div key={item.id} className="card relative overflow-hidden border border-gray-700 rounded-lg shadow-md bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-500">
                                                <figure className="relative">
                                                    <img
                                                        className="w-full h-48 object-cover rounded-t-lg transition-all duration-300 hover:brightness-110"
                                                        src={randomImages[index]} 
                                                        alt={item.nama || "Image"}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                                </figure>
                                                <div className="p-4">
                                                    <h2 className="text-white font-semibold text-lg">{item.nama}</h2>
                                                    <div className="card-actions justify-end mt-4">
                                                        <a
                                                            href={extractUrl(item.url)}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-primary px-4 py-2 rounded-lg"
                                                        >
                                                            Lihat
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                ) : (
                                    <p className="text-white text-center">Konten Maps akan segera tersedia.</p>
                                )}
                            </div>
                        )}

                        {activeTab === "GeoStories" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {dashboardData.filter((item) => item.kategori === "GeoStories").length > 0 ? (
                                    dashboardData
                                        .filter((item) => item.kategori === "GeoStories")
                                        .map((item, index) => (
                                            <div key={item.id} className="card relative overflow-hidden border border-gray-700 rounded-lg shadow-md bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-500">
                                                <figure className="relative">
                                                    <img
                                                        className="w-full h-48 object-cover rounded-t-lg transition-all duration-300 hover:brightness-110"
                                                        src={randomImages[index]} 
                                                        alt={item.nama || "Image"}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                                </figure>
                                                <div className="p-4">
                                                    <h2 className="text-white font-semibold text-lg">{item.nama}</h2>
                                                    <div className="card-actions justify-end mt-4">
                                                        <a
                                                            href={extractUrl(item.url)}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-primary px-4 py-2 rounded-lg"
                                                        >
                                                            Lihat
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                ) : (
                                    <p className="text-white text-center">Konten GeoStories akan segera tersedia.</p>
                                )}
                            </div>
                        )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Mapstore;
