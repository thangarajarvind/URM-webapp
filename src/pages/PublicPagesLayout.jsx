import {Outlet} from 'react-router-dom';
import { NavBarComponent } from '../components';
import '../assets/css/home.css';

const PublicPagesLayout = () => {
  return (
    <>
        <NavBarComponent />
        <main><Outlet></Outlet></main>
    </>
  )
}

export default PublicPagesLayout;