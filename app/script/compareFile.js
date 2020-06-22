let friendsData = require("../data/friends");
let bfData = require("../data/bestFriends");

let userData = require("../script/userFile");

let bestData = require("../script/bestFile");

function Compare () {

    console.log('Compare Function Called');
    
    // console.log('friends data: ', friendsData);

    // console.log('BF Data: ', bfData);

    var uData = userData.User;
    //  FUNCTION
    // console.log('UData: ', uData);

    var best = bestData.Best;
    // FUNCTION
    // console.log('Compare Data: ', best);

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