let friendsData = require("../data/friends");
let bfData = require("../data/bestFriends");

let compareData = require("../script/compareFile");

let bestData = require("../script/bestFile");

function User () {

    console.log('User Function Called');

    // console.log('friends data: ', friendsData);

    // console.log('BF Data: ', bfData);

    var compare = compareData.Compare;
    // FUNCTION
    // console.log('Compare Data: ', compare);

    var best = bestData.Best;
    // FUNCTION
    // console.log('Compare Data: ', best);



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