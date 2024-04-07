
import { Link, useNavigate } from 'react-router-dom';
import './navigation.styles.scss';
const Navigation = () => {
    const navigate = useNavigate();
    const goHome = ()=>{
        navigate('/');
    }
    return (
        <div className='navbar'>
            <div onClick={goHome} className='logo-container'>
                Chef Logo
            </div>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/all-recipe'>Recipe Store</Link>
                <Link className='nav-link' to='/profile'>Profile</Link>
            </div>
        </div>

    );
}

export default Navigation;
