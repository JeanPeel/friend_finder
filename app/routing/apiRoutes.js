var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        // ---- This logic came from Nilsen
        res.json(req.body);

        // this console log is working result is [object Object]
        // console.log('Body: ' + req.body);

        // --- This logic came from Miranda adjusted with Nilsens
        // --this is coming out undefined


        // var score = req.body.score;

        // // this is undefined
        // console.log('did I get the score? ' + score)

        var scoreArray = [];

        score = req.body.scores;

        for (s = 0; s < score.length; s++) {

            scoreArray.push(Number(score[s]));
        };

        console.log('score array ' + scoreArray);

        var newUser = {
            id: req.body.id,
            name: req.body.name,
            photo: req.body.photo,
            scores: scoreArray
        };

        console.log('scores in newUser object: ' + newUser.scores);

        // --- This logic came from Miranda adjusted with Nilsens
        // --this is coming out undefined
        console.log('New Friend, id: ' + newUser.id);
        console.log('New Friend, name: ' + newUser.name);
        console.log('New Friend, photo: ' + newUser.photo);
        console.log('New Friend, scores: ' + newUser.scores);
        console.log('New  Friend: ' + newUser);

        // ------ this logic came from Nilsen ------
        var i;

        //Outer loop to access individual friends
        var userScore = 0;
        for (i = 0; i < newUser.scores.length; i++) {
            userScore += newUser.scores[i]
        };


        console.log('User Score: ' + userScore);



        // --------trying new code

        var k;

        friendsScores = [];

        //Outer loop to access individual friends
        for (k = 0; k < friendsData.length; k++) {

            var totalScore2 = 0;
            for (l = 0; l < friendsData[k].scores.length; l++) {
                totalScore2 += friendsData[k].scores[l]
            }
            friendsScores.push(totalScore2);
        };

        console.log('Friends Scores: ' + friendsScores);

        // -----next bit

        var m;

        //Outer loop to access individual friends
        var comparedScores = [];

        for (m = 0; m < friendsScores.length; m++) {

            var newCompared = 0;
            
            newCompared += Math.abs(friendsScores[m] - userScore);

            comparedScores.push(newCompared);
        };

        console.log('Compared Score 1 : ' + comparedScores);


        // ----- sort

        var bestMatch = 0;

        for (m = 0; m < comparedScores.length; m++) {

            if(comparedScores[m] <= comparedScores[bestMatch])
            {
                bestMatch = i;
            }

            console.log('Compared Scores M: ' + comparedScores[m]);

        };

        

        console.log('Best Match: ' + bestMatch);

    });
}