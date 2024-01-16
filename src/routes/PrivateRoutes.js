import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Box from '../components/Box';
import IndustryDetail from '../pages/IndustryDetail';

const BuySell = lazy(() => import('../pages/BuySell'));
const DetailBlog = lazy(() => import('../pages/DetailBlog'));
const Blog = lazy(() => import('../pages/Blog'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Disclaimer = lazy(() => import('../pages/Disclaimer'));
const Faq = lazy(() => import('../pages/Faq'));
const Home = lazy(() => import('../pages/Home'));
const HowItWorks = lazy(() => import('../pages/HowItWorks'));
const Contact = lazy(() => import('../pages/Contact'));
const DetailHome = lazy(() => import('../pages/DetailHome'));




const PrivateRoutes = () => {
    const location = useLocation();
    const [blogRoutes, setBlogRoutes] = useState({ route: null })
    const [homeRoutes, sethomeRoutes] = useState({ route: null })
    const [industryRoutes, setIndustryRoute] = useState({ route: null })

    const blogDetail = localStorage.getItem("blogRoute")
    const homeDetail = localStorage.getItem("homeRoute");
    const insdustryDeatil = localStorage.getItem("industryRoutes")
    console.log('dfdfdsfdf', insdustryDeatil);


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                    <Route path='/' element={<Home sethomeRoutes={sethomeRoutes} setIndustryRoute={setIndustryRoute}/>}></Route>
                    <Route
                        path={`/${!homeDetail ? homeRoutes.route : homeDetail}`}
                        element={<DetailHome data={homeRoutes} />}>
                    </Route>
                    {/* <Route path='/industry' element={<Box setIndustryRoute={setIndustryRoute} />}></Route> */}
                    <Route path={`/${!insdustryDeatil ? industryRoutes.route : insdustryDeatil}`} element={<IndustryDetail data={industryRoutes} />} >
                    </Route>
                    <Route path='/buy-sell' element={<BuySell />}></Route>
                    <Route path='/faqs' element={<Faq />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/how-it-works' element={<HowItWorks />}></Route>
                    <Route path='/disclaimer' element={<Disclaimer />}></Route>
                    <Route path='/privacy' element={<Privacy />}></Route>

                    <Route path='/blog' element={<Blog setBlogRoutes={setBlogRoutes} />}></Route>
                    <Route
                        path={`/${!blogDetail ? blogRoutes.route : blogDetail}`}
                        element={<DetailBlog data={blogRoutes} />}>
                    </Route>
                </Routes>
            </Suspense >
        </>
    )
}

export default PrivateRoutes