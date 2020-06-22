let friendsData = require("../data/friends");
let bfData = require("../data/bestFriends");

// let userData = require("../script/userFile");
// const user = userData.User;
// const newUser = userData.User.newUser;
// const userScore = userData.User.userScore;

let compareData = require("../script/compareFile");
// const compare = compareData.Compare;
// const friendsScore = compareData.Compare.friendsScore;

let bestestData = require("../script/bestFile");
// const best = bestestData.Best;
// const bestMatch =  bestestData.Best.bestMatch;
// const bestData = bestestData.Best.bestData;

function User () {

    res.json(req.body);

    // set up to calculate the score
    var scoreArray = [];

    // bring in the score value
    score = req.body.scores;

    // putting score values in an array
    for (s = 0; s < score.length; s++) {

        scoreArray.push(Number(score[s]));
    };

    // console.log('score array ' + scoreArray);

    // putting score array into new User
    var newUser = {
        id: req.body.id,
        name: req.body.name,
        photo: req.body.photo,
        scores: scoreArray
    };

    // console.log('scores in newUser object: ' + newUser.scores);
    console.log(' ');
    console.log('-----------------------------------------------')
    console.log('User id: ' + newUser.id);
    console.log('User name: ' + newUser.name);
    console.log('User photo: ' + newUser.photo);
    console.log('User scores: ' + newUser.scores);
    console.log('-----------------------------------------------')

    // console.log('New  Friend: ' + newUser);


    var i;

    // Adding up the New Users Score
    var userScore = 0;
    for (i = 0; i < newUser.scores.length; i++) {
        userScore += newUser.scores[i]
    };

    var userScore = [];

    console.log('User Total Score: ' + userScore);

};

module.exports = {
User
  }