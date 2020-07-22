import React, { Component } from 'react';

// importing stylesheet
import './style.css';

class Loader extends Component {
    render() {
        return (
            <div className="container-fluid loaderContainer">
                <div className="loadingContain">
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_ApLQiZ.json"
                        background="transparent" speed="2" loop autoplay></lottie-player>
                </div>
            </div>
        )
    }
}

export default Loader;
