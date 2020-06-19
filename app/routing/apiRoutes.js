var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        res.json(req.body)

        // var newFriend = {
        //     name: request.body.name,
        //     photo: request.body.photo,
        //     scores: []
        // };

        console.log('Body: ' + req.body);

        var i;

        //Outer loop to access individual friends
        for (i = 0; i < friendsData.length; i++) {
            console.log('Friends Data of i: ' + friendsData[i])
            console.log('Body2: ' + req.body)
        //Inner loop to access friends' scores
          //  friendsData[i];
          //  friendsData[i].scores
          var totalScore = 0;
            for (j = 0; j < friendsData[i].scores.length; j++) {
               totalScore += friendsData[i].scores[j] = req.body.scores[j]
            }
            console.log('Total Score: ' + totalScore)
        };

        // console.log('New Friend, name: ' + newFriend.name);
        // console.log('New Friend, photo: ' + newFriend.photo);
        // console.log('New Friend, scores: ' + newFriend.scores);
        // console.log('New  Friend: ' + newFriend);

        // var scoresArray = [];
        // for (var i = 0; i < request.body.scores.length; i++) {
        //     scoresArray.push(parseInt(request.body.scores[i]))
        // };

        // // coming out as not defined
        // newFriend.scores = scoresArray;
        // console.log('Scores Array ' + scoresArray);

        

        // var compareScoresArray = [];
        // for (var i = 0; i < friends.length; i++) {
        //     var comparedScore = 0;
        //     for (var m = 0; m < newFriend.scores.length; m++) {
        //         comparedScore += Math.abs(newFriend.scores[m] - friends[i].scores[m]);
        //     }
        //     compareScoresArray.push(comparedScore);
        //     console.log('Compared Score: ' + comparedScore);
        // }

        // var bestMatch = 0;
        // for (var i = 1; i < compareScoresArray.length; i++) {
        //     if (compareScoresArray[i] <= compareScoresArray[bestMatch]) {
        //         bestMatch = i;
        //     }
        //     console.log('Best Match: ' + bestMatch);
        // }

        // var theBestestOfFriendsMatch = friends[bestMatch];
        // console.log('Best of Friends Match: ' + theBestOfFriendsMatch)

        // response.json(theBestestOfFriendsMatch);
        // console.log("Success! Friend Added!");

        // friends.push(newFriend);
        // console.log('New Friend ' + newFriend);

    });
}