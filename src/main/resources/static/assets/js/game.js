var headercontainer = document.getElementsByClassName("header-container")[0];
var scoreDiv = document.getElementsByClassName("score-title")[0];
var currentDiv = document.getElementsByClassName("current-question")[0];
var totalDiv = document.getElementsByClassName("total-questions")[0];
//Next question
var nextbtn = document.getElementsByClassName("right-navigator strip-default-btn-style")[0];
var prebtn = document.getElementsByClassName("left-navigator strip-default-btn-style")[0];

//Time start
var timestart = new Date();
//Time end
var timeend;
//Distance time
var distance = resultGolbal.totalTime;

//score
var score = resultGolbal.score;
scoreDiv.innerHTML = score;
//Question
var question;
//Postion question true
var answer;
//Vị trí
var position = resultGolbal.listAnswer.length;
if (position == 0) {
	prebtn.classList.add("disable", "no-click");
}

question = resultGolbal.quiz.questions[position]
//Answer user choose
var answerChoose;
//Position of answer
var intChoose;
//Question id
var questionId = question.id;
//Id Result
var resultId = resultGolbal.id;
for (var i = 0; i < question.answers.length; i++) {
	if (question.answers[i].true) {
		answer = i + 1;
		break;
	}
}
var currentQuestion = resultGolbal.listAnswer.length + 1;


currentDiv.innerHTML = currentQuestion;
totalDiv.innerHTML = "/" + resultGolbal.quiz.quantityOfQuestion;

var timeQuestion = question.duration;
var i = 0;
var timeRun = document.getElementsByClassName("timer-bar")[0];

var interval = setInterval(function() {
	i = i + 1000;
	timeRun.style.transform = `translateX(${(-i / timeQuestion) * 100}%)`;
	timeRun.style.background = "rgba(255, 255, 255, 0.66)";
	if ((i / timeQuestion) * 100 >= 60) {
		timeRun.style.background = "rgb(239, 169, 41)";
	}
	if ((i / timeQuestion) * 100 >= 80) {
		timeRun.style.background = "rgb(236, 11, 67)";
	}
	if ((i / timeQuestion) * 100 >= 100) {
		timeRun.style.transition = "none 0s ease 0s";
		clearInterval(interval);
	}

}, 1000);


//pause game
var pauseGameButton = document.getElementById("pause-game-button");
var pauseGameIcon = document.getElementById("pause-game-icon");
var pauseGameEffect = document.getElementById("pause-game-effect");
var pauseGamelayout = document.getElementById("pause-game-layout");
var container = document.getElementsByClassName("themed-background classic in-game-wrapper-container is-page-quiz")[0];



