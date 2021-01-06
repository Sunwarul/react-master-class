import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';
import './header.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
    <header className="header">
        <Link to="/" className='logo-container'>
            <Logo className="logo" />
        </Link>
        <div className='options'>
            <Link to='/' className='option'>HOME</Link>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser ?
                    <Link onClick={() => auth.signOut()} className='option' to=''>
                        LOGOUT ({currentUser.displayName})
                    </Link>
                    :
                    <Link to='/sign-in'>
                        LOGIN
                    </Link>
            }
        </div>
    </header>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);