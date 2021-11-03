var quiz;
var container = document.getElementsByClassName("featured-container")[0];
var btnquiz = document.getElementsByClassName("solo-quiz max-in-row-2 max-in-row-3 max-in-row-4 max-in-row-5");
for (let i = 0; i < btnquiz.length; i++) {
	btnquiz[i].addEventListener('click', function() {
		var id = btnquiz[i].getAttribute("value");
		var list = Object.values(quizList);
		Object.values(list).forEach(function(val) {
			if (val.id == id) {
				quiz = val;
			}
		});
		var modal = document.createElement("div");
		modal.classList.add("modal-container");
		modal.classList.add("show");
		modal.setAttribute("data-test", "modal-container")
		modal.setAttribute("data-v-52d0425c", "")
		modal.setAttribute("data-v-2d3aa134", "")
		modal.innerHTML = `<div data-v-52d0425c="" class="modal-mask">
                        <div data-v-52d0425c="" tabindex="0" class="modal-body">
                            <div data-v-5d89d9e5="" data-v-2d3aa134="" class="quiz-info-wrapper" callsinprogress="">
                                <div data-v-5d89d9e5="" class="quiz-type">
                                    <span data-v-5d89d9e5=""><i data-v-5d89d9e5="" class="icon-fas-chevron-down"></i></span><span data-v-5d89d9e5="" class="quiz-type-title">Featured quiz</span>
                                </div>
                                <div data-v-5d89d9e5="" tabindex="0" role="dialog" aria-modal="true" aria-label="Quiz info" class="quiz-info-container">
                                    <div data-v-5d89d9e5="" class="top-btns-bar flex-view">
                                        <div data-v-5d89d9e5="" class="flex-view share-btn-container">
										<a href="http://localhost:8081/quizEditor/getQuiz?id=${quiz.id}" style="text-decoration: none;">
                                            <button data-v-5d89d9e5="" class="top-btn share-btn strip-default-btn-style" value="${quiz.id}" style="width: 85px;">
                                                Edit Quiz
                                            </button>
										</a>
                                            <!---->
                                            <div data-v-5d89d9e5="" class="text share-link bold-text"  style="display: none; ">
                                                <input data-v-5d89d9e5="" id="quiz-info-share-input" style="text-align:center;" type="text" spellcheck="true" autocomplete="off" class="text bold-text share-link-input" />
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
                    </div>
			<div data-v-2b138a44="" data-test="snackbar-container" role="alert" class="snackbar-container" style="display: none;">
            <div data-v-2b138a44="" data-test="content" class="content">
                <p data-v-2b138a44="" data-test="message" class="message">Shareable link copied to clipboard.</p>
            </div>
            <div data-v-2b138a44="" class="action"></div>
        </div>
`
		container.appendChild(modal);
		var closeBtn = document.getElementsByClassName("top-btn close-btn text-unselectable strip-default-btn-style")[0];
		closeBtn.addEventListener('click',function(){
			container.removeChild(container.lastElementChild);
		})
		
		var lquestion = document.getElementsByClassName("sample-questions-list")[0];
		var text = ``;
		for (let i = 0; i < 3; i++) {
			var equs = document.createElement("li");
			equs.classList.add("sample-question-list-item");
			equs.setAttribute("data-v-5d89d9e5", "");
			text = `<div data-v-5d89d9e5="" class="sample-question-text-container">
                        <span data-v-5d89d9e5="">${quiz.questions[i].name}: </span>
                        <span data-v-5d89d9e5="" class="sample-question">
                          <p>${quiz.questions[i].description}</p>
                         </span>
                        </div>
                        <div data-v-5d89d9e5="" class="sample-question-image background-as-image"
                        style="background-image: url('${quiz.questions[i].image}');"></div>`
			equs.innerHTML = text;
			lquestion.appendChild(equs);
		}


	})
}

function newFunction() {
	") quiz = val );";
}






