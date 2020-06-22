let friendsData = require("../data/friends");
let bfData = require("../data/bestFriends");

let userData = require("../script/userFile");
// const user = userData.User;
// const newUser = userData.User.newUser;
// const userScore = userData.User.userScore;

// let compareData = require("../script/compareFile");
// const compare = compareData.Compare;
// const friendsScore = compareData.Compare.friendsScore;

let bestestData = require("../script/bestFile");
// const best = bestestData.Best;
// const bestMatch =  bestestData.Best.bestMatch;
// const bestData = bestestData.Best.bestData;

function Compare () {
    var k;

    var friendsScores = [];

    //Outer loop to access individual friends
    for (k = 0; k < friendsData.length; k++) {

        // Inner loop accesses the score 
        var totalScore2 = 0;
        for (l = 0; l < friendsData[k].scores.length; l++) {

            // calculate the score
            totalScore2 += friendsData[k].scores[l]


        };


        console.log('Friends Total Score: ' + totalScore2)

        // calculate absolute value of compared score which is friends score - userscore
        compareScore = Math.abs(totalScore2 - userScore)

        // pushes compare score into friends score array
        friendsScores.push(compareScore);

        // console.log('compare score: ' + compareScore);

    };

    console.log('Users, Friends Difference: ' + friendsScores);
};

module.exports = {
Compare
  }