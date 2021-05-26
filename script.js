$(".fbutton").click(function() {

    let answer1 = $(".firstInput").val();

    let answer2 = $(".secondInput").val();

    let answer3 = $(".thirdInput").val();

    if ((answer1 === "2") && (answer2 === "Brain") && (answer3 === "Male")) {
        $(".fullQuiz").hide();
        $(".batman").show();
        $(".btman").show();
        $(".rbutton").show();
    } else if ((answer1 === "2") && (answer2 === "Brawn") && (answer3 === "Male")) {
        $(".fullQuiz").hide();
        $(".superman").show();
        $(".spman").show();
        $(".rbutton").show();
    } else if ((answer1 === "1") && (answer2 === "Brain") && (answer3 === "Male")) {
        $(".fullQuiz").hide();
        $(".ironman").show();
        $(".inman").show();
        $(".rbutton").show();
    } else if ((answer1 === "1") && (answer2 === "Brawn") && (answer3 === "Male")) {
        $(".fullQuiz").hide();
        $(".deadpool").show();
        $(".dpman").show();
        $(".rbutton").show();
    } else if ((answer1 === "2") && (answer2 === "Brain") && (answer3 === "Female")) {
        $(".fullQuiz").hide();
        $(".blackcanary").show();
        $(".blkcy").show();
        $(".rbutton").show();
    } else if ((answer1 === "2") && (answer2 === "Brawn") && (answer3 === "Female")) {
        $(".fullQuiz").hide();
        $(".wonderwoman").show();
        $(".wwrn").show();
        $(".rbutton").show();
    } else if ((answer1 === "1") && (answer2 === "Brain") && (answer3 === "Female")) {
        $(".fullQuiz").hide();
        $(".blackwidow").show();
        $(".blkw").show();
        $(".rbutton").show();
    } else if ((answer1 === "1") && (answer2 === "Brawn") && (answer3 === "Female")) {
        $(".fullQuiz").hide();
        $(".captainmarvel").show();
        $(".captm").show();
        $(".rbutton").show();
    } else if ((answer1 === "") || (answer2 === "") || (answer3 === "")) {
        alert("Please answer all the questions.");
    } else {
        alert("The answers provided are invalid. Please try again.");
    }
});
$(".rbutton").hide();
$(".rbutton").click(function() {
    $(".fullQuiz").show();
    $(".superman, .ironman, .batman, .deadpool, .blackcanary, .wonderwoman, .blackwidow, .captainmarvel").css("display", "none");
    $(".btman, .spman, .inman, .dpman, .blkcy, .wwrn, .blkw, .captm").css("display", "none");
    $(".rbutton").hide();
});