pauseGameButton.addEventListener("click", function() {
	if (pauseGameButton.getAttribute("aria-label") == "Pause") {
		$.ajax({
			type: 'GET',
			url: '/response/' + resultId,
			success: function(result) {
				resultGolbal = result;
				position = resultGolbal.listAnswer.length;
				pauseGameButton.setAttribute("aria-label", "Resume");
				pauseGameIcon.classList.toggle("icon-fas-pause", false);
				pauseGameIcon.classList.toggle("icon-fas-play", true);
				var modal = document.createElement("div");
				modal.classList.add("game-screen-overlay");
				modal.classList.add("animated", "slideInDown", "anim-400-duration");
				modal.setAttribute("data-v-7a672480", "");
				modal.setAttribute("data-v-56a5acac", "");
				modal.innerHTML = `
       		 <div data-v-7a672480="" class="game-pause-screen">
           		 <div data-v-7a672480="" tabindex="0" aria-label="Game has paused" class="content-wrapper">
                <div data-v-7a672480="" class="dummy-div"></div>
                <div data-v-7a672480="" class="content">
                    <div data-v-7a672480="" class="page-section">
                        <div data-v-7a672480="" class="section-card top-section">
                            <div data-v-7a672480="" class="game-progress-bar-wrapper">
                                <div data-v-7a672480="" class="game-progress-bar" style="background-size: ${position / resultGolbal.quiz.quantityOfQuestion * 100}% 100%, 0% 100%, 0% 100%, 100% 100%;">
                                    <i data-v-7a672480="" class="game-progress-icon icon-fas-running" style="left: 5.88235%;"></i><i data-v-7a672480="" class="game-end-icon icon-fas-flag-checkered"></i>
                                </div>
                                <div data-v-7a672480="" class="progress-milestones"><span data-v-7a672480="" class="start">Start</span><span data-v-7a672480="" class="end">End</span></div>
                            </div>
                            <div data-v-7a672480="" class="questions-remaining">
                               ${resultGolbal.quiz.quantityOfQuestion - position} questions remaining
                            </div>
                            <div data-v-67f85da8="" data-v-7a672480="" class="sticky-button">
                                <div data-v-67f85da8="" class="cta-group classic"><button data-v-67f85da8="" class="resume-btn classic">Resume</button><button data-v-67f85da8="" class="leave-btn">Save &amp; Exit</button></div>
                                <!---->
                            </div>
                        </div>
                    </div>
                    <div data-v-7a672480="" class="page-section">
                        <div data-v-7a672480="" class="section-title">Settings</div>
                        <div data-v-7a672480="" class="section-card settings-section">
                            <ul data-v-7a672480="" class="settings-list">
                                <li data-v-7a672480="" class="setting">
                                    <div data-v-7a672480="" class="setting-description"><i data-v-7a672480="" class="setting-icon icon-fas-music"></i><label data-v-7a672480="" for="play-music">Music</label></div>
                                    <button data-v-8ccc2956="" data-v-7a672480="" aria-label="" role="checkbox" class="toggle-button text-unselectable" id="play-music">
                                        <span data-v-8ccc2956="" class="open"></span><span data-v-8ccc2956="" class="close"></span>
                                    </button>
                                </li>
                                <li data-v-7a672480="" class="setting">
                                    <div data-v-7a672480="" class="setting-description"><i data-v-7a672480="" class="setting-icon icon-fas-volume"></i><label data-v-7a672480="" for="sound-effects">Sound Effects</label></div>
                                    <button data-v-8ccc2956="" data-v-7a672480="" aria-label="" role="checkbox" class="toggle-button text-unselectable" id="sound-effects">
                                        <span data-v-8ccc2956="" class="open"></span><span data-v-8ccc2956="" class="close"></span>
                                    </button>
                                </li>
                                <li data-v-7a672480="" class="setting">
                                    <div data-v-7a672480="" class="setting-description"><i data-v-7a672480="" class="setting-icon icon-fas-comment-dots"></i><label data-v-7a672480="" for="read-aloud">Read aloud</label></div>
                                    <button data-v-8ccc2956="" data-v-7a672480="" aria-label="" role="checkbox" aria-checked="true" class="toggle-button text-unselectable on" id="read-aloud">
                                        <span data-v-8ccc2956="" class="open"></span><span data-v-8ccc2956="" class="close"></span>
                                    </button>
                                </li>
                                <!---->
                            </ul>
                        </div>
                    </div>
                    <!---->
                </div>
                <div data-v-7a672480="" class="quizbiz-content">
                    <div data-v-2e79a17a="" data-v-7a672480="" class="quizbiz-container" style="display: none;">
                        <div data-v-2e79a17a="" class="info-header" style="display: none;">
                            <div data-v-2e79a17a="" class="info-content">
                                <div data-v-0bdd05df="" data-v-2e79a17a="" tabindex="-1" class="show-tooltip hover default">
                                    <span data-v-2e79a17a="" data-v-0bdd05df="" class="info-text">
                                        <i data-v-2e79a17a="" data-v-0bdd05df="" class="icon-fas-info-circle"></i>
                                        Why show ads?
                                    </span>
                                    <div data-v-0bdd05df="" class="content bottom-left default">
                                        Quizizz uses ads on this page to keep the service free.
                                        <br />
                                        <br />
                                        To learn more about how this works,
                                        <a href="https://quizizz.zendesk.com/hc/en-us/articles/360016227971" target="_blank">
                                            click here
                                        </a>
                                        .
                                    </div>
                                </div>
                            </div>
                            <div data-v-2e79a17a="" class="report-ad">Report this ad</div>
                        </div>
                        <!---->
                        <div data-v-2e79a17a="" class="main-ad-container"><div data-v-2e79a17a="" id="pauseScreenCompliant"></div></div>
                        <!---->
                    </div>
                    <!---->
                    <div data-v-2e79a17a="" data-v-7a672480="" class="quizbiz-container" style="display: none;">
                        <div data-v-2e79a17a="" class="info-header" style="display: none;">
                            <div data-v-2e79a17a="" class="info-content">
                                <div data-v-0bdd05df="" data-v-2e79a17a="" tabindex="-1" class="show-tooltip hover default">
                                    <span data-v-2e79a17a="" data-v-0bdd05df="" class="info-text">
                                        <i data-v-2e79a17a="" data-v-0bdd05df="" class="icon-fas-info-circle"></i>
                                        Why show ads?
                                    </span>
                                    <div data-v-0bdd05df="" class="content bottom-left default">
                                        Quizizz uses ads on this page to keep the service free.
                                        <br />
                                        <br />
                                        To learn more about how this works,
                                        <a href="https://quizizz.zendesk.com/hc/en-us/articles/360016227971" target="_blank">
                                            click here
                                        </a>
                                        .
                                    </div>
                                </div>
                            </div>
                            <div data-v-2e79a17a="" class="report-ad">Report this ad</div>
                        </div>
                        <!---->
                        <div data-v-2e79a17a="" class="main-ad-container"><div data-v-2e79a17a="" id="pauseScreenCompliantMPU2"></div></div>
                        <!---->
                    </div>
                </div>
            </div>
        </div>   
        `
				container.appendChild(modal);
				setTimeout(() => {
					modal.classList.remove("animated", "slideInDown", "anim-400-duration");
				}, 400);

				var back = document.createElement("div");
				back.classList.add("powerup-effects-wrapper");
				back.setAttribute("data-v-0475adf1", "");
				back.innerHTML = `<div data-v-4bd1dac5="" data-v-0475adf1="" class="powerup-effects-center-container">
                        <p data-v-4bd1dac5="" class="effects-container"></p>
                         <p data-v-4bd1dac5="" class="applied-effects-container"></p>
                        </div>`
				headercontainer.prepend(back);
				var resumeBtn = document.getElementsByClassName("resume-btn classic")[0];
				resumeBtn.addEventListener('click', function() {
					var back = document.getElementsByClassName("powerup-effects-wrapper")[0];
					var modal = document.getElementsByClassName("game-screen-overlay")[0];
					pauseGameButton.setAttribute("aria-label", "Pause");
					pauseGameIcon.classList.toggle("icon-fas-play", false);
					pauseGameIcon.classList.toggle("icon-fas-pause", true);
					headercontainer.removeChild(headercontainer.firstElementChild);
					modal.classList.add("animated", "slideOutUp", "anim-400-duration");
					setTimeout(() => {
						container.removeChild(container.lastChild);
					}, 300);
				})
				var backBtn = document.getElementsByClassName("leave-btn")[0];
				backBtn.addEventListener("click", function() {
					window.location.href = "/home";
				})
				var btnunchecks = document.getElementsByClassName('toggle-button');
				for (let i = 0; i < btnunchecks.length; i++) {
					btnunchecks[i].addEventListener('click', function(e) {
						var btn = e.target;
						if (btn.getAttribute('aria-checked') == "true") {
							btn.classList.remove('on')
							btn.removeAttribute('aria-checked');
						} else {
							btn.classList.add('on')
							btn.setAttribute('aria-checked', true);
						}
					})
				}
			},
			error: function() {
				alert("error")
			}
		})

	}
	else {
		var back = document.getElementsByClassName("powerup-effects-wrapper")[0];
		var modal = document.getElementsByClassName("game-screen-overlay")[0];
		pauseGameButton.setAttribute("aria-label", "Pause");
		pauseGameIcon.classList.toggle("icon-fas-play", false);
		pauseGameIcon.classList.toggle("icon-fas-pause", true);
		headercontainer.removeChild(headercontainer.firstElementChild);
		modal.classList.add("animated", "slideOutUp", "anim-400-duration");
		setTimeout(() => {
			container.removeChild(container.lastChild);
		}, 300);

	}
});



//fullscreen
const fullScreenButton = document.getElementById("fullscreen-btn");
const themeBackground = document.getElementsByClassName("themed-background classic in-game-wrapper-container is-page-quiz");

/* View in fullscreen function */
var elem = document.documentElement;
function openFullscreen() {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) { /* Safari */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE11 */
		elem.msRequestFullscreen();
	}
}
/* Close fullscreen */
function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) { /* Safari */
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { /* IE11 */
		document.msExitFullscreen();
	}
}


fullScreenButton.addEventListener("click", () => {
	if (fullScreenButton.classList.contains("fullscreen-active")) {
		fullScreenButton.setAttribute("title", "Fullscreen");
		fullScreenButton.classList.remove("fullscreen-active");
		closeFullscreen();
		themeBackground[0].setAttribute("style", "min-height: 284px;");

	}
	else {
		fullScreenButton.setAttribute("title", "Exit FullScreen");
		fullScreenButton.classList.add("fullscreen-active");
		openFullscreen();
		themeBackground[0].setAttribute("style", "min-height: 416px;");

	}
});


// play/stop music
const musicButton = document.getElementById("music-button");
const iconMusicButton = document.querySelector("button[data-v-4c5533fe] i[data-v-4c5533fe]");
const titleMusicButton = document.querySelector("div[data-v-4c5533fe] span[data-v-4c5533fe]");
const musicPlayer = document.getElementById("music-player");

const music = musicPlayer.innerHTML;

musicButton.addEventListener("click", () => {
	if (iconMusicButton.classList.contains("icon-fas-music")) {
		iconMusicButton.classList.toggle("icon-fas-music", false);
		iconMusicButton.classList.toggle("icon-fas-music-slash", true);
		titleMusicButton.innerHTML = "Music off";
		musicPlayer.innerHTML = "";
	}
	else {
		iconMusicButton.classList.toggle("icon-fas-music", true);
		iconMusicButton.classList.toggle("icon-fas-music-slash", false);
		titleMusicButton.innerHTML = "Music on";
		musicPlayer.innerHTML = music;
	}
});