const button_dropdown = document.getElementById('button_dropdown');
const tab = document.getElementsByClassName('tab');
const modal = document.getElementsByClassName('modal-container')[0];
const category = document.getElementsByClassName('subject  ');
const maxSubError = document.getElementsByClassName('max-subjects-msg hidden')[0];
const showMoreLess = document.getElementsByClassName('more-btn ')[0];
const formSetNameQuiz = document.getElementById('formSetNameQuiz');
const nameInput = document.getElementById('nameinput');
const descriptionInput = document.getElementById('descriptionInput');
const quizNameError = document.getElementsByClassName('quiz-name-error')[0];
const quizDescriptionError = document.getElementsByClassName('quiz-description-error')[0];
const btnShowModalSetName = document.getElementsByClassName('admin-external-link')[0];
const modalSetNameQuiz = document.getElementsByClassName('kr-modal editor-info-modal')[0];
const btnCancel = document.getElementsByClassName('cancel-btn')[0];
const soloQuiz = document.getElementsByClassName('solo-quiz');
const soloQuizContainer = document.getElementsByClassName('olo-quiz-container')[0];
const modalQuizName = document.getElementById('modal-quizname');
const modalQuizSize = document.getElementById('modal-quizsize');
const modalQuizImage = document.getElementById('modal-quizimage');
const btnPractice = document.getElementById('btn-practice');
const btnEditQuiz = document.getElementById('btn-editquiz');
const inputIdCategory = document.getElementById('idCategory');
const btCreateQuiz = document.getElementById('create_quiz_btn');
const dropdownMenu = document.getElementById('dropdown');

button_dropdown.addEventListener('click', function(){
	dropdownMenu.classList.contains('active') ? dropdownMenu.classList.remove('active') : dropdownMenu.classList.add('active') ;
});


let countCategoryChoose =0;

//load function
window.addEventListener('load', function(){
	if(category.length <=10)
	{
		showMoreLess.style.display = 'none';
	}
	else
	{
		showMoreLess.style.display = 'inline-block';
		for (let index = 0; index < category.length; index++) {
        	if(index>10) category[index].classList.add('hidden');
    	}
	}
    
});

//click function when use click on document, it wil close all modal appear
document.addEventListener('click', function (event) {
    var isClickInsideElement = button_dropdown.contains(event.target);
    if(!isClickInsideElement)
    {
        button_dropdown.firstElementChild.classList.replace('fa-times','fa-bars');
        dropdownMenu.classList.remove("active");
    }
});

//btn show Modal SetNameQuiz
btnShowModalSetName.addEventListener('click', function(){
    modalSetNameQuiz.classList.contains('active') ? modalSetNameQuiz.classList.remove('show') : modalSetNameQuiz.classList.add('show');
});

//btn close modal SetNameQuiz
btnCancel.addEventListener('click', function(){
    resetFormSetNameQuiz(modalSetNameQuiz.children[0].children[0]);
});


//close modal SetNameQuiz when click on document except this modal
modalSetNameQuiz.addEventListener('click', function(e){
    let modalBody = modalSetNameQuiz.children[0].children[0];
    if(!modalBody.contains(e.target))
    {
        resetFormSetNameQuiz(modalBody);
    }
});

function resetFormSetNameQuiz(modalBody) {
        modalSetNameQuiz.classList.remove('show');
        modalBody.reset();
        for (let index = 11; index < category.length; index++) {
            category[index].classList.add('hidden');
        }
        showMoreLess.innerHTML = 'More...';
        quizNameError.innerHTML = '';
        maxSubError.classList.add('hidden');
        countCategoryChoose =0;
        uncheckAllCategory(category);
}
// event submit form SetName Quizz
formSetNameQuiz.addEventListener('submit', function(e){
	let isTrue= false;
	if(nameInput.value == '')
    {
        quizNameError.innerHTML = 'You must set name for your Quiz';
		e.preventDefault();
        isTrue= false;
    }
	else if(nameInput.value.toString().length < 5)
	{
		quizNameError.innerHTML = 'Quiz name must contains at least 5 characters';
		e.preventDefault();
        isTrue= false;
	}
    else 
    {
        quizNameError.innerHTML ='';
    }
	//description
	if(descriptionInput.value == '')
    {
        quizDescriptionError.innerHTML = 'You must set description for your Quiz';
		e.preventDefault();
        isTrue= false;
    }
	else if(descriptionInput.value.toString().length < 10)
	{
		quizDescriptionError.innerHTML = 'Quiz description must contains at least 10 characters';
		e.preventDefault();
        isTrue= false;
	}
    else 
    {
        quizDescriptionError.innerHTML ='';
    }

    if(countCategoryChoose <1)
    {
        maxSubError.classList.remove('hidden');
        maxSubError.innerHTML = 'You need to choose at least 1 category';
		e.preventDefault();
        isTrue= false;
    }
	if(!isTrue)
	{
		return false;
	}
	return true;
    
});

//btn Show more less click
showMoreLess.addEventListener('click', function(){
    if(showMoreLess.innerHTML == 'More...')
    {
        for (let index = 11; index < category.length; index++) {
            category[index].classList.remove('hidden');
        }
        showMoreLess.innerHTML = 'Less...';
    }
    else
    {
        for (let index = 11; index < category.length; index++) {
            category[index].classList.add('hidden');
        }
        showMoreLess.innerHTML = 'More...';
    }
});

