import { Outlet } from 'react-router-dom';
import { VerticalNavBarComponents } from '../../components';
import '../../assets/css/academia.css';

const AcademiaPagesLayout  = () => {
    const links =[
        {to: '/acadamia', label: 'Dashboard', icon: 'fas fa-tachometer-alt'},
        {to: '/acadamia/CandidateSearchPage', label: 'Candidate', icon: 'fa-solid fa-briefcase'},
        {to: '/acadamia/chat', label: 'Chat', icon: 'fa-solid fa-comments'},
        {to: '/acadamia/profile', label: 'Profile', icon: 'fa-solid fa-user'},
        {to: '/acadamia/matching', label: 'Matchings', icon: 'fa-solid fa-comments'},
        {to: '/acadamia/notifications', label: 'Notifications', icon: 'fa-solid fa-bell'},
        {to: 'https://axt4888.uta.cloud/', label: 'Blog', icon: 'fa-solid fa-blog'},
        {to: '/logout', label: 'Logout', icon: 'fas fa-sign-out-alt'},
    ]
    return (
        <div className='main-container'>
            <VerticalNavBarComponents links={links}/>
            <div></div>
            <main><Outlet></Outlet></main>
        </div>
    )
}

export default AcademiaPagesLayout ;