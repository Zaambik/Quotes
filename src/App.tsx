import { FC, useState } from 'react';
import { Route, Routes } from 'react-router';

import AppContext from './hooks/useContext';

import Header from './components/layout/header/Header';
import Home from './components/pages/home/Home';
import Footer from './components/layout/footer/Footer';
import Quotes from './components/pages/quotes/Quotes';

import './App.css';


const App: FC = () => {
   const [activePage, setActivePage] = useState<string>('');

   return (
      <AppContext.Provider value>
         <div className="App">
            <Header activePage={activePage} />

            <main>
               <Routes>
                  <Route path="/" element={<Home setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="/quotes" element={<Quotes setActivePage={(page) => setActivePage(page)} />} />
                  <Route path="*" element={<h2>page not found</h2>} />
               </Routes>
            </main>

            <Footer />
         </div>
      </AppContext.Provider>
   );
};

export default App;
