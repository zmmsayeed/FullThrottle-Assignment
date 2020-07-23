import React, { Component } from 'react';

// importing stylesheet
import './style.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white mb-3">
                    <div className="container">
                        <a className="navbar-brand" href="/#">
                            <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_hdiNFs.json"
                                background="transparent" speed="2"
                                style={{ width: '100px' }} loop autoplay></lottie-player>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Help</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
