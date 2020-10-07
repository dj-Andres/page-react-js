import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css'
function Navbar() {
    const [click, SetClick] = useState(false);
    const [button,setButton]=useState(true);
    const handelClick =()=>SetClick(!click);
    const closeMobileMenu=()=>SetClick(false);

    const showButton=()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    return (
        <>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo'>
                        <MdFingerprint className='navbar-icon'/>
                            Dj-Andres
                    </Link>
                    <div className='menu-icon' onClick={handelClick}>
                     {click ? <FaTimes />: <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-link'>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-link'>
                                Products
                            </Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='/sign-up' className='bnt-link'>
                                    <Button buttonStyle='btn--outline'>Sign Up</Button>
                                </Link>
                            ) : (
                                <Link to='/sign-up' className='btn-link'>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Sign Up</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar


