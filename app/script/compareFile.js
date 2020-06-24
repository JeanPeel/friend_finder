let friendsData = require("../data/friends");
let bfData = require("../data/bestFriends");

let userData = require("../script/userFile");

let bestData = require("../script/bestFile");

let apiExport = require('../routing/apiRoutes')

// let list = require('./list.js');

function Compare () {

    console.log('Compare Function Called');

 
    // exportUser= [];
    // require(list);

    // require.list = function exportUser (req, res) {
        // res.require(newUser);
        // res.require(userScore);
    //     res.require(NewUser);
    //     res.require(UserScore);
    // }


        // console.log('list: ', list);

        // console.log('export user: ', exportUser);

        // console.log('newUser: ', newUser);

        // console.log('userScore: ', userScore);
        // console.log('NewUser: ', NewUser);
        // console.log('UserScore: ', UserScore);

    // import.list = function exportUser (req, res) {
    //     res.render('newUser', {title: 'NewUser', newUser: newUser});
    //     res.render('userScore', {title: 'UserScore', newUser: userScore});
    // }
    
    // console.log('friends data: ', friendsData);

    // console.log('BF Data: ', bfData);

    // return apiExport.app.exportUser ();

    // console.log('data: ', data);


    // exports.load = function exportUser  (req, res, next){
    //     var id = req.params.id;

    //     console.log('The iD is: ', id);

    //     exportUser

    //     // user = [];
    //     req.user = newUser[id];
    //     if (newUser[id]) {
    //       next();
    //     } else {
    //       var err = new Error('cannot find user ' + id);
    //       err.status = 404;
    //       next(err);
    //     }

    //     req.score = userScore[id];
    //     if (userScore[id]) {
    //       next();
    //     } else {
    //       var err = new Error('cannot find user ' + id);
    //       err.status = 404;
    //       next(err);
    //     }

    //           console.log('The New User is: ', newUser);

    //     console.log('The New User is: ', NewUser);

    //     console.log('The User is: ', user);


    //     console.log('The User Score is: ', score);

    //     console.log('The User Score is: ', userScore);

    //     console.log('The User Score is: ', UserScore);


    //   };

    //   console.log('The New User is: ', newUser);

        // console.log('The New User is: ', NewUser);

        // console.log('The User Score is: ', UserScore);

    //   console.log('The User is: ', user);

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

var friendsScores = [];

module.exports = {
Compare
  };

