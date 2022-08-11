import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import '../styles/Products.scss'

const Products = () => {
  return (
    <div className="Products">
      <section>
      <SideBar />
      </section>
      {/* <h1 className='Title'>Products</h1> */}

    </div>
  );
};

export default Products;