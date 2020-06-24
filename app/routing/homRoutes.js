// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends
// ===============================================================================

// var friends = require("../data/friends");
// var friends2 = require("../data/friends2");
// var friends3 = require("../data/friends3");

// ===============================================================================
// ROUTING
// ===============================================================================

// module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------


    // app.get("/api/friendsA", function (req, res) {
    //     res.json(friends);
    // });

    // app.get("/api/friendsB", function (req, res) {
    //     res.json(friends2);


    // });

    // app.get("/api/friendsC", function (req, res) {
    //     res.json(friends3);


    // });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // ---------------------------------------------------------------------------

   

    // app.post("/api/friendsA", function (req, res) {

    //     for (var i = 0; i < friends.length; i++) {

    //         var currentFriendA = friends[i];
    //         id = currentFriendA.id;
    //         name = currentFriendA.name;
    //         photo = currentFriendA.photo;

    //         res.json(id, name, photo);
    //     }
    //  });

    // app.post("/api/friendsB", function (req, res) { 
    //     for (var i = 0; i < friends2.length; i++) {

    //         var currentFriendA = friends[i];
    //         id = currentFriendA.id;
    //         name = currentFriendA.name;
    //         photo = currentFriendA.photo;

    //         res.json(id, name, photo);
    //     }

    // });

    // app.post("/api/friendsC", function (req, res) {
    //     for (var i = 0; i < friends3.length; i++) {
    //         var currentFriendA = friends[i];
    //         id = currentFriendA.id;
    //         name = currentFriendA.name;
    //         photo = currentFriendA.photo;

    //         res.json(id, name, photo);

    //     }

    //  });



// };