import {Outlet} from 'react-router-dom';
import { VerticalNavBarComponent } from '../../components';
import '../../assets/css/admin.css';

const AdminPagesLayout = () => {
  const links =[
    {to: '/admin', label: 'Dashboard', icon: 'fas fa-tachometer-alt'},
    {to: '/admin/manage-users', label: 'Manage Users', icon: 'fas fa-users'},
    {to: '/admin/chat', label: 'Chat', icon: 'fa-solid fa-comments'},
    {to: 'https://axt4888.uta.cloud/', label: 'Blog', icon: 'fa-solid fa-gear'},
    {to: '/admin/settings', label: 'Settings', icon: 'fa-solid fa-gear'},
    {to: '/logout', label: 'Logout', icon: 'fas fa-sign-out-alt'}
  ]
  return (
    <main className='main'>
        <VerticalNavBarComponent links={links}/>
        <div></div>
        <Outlet></Outlet>
    </main>
  )
}

export default AdminPagesLayout;