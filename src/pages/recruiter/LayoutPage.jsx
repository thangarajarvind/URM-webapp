import { Outlet } from "react-router-dom";
import {VerticalNavBarComponent} from '../../components';

const LayoutPage = () => {
  const links =[
    {to: '/recruiter',  label: 'Dashboard', icon: '' },
    {to: '/recruiter/profile',  label: 'Profile', icon: '' },
    {to: '/recruiter/jobs',  label: 'Jobs', icon: '' },
    {to: '/recruiter/candidates',  label: 'Candidates', icon: '' },
    {to: '/recruiter/interview',  label: 'Interview', icon: '' },
    {to: '/recruiter/applications',  label: 'Applications', icon: '' },
    {to: '/logout',  label: 'Logout', icon: '' },
  ]
  return (
    <>
    <main className="main">
        <VerticalNavBarComponent links={links}/>
        <div></div>
        <Outlet />
    </main>
    </>
  )
}

export default LayoutPage;