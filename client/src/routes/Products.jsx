import { Outlet } from 'react-router-dom';

const Products =() => {
    return (
      <div className="Products">
        <h1>Products</h1>
        <Outlet />
      </div>
    );
  };
  
  export default Products;