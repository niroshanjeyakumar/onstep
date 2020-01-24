import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';
import 'assets/css/navigation.css';

function SideNav(){

    return(
        <div className="sidenav">
    
                <a class="nav-link active" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled" href="#">Disabled</a>
        </div>
    )

}

export default SideNav;