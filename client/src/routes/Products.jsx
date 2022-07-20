import { Outlet } from 'react-router-dom';

const Products =() => {
    return (
      <div className="Products">
        
        <div>
          <h1>Products</h1>
        </div>
        <Outlet />

      </div>
    );
  };
  
  export default Products;