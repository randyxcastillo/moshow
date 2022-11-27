import React from 'react';

import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const TheRoutes = () => {
    return (
        <Routes>
            <Route
                exact path='/:category/search/:keyword'
                element={<Catalog/>}>
            </Route>
            <Route
                exact path='/:category/details/:id'
                element={<Detail/>}>
            </Route>
            <Route
                exact path='/:category/:type'
                element={<Catalog/>}>
            </Route>
            <Route
                exact path ='/'
                element={<Home/>}>
            </Route>
        </Routes>
    );
}

export default TheRoutes;