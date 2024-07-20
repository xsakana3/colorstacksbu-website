import React from "react";
import './App.css';
import { Routes, Route} from "react-router-dom";
import { HomePage } from "../pages/home";
import { EventPage } from "../pages/events";
import { AboutPage } from "../pages/about";
import { SponsorPage } from "../pages/sponsor";
import { ContactPage } from "../pages/contact";


function AppRouter() {

  return (
    <div className="app">
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/events' element={<EventPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/sponsor' element={<SponsorPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
    </div>
  );
}

export default AppRouter
