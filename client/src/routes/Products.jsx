import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import '../styles/Products.scss'

const Products = () => {
  return (
    <div className="Products">
      <section className='side-bar'>
      <SideBar />
      </section>
      <Outlet />
    </div>
  );
};

export default Products;