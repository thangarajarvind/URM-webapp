import { NavLink } from "react-router-dom";

const NavBarComponent = () => {
    const links =[
        {to: '/', label: 'Home'},
        {to: '/about', label: 'About'},
        {to: '/services', label: 'Services'},
        {to: '/contact', label: 'Contact Us'},
        {to: 'https://axt4888.uta.cloud/', label: 'Blog'},
        {to: '/login', label: 'Login'},
        {to: '/register', label: 'Register'},
    ]
    return (
        <nav className="topnav_home" id="nav">
            <div><NavLink to="#" style={{color: '#4f6faf', fontWeight: 600, fontSize: '18px', textDecoration: 'none', textTransform: 'uppercase'}}>URM Applications</NavLink></div>
            <div className="nav-links" style={{padding: '.5rem 0'}}>
                {links.map(({to, label, cls}, index) =>(<NavLink to={to} key={index} className={`${cls && cls}`}>{label}</NavLink>))}
            </div>
        </nav>
    )
}

export default NavBarComponent;