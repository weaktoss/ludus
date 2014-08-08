$(document).ready(function () {
	DisplayQuestion();
});

function DisplayQuestion() {
	var question = GetAQuestion();
	$("#question").html(question.text);
	var answers = $("#answers");
	$.each(question.choices, function(index, choice) {
		$("<button/>", {
			type : "button",
			text : choice,
			"class" : "choice",
			click : function() {
				index === question.correct ? alert("Correct, good job!") : alert("Wrong, try again!");
			}
		}).appendTo(answers);		
	});
}

function GetAQuestion() {	
	var random = Math.floor(Math.random() * questionBank.length);
	return questionBank[random];
}

//dummy questions
var questionBank = [
	{
		text: "Who fears Greeks, even bearing gifts?",
		choices: ["Calchas", "Deiphobus", "Antenor", "Laocoon"],
		correct: 3
	},
	{
		text: "Which of these ladies somehow didn't get boned by Odysseus?",
		choices: ["Nausicaa", "Circe", "Penelope", "Calypso"],
		correct: 0
	},
	{
		text: "Which of these items is not recommended for Witch Doctor?",
		choices: ["Urn of Shadows", "Refresher Orb", "Aghanim's Scepter", "Black King Bar"],
		correct: 1
	}
];