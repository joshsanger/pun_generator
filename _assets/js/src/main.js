/**
 * T A B L E   O F   C O N T E N T S
 *
 * @author      Joshua Sanger
 * @version     1.0
 *
 * 01. GLOBAL VARIABLES
 * 02. FETCH RANDOM PUN
 * XX. ON LOAD
 * XX. ASSIGN FUNCTIONS
 */

/**
 * 01. GLOBAL VARIABLES
 * Variables used throughout the application
 */
var currentPun;
var puns = [
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
    },
];


/**
 * 02. FETCH RANDOM PUN
 * Fetches a random pun and swaps out the old pun
 */
function fetchRandomPun() {

    var pun;
    var randNum = Math.floor((Math.random() * puns.length));

    while (randNum == currentPun) {
        randNum = Math.floor((Math.random() * puns.length));
    }

    currentPun = randNum;
    pun = puns[randNum];

    $('.pun--pun').text(pun.pun);
    $('.pun--topic').text(pun.topic);
}


$(window).load(function(){
    /**
     * XX. ON LOAD
     * Function to run on load
     */
});

$(document).ready(function(){

    /**
     * XX. ASSIGN FUNCTIONS
     * Assigns the functions to run the page once the document has loaded
     */

    $('.generate').on('click', fetchRandomPun);
    fetchRandomPun();
});