var quizContainer = document.getElementsByClassName("quiz-container-inner")[0];
var containerquestion = document.createElement("div");
containerquestion.setAttribute("data-v-19927ae6", "");
containerquestion.setAttribute("data-v-1ca67761", "");
containerquestion.classList.add("quiz-container-inner");
containerquestion.innerHTML = `<div data-v-093f3eb4="" data-v-311d4f74="" data-v-19927ae6="" class="question-container themed" data-v-1ca67761=""
    style="height: 256px; width: 1504px;" >
    <!---->
    <div data-v-311d4f74="" data-v-093f3eb4="" class="question-container-inner">
        <div data-v-311d4f74="" data-v-093f3eb4="" aria-label="Question Image Zoom" tabindex="0" role="button"
            class="question-media" style="height: 256px; width: 601px;"><img data-v-311d4f74="" data-v-093f3eb4=""
                src="${question.image}"
                alt="Question image" tabindex="-1" class="question-image is-clickable"></div>
        <!---->
        <div data-v-311d4f74="" data-v-093f3eb4="" aria-describedby="questionText"
            class="question-text with-image-landscape" style="height: 256px; width: 902px;">
            <div data-v-25bba4b6="" data-v-311d4f74="" id="questionText" class="resizeable-text" data-v-093f3eb4=""
                style="font-size: 32px;">
                <div data-v-25bba4b6="" class="resizeable question-text-color">
                    <p>${question.description}</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div data-v-7e567954="" data-v-19927ae6="" class="options-container" data-v-1ca67761="" style="height: 323px;">
    <div data-v-7e567954="" class="options-grid">
        <div data-v-7e567954="" class="option option-1 is-mcq"
            style="position: absolute; top: 0px; left: 0px; width: 378px; height: 323px;" value="${question.answers[0].id}">
            <div data-v-093f3eb4="" class="themed darkerBlack themed-option-container is-mcq"  >
                <div class="bpl-container th-black option-inner" role="option" aria-describedby="optionText"
                    tabindex="0" data-v-093f3eb4="">
                    <div class="bpl-prog-container" style="display: none;">
                        <div class="bpl-progress" style="transition-duration: 9.6s;">
                        </div>
                    </div><span class="bpl-content-container">
                        <div data-v-25bba4b6="" id="optionText" class="resizeable-text" style="font-size: 32px;">
                            <div data-v-25bba4b6="" class="resizeable">
                                <p>${question.answers[0].description}</p>
                            </div>
                        </div>
                        <!---->
                    </span>
                </div>
                <!---->
            </div>
        </div>
        <div data-v-7e567954="" class="option option-2 is-mcq"
            style="position: absolute; top: 0px; left: 378px; width: 378px; height: 323px;" value="${question.answers[1].id}">
            <div data-v-093f3eb4="" class="themed darkerBlack themed-option-container is-mcq">
                <div class="bpl-container th-black option-inner" role="option" aria-describedby="optionText"
                    tabindex="0" data-v-093f3eb4="">
                    <div class="bpl-prog-container" style="display: none;">
                        <div class="bpl-progress" style="transition-duration: 9.6s;">
                        </div>
                    </div><span class="bpl-content-container">
                        <div data-v-25bba4b6="" id="optionText" class="resizeable-text" style="font-size: 32px;">
                            <div data-v-25bba4b6="" class="resizeable">
                                <p>${question.answers[1].description}</p>
                            </div>
                        </div>
                        <!---->
                    </span>
                </div>
                <!---->
            </div>
        </div>
        <div data-v-7e567954="" class="option option-3 is-mcq"
            style="position: absolute; top: 0px; left: 756px; width: 378px; height: 323px;" value="${question.answers[2].id}">
            <div data-v-093f3eb4="" class="themed darkerBlack themed-option-container is-mcq">
                <div class="bpl-container th-black option-inner" role="option" aria-describedby="optionText"
                    tabindex="0" data-v-093f3eb4="">
                    <div class="bpl-prog-container" style="display: none;">
                        <div class="bpl-progress" style="transition-duration: 9.6s;">
                        </div>
                    </div><span class="bpl-content-container">
                        <div data-v-25bba4b6="" id="optionText" class="resizeable-text" style="font-size: 32px;">
                            <div data-v-25bba4b6="" class="resizeable">
                                <p>${question.answers[2].description}</p>
                            </div>
                        </div>
                        <!---->
                    </span>
                </div>
                <!---->
            </div>
        </div>
        <div data-v-7e567954="" class="option option-4 is-last is-mcq"
            style="position: absolute; top: 0px; left: 1134px; width: 378px; height: 323px;" value="${question.answers[3].id}">
            <div data-v-093f3eb4="" class="themed darkerBlack themed-option-container is-last is-mcq">
                <div class="bpl-container th-black option-inner" role="option" aria-describedby="optionText"
                    tabindex="0" data-v-093f3eb4="">
                    <div class="bpl-prog-container" style="display: none;">
                        <div class="bpl-progress" style="transition-duration: 9.6s;">
                        </div>
                    </div><span class="bpl-content-container">
                        <div data-v-25bba4b6="" id="optionText" class="resizeable-text" style="font-size: 32px;">
                            <div data-v-25bba4b6="" class="resizeable">
                                <p>${question.answers[3].description}</p>
                            </div>
                        </div>
                        <!---->
                    </span>
                </div>
                <!---->
            </div>
        </div>
    </div>
</div>`
quizContainer.appendChild(containerquestion);




