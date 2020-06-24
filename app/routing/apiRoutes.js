var friendsData = require("../data/friends");
const { response } = require("express");
const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    bestData = [];

    JsonBestData = [];

    app.post("/api/friends", function (req, res) {

        // bring in the form data
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



        console.log('User Total Score: ' + userScore);



        // Adding up the friends scores

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

        var bestMatch = 0;

        // m is increasing in value each round with m++, so  using m gives us a unique # for each item
        for (m = 0; m < friendsScores.length; m++) {

            // if the current friends score is less then or equal to the past friend score then it is a match
            if (friendsScores[m] <= friendsScores[bestMatch]) {
                // then best match is equal to m, which has increased by 1 each time, so m tells us which number is a match
                bestMatch = m
            }

            // console.log('Compared Scores M: ' + friendsScores[m]);


            // console.log('Best Match: Friend #' + bestMatch);

        };

        var bestMatch = [];

        var bestPhoto = [];
        var bestName = [];


        // console.log('best Match is read here 1' + bestMatch)

        // looking for the friends Id that matches the best match #

        for (n = 0; n < friendsData.length; n++) {

            // console.log('friends data ID' + friendsData[n].id)

            // matchedId = friendsData[n].id;

            // console.log('matched ID: ' + matchedId)

            // console.log('best Match is read here 2' + bestMatch)

            if (friendsData[n].id == bestMatch) {

                console.log('-----------------------------------------------')
                console.log('Best Match Found!');
                bestPhoto = friendsData[n].photo;
                bestName = friendsData[n].name;
                bestScores = friendsData[n].scores;
            };
        };

        var bestData = {
            id: 8,
            name: bestName,
            photo: bestPhoto,
            scores: bestScores
        };

        //   res.json(bestData);

        //   console.log('is json responding to best data?' + res.json(bestData))

        console.log('Matched Name: ' + bestData.name);
        console.log('Matched Photo: ' + bestData.photo);
        console.log('Matched Scores: ' + bestData.scores);
        console.log('-----------------------------------------------')


        // bestestFriendMatch = friendsData[bestData];






        //     friends.push(bestData);

        JsonBestData = JSON.stringify(bestData);

        //     bestServer = new XMLHttpRequest();

        // bestServer.send('send XML Json Best Data: ' + JsonBestData);



        // bestServer = new bestServerRequest();

        // bestServer.send('send Json Best Data: ' + JsonBestData);


        // app.get('/api/JsonBestData', function (req, res) {
        //     res.json(JsonBestData);
        //     console.log('success json is updated!');
        // });

        // app.post('/api/JsonBestData', function (req, res) {

        //     // res.json(req.body)

        //     console.log('best Data Api: ' + res);
        //     // console.log('api called');
        //     // console.log('done with post call b: ');

        //     // console.log('Best Data: ' + bestData);
        //     console.log('Json Best Data: ' + JsonBestData);

        // });

        // console.log('done with post call a: ');

        // console.log('-----------------------------------------------')
        console.log('Matched Data sent to .json: ' + JsonBestData);
        console.log('-----------------------------------------------')

        // app.get("/api/bestData", function (data) {
        //     data.json(bestData);
        //     console.log('done with get call b: ');
        // });


        // app.post("/api/bestData", function (data) {
        //     console.log('best Data Api: ' + data);
        //     console.log('api called');
        //     console.log('done with post call b: ');
        // });

        // console.log('done with post call a: ');

    });

    

    // console.log('Json stringify: ' + bestData)

    // return JSON.stringify(JsonBestData);

    // console.log('Json stringify: ' + JsonBestData)

    // return JSON.stringify(bestData);
    // console.log('return .json Best Data: ' + bestData);

    // bestData = [];

    // console.log('best Data on the outside: ' + bestData)

    // app.get("/api/bestData", function (data) {

    //     return JSON.stringify(bestData, data);

    // });


    // app.post("/api/bestData", bestData, function (req, data) {
    //     res.json(req.data)
    //     console.log('best Data Api: ' + data);
    // });

    app.get('/api/JsonBestData', function (req, res) {
        res.json(JsonBestData);
        console.log('success json2 is updated!');
    });

    app.post('/api/JsonBestData', function (req, res) {

        // return JSON.stringify(JsonBestData);

        // res.json(req.body)

        // console.log('best Data Api2: ' + res);
        // console.log('api called');
        // console.log('done with post call b: ');

        // console.log('Best Data: ' + bestData);
        console.log('Json Best Data2: ' + JsonBestData);

    });

    // return JSON.stringify(JsonBestData);
}