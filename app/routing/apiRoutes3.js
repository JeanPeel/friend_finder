let friendsData = require("../data/friends");
let bfData = require("../data/bestFriends");

// let newUser = require("../script/userFile");

let friendsScores = require("../script/compareFile");

let bestData = require("../script/bestFile");



// const { response } = require("express");
// const friends = require("../data/friends");
// var express = require('express')
// var router = express.Router()

module.exports = function (app) {

    // res.json(req.body);

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.get("/api/body", function (req, res) {
        res.json(req.body);
    });

    app.get("/api/bfData", function (req, res) {
        res.json(bfData);
    });

    // _______________________________________________________
    // _______________________________________________________

    app.post("/api/friends", function (req, res) {

        app.post("/api/body", function (req, res) {
            console.log('Body: ' + res.body);
        });
    
        app.post("/api/bfData", function (req, res) {
    
    
            console.log('BF Data: ' + bfData);
    
        });

        // console.log(compareData.friendsScores);

        // var friendsScores = alert(compareData.friendsScores);

        // console.log('newUser: ', newUser);

        // console.log('newUser NewUser: ', newUser.newUser);

        // working
        // console.log('friends data: ', friendsData);

        console.log('bestData: ', bestData);

        console.log('friendsScores: ', friendsScores);

        console.log('BF Data: ', bfData);

        // return newUser.User ();


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
    
        exports.list = function exportUser (req, res) {
            res.render('newUser', {title: 'NewUser', newUser: newUser});
            res.render('userScore', {title: 'UserScore', newUser: userScore});
        }
    
        console.log('exports list: ', exports.list);


        return friendsScores.Compare ();
       
    });

    // app.post("/api/body", function (req, res) {
    //     console.log('Body: ' + res.body);
    // });

    // app.post("/api/bfData", function (req, res) {


    //     console.log('BF Data: ' + bfData);

    // });


}