//choose answer for question
var answerContainer = document.querySelectorAll("div[data-v-7e567954] .option");
var answerContainerTheme = document.querySelectorAll("div[data-v-7e567954] .option div[data-v-093f3eb4]");




function handleTrueanswerSelected(elementContainer, elementTheme) //handle true answer picked
{
	elementContainer.classList.add("is-read-only", "is-selected", "is-correct", "option-pressed");
	elementTheme.classList.add("is-read-only", "is-selected", "is-correct", "option-pressed");
}

function handleFalseanswerSelected(elementContainer, elementTheme)//handle false answer picked
{
	elementContainer.classList.add("is-read-only", "is-selected", "is-incorrect", "option-pressed");
	elementTheme.classList.add("is-read-only", "is-selected", "is-incorrect", "option-pressed");
}

function handleTrueanswerUnSelected(elementContainer, elementTheme)//handle false answer picked
{
	elementContainer.classList.add("is-read-only", "is-correct", "is-last");
	elementTheme.classList.add("is-read-only", "is-correct", "is-last");
}

function handleanswerUnSelected(elementContainer, elementTheme)//handle orther answers unPicked
{
	elementContainer.classList.add("is-read-only", "is-hidden");
	elementTheme.classList.add("is-read-only", "is-hidden");
}


function handlePressAnswer(answerv, intChoosev) {
	if (answerv == intChoosev) {
		handleTrueanswerSelected(answerContainer[answerv - 1], answerContainerTheme[answerv - 1])
		for (let i = 0; i < 4; i++) {
			if (answerv == i + 1) {
				continue;
			}
			handleanswerUnSelected(answerContainer[i], answerContainerTheme[i]);
		}

	}
	if (answerv != intChoosev) {
		handleTrueanswerUnSelected(answerContainer[answerv - 1], answerContainerTheme[answerv - 1])
		handleFalseanswerSelected(answerContainer[intChoosev - 1], answerContainerTheme[intChoosev - 1]);
		for (let i = 0; i < 4; i++) {
			if (answerv == i + 1 || intChoosev == i + 1) {
				continue;
			}
			handleanswerUnSelected(answerContainer[i], answerContainerTheme[i]);
		}

	}
}
function unEnableAnswer() {
	for (let i = 0; i < answerContainer.length; i++) {
		answerContainer[i].classList.add("no-click");
	}
	nextbtn.classList.remove("disable", "no-click");
}

function updateChoosen(idAnswerChosen) {
	$.ajax({
		type: 'PUT',
		url: '/continue/' + resultId,
		data: {
			"answerId": idAnswerChosen,
			"scoreTotal": score,
			"totalTime": distance
		},
		success: function() {
			if (currentQuestion == resultGolbal.quiz.quantityOfQuestion) {
				window.location.href = "/summary/" + resultId;
			}
		},
		error: function() {
			alert("error")
		}
	})
	unEnableAnswer();
}


//check which user choose
//answer box one 
for (let i = 0; i < answerContainer.length; i++) {
	answerContainer[i].addEventListener('click', function() {
		handlePressAnswer(answer, i + 1)
		var idAnswerChosen = answerContainer[i].getAttribute("value");
		if (answer == i + 1) {
			score += 100;
			scoreDiv.innerHTML = score;
		}
		timeend = new Date();
		distance +=  timeend.getTime() - timestart.getTime();
		updateChoosen(idAnswerChosen)
		timeRun.style.removeProperty("transition");
		timeRun.style.background = "transparent";
		timeRun.style.removeProperty("transform");
		clearInterval(interval);
		
	})
}


