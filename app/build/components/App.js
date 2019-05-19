import React, {Component} from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class App extends Component {
    /**
     * 01.01. CONSTRUCTOR
     * Sets up the class
     */
    constructor(props) {

        super(props);
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

export default App;