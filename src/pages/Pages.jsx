import React from 'react'
import Home from './Home';
import Cuisine from './Cuisine';
import { Route, Routes, useLocation } from 'react-router-dom';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes Location={location} key={location.pathname}>
        <Route path='/' Component={Home} />
        <Route path='/cuisine/:type' Component={Cuisine} />
        <Route path='/searched/:search' Component={Searched} />
        <Route path='/recipe/:name' Component={Recipe} />
      </Routes>
    </AnimatePresence>

  )
}

export default Pages