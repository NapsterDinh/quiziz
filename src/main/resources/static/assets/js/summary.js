
var resultId = resultGolbal.id;
var listAnswerResult = resultGolbal.listAnswer;
var listQuestionResult = resultGolbal.quiz.questions;
var currentPosition;
var currentQuestion;
var idQuestion;
var answerTrue;
var answerChoose;
var noAnswer;
var noTrueAnswer;
var prebtn = document.getElementById("prebtn");
var nextbtn = document.getElementById("nextbtn");
var detailQuestion;


var btnshare = document.getElementsByClassName('share-btn')[0];
var themblack = document.getElementsByClassName('screen screen-summary')[0];
btnshare.addEventListener('click', function() {
	var modal = document.createElement('div');
	modal.classList.add('share-modal-container');
	modal.setAttribute('data-v-d925f144', "");
	modal.setAttribute("tabindex", "0");
	modal.setAttribute("role", "dialog");
	modal.setAttribute("arial-model", true);
	modal.setAttribute("aria-label", "Share");
	modal.innerHTML = `<div data-v-d925f144="" class="share-modal flex-view flex-column all-center animated bounceInUp" style="background-color: rgb(99, 41, 107);"><button data-v-d925f144="" aria-label="Close share dialog" class="share-close-btn"></button><img data-v-d925f144="" alt="Share" src="https://cf.quizizz.com/game/img/share/rank/1.png" class="share-image"><br data-v-d925f144=""><span data-v-d925f144="" class="share-text">I ranked 1st out of 24 on Quizizz!</span>
                        <div data-v-d925f144="" class="share-bar">
                            <div data-v-d925f144="" class="share-btn-container"><a data-v-d925f144="" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fquizizz.com%2Fjoin%3Fsr%3D1&amp;text=I%20ranked%201st%20out%20of%2024%20players%20on%20Quizizz%20today!%20Check%20it%20out%20here%20%3E&amp;via=quizizz" target="_blank" class="twitter-share-link">
                                    <div data-v-d925f144="" class="twitter share-btn">
                                        <div data-v-d925f144="" class="social-icon"></div>
                                    </div>
                                </a><a data-v-d925f144="" href="https://www.facebook.com/dialog/share?app_id=1589541687945427&amp;href=https%3A%2F%2Fquizizz.com%2Fjoin%3Fsr%3D1&amp;quote=I%20ranked%201st%20out%20of%2024%20players%20on%20Quizizz%20today!%20Check%20it%20out%20here%20%3E" target="_blank" class="facebook-share-link">
                                    <div data-v-d925f144="" class="facebook share-btn">
                                        <div data-v-d925f144="" class="social-icon"></div>
                                    </div>
                                </a></div>
                            <div data-v-d925f144="" class="screenshot-text">Take a screenshot and share!</div>
                        </div>
                    </div>`
	themblack.appendChild(modal);
	var btnclose = document.getElementsByClassName('share-close-btn')[0];
	btnclose.addEventListener('click', function() {
		themblack.removeChild(themblack.lastChild);
	})
})

var exitbtn = document.getElementsByClassName('pause-icon-container')[0];
exitbtn.addEventListener('click', function() {
	window.location.href = '/home'
})