//check category button
for (const btnCategory of category) {
    btnCategory.addEventListener('click', function(){
        uncheckAllCategory(category);
        if(!btnCategory.classList.contains('choose')) 
        {
            if(countCategoryChoose >=1)
            {
                maxSubError.classList.remove('hidden');
            }
            btnCategory.classList.add('choose');
			inputIdCategory.value = btnCategory.value;
            countCategoryChoose++;
            
        }
        else
        {
            btnCategory.classList.remove('choose');
            countCategoryChoose--;
        }  
        
    });
    
}

function uncheckAllCategory(category) {
    for (const temp of category) {
        temp.classList.remove('choose');
    }
}






var modalid = document.getElementById('modal_id');
var buttonmodal = document.getElementById('button_modal');
var checkcode = document.getElementById('check_code');
var erroricon = document.getElementById('error_icon');
var checktextboxjoin = document.getElementById('check_textbox_join');
var join_code_empty = document.getElementById('join_code_empty');
var signupbutton =document.getElementById('button_signup');
var modalsignup = document.getElementById('modal_signup');
var button_close_signup_modal = document.getElementById('button_close_signup_modal');
var modal_login = document.getElementById('modal_login');
var button_login = document.getElementById('button_login');
button_close_login = document.getElementById('button_close_login');
var show_signup_in_login = document.getElementById('show_signup_in_login');
var set_user_avatar = document.getElementById('set_user_avatar');
var button_select_avatar = document.getElementById('button_select_avatar');
var button_close_set_avatar = document.getElementById('button_close_set_avatar');
var avatar1 = document.getElementById('avatar1');
var show_avatar = document.getElementById('show_avatar');
var button_upload_image_real = document.getElementById('button_upload_image_real');
var button_upload_image_mock = document.getElementById('button_upload_image_mock');
var show_user_avatar = document.getElementById('show_user_avatar');
const img = document.querySelector("img");
const preview_image_avatar = document.getElementById('preview_image_avatar');
var button_close_save_avatar = document.getElementById('button_close_save_avatar');
var button_save_avatar = document.getElementById('button_save_avatar');
var cropppie_image= document.getElementById('cropppie_image');
var avatar_user= document.getElementById('avatar_user');
var preview_image_crop= document.getElementById('preview_image_crop');
/*"^([a-zA-Z0-9@]{5,})$"*/
const re = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ );
var email = document.getElementById('email');
var user_edit_view = document.getElementById('user_edit_view');
var create_quiz_btn = document.getElementById('create_quiz_btn');
var signup_login = document.getElementById('signup_login');
var user_drop_con = document.getElementById('user_drop_con');
var button_login_child = document.getElementById('button_login_child');

const btLogout = document.getElementById('log_out');


const setting = document.getElementsByClassName('user-dropdown-list-item-content user-dropdown-list-link')[0];





