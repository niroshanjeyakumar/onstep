import React, { Component } from 'react'
import "./About.css";

class About extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-6 aboutback justify-content-center align-items-center">

                        </div>


                        <div className="col-6 about-text">
                            <h5>A Few Words About Our Store</h5>
                            <hr />
                            <h2>ABOUT US</h2>
                            <hr />
                            <p>Grocmart is a family-owned grocery store that
                                has been offering quality products for your
                                 everyday life since 1999, while also providing
                                  superior service and competitive prices.</p>
                        </div>

                        
                    </div>

                    <div className="row aboutback2">
                        <div className="col-3 about-text2"> 
                            <i class="fas fa-futbol"></i>
                            <h4>QUALITY PRODUCTS</h4>
                            <p>We work with the best suppliers to offer our customers the fresh grocery products of the highest quality.</p>    
                        </div>

                        <div className="col-3 about-text2"> 
                            <h4>AFFORDABLE PRICES</h4>
                            <p>Thanks to our affordable pricing policy, our customers don’t have to overpay for the products they need.</p>
                        </div>

                        <div className="col-3 about-text2"> 
                            <h4>FAST SHIPPING</h4>
                            <p>Our store offers fast worldwide shipping to all customers regardless of what and how much you order.</p>
                        </div>

                        <div className="col-3 about-text2">
                            <h4>OPEN 24/7</h4> 
                            <p>Unlike other grocery shops, we are ready to serve you 24/7 and offer the best selection of groceries.</p>
                        </div>


                    </div>


                

                </div>
            </div>
        )
    }
}

export default About;
