let friendsData = require("../data/friends");
let bfData = require("../data/bestFriends");

let newUser = require("../script/userFile");

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

        // console.log(compareData.friendsScores);

        // var friendsScores = alert(compareData.friendsScores);

        console.log('newUser: ', newUser);

        console.log('newUser NewUser: ', newUser.newUser);

        // working
        // console.log('friends data: ', friendsData);

        console.log('bestData: ', bestData);

        console.log('friendsScores: ', friendsScores);



        console.log('BF Data: ', bfData);

        return bestData ();

        // const uData = userData;
        // FUNCTION
        // console.log('UData: ', uData);

        // uData ();

        // const uData = userData.User;
        //  FUNCTION
        // console.log('UData: ', uData);

        // uData ();

        // const compare = compareData.Compare;
        // FUNCTION
        // console.log('Compare Data: ', compare);

        // compare ();

        // const best = bestData.Best;
        // FUNCTION
        // console.log('Compare Data: ', best);

        // best ();


        // var i;

        //Outer loop to access individual friends
        // for (i = 0; i < friendsData.length; i++) {

        // console.log('Friends Data for loop ran')
        // this logs out the information in friends Data
        // console.log(friendsData[i])

        //Inner loop to access friends' scores
        //  friendsData[i];
        //  friendsData[i].scores
        //   var totalScore = 0;
        //     for (j = 0; j < friendsData[i].scores.length; j++) {
        //        totalScore += friendsData[i].scores[j] = req.body.scores[j]
        //     }

        // console.log('Total Score: ', totalScore)
        // };

        // console.log('Total Score: ', totalScore)
    });

    app.post("/api/body", function (req, res) {
        console.log('Body: ' + res.body);
    });

    app.post("/api/bfData", function (req, res) {


        console.log('BF Data: ' + bfData);

    });


}