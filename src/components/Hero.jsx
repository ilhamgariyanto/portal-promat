import bgImage from '../assets/img/bg-promat3.jpg';

const Hero = () => {
    return (
        <div
            className="hero min-h-screen relative"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay Gelap untuk Membuat Teks Lebih Terbaca */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Konten Hero */}
            <div className="hero-content text-center w-full relative z-10">
                <div className="max-w-screen-lg mx-auto px-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                        PROMAT
                    </h1>
                    <p className="py-4 text-lg md:text-2xl text-gray-200 drop-shadow-md">
                        Sistem Informasi Geospasial untuk <span className="font-semibold">Profesional Management Aset Tanah</span> yang membantu dalam pengelolaan aset tanah secara efektif dan efisien. 
                    </p>
                    <button className="btn btn-primary px-8 py-3 rounded-lg transition duration-300 hover:bg-blue-700 hover:shadow-xl">
                        Telusuri
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
