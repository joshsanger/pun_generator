class PunGeneratorApp extends React.Component {

    constructor() {
        super();

        const puns = [
            {
                pun  : 'I can\'t believe I got fired from the calendar factory. All I did was take a day off!',
                topic: 'Work'
            },
            {
                pun  : 'I wasn\'t originally going to get a brain transplant, but then I changed my mind.',
                topic: 'Medicine'
            },
            {
                pun  : 'eBay is so useless! I tried to look up lighters and all they had was 13,749 matches.',
                topic: 'E-commerce'
            },
            {
                pun  : 'I\'m glad I know sign language, it\'s pretty handy.',
                topic: 'Life'
            },
            {
                pun  : 'Although I love puns, i really hate insect puns. I don\'t what it is, but they just bug me.',
                topic: 'Deep thoughts'
            },
            {
                pun  : 'I wanna make a joke about sodium, but Na...',
                topic: 'Science'
            },
            {
                pun  : 'In grade school, my math teacher called me average - How mean!',
                topic: 'Math'
            },
            {
                pun  : 'What\'s the difference between a poorly dressed man on a bicycle, and a nicely dressed man on a tricycle? A tire.',
                topic: 'Fashion'
            },
            {
                pun  : 'On my way to work one day I saw a bike laying on it\'s side with the owner standing over it. When asked why his bike was laying on the ground, he replied, "I guess it was two tired."',
                topic: 'Transportation'
            },
            {
                pun  : '"He\'s an udder disgrace!", said the farmer as he pointed at his obese cow.',
                topic: 'Farm life'
            },
            {
                pun  : 'I would tell a history pun, but they\'re too old fashioned.',
                topic: 'School'
            },
            {
                pun  : 'The invention of the shovel must have been ground breaking!',
                topic: 'Tools'
            }
        ];
        this.state          = {
            puns,
            currentPunIndex: Math.floor((Math.random() * puns.length))
        }
        this.set_randomPun  = this.set_randomPun.bind(this);
    }


    set_randomPun() {

        let pun;
        let randNum = Math.floor((Math.random() * this.state.puns.length));

        while (randNum == this.state.currentPunIndex) {
            randNum = Math.floor((Math.random() * this.state.puns.length));
        }

        this.setState(() => ({currentPunIndex: randNum}));
    }


    render() {

        return (
            <main>
                <Header set_randomPun={this.set_randomPun} />
                <Body punIndex={this.state.currentPunIndex} puns={this.state.puns}/>
                <Footer />
            </main>
        );
    }
}

class Pun extends React.Component {

    constructor(props) {
        super(props);
    }

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

class Header extends React.Component {
    render() {
        return (
            <section className="top-banner">
                <div className="container">
                    <div className="flex-wrapper center between">
                        <div className="text">
                            <a href="http://joshuasanger.ca/" target="_blank">
                                <img src="<?php echo BASE_URL;?>/_assets/images/logo.svg" alt=""/>
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
            </section>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <section className="content">
                <div className="container">
                    <p className="center-text secondary-text">
                        Much to my wife's dismay, I absolutely love puns! So much so, that I've created this little
                        generator for you.<br/>
                        Hope you enjoy!
                    </p>
                </div>
            </section>
        );
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);
    }
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

ReactDOM.render(<PunGeneratorApp />, document.getElementById('app'));