import React from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';

const Catalog = () => {

    const {category, type} = useParams();

    return (
        <>
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'Shows'}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category} type={type}/>
                </div>
            </div>
        </>
    );
}

export default Catalog;