var detailContainer = document.getElementsByClassName("question-being-viewed")[0];
var listQuestion = document.getElementsByClassName("question-container");
for (let i = 0; i < listQuestion.length; i++) {
	listQuestion[i].addEventListener('click', function() {
		idQuestion = listQuestion[i].getAttribute("value");
		for (let j = 0; j < listQuestionResult.length; j++) {
			if (listQuestionResult[j].id == idQuestion) {
				currentQuestion = listQuestionResult[j];
				currentPosition = j;
				if (currentPosition == 0) {
					prebtn.classList.add("is-disabled");
				} else {
					prebtn.classList.remove("is-disabled");
				}
				for (let k = 0; k < currentQuestion.answers.length; k++) {
					if (currentQuestion.answers[k].true == true) {
						answerTrue = currentQuestion.answers[k];
						noTrueAnswer = k;
						break;
					}
				}
				answerChoose = listAnswerResult[j];
				for (let m = 0; m < currentQuestion.answers.length; m++) {
					if (currentQuestion.answers[m].id == answerChoose.id) {
						noAnswer = m;
					}
				}
			}
		}
		detailContainer.style.display = 'block';
		detailContainer.classList.add("animated", "fadeIn", "anim-300-duration", "v-enter-to");
		detailQuestion = document.createElement("div");
		detailQuestion.classList.add("question-review-container");
		detailQuestion.classList.add("animated", "slideInUp", "anim-400-duration", "v-enter-to")
		detailQuestion.setAttribute("data-v-c333c658", "");
		detailQuestion.innerHTML = `
        <div data-v-c333c658="" class="clickable-area"></div>
        <div data-v-c333c658="" class="main-content">
            <div data-v-c333c658="" class="content">
                <div data-v-c333c658="" class="top-header">
                    <div data-v-c333c658="" class="header text black-text">${currentQuestion.name}</div>
                    <div data-v-c333c658="" class="question-correctness"><div data-v-c333c658="" class="icon"></div></div>
                    <div data-v-c333c658="" class="metrics flex-view flex-row all-center">
                        <div data-v-c333c658="" class="item score flex-view all-center">
                            <div data-v-c333c658="" class="font-icon"><i data-v-c333c658="" class="icon-fas-coins"></i></div>
                            <span data-v-c333c658="" class="text score"></span>
                        </div>
                    </div>
                    <button data-v-c333c658="" aria-label="Close Review question modal" class="close-btn strip-default-btn-style"><div data-v-c333c658="" class="icon"></div></button>
                </div>
                <div data-v-c333c658="" class="question-container animated fadeIn">
                    <div data-v-c333c658="" class="question with-image">
                        <div data-v-c333c658="" class="image background-as-image" style="background-image: url('${currentQuestion.image}');"></div>
                        <span data-v-c333c658="" class="text black-text"><p>${currentQuestion.description}</p></span>
                    </div>
                    <div data-v-c333c658="" class="divider"></div>
                    <div data-v-c333c658="" class="options-container">
                        <div data-v-c333c658="" class="option text-option">
                            <span data-v-c333c658="" class="text black-text"><p>${currentQuestion.answers[0].description}</p></span>
                        </div>
                        <!---->
                        <div data-v-c333c658="" class="option text-option">
                            <span data-v-c333c658="" class="text black-text"><p>${currentQuestion.answers[1].description}</p></span>
                        </div>
                        <!---->
                        <div data-v-c333c658="" class="option text-option">
                            <span data-v-c333c658="" class="text black-text"><p>${currentQuestion.answers[2].description}</p></span>
                        </div>
                        <!---->
                        <div data-v-c333c658="" class="option text-option">
                            <span data-v-c333c658="" class="text black-text"><p>${currentQuestion.answers[3].description}</p></span>
                        </div>
                        <!---->
                    </div>
                    <!---->
                </div>
            </div>
        </div>
        <!---->
    `
		detailContainer.prepend(detailQuestion);
		setTimeout(() => {
			detailContainer.classList.remove("animated", "fadeIn", "anim-300-duration", "v-enter-to");
		}, 300);
		setTimeout(() => {
			detailQuestion.classList.remove("animated", "slideInUp", "anim-400-duration", "v-enter-to")
		}, 400)

		if (answerTrue.id == answerChoose.id) {
			document.getElementsByClassName("question-correctness")[0].classList.add("correct")
			document.getElementsByClassName("text score")[0].innerHTML = '100 pts'

		} else {
			document.getElementsByClassName("text score")[0].innerHTML = '0 pts'
			document.getElementsByClassName("question-correctness")[0].classList.add("incorrect")
		}

		handlePressAnswer(noTrueAnswer, noAnswer);

		var btnClose = document.getElementsByClassName("close-btn strip-default-btn-style")[0];
		btnClose.addEventListener('click', function() {
			detailContainer.classList.add("animated", "fadeOut", "anim-300-duration", "v-leave-to");
			detailQuestion.classList.add("animated", "slideOutDown", "anim-300-duration", "v-leave-to")
			setTimeout(() => {
				detailContainer.classList.remove("animated", "fadeOut", "anim-300-duration", "v-leave-to");
				detailContainer.style.display = 'none';
				detailContainer.removeChild(detailContainer.firstElementChild);
			}, 400)
		})
		if (currentPosition == listQuestionResult.length - 1) {
			nextbtn.classList.add("is-disabled");
		} else {
			nextbtn.classList.remove("is-disabled");
		}

	})

	var idQuestion = listQuestion[i].getAttribute("value");
	for (let j = 0; j < listQuestionResult.length; j++) {
		if (listQuestionResult[j].id == idQuestion) {
			var idTrue, idChoose;
			for (let k = 0; k < listQuestionResult[j].answers.length; k++) {
				if (listQuestionResult[j].answers[k].true == true) {
					idTrue = listQuestionResult[j].answers[k].id;
					break;
				}
			}
			idChoose = listAnswerResult[j].id;
			if (idChoose == idTrue) {
				listQuestion[i].classList.add("correct");
			} else {
				listQuestion[i].classList.add("incorrect");
			}
		}
	}
}

