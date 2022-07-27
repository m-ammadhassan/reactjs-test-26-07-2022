import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Footer from './Footer';
import './TaskThree.css';

const TaskThree = () =>
{
    

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='*' element={<h5>Page Not Found</h5>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default TaskThree;