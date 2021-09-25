import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="footer_home">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-xs-12 about-company">
                                           <br />
                                    <br />

                                    <p className="pr-5 text-white-50"> © 2019 OnStep. All rights reserved</p>




                                </div>

                                <div class="col-lg-4 col-xs-12 links">
                                    <h5 className="mt-lg-0 mt-sm-3">CONTACT US</h5>
                                    <p className="pr-5 text-white-50">niroshananthan@gmail.com </p>
                                </div>

                                <div class="col-lg-4 col-xs-12 location">
                                    <h5 class="mt-lg-0 mt-sm-4">NEWSLETTER</h5>
                                    <p className="pr-5 text-white-50">Subscribe to our newsletter to receive weekly news, updates, special offers, and exclusive discounts</p>
                                    <div className="form-newsletter">
                                        <label>Enter Your Email</label>
                                        <input type="email" className="form-control" />
                                        
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div >
        )
    }
}
export default Footer;