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

        

        scoreId = 0;

        //Outer loop to access individual friends
        for (k = 0; k < friendsData.length; k++, scoreId++) {

            // Inner loop accesses the score 
            var totalScore2 = 0;
            for (l = 0; l < friendsData[k].scores.length; l++) {

                // calculate the score
                totalScore2 += friendsData[k].scores[l]
            };

            // calculate compared score
            compareScore = Math.abs(totalScore2 - userScore)

            // push new calculated compared score into the array
            // friendsScores.push("a" + scoreId + ":" + compareScore);

            // scoreName = "{" + 'a' + scoreId + ':';
            // scoreEnd = "}"
           
                // friendsScores.push({scoreName, compareScore, scoreEnd});

                friendsScores.push(compareScore);

            console.log('compare score: ' + compareScore);
        };

        // friendsArray = "[" + friendsScores + "]"

        console.log('Friends Scores: ' + friendsScores);

        // console.log('Friends Array: ' + friendsArray );

        // --------

        // console.log('item in friends array ' + friendsArray.a0);

        // console.log('item in friends scores ' + friendsScores.a0)


        // const convertArrayToObject = (array, key) => {
        //     const initialValue = {friendsScores};
        //     return array.reduce((obj, item) => {
        //       return {
        //         ...obj,
        //         [item[key]]: item,
        //       };
        //     }, initialValue);
        //   };

        // Calculates the best Matched Score


        // var bestMatch = 0;

        //             if (comparedScores[m] <= comparedScores[bestMatch]) {
        //         bestMatch = i;
        //     }

        //     console.log('Compared Scores M: ' + comparedScores[m]);



        // var bestMatch = 0;

        // for (m = 0; m < comparedScores.length; m++) {

        //     if (comparedScores[m] <= comparedScores[bestMatch]) {
        //         bestMatch = i;
        //     }

        //     console.log('Compared Scores M: ' + comparedScores[m]);

        // };

        // console.log('Best Match: ' + bestMatch);

    });
}