prebtn.addEventListener('click', function() {
	for (let i = 0; i < listQuestionResult.length; i++) {
		if (listQuestionResult[i].id == currentQuestion.id) {
			currentQuestion = listQuestionResult[i - 1];
			currentPosition = i - 1;
			answerChoose = listAnswerResult[i - 1];
		}
	}
	for (let k = 0; k < currentQuestion.answers.length; k++) {
		if (currentQuestion.answers[k].true == true) {
			answerTrue = currentQuestion.answers[k];
			noTrueAnswer = k;
			break;
		}
	}

	for (let m = 0; m < currentQuestion.answers.length; m++) {
		if (currentQuestion.answers[m].id == answerChoose.id) {
			noAnswer = m;
		}
	}
	detailContainer.removeChild(detailContainer.firstElementChild);
	addContainerDetailQuestion(currentQuestion);
	if (answerTrue.id == answerChoose.id) {
		document.getElementsByClassName("question-correctness")[0].classList.add("correct")
		document.getElementsByClassName("text score")[0].innerHTML = '100 pts'

	} else {
		document.getElementsByClassName("text score")[0].innerHTML = '0 pts'
		document.getElementsByClassName("question-correctness")[0].classList.add("incorrect")
	}

	handlePressAnswer(noTrueAnswer, noAnswer);

	closeBtn();
	if (currentPosition == 0) {
		prebtn.classList.add("is-disabled");
	} else {
		prebtn.classList.remove("is-disabled");
	}
	nextbtn.classList.remove("is-disabled");
})


nextbtn.addEventListener('click', function() {
	prebtn.classList.remove("is-disabled");
	for (let i = 0; i < listQuestionResult.length; i++) {
		if (listQuestionResult[i].id == currentQuestion.id) {
			currentQuestion = listQuestionResult[i + 1];
			currentPosition = i + 1;
			answerChoose = listAnswerResult[i + 1];
			break;
		}
	}
	for (let k = 0; k < currentQuestion.answers.length; k++) {
		if (currentQuestion.answers[k].true == true) {
			answerTrue = currentQuestion.answers[k];
			noTrueAnswer = k;
			break;
		}
	}

	for (let m = 0; m < currentQuestion.answers.length; m++) {
		if (currentQuestion.answers[m].id == answerChoose.id) {
			noAnswer = m;
		}
	}
	detailContainer.removeChild(detailContainer.firstElementChild);
	addContainerDetailQuestion(currentQuestion);

	if (answerTrue.id == answerChoose.id) {
		document.getElementsByClassName("question-correctness")[0].classList.add("correct")
		document.getElementsByClassName("text score")[0].innerHTML = '100 pts'

	} else {
		document.getElementsByClassName("text score")[0].innerHTML = '0 pts'
		document.getElementsByClassName("question-correctness")[0].classList.add("incorrect")
	}

	handlePressAnswer(noTrueAnswer, noAnswer);
	closeBtn();

	if (currentPosition == listQuestionResult.length - 1) {
		nextbtn.classList.add("is-disabled");
	} else {
		nextbtn.classList.remove("is-disabled");
	}
})


