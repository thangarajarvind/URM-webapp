import { NavLink } from 'react-router-dom';
import user from '../assets/img/user.png';


const VerticalNavBarComponent = ({links =[]}) => {

    let id = sessionStorage.getItem('id');
	let name = sessionStorage.getItem('name');
	let role = sessionStorage.getItem('role');

    return (
        <header className="side-menu">
            <div className="logo">
                <div className='' style={{height: '50px', width: '50px', borderRadius: '50%', }}>
                    <img src={user} style={{display: 'block', width: '100%', height: '100%'}}/>
                </div>
                <p>{name}</p>
            </div>
            <ul className ="menu">
                {links.map(({to, label, icon}, index) =>(<li key={index}><NavLink to={to}><i className ={icon}></i><span>{label}</span></NavLink></li>))}
            </ul>
        </header>
    )
}

export default VerticalNavBarComponent;