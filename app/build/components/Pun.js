import React, {Component} from 'react';

class Pun extends Component {
    render() {

        const pun = this.props.puns[this.props.punIndex];

        return (
            <div className="pun-content">
                <div className="topic">
                    <p>Topic: <span className="pun--topic">{pun.topic}</span></p>
                </div>
                <div className="pun">
                    <i className="material-icons">&#xE815;</i>
                    <p className="pun--pun">{pun.pun}</p>
                </div>

            </div>
        )
    }
}

export default Pun;