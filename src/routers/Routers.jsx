import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Movies } from '../components/movies/Movies';
import { Prices } from '../components/prices/Prices';
import { Trends } from '../components/trends/Trends';
import { TvShows } from '../components/tvShows/TvShows';

export const Routers = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Movies />}
            />
            <Route
                path='/tvshows'
                element={<TvShows />}
            />
            <Route
                path='/trends'
                element={<Trends />}
            />
            <Route
                path='/subcriptions'
                element={<Prices />}
            />
        </Routes>
    )
}
