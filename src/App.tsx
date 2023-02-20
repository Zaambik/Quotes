import { FC, useState } from 'react';
import { Route, Routes } from 'react-router';

import Header from './components/layout/header/Header';

import './App.css';
import About from './components/pages/about/About';
import Footer from './components/layout/footer/Footer';
import Quotes from './components/pages/quotes/Quotes';

const App: FC = () => {
   const [activePage, setActivePage] = useState<string>('about');

   return (
      <div className="App">
         <Header activePage={activePage} />

         <div className="main">
            <Routes>
               <Route path="/" element={<About setActivePage={(page) => setActivePage(page)} />} />
               <Route path="/catalog" element={<Quotes setActivePage={(page) => setActivePage(page)} />} />
            </Routes>
         </div>

         <Footer />
      </div>
   );
};

export default App;
