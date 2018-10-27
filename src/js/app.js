/**
 * T A B L E   O F   C O N T E N T S
 *
 * @author      Geek Power Web Design
 * @version     1.0
 *
 * TODO: Move components into separate files (Babel + Webpack)
 * TODO: Add section for user input (topic & pun)
 *
 * 01.    PUN GENERATOR APP
 * 01.01. CONSTRUCTOR
 * 01.02. SET RANDOM PUN
 * 01.03. RENDER APP
 * 02.    HEADER COMPONENT
 * 02.01. RENDER HEADER
 * 03.    BODY COMPONENT
 * 03.01. CONSTRUCTOR
 * 03.02. RENDER BODY
 * 04.    PUN COMPONENT
 * 04.01. CONSTRUCTOR
 * 04.02. RENDER PUN
 * 04.    FOOTER COMPONENT
 * 05.01. RENDER FOOTER
 * 06.    RENDER APP TO PAGE
 */


/**
 * 01. PUN GENERATOR APP
 * The main component for rendering the application
 */
class PunGeneratorApp extends React.Component {


    /**
     * 01.01. CONSTRUCTOR
     * Sets up the class
     */
    constructor() {

        super();
        this.set_randomPun  = this.set_randomPun.bind(this);
        const puns          = [
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
    }


    /**
     * 01.02. SET RANDOM PUN
     * Changes the state to set a random pun
     */
    set_randomPun() {

        let pun;
        let randNum = Math.floor((Math.random() * this.state.puns.length));

        while (randNum == this.state.currentPunIndex) {
            randNum = Math.floor((Math.random() * this.state.puns.length));
        }

        this.setState(() => ({currentPunIndex: randNum}));
    }


    /**
     * 01.03. RENDER APP
     * Renders the component
     *
     * @returns     JSX
     */
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


/**
 * 02. HEADER COMPONENT
 * The header / top banner of the application
 */
class Header extends React.Component {

    /**
     * 02.01. RENDER HEADER
     * Renders the header component
     */
    render() {
        return (
            <header className="top-banner">
                <div className="container">
                    <div className="flex-wrapper center between">
                        <div className="text">
                            <a href="http://joshuasanger.ca/" target="_blank">
                                <img src="./_assets/images/logo.svg" alt=""/>
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
        )
    }
}


/**
 * 03. BODY COMPONENT
 * Section that contains the main content and pun wrapper
 */
class Body extends React.Component {

    /**
     * 03.01. CONSTRUCTOR
     * Sets up the body component
     */
    constructor(props) {
        super(props);
    }


    /**
     * 03.02. RENDER BODY
     * Renders the body component
     */
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


/**
 * 04. PUN COMPONENT
 * The pun component. This will re-render when the current pun changes
 */
class Pun extends React.Component {

    /**
     * 04.01. CONSTRUCTOR
     * Sets up the pun component
     */
    constructor(props) {
        super(props);
    }


    /**
     * 04.02. RENDER PUN
     * Renders the pun component
     */
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


/**
 * 05. FOOTER COMPONENT
 * Section that contains the footer content
 */
class Footer extends React.Component {

    /**
     * 05.01. RENDER FOOTER
     * Renders the footer component
     */
    render() {
        return (
            <footer className="content">
                <div className="container">
                    <p className="center-text secondary-text">
                        Much to my wife's dismay, I absolutely love puns! So much so, that I've created this little
                        generator for you.<br/>
                        Made with <i className="material-icons red">favorite</i> on <a href="https://github.com/joshsanger/pun_generator" target="_blank">Github</a> by Joshua Sanger
                    </p>
                </div>
            </footer>
        );
    }
}


/**
 * 06. RENDER APP TO PAGE
 * Renders the main component to the browser
 */
ReactDOM.render(<PunGeneratorApp />, document.getElementById('app'));