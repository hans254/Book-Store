import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);
    const handleOrderPopup = () =>{
      setOrderPopup(!orderPopup);
    };
    React.useEffect(() => {
      AOS.init({
        duration: 800,
        offset: 100,
        easing: 'ease-in-sine',
        delay: 100,
      }, []);
      AOS.refresh();
    });
  return (
    <>
      <div>
        <div>
          <Navbar handleOrderPopup={handleOrderPopup}/>
          <Hero handleOrderPopup={handleOrderPopup}/>
          <TopProducts handleOrderPopup={handleOrderPopup}/>
          <Banner />
          <Subscribe />
          <Products />
          <Testimonials />
          <Footer />
          <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
        </div>
      </div>
    </>
  )
}

export default App
