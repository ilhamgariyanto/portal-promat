import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { logoutFromCMDBuild } from '../services/authServices';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();  

    useEffect(() => {
        const token = Cookies.get('CMDBuild-Authorization');
        setIsLoggedIn(!!token);

        window.scrollTo(0, 0);
    }, [location]); 

    const handleLogout = async () => {
        try {
            await logoutFromCMDBuild();
            setIsLoggedIn(false);
            navigate('/');
        } catch (err) {
            console.error('Failed to logout:', err);
        }
    };

    const isActive = (path) => (location.pathname === path ? 'active' : '');

    return (
        <div className="navbar bg-base-100 shadow-sm fixed z-50 px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="/" className={`nav-link ${isActive('/')}`}>
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link to="/aplikasi" className={`nav-link ${isActive('/aplikasi')}`}>
                                Aplikasi
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className={`nav-link ${isActive('/services')}`}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/data" className={`nav-link ${isActive('/data')}`}>
                                Data
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/proses" className={`nav-link ${isActive('/proses')}`}>
                                Proses
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    Geoportal
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/" className={`nav-link ${isActive('/')}`}>
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <Link to="/aplikasi" className={`nav-link ${isActive('/aplikasi')}`}>
                            Aplikasi
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className={`nav-link ${isActive('/services')}`}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/data" className={`nav-link ${isActive('/data')}`}>
                            Data
                        </Link>
                    </li>
                    {/* <li className="pointer-events-none opacity-50">
                        <Link to="/proses" className={`nav-link ${isActive('/proses')}`}>
                            Proses
                        </Link>
                    </li> */}

                </ul>
            </div>
            <div className="navbar-end">
                {isLoggedIn ? (
                    <div id="user-menu">
                        <div className="dropdown dropdown-end px-2">
                            <div tabIndex="0" role="button" className="btn btn-ghost rounded-full w-10">
                                <button className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                            />
                                        </svg>
                                        <span className="badge badge-xs badge-error indicator-item"></span>
                                    </div>
                                </button>
                            </div>
                            <ul tabIndex="0" className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                                <span>Notifikasi</span>
                                <li>
                                    <a>Silahkan selesaikan monitoring</a>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown dropdown-end">
                            <div tabIndex="0" role="button" className="btn rounded-full w-10">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex="0" className="menu avatar-dropdown dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                                <li>
                                    <a onClick={handleLogout}>Keluar</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <Link to="/login" className="btn btn-neutral">
                        Masuk
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
