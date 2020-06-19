var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = {
            name: request.body.name,
            photo: request.body.photo,
            scores: []
        };

        var scoresArray = [];
        for (var i = 0; i < request.body.scores.length; i++)
        {
            scoresArray.push(parseInt(request.body.scores[i]))
        };
        newFriend.scores = scoresArray;

        var compareScoresArray = [];
        for (var i = 0; i < friends.length; i++)
        {
            var comparedScore = 0;
            for (var m = 0; m < newFriend.scores.length; m++)
            {
                comparedScore += Math.abs(newFriend.scores[m] - friends[i].scores[m]);
            }
            compareScoresArray.push(comparedScore);
        }

        var bestMatch = 0;
        for (var i = 1; i < compareScoresArray.length; i++)
        {
            if(compareScoresArray[i] <= compareScoresArray[bestMatch])
            {
                bestMatch = i;
            }
        }

        var theBestestOfFriendsMatch = friends[bestMatch];

        response.json(theBestestOfFriendsMatch);
        console.log("Success! Friend Added!");

        friends.push(newFriend);

    });
}