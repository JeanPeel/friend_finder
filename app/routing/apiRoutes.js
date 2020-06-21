var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

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

        console.log('score array ' + scoreArray);

        // putting score array into new User
        var newUser = {
            id: req.body.id,
            name: req.body.name,
            photo: req.body.photo,
            scores: scoreArray
        };

        console.log('scores in newUser object: ' + newUser.scores);
        console.log('New Friend, id: ' + newUser.id);
        console.log('New Friend, name: ' + newUser.name);
        console.log('New Friend, photo: ' + newUser.photo);
        console.log('New Friend, scores: ' + newUser.scores);
        console.log('New  Friend: ' + newUser);


        var i;

        // Adding up the New Users Score
        var userScore = 0;
        for (i = 0; i < newUser.scores.length; i++) {
            userScore += newUser.scores[i]
        };

        console.log('User Score: ' + userScore);



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

            // calculate compared score which is friends score - userscore
            compareScore = Math.abs(totalScore2 - userScore)

            // pushes compare score into friends score array
            friendsScores.push(compareScore);

            console.log('compare score: ' + compareScore);

        };


        console.log('Friends Scores: ' + friendsScores);


        var bestMatch = 0;

        // m is increasing in value each round with m++, so  using m gives us a unique # for each item
        for (m = 0; m < friendsScores.length; m++) {

            // if the friends score is less then or equal to 0?  I am not sure why this works.
            if (friendsScores[m] <= friendsScores[bestMatch]) {
                // then best match is equal to m, which has increased by 1 each time, so m tells us which number is a match
                bestMatch = m;
            }

            console.log('Compared Scores M: ' + friendsScores[m]);

        };

        console.log('Best Match: ' + bestMatch);

    });
}