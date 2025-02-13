import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginToCMDBuild } from '../services/authServices';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginToCMDBuild(username, password);
            console.log('Login successful');
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-screen">
                <div className="max-w-screen">
                    <div className="card lg:card-side bg-base-100 shadow-sm">
                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" alt="Album" />
                        </figure>
                        <div className="card-body box-login">
                            <h1 className="card-title text-2xl">Selamat Datang</h1>
                            <span>Silahkan masuk untuk menggunakan Sumur Bandung</span>
                            <div className="form-group mt-5">
                                <form id="loginForm" className="form-login" onSubmit={handleSubmit}>
                                    <div className="form-username py-1">
                                        <label className="input validator">
                                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </g>
                                            </svg>
                                            <input
                                                type="text"
                                                id="username"
                                                required
                                                placeholder="Username"
                                                minLength="3"
                                                maxLength="30"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                    <div className="form-password py-2">
                                        <label className="input validator">
                                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                                </g>
                                            </svg>
                                            <input
                                                type="password"
                                                id="password"
                                                required
                                                placeholder="Password"
                                                minLength="0"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                    {error && <p className="text-red-500">{error}</p>}
                                    <button type="submit" className="btn btn-neutral">
                                        Masuk
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
