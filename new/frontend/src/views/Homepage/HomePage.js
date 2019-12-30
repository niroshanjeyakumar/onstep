import React, { Component } from 'react';
import NavBar from 'components/Navbars/onstepNavbar';
import Footer from 'components/Footers/onstepFooter.js';
import InfoPage from './InfoPage';
import About from './About';

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <InfoPage/>
                <About/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage;