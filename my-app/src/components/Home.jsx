import React from "react";
//import { Link } from 'react-router-dom';
import './assets/css/style.css'
import logo from './assets/img/logo.png'
import profileimage from './assets/img/profile-img.jpg'
import './assets/vendor/simple-datatables/style.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/quill/quill.snow.css';

import './assets/vendor/quill/quill.bubble.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';

// import './style.css';

function Home() {
    // const [showSidebar, setShowSidebar] = useState(false);
    //     function toggleSidebar() {
    //     setShowSidebar(!showSidebar);
    //     } ;

    return (
        <main>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <img src={logo} alt="" className="logo" style={{ width: '123px' }} />
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item dropdown pe-3">
                            <a
                                className="nav-link nav-profile d-flex align-items-center pe-0"
                                href="abc.html"
                                data-bs-toggle="dropdown"
                            >
                                <img
                                    src={profileimage}
                                    alt="Profile"
                                    className="rounded-circle"
                                />
                                <span className="d-none d-md-block dropdown-toggle ps-2">Ganesh</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Ganesh</h6>
                                    <span>Web Designer</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="abc.html">
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="login.html">
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link " href="index.html">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            data-bs-target="#components-nav"
                            data-bs-toggle="collapse"
                            href="abc.html"
                        >
                            <i className="bi bi-menu-button-wide"></i>
                            <span>Components</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul
                            id="components-nav"
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <a href="abc.html#">
                                    <i className="bi bi-circle"></i>
                                    <span>Alerts</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-heading">Pages</li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="abc.html">
                            <i className="bi bi-person"></i>
                            <span>Profile</span>
                        </a>
                    </li>
                </ul>
            </aside>
        

        </main>
    )

}
export default Home;

