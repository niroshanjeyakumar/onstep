import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
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