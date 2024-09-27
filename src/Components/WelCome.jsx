import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import AboutPage from './AboutPage'
import DataSynchronize from './DataSynchrnoize'
import FacialReco from './FacialReco'

import ContactUs from './ContactUs'
import Footer from './Footer'
import GpsTracking from './GpsTracking'
import GeoFencing from './GeoFencing'

function WelCome() {
    return (
        <>
        <Navbar/>
        <LandingPage/>
        <AboutPage/>
        <DataSynchronize/>
        <FacialReco/>
        <GpsTracking/>
        <GeoFencing/>
        <ContactUs/>
        <Footer/>
        
        </>
    )
}

export default WelCome
