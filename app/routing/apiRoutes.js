// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends
// ===============================================================================

var friends = require("../data/friends");
var friends2 = require("../data/friends2");
var friends3 = require("../data/friends3");

var friendsA = require("../data/friends");
var friendsB = require("../data/friends2");
var friendsC = require("../data/friends3");

var display = require("../data/display");
var displayB = require("../data/displayB");
var displayC = require("../data/displayC");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friendsA", function (req, res) {
        res.json(friendsA);
    });

    app.get("/api/friendsB", function (req, res) {
        res.json(friendsB);


    });

    app.get("/api/friendsC", function (req, res) {
        res.json(friendsC);


    });
  
  
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.get("/api/friends2", function (req, res) {
        res.json(friends2);


    });

    app.get("/api/friends3", function (req, res) {
        res.json(friends3);


    });



    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // ---------------------------------------------------------------------------

    app.post("/api/friendsA", function (req, res) {

        // var currentA = [];
        

        for (var p = 0; p < friendsA.length; p++) {

            var currentFriendA = friendsA[p];
            idA = currentFriendA.id;
            nameA = currentFriendA.name;
            photoA = currentFriendA.photo;

            console.log('A id: ', idA);
            console.log('A name: ', nameA);
            console.log('A photo: ', photoA);

       // res.json(id);
        // res.json(name);
        // res.json(photo);

        display.push(idA);
        display.push(nameA);
        display.push(photoA);


        }

        // console.log('current C: ', currentC);

        res.json(display);

        console.log('display: ', display)

     });

    app.post("/api/friendsB", function (req, res) { 

        // var currentB = [];
        
        for (var q = 0; q < friendsB.length; q++) {

            var currentFriendB = friendsB[q];
            idB = currentFriendB.id;
            nameB = currentFriendB.name;
            photoB = currentFriendB.photo;

            console.log('B id: ', idB);
            console.log('B name: ', nameB);
            console.log('B photo: ', photoB);

        // res.json(id);
        // res.json(name);
        // res.json(photo);

        displayB.push(idB);
        displayB.push(nameB);
        displayB.push(photoB);


        }

        // console.log('current C: ', currentC);

        res.json(displayB);

        console.log('displayB: ', displayB)



    });

    app.post("/api/friendsC", function (req, res) {

        // var currentC = [];

        for (var r = 0; r < friendsC.length; r++) {
            var currentFriendC = friendsC[r];
            idC = currentFriendC.id;
            nameC = currentFriendC.name;
            photoC = currentFriendC.photo;

            console.log('C id: ', idC);
            console.log('C name: ', nameC);
            console.log('C photo: ', photoC);

        // res.json(id);
        // res.json(name);
        // res.json(photo);

        displayC.push(idC);
        displayC.push(nameC);
        displayC.push(photoC);


        }

        // console.log('current C: ', currentC);

        res.json(displayC);

        console.log('display: ', displayC)

     });



    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to a user"s survey result
        // Then compare those results against every user in the database.
        // It will then calculate the difference between each of the numbers and the user"s numbers.
        // It will then choose the user with the least differences as the "best friend match."
        // In the case of multiple users with the same result it will choose the first match.
        // After the test, it will push the user to the database.

        // We will use this object to hold the "best match". We will constantly update it as we
        // loop through all of the options
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        // Here we take the result of the user"s survey POST and parse it.
        var userData = req.body;
        var userScores = userData.scores;

        // This variable will calculate the difference between the user"s scores and the scores of
        // each user in the database
        var totalDifference;


        // Here we loop through all the friend possibilities in the database.
        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;

            console.log(currentFriend.name);

            // We then loop through all the scores of each friend
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            // If the sum of differences is less then the differences of the current "best match"
            if (totalDifference <= bestMatch.friendDifference) {
                // Reset the bestMatch to be the new friend.
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }





        // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
        // the database will always return that the user is the user's best friend).
        friends.push(userData);

        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
        res.json(bestMatch);

    });

    app.post("/api/friends2", function (req, res) {
        // Note the code here. Our "server" will respond to a user"s survey result
        // Then compare those results against every user in the database.
        // It will then calculate the difference between each of the numbers and the user"s numbers.
        // It will then choose the user with the least differences as the "best friend match."
        // In the case of multiple users with the same result it will choose the first match.
        // After the test, it will push the user to the database.

        // We will use this object to hold the "best match". We will constantly update it as we
        // loop through all of the options
        var bestMatch2 = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        // Here we take the result of the user"s survey POST and parse it.
        var userData2 = req.body;
        var userScores2 = userData2.scores;

        // This variable will calculate the difference between the user"s scores and the scores of
        // each user in the database
        var totalDifference2;


        // Here we loop through all the friend possibilities in the database.
        // Here we loop through all the friend possibilities in the database.
        for (var k = 0; k < friends2.length; k++) {
            var currentFriend2 = friends2[k];
            totalDifference2 = 0;

            console.log(currentFriend2.name);

            // We then loop through all the scores of each friend
            for (var l = 0; l < currentFriend2.scores.length; l++) {
                var currentFriend2Score = currentFriend2.scores[l];
                var currentUser2Score = userScores2[l];

                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference2 += Math.abs(parseInt(currentUser2Score) - parseInt(currentFriend2Score));
            }

            // If the sum of differences is less then the differences of the current "best match"
            if (totalDifference2 <= bestMatch2.friendDifference) {
                // Reset the bestMatch to be the new friend.
                bestMatch2.name = currentFriend2.name;
                bestMatch2.photo = currentFriend2.photo;
                bestMatch2.friendDifference = totalDifference2;
            }
        }





        // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
        // the database will always return that the user is the user's best friend).

        friends2.push(userData2);


        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page

        res.json(bestMatch2);

    });


    app.post("/api/friends3", function (req, res) {
        // Note the code here. Our "server" will respond to a user"s survey result
        // Then compare those results against every user in the database.
        // It will then calculate the difference between each of the numbers and the user"s numbers.
        // It will then choose the user with the least differences as the "best friend match."
        // In the case of multiple users with the same result it will choose the first match.
        // After the test, it will push the user to the database.

        // We will use this object to hold the "best match". We will constantly update it as we
        // loop through all of the options
        var bestMatch3 = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        // Here we take the result of the user"s survey POST and parse it.
        var userData3 = req.body;
        var userScores3 = userData3.scores;

        // This variable will calculate the difference between the user"s scores and the scores of
        // each user in the database
        var totalDifference3;





        for (var m = 0; m < friends3.length; m++) {
            var currentFriend3 = friends3[m];
            totalDifference3 = 0;

            console.log(currentFriend3.name);

            // We then loop through all the scores of each friend
            for (var n = 0; n < currentFriend3.scores.length; n++) {
                var currentFriend3Score = currentFriend3.scores[n];
                var currentUser3Score = userScores3[n];

                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference3 += Math.abs(parseInt(currentUser3Score) - parseInt(currentFriend3Score));
            }

            // If the sum of differences is less then the differences of the current "best match"
            if (totalDifference3 <= bestMatch3.friendDifference) {
                // Reset the bestMatch to be the new friend.
                bestMatch3.name = currentFriend3.name;
                bestMatch3.photo = currentFriend3.photo;
                bestMatch3.friendDifference = totalDifference3;
            }
        }






        // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
        // the database will always return that the user is the user's best friend).

        friends3.push(userData3);


        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page

        res.json(bestMatch3);

    });

   



};

