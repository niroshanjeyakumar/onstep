import React, { Component } from 'views/supermarket/Vege/node_modules/react';


class Vege extends Component {
    render() {
        return (
            <div>
                 <h1>Arpico Supermarket</h1>
                <header>
                    <figure className="profile-banner">
                        <img src="http://www.winmo.lk/projects/arpico-super-centre-matara/main.jpg" alt="Profile banner" />
                    </figure>
                    <figure className="profile-picture" style={{ backgroundImage: 'url("http://colomboo.lk/assets/media/vendors/2304/logo_image.jpg")' }}>
                    </figure>
                    <div className="profile-stats">
                        <p>details of company</p>
                        <a href="javascript:void(0);" className="follow">
                            Edit Profile
                        </a>
                        
                        <a href="/onstep" className="follow">
                           LogOut
                        </a>
                    </div>

                </header>
                <div class="mymenu">
                    <div class="col-md-6"><br></br><nav class="bg-primary navbar navbar-expand-lg">
                        <div class="container"><a href="#pablo" class="navbar-brand">Menu</a>
                        <button aria-expanded="false" class="navbar-toggler"><span class="navbar-toggler-bar bar1">
                            </span><span class="navbar-toggler-bar bar2"></span><span class="navbar-toggler-bar bar3">
                                </span></button><div class="collapse navbar-collapse"><ul class="navbar-nav">
                                    <li class="active nav-item"><a href="#pablo" class="nav-link"><p>Add Offers</p></a></li>
                                    <li class="nav-item"><a href="#pablo" class="nav-link"><p>Manage Items</p></a></li>
                                    <li class="dropdown nav-item"><a aria-haspopup="true" href="#" class="dropdown-toggle nav-link" aria-expanded="false">
                                        <p>Others</p></a><div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                            <a href="#pablo" tabindex="0" role="menuitem" class="dropdown-item">Generate Report</a><a href="#pablo" tabindex="0" role="menuitem" class="dropdown-item">Another action</a>
                                            <a href="#pablo" tabindex="0" role="menuitem" class="dropdown-item">View customer rating </a></div></li></ul></div></div></nav></div>
                </div>

            
            </div>
        )
    }
}

export default Vege;