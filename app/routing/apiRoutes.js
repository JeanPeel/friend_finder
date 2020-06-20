var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.get("/api/user", function (req, res) {
        res.json(userInfo);
    });

    app.post("/api/friends", function (req, res) {

        // ---- This logic came from Nilsen
        res.json(req.body);

        // this console log is working result is [object Object]
        // console.log('Body: ' + req.body);

        // --- This logic came from Miranda adjusted with Nilsens
        // --this is coming out undefined
        // var newFriend = {
        //     id: userInfo.id,
        //     name: userInfo.name,
        //     photo: userInfo.photo,
        //     scores: []
        // };

        // --- This logic came from Miranda adjusted with Nilsens
        // --this is coming out undefined
        console.log('New Friend, id: ' + userInfo.id);
        console.log('New Friend, name: ' + userInfo.name);
        console.log('New Friend, photo: ' + userInfo.photo);
        console.log('New Friend, scores: ' + userInfo.scores);
        console.log('New  Friend: ' + userInfo);

        // ------ this logic came from Nilsen ------
        var i;

        //Outer loop to access individual friends
        for (i = 0; i < friendsData.length; i++) {

            // this is coming out as  [object Object]
            console.log('Friends Data of i: ' + friendsData[i])

            // this console log is working result is [object Object]
            // console.log('Body2: ' + req.body)

            // ----------Commented out by Nilsen
            // Inner loop to access friends' scores, 
            // friendsData[i];
            // friendsData[i].scores

            // ------- this logic came from Nilsen 
            // ----I tried to add parsInt to this but it broke the logic
            // This logic is working but it has not turned it into intergers
            var totalScore = 0;
            for (j = 0; j < friendsData[i].scores.length; j++) {
                totalScore += friendsData[i].scores[j] = req.body.scores[j]
            }

            // this is coming out as a string of numbers instead of a total
            console.log('Total Score: ' + totalScore)
        };


        // ---- This logic comes from Miranda
        // var scoresArray = [];
        // for (var i = 0; i < userInfo[i].scores.length; i++) {
        //     scoresArray.push(parseInt(request.body.scores[i]))
        // };

        // // coming out as not defined
        // userInfo.scores = scoresArray;
        // console.log('Scores Array ' + scoresArray);


        // ---- This logic comes from Miranda
        var compareScoresArray = [];
        for (var i = 0; i < friendsData.length; i++) {
            var comparedScore = 0;
            for (var m = 0; m < userInfo.scores.length; m++) {
                comparedScore += Math.abs(userInfo.scores[m] - friendsData[i].scores[m]);
            };
            compareScoresArray.push(comparedScore);

            // this is coming out as Compared Score: 0, Compared Score: 0, Compared Score: 0, Compared Score: 0, Compared Score: 0
            console.log('Compared Score: ' + comparedScore);
        }

        var bestMatch = 0;
        for (var i = 1; i < compareScoresArray.length; i++) {
            if (compareScoresArray[i] <= compareScoresArray[bestMatch]) {
                bestMatch = i;
            }

            // this is coming out as Best Match: 1, Best Match: 2, Best Match: 3, Best Match: 4
            console.log('Best Match: ' + bestMatch);
        }

        // ReferenceError: theBestOfFriendsMatch is not defined
        var theBestestOfFriendsMatch = friendsData[bestMatch];
        console.log('Best of Friends Match: ' + theBestOfFriendsMatch)

        response.json(theBestestOfFriendsMatch);
        console.log("Success! Friend Added!");

        friendsData.push(userInfo);
        console.log('New Friend ' + userInfo);

    });
}