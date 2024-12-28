import React, { useEffect, useState } from 'react'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './components/AllProducts/AllProducts'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import toast, { Toaster } from 'react-hot-toast'
import { auth } from './firebase/firebase'
import SingleProduct from './components/SignleProduct/SingleProduct'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

const App = () => {

  const [cart, setCart] = useState([]);
  const [promocode, setPromocode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [invalid, setInvalid] = useState("");
  const [userName, setUserName] = useState("");

  const addToCart = (product) => {

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCart(updatedCart);
    } else {

      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("Product added to cart successfully!")
    }
  }

  const handleIncrease = (id) => {
    const incQuantity = cart.map((item) => (
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))

    setCart(incQuantity);
  }

  const handleDecrease = (id) => {
    const decQuantity = cart.map((item) => (
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ))

    setCart(decQuantity);
  }

  const handleRemove = (id) => {
    const removeCart = cart.filter(item => item.id !== id)
    setCart(removeCart);
  }


  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    return totalPrice - discount;
  }

  const applyPromoCode = () => {
    if (promocode === "DISCOUNT10") {
      setDiscount(getTotalPrice() * 0.1);
      setPromocode("");
      setInvalid("");

    } else {
      setInvalid("Invalid promo code");
      // setPromocode("");
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    })
  }, [])



  return (
    <div>
      <Navbar cart={cart} userName={userName} />
      <Routes>

        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={
          <Cart
            cart={cart}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            handleRemove={handleRemove}
            getTotalPrice={getTotalPrice}
            applyPromoCode={applyPromoCode}
            promocode={promocode}
            setPromocode={setPromocode}

          />
        }
        />
        <Route path='/all-products' element={<AllProducts addToCart={addToCart} />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/single-product/:id' element={<SingleProduct addToCart={addToCart} />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App