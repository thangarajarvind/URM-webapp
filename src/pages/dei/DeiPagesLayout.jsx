import { Outlet } from 'react-router-dom';
import { VerticalNavBarComponentss } from '../../components';
import '../../assets/css/deiofficer.css';

const DeiPagesLayout  = () => {
    const links =[
        {to: '/deiofficer', label: 'Dashboard', icon: 'fas fa-tachometer-alt'},
        {to: '/deiofficer/CandidateSearchPage', label: 'Candidate', icon: 'fa-solid fa-briefcase'},
        {to: '/deiofficer/chat', label: 'Chat', icon: 'fa-solid fa-comments'},
        {to: '/deiofficer/profile', label: 'Profile', icon: 'fa-solid fa-user'},
        {to: '/deiofficer/matching', label: 'Matchings', icon: 'fa-solid fa-comments'},
        {to: '/deiofficer/notifications', label: 'Notifications', icon: 'fa-solid fa-bell'},
        {to: 'https://axt4888.uta.cloud/', label: 'Blog', icon: 'fa-solid fa-blog'},
        {to: '/logout', label: 'Logout', icon: 'fas fa-sign-out-alt'},
    ]
    return (
        <div className='main-container'>
            <VerticalNavBarComponentss links={links}/>
            <div></div>
            <main><Outlet></Outlet></main>
        </div>
    )
}

export default DeiPagesLayout ;