//Quản lý đầu vào username vs password
function validate(){
	const username = document.getElementById('username').value.trim();
	const password = document.getElementById('password').value.trim();
	
	var flag = true;
	if(username.length < 5){
		alert("Username must be more than 5 characters!");
		flag = false;
	}
	else if(!re.test(username)){
		alert("Username must be in correct format!");
		flag = false;
	}
	else if(password.length < 6){
		alert("Password must be more than 6 characters!");
		flag = false;
	}
	return flag;
}
window.addEventListener('load', function(){
			//Bỏ đuôi #_=_ khi đăng nhập fb thành công
		if (window.location.hash == '#_=_'){
		      /*history.replaceState 
		          ? history.replaceState(null, null, window.location.href.split('#')[0])
		          : window.location.hash = '';	*/  
			$.post("/user", function(data) {
		        //$('#avatar_user').attr('src','http://graph.facebook.com/'+data.userAuthentication.details.id+'/picture?type=square');
				$.ajax({
			           type: "POST",
			           url: "/user/showfb",
			           contentType: "application/json",
			           success: function (msg) { 
			        	   $("#user").html(msg.name);
			        	   $("#email").html(msg.email);
			        	   //$('#avatar_user').attr('src',msg.image.replace('&amp;','&')); 
			        	   $('#avatar_user').attr('src','https://platform-lookaside.fbsbx.com/platform/profilepic/?asid='+data.principal.attributes.id+'&height=250&width=250&ext=1634410767&hash=AeT-I-ZiUskXitg7m_E')
			        	      //Thêm mục Edit Profile và View Activity sau khi đăng nhập thành công
			               $("#user_edit_view").html('<a data-v-6770767a="" href="/join/settings" class="">'
			       				+'<div data-v-6770767a="" class="hero-button">'
			       				+'<span data-v-6770767a="">Edit Profile</span>'
			       			+'</div>'
			       		+'</a>'
			       		+'<span data-v-6770767a="" class="dot-separator">●</span>'
			       		+'<a data-v-6770767a="" href="/join/activity" class="">'
			       			+'<div data-v-6770767a="" class="hero-button">'
			       				+'<span data-v-6770767a="">View Activity</span>'
			       			+'</div>'
			       		+'</a>');
			       		//Thêm create quiz khi đăng nhập thành công
			       		$("#create_quiz_btn").html('<button data-v-35baa134="" class="admin-external-link">'
			       					+'<span data-v-35baa134="" class="admin-external-link-icon"><i'
			       							+'data-v-35baa134="" class="icon-far-plus-circle"></i> </span> Create a quiz'
			       			+'</button>');
			       		//Hiện thị nút menu
			       		$(".user-dropdown-container").show();
			       		//Loại bỏ code của nút login và signup
			       		$("#button_login").remove();
			       		$("#button_signup").remove();
			       	        	   
			           },
			           data:JSON.stringify(data)
			       });
			       
			     
		    	});	
	}
	if(window.location.hash == '#'){
		$.post("/user", function(data) {
		        //$('#avatar_user').attr('src','http://graph.facebook.com/'+data.userAuthentication.details.id+'/picture?type=square');
				$.ajax({
			           type: "POST",
			           url: "/user/insert",
			           contentType: "application/json",
			           success: function (msg) { 
			        	   $("#user").html(msg.name);
			        	   $("#email").html(msg.email);
			        	   //$('#avatar_user').attr('src',msg.image.replace('&amp;','&')); 
			        	   
			        	      //Thêm mục Edit Profile và View Activity sau khi đăng nhập thành công
			               $("#user_edit_view").html('<a data-v-6770767a="" href="/join/settings" class="">'
			       				+'<div data-v-6770767a="" class="hero-button">'
			       				+'<span data-v-6770767a="">Edit Profile</span>'
			       			+'</div>'
			       		+'</a>'
			       		+'<span data-v-6770767a="" class="dot-separator">●</span>'
			       		+'<a data-v-6770767a="" href="/join/activity" class="">'
			       			+'<div data-v-6770767a="" class="hero-button">'
			       				+'<span data-v-6770767a="">View Activity</span>'
			       			+'</div>'
			       		+'</a>');
			       		//Thêm create quiz khi đăng nhập thành công
			       		$("#create_quiz_btn").html('<button data-v-35baa134="" class="admin-external-link">'
			       					+'<span data-v-35baa134="" class="admin-external-link-icon"><i'
			       							+'data-v-35baa134="" class="icon-far-plus-circle"></i> </span> Create a quiz'
			       			+'</button>');
			       		//Hiện thị nút menu
			       		$(".user-dropdown-container").show();
			       		//Loại bỏ code của nút login và signup
			       		$("#button_login").remove();
			       		$("#button_signup").remove();
			       	        	   
			           },
			           data:JSON.stringify(data)
			       });
			 });	
	}
	else
	{
		var userName = '';
		var error = '';
				if (userName != ''){
					$("#user").html(name);
					$("#email").html(userEmail);
					//Thêm mục Edit Profile và View Activity sau khi đăng nhập thành công
			        user_edit_view.innerHTML +='<a data-v-6770767a="" href="/join/settings" class="">'
							+'<div data-v-6770767a="" class="hero-button">'
							+'<span data-v-6770767a="">Edit Profile</span>'
							+'</div>'
						+'</a>'
						+'<span data-v-6770767a="" class="dot-separator">●</span>'
						+'<a data-v-6770767a="" href="/join/activity" class="">'
							+'<div data-v-6770767a="" class="hero-button">'
								+'<span data-v-6770767a="">View Activity</span>'
						+'</div>'
					+'</a>';
					//Hiển thị mục create a quiz
					create_quiz_btn.innerHTML += '<button data-v-35baa134="" class="admin-external-link">'
								+'<span data-v-35baa134="" class="admin-external-link-icon"><i'
										+'data-v-35baa134="" class="icon-far-plus-circle"></i> </span> Create a quiz'
						+'</button>';
					//Hiển thị menu setting logout
					$(".user-dropdown-container").show();
					//Xóa nút login logout (Nếu remove thì lỗi file js)
					//button_login.parentNode.removeChild(button_login);
					//signupbutton.parentNode.removeChild(signupbutton);
					$("#button_login_child").remove();
					$("#button_signup_child").remove();
					avatar_user.setAttribute("src", userImage.replaceAll('&amp;','&'));
				}
				if(error != '')
				{
					modal_login.classList.add("active");
				}
		}
});




