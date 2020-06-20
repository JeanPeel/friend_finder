

//let's start extracting the data
//... start using jquery as $ like you would in a browser

// -----tried this logic from Jacob but it did not like it
//    $(document).ready(function() {
//     console.log('jquery loaded.'),

// Capture the form inputs

// ~~~~~~~use this!!!
// $("#submit").on("click", function (event) {
//     event.preventDefault();
// ~~~~~~use this!!/

var submit = document.getElementsById("#submit");

submit.onclick = function(event){
    event.preventDefault();

    console.log('submit has been clicked');
};

            // console log commented out because it is working
            // console.log('Survey button is clicked! ' + event)

            // Form validation

            // ~~~~~~use this!!
            // function validateForm() {
                // ~~~~~~use this!!/

                // ----Miranda made this logic, it makes sure there is a value in each field I think

                // ~~~~~~use this!!
                // var isValid = true;
                // ~~~~~~use this!!/

                // console log commented out because it is working
                // console.log('form #1 is Valid? ' + isValid);

                // ~~~~~~use this!!
                // $(".form-control").each(function () {
                //     if ($(this).val() === "") {
                //         isValid = false;
                //     }
                // });
                // return isValid;
                // ~~~~~~use this!!/

                // this console log does not get called

                // ~~~~~~use this!!
            //     console.log('form #2 is Valid? ' + isValid);

            // }
// ~~~~~~use this!!/


            // If all required fields are filled

            // ~~~~~~use this!!
            // if (validateForm()) {
                // ~~~~~~use this!!/

                // grabbing scores, putting them in an array, trimming, running parsInt on them to make then intergers

                // ~~~~~~use this!!
                // var scoreArray = [
                //     parseInt($("#q1").val().trim()),
                //     parseInt($("#q2").val().trim()),
                //     parseInt($("#q3").val().trim()),
                //     parseInt($("#q4").val().trim()),
                //     parseInt($("#q5").val().trim()),
                //     parseInt($("#q6").val().trim()),
                //     parseInt($("#q7").val().trim()),
                //     parseInt($("#q8").val().trim()),
                //     parseInt($("#q9").val().trim()),
                //     parseInt($("#q10").val().trim()),
                // ];
                // ~~~~~~use this!!/

                // Create an object for the user's data

                // ~~~~~~use this!!
                // var userData = {
                //     id: 6,
                //     name: $("#name").val().trim(),
                //     photo: $("#image").val().trim(),
                //     scores: scoreArray
                // };
                // ~~~~~~use this!!/

                // user data comes out as [object Object]

                // ~~~~~~use this!!
                // console.log('User data, id: ' + userData.id);
                // console.log('User data, name: ' + userData.name);
                // console.log('User data, photo: ' + userData.photo);
                // console.log('User data, scores: ' + userData.scores);
                // console.log('User data: ' + userData);
                // ~~~~~~use this!!/

                // -----I need to figure out how to move this above data over into my apiRoute
                // var userInfo = [];
                // userInfo.push(userData);
                // console.log('User Info on Survey: ' + userInfo)


                // var DOMinfo = storage.key(userData);

                // console.log('DOM info: ' + DOMinfo);

                // localStorage["DOMinfo"] = userData;

                // ----- this logic is Mirandas logic and needs to bring in Nilsens logic to work.
                // post the data to the friends API

                // ~~~~~~use this!!
            //     $.post("/api/friends", userData, function (data) {
            //         $("#match-name").text(data.name);
            //         $("#math-img").attr("src", data.photo);

            //         $("#results-modal").modal("toggle");

            //         // this console.log is working
            //         console.log('name and img: ' + data.name + ", " + data.photo);
            //     });
            // }
            // else {
// ~~~~~~use this!!/


                // ------- if isValid is false then they person missed a field and is alterted to that.

               // ~~~~~~use this!!
                // alert("Uh-oh! Looks like you missed a field, please fill that out before submitting.");
// ~~~~~~use this!!/


                // this console.log has not been called no errors

                // ~~~~~~use this!!
            //     console.log(alert);

            // }
// ~~~~~~use this!!/


            // module.exports = function (app) {
            //         var userInfo = userData
            //     }

            // this logic is working

            // ~~~~~~use this!!
        //     console.log('End of survey.html logic');
        // });
        // ~~~~~~use this!!/

