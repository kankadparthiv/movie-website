import  React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import FooterComponent from  '../Components/Footer/index';
import HeaderComponent from '../Components/Header';
import HomeContainer from '../Container/Home';
import ContactContainer from '../Container/Contact';
import DetailsContainer from '../Container/Details';
import MoviesContainer from '../Container/Movies';
import TvSeriesContainer from '../Container/TvSeries';
import SearchContainer from '../Container/Search';

import Popular from '../Container/Popular';
import UPCOMING from '../Container/Upcoming';
const  RouteComponent = ()=>{

    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                    <Routes>
                        <Route path="/movie-website" element={<HomeContainer />} />
                        <Route path="/movies" element={<MoviesContainer />} />
                        <Route path="/series" element={<TvSeriesContainer />} />
                        <Route path="/search" element={<SearchContainer />} />
                        <Route path="/contact" element={<ContactContainer />} />
                        <Route path='/upcoming' element={<UPCOMING/>}/>
                        <Route path='/popular' element={<Popular/>}/>
                        <Route path="/details/:movieid/:mediatype" element={<DetailsContainer />} />
                    </Routes>        
                <FooterComponent />
            </BrowserRouter>
        </>
    )
}

export default RouteComponent;
