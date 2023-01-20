import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

//icons
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <div className='navbar__left__logo'>
                    <Link to='/' className='name'>Flipkart</Link>
                    <Link to='/' className='explore__plus'>Explore <h3 className='explore__plus' style={{ color: "yellow" }}> Plus</h3></Link>
                </div>
                <input className='searchbar' placeholder='Search for products, brands and more'></input>
                <SearchIcon />
            </div>
            <div className='navbar__right'>
                <p className='banner__button'>Login</p>
                <p>Become a Seller</p>
                <p>More</p><ArrowDropDownIcon fontSize='small' />
                <Link to='/cart' className='cart'>Cart<ShoppingCartIcon fontSize='small' /></Link>
            </div>
        </div>
    )
}

export default Navbar