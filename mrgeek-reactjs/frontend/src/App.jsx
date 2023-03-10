import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import LoginScreen from './screens/LoginScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { Store } from './Store';
import RegisterScreen from './screens/RegisterScreen';
import OrdersScreen from './screens/OrdersScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import AdmProductScreen from './screens/admin/AdmProductsScreen';
import NewProduct from './screens/admin/NewProductScreen';
import NewProductScreen from './screens/admin/NewProductScreen';

function App() {
  // const { state } = useContext(Store);
  // const { cart } = state;

  return (
    <BrowserRouter>
      <Helmet>
        <title>MrGeek | Home</title>
      </Helmet>
      <div className="d-flex flex-column site-container">
        <header>
          <Header />
        </header>
        <main className="bg-light-pink">
          <Container>
            <Routes>
              <Route path="/products" element={<ProductsScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/orders" element={<OrdersScreen />} />
              <Route path="/favorites" element={<FavoritesScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/admin/products" element={<AdmProductScreen />} />
              <Route path="/admin/new-product" element={<NewProductScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
