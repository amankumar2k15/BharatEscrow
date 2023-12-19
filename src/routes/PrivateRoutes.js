import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
const BuySell = lazy(() => import('../pages/BuySell'));
const DetailBlog = lazy(() => import('../pages/DetailBlog'));
const Blog = lazy(() => import('../pages/Blog'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Disclaimer = lazy(() => import('../pages/Disclaimer'));
const Faq = lazy(() => import('../pages/Faq'));
const Home = lazy(() => import('../pages/Home'));
const HowItWorks = lazy(() => import('../pages/HowItWorks'));
const Contact = lazy(() => import('../pages/Contact'));









const PrivateRoutes = () => {
    const location = useLocation();
    const [detailRoutes, setDetailRoutes] = useState({ route: null, data: null })
    const routeDetail = localStorage.getItem("detailRoute")
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Suspense fallback={
                <div className='flex items-center justify-center h-screen'>
                    <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }
            >

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/buy-sell' element={<BuySell />}></Route>
                    <Route path='/faqs' element={<Faq />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/how-it-works' element={<HowItWorks />}></Route>
                    <Route path='/disclaimer' element={<Disclaimer />}></Route>
                    <Route path='/privacy' element={<Privacy />}></Route>
                    <Route path='/blog' element={<Blog setDetailRoutes={setDetailRoutes} />}></Route>
                    <Route path={`/${!routeDetail ? detailRoutes.route : routeDetail}`} element={<DetailBlog data={detailRoutes} />}></Route>
                </Routes>
            </Suspense>
        </>
    )
}

export default PrivateRoutes