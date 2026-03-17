import { useParams,BrowserRouter,Routes,Route } from 'react-router-dom';

function DynamicRoutes_multi() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/product/:category/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

// function Home() {
//   return <h1>Select a user</h1>;
// }



function ProductDetail() {
  const { category, productId } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Category: {category}</p>
      <p>Product ID: {productId}</p>
    </div>
  );
}

export default  DynamicRoutes_multi;

// URL: /product/electronics/laptop-123
// category = "electronics"
// productId = "laptop-123"