import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import AboutPage from './AboutPage'
import DataSynchronize from './DataSynchrnoize'
import FacialReco from './FacialReco'

function WelCome() {
    return (
        <>
        <Navbar/>
        <LandingPage/>
        <AboutPage/>
        <DataSynchronize/>
        <FacialReco/>
        </>
    )
}

export default WelCome
