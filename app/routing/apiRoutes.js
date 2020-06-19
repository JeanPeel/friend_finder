
const friends = require('../data/friends');
const server = require('../../server');

module.exports = function(app){
    let user;

// A POST routes `/api/friends`
app.post('/api/friends', function (req, res) {
    module.exports.user = req.body;
    friends.array.push(req.body);
    console.log(`${req.body.name} successfully added!`)
});

// A GET route with the url `/api/friends`
app.get('/bestFriend', function (req, res) {
    let bestfriend = server.lookingForFriends();
    res.json(bestfriend);
});
app.get('/api/:friends?', function (req, res) {
    res.json(friends.array);
});
}

// const friends = require('../data/friends');
// // const server = require('../../server');

// function createRoutes(app) {
//     app.post('/api/friends', function (req, res) {
//         module.exports.user = req.body;
//         friends.array.push(req.body);
//         console.log(`${req.body.name} successfully added!`)
//     });
    
//     // // A GET route with the url `/api/friends`
//     app.get('/bestFriend', function (req, res) {
//         let bestfriend = lookingForFriends();
//         res.json(bestfriend);
//     });
//     app.get('/api/:friends?', function (req, res) {
//         res.json(friends.array);
//     });
// }

// module.exports = function(app){
//     let user;

//     lookForFriends () {
//         let scoreArray = [];
//         let current = apiRoutes.user;
    
//         for (let i = 0; i < friends.array.length; i++) {
//             let friendScore = 0;
//             if (friends.array[i].name !== current.name) {
    
//                 for (let j = 0; j < friends.array[i].scores.length; j++) {
//                     let score = friends.array[i].scores[j];
//                     let difference = math.abs(score - current.scores[j])
//                     friendScore+=difference;
//                 }
//                 let friendObj = {};
//                 friendObj.friend = friends.array[i];
//                 friendObj.score = friendScore;
//                 scoreArray.push(friendObj)
//             }
//         }
//         scoreArray.sort(function (a,b) {
//             return a.score - b.score;
//         });
//         return ScoreArray[0]
//     }

// // A POST routes `/api/friends`

// }

