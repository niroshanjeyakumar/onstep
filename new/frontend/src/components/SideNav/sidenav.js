import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { useState } from 'react';
import 'assets/css/navigation.css';
import {
Nav,Button

} from 'reactstrap';

function SideNav(){
    return(
        <>
        <div className="sidenav">
        <h4 align='center'>OnStep</h4>
          <h5 align='center'>Administrator</h5>
          <Nav navbar>
            <Button className="sideNavItem" color="info" href='/administrator'> <i className="now-ui-icons ui-2_settings-90"></i> Dashboard</Button>
        
           <h5 align="center">Users</h5>
           <Button className="sideNavItem" color="info" href='/administrator/customer'> <i className="now-ui-icons users_single-02"></i> Customer Dashboard</Button>
           <Button className="sideNavItem" color="info" href='/administrator/supermarket'> <i className="now-ui-icons shopping_shop"></i> Supermarket Dashboard</Button>
           <Button className="sideNavItem" color="info" href='/administrator/delivery'> <i className="now-ui-icons shopping_delivery-fast"></i>Delivery Dashboard</Button>
           
           
           <h5 align="center">Messages</h5>
           <Button className="sideNavItem" color="info" href='/administrator/unread_messages'> <i className="now-ui-icons ui-2_chat-round"></i> Unread Messages</Button>
           <Button className="sideNavItem" color="info" href='/administrator/read_messages'> <i className="now-ui-icons ui-2_chat-round"></i> Read Messages</Button>
          
            
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons ui-1_email-85"></i>
                  Feedback/Complaints
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/administrator/unread_messages" tag={Link}>
                    <i className="now-ui-icons ui-2_chat-round"></i>
                    Unread Feedback
                  </DropdownItem>
                  <DropdownItem
                    href="/administrator/read_messages"
                    target="_blank"
                  >
                    <i className="now-ui-icons ui-2_chat-round"></i>
                    Read Feedback
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              
                </Nav>
        </div>
        </>
    )

}

export default SideNav;