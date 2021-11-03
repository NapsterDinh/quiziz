var btnsetting = document.getElementsByClassName("user-dropdown-action")[0];
var box = document.getElementsByClassName("user-dropdown-container")[0];
btnsetting.addEventListener('click', function () {
    btnsetting.classList.toggle("link-is-active");
    var bar = document.getElementsByClassName("icon-far-bars")[0]
    if(bar){
        var div1 = document.createElement("div");
        div1.className = "invisible-overlay";
        div1.setAttribute("data-v-35baa134","");
        btnsetting.append(div1);
        bar.className = "icon-far-times"
        var div2 = document.createElement("div");
        div2.setAttribute("data-v-35baa134","");
        div2.classList.add("user-dropdown");
        div2.innerHTML =`<div data-v-35baa134="" class="user-details-container">
                        <ul data-v-35baa134="" class="flex-view flex-column">
                            <li data-v-35baa134="" class="username">diepvi2810_61034</li>
                            <li data-v-35baa134="" class="email light-text-color">diepvi2810@gmail.com</li>
                        </ul>
                    </div>
                    <ul data-v-35baa134="" class="user-dropdown-items flex-view flex-column">
                        <li data-v-35baa134="" class="user-dropdown-list-item strip-default-btn-style">
                            <button data-v-35baa134="" role="button" aria-label="Settings" class="user-dropdown-list-item-content user-dropdown-list-link">
                                <span data-v-35baa134="" class="user-dropdown-icon-container"><i data-v-35baa134="" class="icon-far-cog"></i></span><span data-v-35baa134="">Settings</span>
                            </button>
                        </li>
                        <li data-v-35baa134="" class="user-dropdown-list-item strip-default-btn-style"><!----></li>
                        <li data-v-35baa134="" class="user-dropdown-list-item strip-default-btn-style"><!----></li>
                        <li data-v-35baa134="" class="user-dropdown-list-item strip-default-btn-style">
                            <button data-v-35baa134="" class="user-dropdown-list-item strip-default-btn-style">
                                <span data-v-35baa134="" class="user-dropdown-list-item-content">
                                    <span data-v-35baa134="" class="user-dropdown-icon-container"><i data-v-35baa134="" class="icon-far-sign-out-alt logout-icon"></i></span><span data-v-35baa134="">Log out</span>
                                </span>
                            </button>
                        </li>
                    </ul>`
        box.appendChild(div2);
    }
    else {
        document.getElementsByClassName("icon-far-times")[0].className ="icon-far-bars";
        box.removeChild(document.getElementsByClassName("user-dropdown")[0]);
        btnsetting.removeChild(document.getElementsByClassName("invisible-overlay")[0]);
    }

})