//function  result check true answer and chosen user'answer
function handlePressAnswer(answerv, intChoosev) {
	if (answerv == intChoosev) {
		document.getElementsByClassName("option text-option")[answerv].classList.add("is-selected", "is-correct")
		for (let i = 0; i < 4; i++) {
			if (answerv == i) {
				continue;
			}
			document.getElementsByClassName("option text-option")[i].classList.add("is-not-selected")

		}
	}
	if (answerv != intChoosev) {
		document.getElementsByClassName("option text-option")[answerv].classList.add("is-not-selected", "is-correct")
		document.getElementsByClassName("option text-option")[intChoosev].classList.add("is-selected", "is-incorrect")
		for (let i = 0; i < 4; i++) {
			if (answerv == i || intChoosev == i) {
				continue;
			}
			document.getElementsByClassName("option text-option")[i].classList.add("is-not-selected")
		}

	}
}


function addContainerDetailQuestion(currentQuestion) {
	detailQuestion = document.createElement("div");
	detailQuestion.classList.add("question-review-container");
	detailQuestion.setAttribute("data-v-c333c658", "");
	detailQuestion.innerHTML = `
        <div data-v-c333c658="" class="clickable-area"></div>
        <div data-v-c333c658="" class="main-content">
            <div data-v-c333c658="" class="content">
                <div data-v-c333c658="" class="top-header">
                    <div data-v-c333c658="" class="header text black-text">${currentQuestion.name}</div>
                    <div data-v-c333c658="" class="question-correctness"><div data-v-c333c658="" class="icon"></div></div>
                    <div data-v-c333c658="" class="metrics flex-view flex-row all-center">
                        <div data-v-c333c658="" class="item score flex-view all-center">
                            <div data-v-c333c658="" class="font-icon"><i data-v-c333c658="" class="icon-fas-coins"></i></div>
                            <span data-v-c333c658="" class="text score"></span>
                        </div>
                    </div>
                    <button data-v-c333c658="" aria-label="Close Review question modal" class="close-btn strip-default-btn-style"><div data-v-c333c658="" class="icon"></div></button>
                </div>
                <div data-v-c333c658="" class="question-container animated fadeIn">
                    <div data-v-c333c658="" class="question with-image">
                        <div data-v-c333c658="" class="image background-as-image" style="background-image: url('${currentQuestion.image}');"></div>
                        <span data-v-c333c658="" class="text black-text"><p>${currentQuestion.description}</p></span>
                    </div>
                    <div data-v-c333c658="" class="divider"></div>
                    <div data-v-c333c658="" class="options-container">
                        <div data-v-c333c658="" class="option text-option">
                            <span data-v-c333c658="" class="text black-text"><p>${currentQuestion.answers[0].description}</p></span>
                        </div>
                        <!---->
                        <div data-v-c333c658="" class="option text-option">
                            <span data-v-c333c658="" class="text black-text"><p>${currentQuestion.answers[1].description}</p></span>
                        </div>
                        <!---->
                        <div data-v-c333c658="" class="option text-option">
                            <span data-v-c333c658="" class="text black-text"><p>${currentQuestion.answers[2].description}</p></span>
                        </div>
                        <!---->
                        <div data-v-c333c658="" class="option text-option">
                            <span data-v-c333c658="" class="text black-text"><p>${currentQuestion.answers[3].description}</p></span>
                        </div>
                        <!---->
                    </div>
                    <!---->
                </div>
            </div>
        </div>
        <!---->
    `
	detailContainer.prepend(detailQuestion);

}

function closeBtn() {
	var btnClose = document.getElementsByClassName("close-btn strip-default-btn-style")[0];
	btnClose.addEventListener('click', function() {
		detailContainer.classList.add("animated", "fadeOut", "anim-300-duration", "v-leave-to");
		detailQuestion.classList.add("animated", "slideOutDown", "anim-300-duration", "v-leave-to")
		setTimeout(() => {
			detailContainer.classList.remove("animated", "fadeOut", "anim-300-duration", "v-leave-to");
			detailContainer.style.display = 'none';
			detailContainer.removeChild(detailContainer.firstElementChild);
		}, 400)
	})
}



