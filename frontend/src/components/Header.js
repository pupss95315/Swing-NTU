import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    let UID = localStorage.getItem("id")
    let group = localStorage.getItem("group")

    const handleClear = () => {
        localStorage.removeItem("id")
        localStorage.removeItem("group")
        localStorage.removeItem("isLogin")
    }
    
    return(
        <Navbar style={{backgroundColor: "#F4F3EE"}} className="mb-5 py-2 px-5 ps-5 align-items-center">
            <Navbar.Brand>
                <h4>Swing NTU</h4>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>  
                    <Nav.Item id="navbarItem">
                        <Nav.Link href={"/mainPage/"}>
                            <h4>首頁</h4>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item id="navbarItem">
                        <Nav.Link href={"/infoPage/"+group+"/"}>
                            <h4>志願表</h4>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item id="navbarItem">
                        <Nav.Link href="/" onClick={() => handleClear()}>
                            <h4>登出</h4>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;