$( document ).ready(function() {
    var requestURL="https://api.putrik.fun/get_latest_questions?amount=5&topic=blender2_8"
    $.ajax({
        "url": requestURL,
        "success": function success(response) {
            console.log(response);
            var questions_block = document.getElementById("questions_block");
            var questions = response.response;
            for (i = 0; i < questions.length; i++) {
                var questions_link = document.createElement("a");
                questions_link.id = questions[i].uid;
                questions_link.text = questions[i].question;
                questions_link.className = "help_item";
                questions_link.href = "https://putrik.fun/answer.html#" + questions[i].uid;
                questions_block.appendChild(questions_link);
                console.log(questions_link);
            }
        }
    });
});