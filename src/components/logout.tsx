'use client'
import { useRouter } from 'next/navigation';

const Logout: React.FC = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Limpa o token do localStorage
        localStorage.removeItem('token');
        // Redireciona para a página de login
        router.push('/login');
    };
    return (
        <button onClick={handleLogout} style={{ color: 'white' }}>
            Logout
        </button>
    );
};

export default Logout;
