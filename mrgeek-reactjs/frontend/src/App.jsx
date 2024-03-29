import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import LoginScreen from './screens/LoginScreen';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import RegisterScreen from './screens/RegisterScreen';
import OrdersScreen from './screens/OrdersScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import AdmProductScreen from './screens/admin/AdmProductsScreen';
import NewProductScreen from './screens/admin/NewProductScreen';
import UsersScreen from './screens/admin/UsersScreen';
import UpdateProductScreen from './screens/admin/UpdateProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import AuthProvider from './contexts/AuthContext';
import ProtectedRoutes from './components/ProtectedRoutes';
import OrderNumberScreen from './screens/OrderNumberScreen';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>MrGeek | Home</title>
      </Helmet>
      <AuthProvider>
        <div className="d-flex flex-column site-container">
          <header>
            <Header />
          </header>
          <main className="bg-light-pink">
            <Container>
              <Routes>
                <Route path="/profile/:id" element={<ProfileScreen />} />
                <Route path="/products" element={<ProductsScreen />} />
                <Route path="/product/:id" element={<ProductScreen />} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="/profile/orders" element={<OrdersScreen />} />

                <Route path="/" element={<PrivateRoutes />}>
                  <Route path="cart" element={<CartScreen />} />
                </Route>

                <Route path="/favorites" element={<FavoritesScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route
                  path="/order-number/:id"
                  element={<OrderNumberScreen />}
                />
                <Route path="/" element={<ProtectedRoutes />}>
                  <Route path="admin/products" element={<AdmProductScreen />} />
                  <Route
                    path="admin/products/update/:id"
                    element={<UpdateProductScreen />}
                  />
                  <Route path="/admin/users" element={<UsersScreen />} />
                  <Route
                    path="admin/new-product"
                    element={<NewProductScreen />}
                  />
                </Route>
              </Routes>
            </Container>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
