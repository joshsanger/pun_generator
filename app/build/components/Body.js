import React, {Component} from 'react';
import Pun from "./Pun";

class Body extends Component {
    render() {
        return (
            <section className="content white-background">
                <div className="container">
                    <div className="pun-wrap">
                        <Pun puns={this.props.puns} punIndex={this.props.punIndex}/>
                        <div className="fetching">
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Body;