let friendsData = require("../data/friends");
// let bfData = require("../data/bestFriends");

let userData = require("../script/userFile");
// const user = userData.User;
// const newUser = userData.User.newUser;
// const userScore = userData.User.userScore;

let compareData = require("../script/compareFile");
// const compare = compareData.Compare;
// const friendsScore = compareData.Compare.friendsScore;

// let bestestData = require("../script/bestFile");
// const best = bestestData.Best;
// const bestMatch =  bestestData.Best.bestMatch;
// const bestData = bestestData.Best.bestData;


function Best () {
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

    // middleware that is specific to this router
    // router.use(bestData, function(req, res) {
        
        
    //     console.log('Use Best Data: ' + bestData);
    //     console.log('Use Best Name: ' + res.name);
      
    // })
    // // define the home page route
    // router.get(bestData, function(req, res) {

    //     res.send(bestData);

    //     console.log('Get Best Data: ' + bestData);
    //     console.log('Get Best Name: ' + res.name);
    // })


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
};

module.exports = {
Best
  }