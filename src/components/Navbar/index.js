import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <div id='navbar-container'>
            <NavLink to='/' className='navbar-text' id='navbar-home'>Home</NavLink>
            <div id='navbar-mainlinks-container'>
                <NavLink to='/expense-tracker' className='navbar-text' id='navbar-expensetracker'>Expense Tracker</NavLink>
                <NavLink to='/compound-interest' className='navbar-text' id='navbar-cpc'>Compound Interest Calculator</NavLink>
            </div>
        </div>
    )
}

export default Navbar
