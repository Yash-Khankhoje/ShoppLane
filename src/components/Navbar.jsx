import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartReducer } from '../redux/reducers/cart-reducer';
import { fevReducer } from '../redux/reducers/fev-reducer';


export const Navbar = () => {

    const itemCount = useSelector((state) => state.cartReducer.numberCart)
    const fevCount = useSelector((state) => state.fevReducer.numberFev)

    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            setLoginStatus(false)
            navigate('/login')
        }
        else {
            setLoginStatus(true)
        }
    }, [loginStatus])

    const onLogoutHandler = () => {
        localStorage.clear();
        setLoginStatus(false);

    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/"><span className='first-half'>SHOP</span>LANE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="access-placement" id="navbarSupportedContent">
                    {loginStatus ? (
                        <Link className='btn btn-danger' onClick={onLogoutHandler}>Logout</Link>
                    ) : (
                        <Link className='btn btn-primary' to='/login'>Login</Link>
                    )}
                </div>
                <Link to={'/favourite'} className="btn  btn-lg" style={{ marginLeft: '1%' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill nav-fev-style" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>{fevCount}
                </Link>
                <Link to={'/cart'} className="btn  btn-lg" style={{ marginLeft: '2%' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3 nav-cart-style" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>{itemCount}
                </Link>
            </nav>
        </>
    )
}
