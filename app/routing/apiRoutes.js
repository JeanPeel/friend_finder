var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        res.json(req.body)

        var i;

        for (i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i])
            console.log(req.body)
          var totalScore = 0;
            for (j = 0; j < friendsData[i].scores.length; j++) {
               totalScore += friendsData[i].scores[j] = req.body.scores[j]
            }
            console.log(totalScore)
        };
    });
}