//Press pre question --> ajax load from db  --> show old chosen 
prebtn.addEventListener('click', function() {
	containerquestion.remove();
	nextbtn.classList.remove("disable");
	prebtn.classList.remove("disable", "no-click");
	questionId = question.id;
	$.ajax({
		type: 'GET',
		url: '/response/' + resultId,
		success: function(result) {
			resultGolbal = result;
			position = resultGolbal.listAnswer.length;
			for (var i = 0; i < result.quiz.questions.length; i++) {
				if (result.quiz.questions[i].id == questionId) {
					question = result.quiz.questions[i - 1];
					answerChoose = result.listAnswer[i - 1];
					currentQuestion = i;
					break;
				}
			}
			if (currentQuestion == 1) {
				prebtn.classList.add("disable", "no-click");
			}
			currentDiv.innerHTML = currentQuestion;
			containerquestion = document.createElement("div");
			containerquestion.setAttribute("data-v-19927ae6", "");
			containerquestion.setAttribute("data-v-1ca67761", "");
			containerquestion.classList.add("quiz-container-inner");
			containerquestion.innerHTML = `<div data-v-093f3eb4="" data-v-311d4f74="" data-v-19927ae6="" class="question-container themed" data-v-1ca67761=""
    			style="height: 256px; width: 1504px;" >
    		<!---->
    <div data-v-311d4f74="" data-v-093f3eb4="" class="question-container-inner">
        <div data-v-311d4f74="" data-v-093f3eb4="" aria-label="Question Image Zoom" tabindex="0" role="button"
            class="question-media" style="height: 256px; width: 601px;"><img data-v-311d4f74="" data-v-093f3eb4=""
                src="${question.image}"
                alt="Question image" tabindex="-1" class="question-image is-clickable"></div>
        <!---->
        <div data-v-311d4f74="" data-v-093f3eb4="" aria-describedby="questionText"
            class="question-text with-image-landscape" style="height: 256px; width: 902px;">
            <div data-v-25bba4b6="" data-v-311d4f74="" id="questionText" class="resizeable-text" data-v-093f3eb4=""
                style="font-size: 32px;">
                <div data-v-25bba4b6="" class="resizeable question-text-color">
                    <p>${question.description}</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div data-v-7e567954="" data-v-19927ae6="" class="options-container" data-v-1ca67761="" style="height: 323px;">
    <div data-v-7e567954="" class="options-grid">
        <div data-v-7e567954="" class="option option-1 is-mcq"
            style="position: absolute; top: 0px; left: 0px; width: 378px; height: 323px;" value="${question.answers[0].id}">
            <div data-v-093f3eb4="" class="themed darkerBlack themed-option-container is-mcq"  >
                <div class="bpl-container th-black option-inner" role="option" aria-describedby="optionText"
                    tabindex="0" data-v-093f3eb4="">
                    <div class="bpl-prog-container" style="display: none;">
                        <div class="bpl-progress" style="transition-duration: 9.6s;">
                        </div>
                    </div><span class="bpl-content-container">
                        <div data-v-25bba4b6="" id="optionText" class="resizeable-text" style="font-size: 32px;">
                            <div data-v-25bba4b6="" class="resizeable">
                                <p>${question.answers[0].description}</p>
                            </div>
                        </div>
                        <!---->
                    </span>
                </div>
                <!---->
            </div>
        </div>
        <div data-v-7e567954="" class="option option-2 is-mcq"
            style="position: absolute; top: 0px; left: 378px; width: 378px; height: 323px;" value="${question.answers[1].id}">
            <div data-v-093f3eb4="" class="themed darkerBlack themed-option-container is-mcq">
                <div class="bpl-container th-black option-inner" role="option" aria-describedby="optionText"
                    tabindex="0" data-v-093f3eb4="">
                    <div class="bpl-prog-container" style="display: none;">
                        <div class="bpl-progress" style="transition-duration: 9.6s;">
                        </div>
                    </div><span class="bpl-content-container">
                        <div data-v-25bba4b6="" id="optionText" class="resizeable-text" style="font-size: 32px;">
                            <div data-v-25bba4b6="" class="resizeable">
                                <p>${question.answers[1].description}</p>
                            </div>
                        </div>
                        <!---->
                    </span>
                </div>
                <!---->
            </div>
        </div>
        <div data-v-7e567954="" class="option option-3 is-mcq"
            style="position: absolute; top: 0px; left: 756px; width: 378px; height: 323px;" value="${question.answers[2].id}">
            <div data-v-093f3eb4="" class="themed darkerBlack themed-option-container is-mcq">
                <div class="bpl-container th-black option-inner" role="option" aria-describedby="optionText"
                    tabindex="0" data-v-093f3eb4="">
                    <div class="bpl-prog-container" style="display: none;">
                        <div class="bpl-progress" style="transition-duration: 9.6s;">
                        </div>
                    </div><span class="bpl-content-container">
                        <div data-v-25bba4b6="" id="optionText" class="resizeable-text" style="font-size: 32px;">
                            <div data-v-25bba4b6="" class="resizeable">
                                <p>${question.answers[2].description}</p>
                            </div>
                        </div>
                        <!---->
                    </span>
                </div>
                <!---->
            </div>
        </div>
        <div data-v-7e567954="" class="option option-4 is-last is-mcq"
            style="position: absolute; top: 0px; left: 1134px; width: 378px; height: 323px;" value="${question.answers[3].id}">
            <div data-v-093f3eb4="" class="themed darkerBlack themed-option-container is-last is-mcq">
                <div class="bpl-container th-black option-inner" role="option" aria-describedby="optionText"
                    tabindex="0" data-v-093f3eb4="">
                    <div class="bpl-prog-container" style="display: none;">
                        <div class="bpl-progress" style="transition-duration: 9.6s;">
                        </div>
                    </div><span class="bpl-content-container">
                        <div data-v-25bba4b6="" id="optionText" class="resizeable-text" style="font-size: 32px;">
                            <div data-v-25bba4b6="" class="resizeable">
                                <p>${question.answers[3].description}</p>
                            </div>
                        </div>
                        <!---->
                    </span>
                </div>
                <!---->
            </div>
        </div>
    </div>
</div>`
			quizContainer.appendChild(containerquestion);
			answerContainer = document.querySelectorAll("div[data-v-7e567954] .option");
			answerContainerTheme = document.querySelectorAll("div[data-v-7e567954] .option div[data-v-093f3eb4]");
			for (let i = 0; i < question.answers.length; i++) {
				if (question.answers[i].true) {
					answer = i + 1;
					break;
				}
			}
			for (let i = 0; i < question.answers.length; i++) {
				if (question.answers[i].id == answerChoose.id) {
					intChoose = i + 1;
					break;
				}
			}

			handlePressAnswer(answer, intChoose);
			unEnableAnswer();

		},
		error: function() {
			alert("error")
		}
	})

})
//Press next question --> ajax load from db
nextbtn.addEventListener('click', function() {
	containerquestion.remove();
	nextbtn.classList.add("disable");
	prebtn.classList.remove("disable", "no-click");
	questionId = question.id;
	$.ajax({
		type: 'GET',
		url: '/response/' + resultId,
		success: function(result) {
			resultGolbal = result;
			position = resultGolbal.listAnswer.length;
			for (let i = 0; i < resultGolbal.quiz.questions.length; i++) {
				if (resultGolbal.quiz.questions[i].id == questionId) {
					question = resultGolbal.quiz.questions[i + 1];
					answerChoose = resultGolbal.listAnswer[i + 1];
					currentQuestion++;
				}
			}
			currentDiv.innerHTML = currentQuestion;
			totalDiv.innerHTML = "/" + resultGolbal.quiz.quantityOfQuestion;
			containerquestion = document.createElement("div");
			containerquestion.setAttribute("data-v-19927ae6", "");
			containerquestion.setAttribute("data-v-1ca67761", "");
			containerquestion.classList.add("quiz-container-inner");
			containerquestion.innerHTML = `<div data-v-093f3eb4="" data-v-311d4f74="" data-v-19927ae6="" class="question-container themed" data-v-1ca67761=""
    			style="height: 256px; width: 1504px;" >
    		<!---->
    <div data-v-311d4f74="" data-v-093f3eb4="" class="question-container-inner">
        <div data-v-311d4f74="" data-v-093f3eb4="" aria-label="Question Image Zoom" tabindex="0" role="button"
            class="question-media" style="height: 256px; width: 601px;"><img data-v-311d4f74="" data-v-093f3eb4=""
                src="${question.image}"
                alt="Question image" tabindex="-1" class="question-image is-clickable"></div>
        <!---->
        <div data-v-311d4f74="" data-v-093f3eb4="" aria-describedby="questionText"
            class="question-text with-image-landscape" style="height: 256px; width: 902px;">
            <div data-v-25bba4b6="" data-v-311d4f74="" id="questionText" class="resizeable-text" data-v-093f3eb4=""
                style="font-size: 32px;">
                <div data-v-25bba4b6="" class="resizeable question-text-color">
                    <p>${question.description}</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div data-v-7e567954="" data-v-19927ae6="" class="options-container" data-v-1ca67761="" style="height: 323px;">
    <div data-v-7e567954="" class="options-grid">
        <div data-v-7e567954="" class="option option-1 is-mcq"
            style="position: absolute; top: 0px; left: 0px; width: 378px; height: 323px;" value="${question.answers[0].id}">
            <div data-v-093f3eb4="" class="themed darkerBlack themed-option-container is-mcq"  >
                <div class="bpl-container th-black option-inner" role="option" aria-describedby="optionText"
                    tabindex="0" data-v-093f3eb4="">
                    <div class="bpl-prog-container" style="display: none;">
                        <div class="bpl-progress" style="transition-duration: 9.6s;">
                        </div>
                    </div><span class="bpl-content-container">
                        <div data-v-25bba4b6="" id="optionText" class="resizeable-text" style="font-size: 32px;">
                            <div data-v-25bba4b6="" class="resizeable">
                                <p>${question.answers[0].description}</p>
                            </div>
                        </div>
                        <!---->
                    </span>
                </div>
                <!---->
            </div>
        </div>
        <div data-v-7e567954="" class="option option-2 is-mcq"
            style="position: absolute; top: 0px; left: 378px; width: 378px; height: 323px;" value="${question.answers[1].id}">
            <div data-v-093f3eb4="" class="themed darkerBlack themed-option-container is-mcq">
                <div class="bpl-container th-black option-inner" role="option" aria-describedby="optionText"
                    tabindex="0" data-v-093f3eb4="">
                    <div class="bpl-prog-container" style="display: none;">
                        <div class="bpl-progress" style="transition-duration: 9.6s;">
                        </div>
                    </div><span class="bpl-content-container">
                        <div data-v-25bba4b6="" id="optionText" class="resizeable-text" style="font-size: 32px;">
                            <div data-v-25bba4b6="" class="resizeable">
                                <p>${question.answers[1].description}</p>
                            </div>
                        </div>
                        <!---->
                    </span>
                </div>
                <!---->
            </div>
        </div>
        <div data-v-7e567954="" class="option option-3 is-mcq"
            style="position: absolute; top: 0px; left: 756px; width: 378px; height: 323px;" value="${question.answers[2].id}">
            <div data-v-093f3eb4="" class="themed darkerBlack themed-option-container is-mcq">
                <div class="bpl-container th-black option-inner" role="option" aria-describedby="optionText"
                    tabindex="0" data-v-093f3eb4="">
                    <div class="bpl-prog-container" style="display: none;">
                        <div class="bpl-progress" style="transition-duration: 9.6s;">
                        </div>
                    </div><span class="bpl-content-container">
                        <div data-v-25bba4b6="" id="optionText" class="resizeable-text" style="font-size: 32px;">
                            <div data-v-25bba4b6="" class="resizeable">
                                <p>${question.answers[2].description}</p>
                            </div>
                        </div>
                        <!---->
                    </span>
                </div>
                <!---->
            </div>
        </div>
        <div data-v-7e567954="" class="option option-4 is-last is-mcq"
            style="position: absolute; top: 0px; left: 1134px; width: 378px; height: 323px;" value="${question.answers[3].id}">
            <div data-v-093f3eb4="" class="themed darkerBlack themed-option-container is-last is-mcq">
                <div class="bpl-container th-black option-inner" role="option" aria-describedby="optionText"
                    tabindex="0" data-v-093f3eb4="">
                    <div class="bpl-prog-container" style="display: none;">
                        <div class="bpl-progress" style="transition-duration: 9.6s;">
                        </div>
                    </div><span class="bpl-content-container">
                        <div data-v-25bba4b6="" id="optionText" class="resizeable-text" style="font-size: 32px;">
                            <div data-v-25bba4b6="" class="resizeable">
                                <p>${question.answers[3].description}</p>
                            </div>
                        </div>
                        <!---->
                    </span>
                </div>
                <!---->
            </div>
        </div>
    </div>
</div>`
			quizContainer.appendChild(containerquestion);
			answerContainer = document.querySelectorAll("div[data-v-7e567954] .option");
			answerContainerTheme = document.querySelectorAll("div[data-v-7e567954] .option div[data-v-093f3eb4]");
			for (let i = 0; i < question.answers.length; i++) {
				if (question.answers[i].true) {
					answer = i + 1;
					break;
				}
			}
			if (answerChoose != null) {
				for (let i = 0; i < question.answers.length; i++) {
					if (question.answers[i].id == answerChoose.id) {
						intChoose = i + 1;
						break;
					}
				}
				handlePressAnswer(answer, intChoose);
				unEnableAnswer();
				if (currentQuestion == resultGolbal.quiz.quantityOfQuestion) {
					window.location.href = "/summary/" + resultId;
				}

			} else {
				timestart = new Date();
				timeQuestion = question.duration;
				var i = 0;
				var timeRun = document.getElementsByClassName("timer-bar")[0];
				timeRun.style.background = "rgba(255, 255, 255, 0.66)";
				var interval = setInterval(function() {
					i = i + 1000;
					timeRun.style.transform = `translateX(${(-i / timeQuestion) * 100}%)`;
					timeRun.style.background = "rgba(255, 255, 255, 0.66)";
					if ((i / timeQuestion) * 100 >= 60) {
						timeRun.style.background = "rgb(239, 169, 41)";
					}
					if ((i / timeQuestion) * 100 >= 80) {
						timeRun.style.background = "rgb(236, 11, 67)";
					}
					if ((i / timeQuestion) * 100 >= 100) {
						timeRun.style.transition = "none 0s ease 0s";
						clearInterval(interval);
					}

				}, 1000);
				for (let i = 0; i < answerContainer.length; i++) {			
					answerContainer[i].addEventListener('click', function() {
						handlePressAnswer(answer, i + 1)
						var idAnswerChosen = answerContainer[i].getAttribute("value");
						if (answer == i + 1) {
							score += 100;
							scoreDiv.innerHTML = score;
						}
						timeend = new Date();
						distance +=  timeend.getTime() - timestart.getTime();
						updateChoosen(idAnswerChosen)
						timeRun.style.removeProperty("transition");
						timeRun.style.background = "transparent";
						timeRun.style.removeProperty("transform");
						clearInterval(interval);
					})
				}
			}
		},
		error: function() {
			alert("error")
		}
	})

})





