import React from 'react';
import NavBar from 'components/Navbars/onstepNavbar';
import Footer from 'components/Footers/onstepFooter.js';
import InfoPage from './InfoPage';
import About from './About';

function HomePage() {
    React.useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("login-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });
        return (
            <div>
                <NavBar/>
                <InfoPage/>
                <About/>
                <Footer/>
            
            </div>
        )
    }


export default HomePage;