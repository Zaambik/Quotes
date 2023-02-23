import { FC, useState } from 'react';
import { Route, Routes } from 'react-router';

import AppContext from './hooks/useContext';

import Header from './components/layout/header/Header';
import Home from './components/pages/home/Home';
import Footer from './components/layout/footer/Footer';
import Quotes from './components/pages/quotes/Quotes';
import NotFound from './components/pages/not-found/NotFound';

import './App.css';

const App: FC = () => {
   return (
      <AppContext.Provider value>
         <Header />

         <main>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/quotes" element={<Quotes />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </main>

         <Footer />
      </AppContext.Provider>
   );
};

export default App;
