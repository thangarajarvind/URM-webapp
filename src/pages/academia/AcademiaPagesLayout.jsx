import { Outlet } from 'react-router-dom';
import { VerticalNavBarComponents } from '../../components';
import '../../assets/css/academia.css';

const AcademiaPagesLayout  = () => {
    const links =[
        {to: '/academia', label: 'Dashboard', icon: 'fas fa-tachometer-alt'},
        {to: '/academia/CandidateSearchPage', label: 'Candidate', icon: 'fa-solid fa-briefcase'},
        {to: '/academia/chat', label: 'Chat', icon: 'fa-solid fa-comments'},
        {to: '/academia/profile', label: 'Profile', icon: 'fa-solid fa-user'},
        {to: '/academia/matching', label: 'Matchings', icon: 'fa-solid fa-comments'},
        {to: '/academia/notifications', label: 'Notifications', icon: 'fa-solid fa-bell'},
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