import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Contact from '../pages/Contact'
import HowItWorks from '../pages/HowItWorks'
import Home from '../pages/Home'
import BuySell from '../pages/BuySell'
import Faq from '../pages/Faq'
import Disclaimer from '../pages/Disclaimer'
import Privacy from '../pages/Privacy'
import Blog from '../pages/Blog'

const PrivateRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/buy-sell' element={<BuySell />}></Route>
                <Route path='/faqs' element={<Faq />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/howitworks' element={<HowItWorks />}></Route>
                <Route path='/disclaimer' element={<Disclaimer />}></Route>
                <Route path='/privacy' element={<Privacy />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
            </Routes>
        </>
    )
}

export default PrivateRoutes