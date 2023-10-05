import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import CategoryPage from "pages/CategoryPage";
import ProductsPage from "pages/ProductsPage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
import SingleProductPage from "pages/SingleProductPage";
import OrdersPage from 'pages/OrdersPage';
import SuccessfulPage from 'pages/SuccessfulPage';

const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/success" element={<SuccessfulPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
