
var container = document.getElementsByClassName("featured-container")[0];
var btnquiz = document.getElementsByClassName("solo-quiz max-in-row-2 max-in-row-3 max-in-row-4 max-in-row-5");
for (let i = 0; i < btnquiz.length; i++) {
	btnquiz[i].addEventListener('click', function() {
		if(document.getElementsByClassName('modal-container')[0] != null)
		{
			document.getElementsByClassName('modal-container')[0].remove();
		}
		var quiz;
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
                                            <button data-v-5d89d9e5="" class="top-btn share-btn strip-default-btn-style" value="${quiz.id}">
                                                <i data-v-5d89d9e5="" class="icon-fas-share-alt"></i>
                                                Share
                                            </button>
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
		var close = document.getElementsByClassName("top-btn close-btn text-unselectable strip-default-btn-style")[0];
		close.addEventListener('click', function() {
			container.removeChild(container.lastElementChild)
		})
		var lquestion = document.getElementsByClassName("sample-questions-list")[0];
		var text = ``;
		var range =  3;
		if(quiz.questions.length <= 3)
		{
			range = quiz.questions.length;
		}
		for (let i = 0; i < range; i++) {
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

var button_join = document.getElementById("button_join");
var checkcode = document.getElementById('check_code');
var erroricon = document.getElementById('error_icon');
var join_code_empty = document.getElementById('join_code_empty');
button_join.addEventListener("click", function(e) {
	var textboxjoin = document.getElementById('textbox_join').value;
	if (textboxjoin.length <= 0) {
		checkcode.classList.add("join-error");
		erroricon.classList.add("active");
		join_code_empty.classList.add("active");
	}
	else {
		$.ajax({
			type: 'GET',
			url: '/checkQuizCode/' + textboxjoin,
			success: function(data) {
				if(data == true){
					window.location.href = "/quizCode/" + textboxjoin;
					checkcode.classList.remove('join-error');
					erroricon.classList.remove("active");
					join_code_empty.classList.remove("active");
				}else{
					checkcode.classList.remove('join-error');
					erroricon.classList.remove("active");
					join_code_empty.classList.add("active");
					document.getElementsByClassName("error-text")[0].innerHTML = "This join code is not valid"
					
				}
				
			},
			error: function() {
				alert("error")
			}
		})

	}
	e.preventDefault();
});



const button_dropdown = document.getElementById('button_dropdown');
var dropdownMenu = document.getElementById('dropdown');
var modalid = document.getElementById('modal_id');
var buttonmodal = document.getElementById('button_modal');
var buttonclosemodal = document.getElementById('button_close_modal');
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
const modalContainerHeaderSignUp = document.getElementsByClassName('modal-container-header signup')[0];
const modalContainerHeaderSignIn = document.getElementsByClassName('modal-container-header signin')[0];

const re = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ );
var email = document.getElementById('email');
var user_edit_view = document.getElementById('user_edit_view');
var create_quiz_btn = document.getElementById('create_quiz_btn');
var signup_login = document.getElementById('signup_login');
var user_drop_con = document.getElementById('user_drop_con');


const btLogout = document.getElementById('log_out');


const setting = document.getElementsByClassName('user-dropdown-list-item-content user-dropdown-list-link')[0];
/*const loginFB = document.getElementsByClassName('ms-signup-btn')[0];*/


/*loginFB.addEventListener('click', function(){
	window.location = "/login";
});*/


setting.addEventListener('click', function(){
	window.location = "/setting";
});




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

//menu
button_dropdown.addEventListener('click', function(){
	dropdownMenu.classList.contains('active') ? dropdownMenu.classList.remove('active') : dropdownMenu.classList.add('active') ;
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


//login page
button_login.addEventListener("click",function(){
	modalContainerHeaderSignUp.classList.remove("show");
    modalContainerHeaderSignIn.classList.add("show");
});
button_close_login.addEventListener("click",function(){
    modalContainerHeaderSignIn.classList.remove("show");
});
show_signup_in_login.addEventListener('click', function()
{
	signupbutton.click();
});


//signup page
signupbutton.addEventListener("click",function(){
	modalContainerHeaderSignIn.classList.remove("show");
    modalContainerHeaderSignUp.classList.add("show");
});
button_close_signup_modal.addEventListener("click", function(){
    modalContainerHeaderSignUp.classList.remove("show");
});

show_login_in_signup.addEventListener('click', function()
{
	button_login.click();
});

//quizmodal
/*buttonmodal.addEventListener("click", function(){
    modalid.classList.add("active");
});*/
//join button
document.getElementById("button_join").addEventListener("click", function(e){
    
    const textboxjoin = document.getElementById('textbox_join').value;
    if(textboxjoin.length <= 0){
        checkcode.classList.add("join-error");
        erroricon.classList.add("active");
        join_code_empty.classList.add("active");
    //     checkcode.innerHTML += '<div data-v-3f143c58="" class="pre-game-error-container">'
    //     + '<div data-v-29165136="" data-v-3f143c58="" tabindex="0" class="error-message-container">'
    //         +'<div data-v-29165136="" class="error-text">'
    //             +'Please enter a valid game code'
    //         +'</div>'
    //     +'</div>'
    // +'</div>'
    // }
    }
    else{
        checkcode.classList.remove('join-error');
        erroricon.classList.remove("active");
        join_code_empty.classList.remove("active");
    }
    e.preventDefault(); 
});

//set avatar
//button_select_avatar.addEventListener("click", function(){
//    set_user_avatar.classList.add("active");
//});


//Up ảnh hiển thị trên FE
function ImageFileURL(){
    button_upload_image_real.click();
    //show_user_avatar.classList.add("active");
    button_upload_image_real.addEventListener("change", function(){
        const file = this.files[0]
        console.log(file);
        if(file){
            const reader = new FileReader();
            reader.onload = function(){
                const result = reader.result;
                preview_image_avatar.setAttribute("src", this.result);
                //cropppie_image.setAttribute("src", this.result);
                avatar_user.setAttribute("src", this.result)
                //preview_image_crop.setAttribute("src", this.result);
            }
            reader.readAsDataURL(file);
            //set_user_avatar.classList.remove("active");
            //show_user_avatar.classList.add("active");
        }
    });

}










