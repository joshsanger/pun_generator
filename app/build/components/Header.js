import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="top-banner">
                <div className="container">
                    <div className="flex-wrapper center between">
                        <div className="text">
                            <a href="http://joshuasanger.ca/" target="_blank">
                                <img src="./assets/images/logo.svg" alt=""/>
                            </a>
                            <div>
                                <span>Your very own</span>
                                <h1>Pun Generator</h1>
                            </div>
                        </div>
                        <span className="button generate" onClick={this.props.set_randomPun}>
                            <i className="material-icons">&#xE5D5;</i>
                            <span>Generate a pun!</span>
                        </span>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;