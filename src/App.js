import React from 'react';

import 'swiper/swiper.min.css';
import './assets/boxicons-2.1.4/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter as Router} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import AppRoutes from './config/Routes';

function App() {
    return (
        <Router>
            <div>
              <Header/>
              <AppRoutes/>
              <Footer/>
            </div>
        </Router>
    );
}

export default App;