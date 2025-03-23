import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Badges = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.open('https://www.credly.com/users/velpuri-venkata-veera-anjaneyulu', '_blank');
        navigate('/');
    }, [navigate]);

    return null;
};

export default Badges;