var container = document.getElementsByClassName("featured-container")[0];
var btnquiz = document.getElementsByClassName("solo-quiz max-in-row-2 max-in-row-3 max-in-row-4 max-in-row-5");
for(let i=0 ; i< btnquiz.length ;i++){
    var btn = btnquiz[i];
    btn.addEventListener('click', function(e){
		btn1 = e.target;
		var quiz;
		var id = btn1.getAttribute("value");
		var list = Object.values(quizList);
		Object.values(list).forEach(function(val) {
			if(val.id == id){
				quiz = val;
				console.log(quiz);	
			}
		});
        var modal = document.createElement("div");
        modal.classList.add("modal-container");
        modal.setAttribute("data-test","modal-container")
        modal.setAttribute("data-v-52d0425c","")
        modal.setAttribute("data-v-2d3aa134","")
        modal.innerHTML=`<div data-v-52d0425c="" class="modal-mask">
                        <div data-v-52d0425c="" tabindex="0" class="modal-body">
                            <div data-v-5d89d9e5="" data-v-2d3aa134="" class="quiz-info-wrapper" callsinprogress="">
                                <div data-v-5d89d9e5="" class="quiz-type">
                                    <span data-v-5d89d9e5=""><i data-v-5d89d9e5="" class="icon-fas-chevron-down"></i></span><span data-v-5d89d9e5="" class="quiz-type-title">Featured quiz</span>
                                </div>
                                <div data-v-5d89d9e5="" tabindex="0" role="dialog" aria-modal="true" aria-label="Quiz info" class="quiz-info-container">
                                    <div data-v-5d89d9e5="" class="top-btns-bar flex-view">
                                        <div data-v-5d89d9e5="" class="flex-view share-btn-container">
                                            <button data-v-5d89d9e5="" class="top-btn share-btn strip-default-btn-style" value="${quiz.id}" >
                                                <i data-v-5d89d9e5="" class="icon-fas-share-alt"></i>
                                                Share
                                            </button>
                                            <!---->
                                            <div data-v-5d89d9e5="" class="text share-link bold-text" style="display: none;">
                                                <input data-v-5d89d9e5="" id="quiz-info-share-input"  style="text-align:center;" type="text" spellcheck="true" autocomplete="off" class="text bold-text share-link-input" />
                                            </div>
                                        </div>
                                        <button data-v-5d89d9e5="" aria-label="Close quiz info dialog" class="top-btn close-btn text-unselectable strip-default-btn-style"><i data-v-5d89d9e5="" class="icon-far-times"></i></button>
                                    </div>
                                    <div data-v-5d89d9e5="" class="quiz-background">
                                        <div data-v-76782db8="" data-v-5d89d9e5="" class="curved-edge-container media-dimensions media-wrapper">
                                            <div data-v-76782db8="" class="curve" style="width: 400%; padding-top: 400%; transform: translateX(-37.5%) translateY(-100%); top: 100%;">
                                                <div data-v-76782db8="" class="content-container" style="width: calc(25.02%); left: calc(37.49%);">
                                                    <div
                                                        data-v-5d89d9e5=""
                                                        data-v-76782db8=""
                                                        role="img"
                                                        aria-label="Quiz thumbnail"
                                                        class="media-dimensions media"
                                                        style="background-image: url('${quiz.image}');"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-5d89d9e5="" class="quiz-stats"><span data-v-5d89d9e5="" class="questions-length">${quiz.quantityOfQuestion} Questions</span></div>
                                    </div>
                                    <div data-v-5d89d9e5="" class="quiz-info">
                                        <div data-v-5d89d9e5="" class="quiz-name">
                                            ${quiz.name}
                                        </div>
                                        <div data-v-5d89d9e5="" class="user-and-grade-info">
                                            <div data-v-5d89d9e5="" class="user-info">
                                                <img data-v-5d89d9e5="" src="${quiz.createdUser.image}" alt="Avatar" class="user-avatar" />
                                                <span data-v-5d89d9e5="" class="username" style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 1;">${quiz.createdUser.username}</span>
                                            </div>
                                            <div data-v-5d89d9e5="" class="grade-info"><span data-v-5d89d9e5="" class="grade-label"> Code: </span><span data-v-5d89d9e5="" class="grade-range">${quiz.code}</span></div>
                                        </div>
                                        <div data-v-5d89d9e5="" class="user-grade-info-separator"></div>
                                        <!---->
                                        <p data-v-5d89d9e5="" class="difficulty-level-wrapper"><span data-v-5d89d9e5="">Difficulty level: </span><span data-v-5d89d9e5="" class="difficulty-level">${quiz.level}</span></p>
                                        <!---->
                                        <div data-v-5d89d9e5="" class="sample-questions-wrapper">
                                            <p data-v-5d89d9e5="" class="sample-questions-text">Sample Questions:</p>
                                            <ul data-v-5d89d9e5="" class="sample-questions-list">											 
                                                
                                            </ul>
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-v-5d89d9e5="" class="start-quiz">
                                        <button data-v-5d89d9e5="" aria-label="Practice" class="play-quiz-btn strip-default-btn-style" onclick="location.href='/quiz/${quiz.id}'">
                                            <span data-v-5d89d9e5="" class="btn-label">Practice</span><i data-v-5d89d9e5="" class="btn-icon icon-fas-play"></i>
                                        </button>
                                        <button data-v-5d89d9e5="" aria-label="Challenge Friends" class="challenge-btn strip-default-btn-style">
                                            <span data-v-5d89d9e5="" class="btn-label">Challenge Friends</span><span data-v-5d89d9e5="" class="btn-icon"><img data-v-5d89d9e5="" alt="Users" src="https://cf.quizizz.com/game/img/ui/users%402x.png" /></span>
                                        </button>
                                        <div data-v-5d89d9e5="" class="review-info-tooltip animated anim-100-duration fadeIn" style="display: none;">
                                            <div data-v-5d89d9e5="" class="tooltip-text"></div>
                                            <div data-v-5d89d9e5="" class="tooltip-arrow"></div>
                                        </div>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                        </div>
		<div data-v-2b138a44="" data-test="snackbar-container" role="alert" class="snackbar-container" style="display: none;">
            <div data-v-2b138a44="" data-test="content" class="content">
                <p data-v-2b138a44="" data-test="message" class="message">Shareable link copied to clipboard.</p>
            </div>
            <div data-v-2b138a44="" class="action"></div>
                    </div>`
        container.appendChild(modal);
        var close = document.getElementsByClassName("top-btn close-btn text-unselectable strip-default-btn-style")[0];
        close.addEventListener('click', function(){
            container.removeChild(container.lastElementChild)
        })
		var lquestion = document.getElementsByClassName("sample-questions-list")[0];
		var text =``;
		for(let i = 0; i < 3 ; i++)
		{
			var equs = document.createElement("li");
			equs.classList.add("sample-question-list-item");
			equs.setAttribute("data-v-5d89d9e5","");
			text = `<div data-v-5d89d9e5="" class="sample-question-text-container">
                        <span data-v-5d89d9e5="">${quiz.questions[i].name}: </span>
                        <span data-v-5d89d9e5="" class="sample-question">
                          <p>${quiz.questions[i].description}</p>
                         </span>
                        </div>
                        <div data-v-5d89d9e5="" class="sample-question-image background-as-image"
                        style="background-image: url('${quiz.questions[i].image}');"></div>`
			equs.innerHTML=text;
			lquestion.appendChild(equs);
		}
		//Share in modal quiz
		var shareBtn = document.getElementsByClassName("top-btn share-btn strip-default-btn-style")[0];
		var linkshareContainer = document.getElementsByClassName('text share-link bold-text')[0];
		var linkshare = document.getElementById('quiz-info-share-input');
		shareBtn.addEventListener('click', function(e) {
			var id = shareBtn.getAttribute("value");
			shareBtn.parentElement.classList.add("share-expanded")
			linkshareContainer.style.display = "block";
			linkshare.setAttribute("autocomplete", "off")
			linkshare.value = `http://localhost:8081/quiz/${id}`
		})

		linkshareContainer.onclick = function() {
			linkshare.select();
			linkshare.setSelectionRange(0, 99999);

			navigator.clipboard.writeText(linkshare.value);

			var box = document.getElementsByClassName('snackbar-container')[0];
			box.style.display = 'block';

			setTimeout(function() {
				box.style.display = 'none';
			}, 5000)

		}		
    })
}

function newFunction() {
            ") quiz = val );";
        }
