import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="content">
                    <div className="container">
                        <p className="center-text secondary-text">
                            Much to my wife's dismay, I absolutely love puns! So much so, that I've created this little
                            generator for you.<br/>
                            Made with <i className="material-icons red">favorite</i> on <a href="https://github.com/joshsanger/pun_generator" target="_blank">Github</a> by Joshua Sanger
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;