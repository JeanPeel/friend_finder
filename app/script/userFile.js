let friendsData = require("../data/friends");
let bfData = require("../data/bestFriends");

let compareData = require("../script/compareFile");

let bestData = require("../script/bestFile");

// const express = require('express');
// const app = express();

function User () {

    console.log('User Function Called');

    // app.use(express.json());

    // app.post('*', (req, res) => {
    //     req.body; // JavaScript object containing the parse JSON
    //     res.json(req.body);
    //   });

    // console.log('friends data: ', friendsData);

    // console.log('BF Data: ', bfData);



    // res.json(req.body);

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
    var id = req.body.id;
    var name = req.body.name;
    var photo = req.body.photo;
    var scores = scoreArray

var newUser = {
        id: id,
        name: name,
        photo: photo,
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

    // pushData.push(newUser);

    // var pushData = exports.pushData = [];

    // console.log('push data called: ', pushData );

    exports.list = function(req, res) {
        res.render('newUser', {title: 'NewUser', newUser: newUser});
    }

    console.log('exports list: ', exports.list);
    
};

// var scoreArray = [];

// var name = [];
// var photo = [];
// var scores = scoreArray;

// var newUser = {
//     id: 8,
//     name: name,
//     photo: photo,
//     scores: scoreArray
// };


// var userScore = [];

module.exports = {
User
  }