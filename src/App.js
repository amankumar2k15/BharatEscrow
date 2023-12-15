import React from 'react'
import HomeWrapper from './layout/HomeWrapper'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <>
      <ToastContainer position='top-left' newestOnTop={true} autoClose={1500} />
      <HomeWrapper />
    </>
  )
}

export default App