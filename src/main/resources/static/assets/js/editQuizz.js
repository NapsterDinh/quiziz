const buttonCreateQuestion = document.getElementsByClassName('question-type');
const checkedList = document.getElementsByClassName('option-state');
let btnDeleteOptions = document.getElementsByClassName('delete-option-btn');
const btnAddAnswer = document.getElementById('addAnswer');
let optionContainer = document.getElementsByClassName('options')[0];
const saveBtnAddQuestion = document.getElementsByClassName('save-btn')[0];
const cancelBtnAddQuestion = document.getElementsByClassName('cancel-btn')[0];
const modalAddQuestion = document.getElementsByClassName('kr-modal')[0];
const typeVisible = document.getElementById('typeVisible');

//no-questions
const backdrop = document.getElementsByClassName('questions-header-backdrop')[0];
const questionheader = document.getElementsByClassName('questions-header ')[0];
const teleporSearchbar = document.getElementsByClassName('teleport-search-bar')[0];
const teleportSearchInputContainer = document.getElementsByClassName('teleport-search-input-container')[0];
const newQuestionContainer = document.getElementsByClassName('new-question-container ')[0];
const newQuestions = document.getElementsByClassName('new-question')[0];
const questionBody = document.getElementsByClassName('questions-body')[0];
//hidden
const noQuestionsPlaceholder = document.getElementsByClassName('no-questions-placeholder')[0];
const newQuestionBtn = document.getElementsByClassName('new-question-btn-bar')[0];
let listNoQuestions = [backdrop,questionheader,teleporSearchbar,teleportSearchInputContainer,newQuestionContainer,newQuestions, questionBody];

//dropdown
const langDropdown = document.getElementsByClassName('lang-select-wrapper')[0];
const gradeDropdownDowner = document.getElementsByClassName('grade-lower-dropdown')[0];
const gradeDrodownUpper = document.getElementsByClassName('grade-upper-dropdown')[0];
const visibilityDropdown = document.getElementsByClassName('visibility-select-wrapper')[0];

//
const imageUpload = document.getElementById('image-upload');
const modalQuizDetail = document.getElementsByClassName('kr-modal-container')[1];
const btCancelQuizDetail = document.getElementsByClassName('cancel')[0];
const btShowQuizDetailQuizImage = document.getElementsByClassName('quiz-image')[0];
const btShowQuizDetailQuizData = document.getElementsByClassName('quiz-data')[0];
const btEditQuestion = document.getElementsByClassName('edit-btn');
const selectboxDuration = document.getElementsByClassName('selectbox addEdit');
const level_dropdown = document.getElementById('level_dropdown');
const btExit = document.getElementsByClassName('exit-btn')[0];
const btPublish = document.getElementsByClassName('publish-btn header-tray-btn ')[0];
const quiz_name = document.getElementsByClassName('quiz-name')[0];
const modalChangeNameQuiz = document.getElementsByClassName('kr-modal editor-info-modal')[0];
const newQuestion = document.getElementsByClassName('new-question')[0];
const itemDuration = document.querySelectorAll('.kr-selectbox .kr-selectbox-list-container .kr-selectbox-list .duration-item');
const itemLevel = document.querySelectorAll('.kr-selectbox .kr-selectbox-list-container .kr-selectbox-list .level-item');
const durationItem = document.getElementsByClassName('duration-item');
const leveItem = document.getElementsByClassName('level-item');
const durationQuestionItem = document.getElementsByClassName('duration');
const levelQuestionItem = document.getElementsByClassName('level');



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
const btnCancel = document.getElementsByClassName('cancel-btn')[1];
const btnEditQuiz = document.getElementById('btn-editquiz');
const inputIdCategory = document.getElementById('idCategory');

for(const item of itemLevel)
{
	item.addEventListener('click', function()
	{
		document.getElementById('level').value = item.value;
		let text = item.getElementsByClassName('kr-selectbox-list-item-text')[0].innerHTML;
		document.getElementsByClassName('kr-selectbox-selected-option-text ')[1].innerHTML = '<i class="pre-icon fas fa-clock" aria-hidden="true"></i>' + text;
	});
}

for(const item of itemDuration)
{
	item.addEventListener('click', function()
	{
		document.getElementById('duration').value = item.value;
		let text = item.getElementsByClassName('kr-selectbox-list-item-text')[0].innerHTML;
		document.getElementsByClassName('kr-selectbox-selected-option-text ')[0].innerHTML = '<i class="pre-icon fas fa-clock" aria-hidden="true"></i>' + text;
	});
}

newQuestion.addEventListener('click', function(){
	document.getElementsByClassName('kr-modal-body add')[0].reset();
	document.getElementsByClassName('kr-modal-body add')[0].getElementsByClassName('ql-editor')[0].value = "";
	document.getElementsByClassName('kr-modal-body add')[0].getElementsByClassName('title')[0].innerHTML = "New Question";
	document.getElementById('idQuestion').value = -1;
	uncheckedAll(checkedList);
	imageContainer.getElementsByClassName('image-question')[0].classList.remove('active');
	document.getElementsByClassName('questionImage')[0].src = "";
	inpitImportImageQuestion.value = "";
	document.getElementById('isRemoveImage').value = 0;
	modalAddQuestion.classList.contains('show') ? modalAddQuestion.classList.remove('show') : modalAddQuestion.classList.add('show');
});

quiz_name.addEventListener('click', function(){
	if(modalChangeNameQuiz.classList.contains('show'))
	{
		modalChangeNameQuiz.classList.remove('show');
	}  
	else
	{
		modalChangeNameQuiz.classList.add('show');
		descriptionInput.value = document.getElementById('descriptionInputHolder').value;
	}
});

btPublish.addEventListener('click', function(){
	window.location = "/activity?status=0";
});

btExit.addEventListener('click', function(){
	window.location = "/activity?status=0";
});

let lisDropdown = [level_dropdown.parentNode.parentNode,visibilityDropdown];



function addClickBtnEditQuestion()
{
	for(let item of btEditQuestion)
	{
		item.addEventListener('click', function(){
			let name = document.querySelector('.editor .editor-body .questions-body .question-editor .header .title');
			let description = document.getElementById('question-text');
			
			name.innerHTML = item.parentNode.parentNode.getElementsByClassName('title')[0].innerHTML;
			description.value = item.parentNode.parentNode.parentNode.getElementsByTagName('p')[0].innerHTML;
			
			let options = document.querySelectorAll('.editor .editor-body .questions-body .question-editor .body .options .option');
			
			document.getElementById('idQuestion').value = item.value;
			for(let i=0; i<options.length; i++)
			{
				options[i].querySelector('.ql-container .ql-editor').value = item.parentNode.parentNode.parentNode.getElementsByTagName('p')[i+1].innerHTML;
				if(item.parentNode.parentNode.parentNode.getElementsByClassName('option-marker')[i].classList.contains('true'))
				{
					options[i].querySelector('.option-state').classList.add('checked');
				}
			}
			let duration = item.parentNode.parentNode.parentNode.getElementsByClassName('duration')[0];
			
			for(const dItem of durationItem)
			{
				if(duration.value == dItem.value)
				{
					document.getElementById('duration').value = duration.value;
					document.getElementsByClassName('kr-selectbox-selected-option-text ')[0].innerHTML = '<i class="pre-icon fas fa-clock" aria-hidden="true"></i>' 
																												+ dItem.getElementsByClassName('kr-selectbox-list-item-text')[0].innerHTML;
				}
			}
			let level = item.parentNode.parentNode.parentNode.getElementsByClassName('level')[0];
			
			for(const lItem of leveItem)
			{
				if(level.value == lItem.value)
				{
					document.getElementById('level').value = level.value;
					document.getElementsByClassName('kr-selectbox-selected-option-text ')[1].innerHTML = '<i class="pre-icon fas fa-clock" aria-hidden="true"></i>' 
																												+ lItem.getElementsByClassName('kr-selectbox-list-item-text')[0].innerHTML;
				}
			}
			let image = item.parentNode.parentNode.parentNode.getElementsByClassName('questionImageItem')[0];
			if(image.src == "")
			{
				imageContainer.getElementsByClassName('image-question')[0].classList.remove('active');
				document.getElementsByClassName('questionImage')[0].src = "";
				inpitImportImageQuestion.value = "";
			}
			else
			{
				imageContainer.getElementsByClassName('image-question')[0].classList.add('active');
				document.getElementsByClassName('questionImage')[0].src = image.src;
				document.getElementById('isRemoveImage').value = 0;
			}
			
			modalAddQuestion.classList.add('show');
		});
	}
}




btShowQuizDetailQuizImage.addEventListener('click', function(){
	modalQuizDetail.parentNode.classList.add('show');
});

btShowQuizDetailQuizData.addEventListener('click', function(){
	modalQuizDetail.parentNode.classList.add('show');
});


btCancelQuizDetail.addEventListener('click', function(){
	modalQuizDetail.parentNode.classList.remove('show');
});


function dropdownClick(drop, e)
{
		let dropdownlist = drop.getElementsByClassName('kr2-selectbox-dropdown')[0];
		if(drop.classList.contains('show'))
		{
			dropdownlist.classList.remove('show');
			drop.classList.remove('show');
		}
		else
		{
			dropdownlist.classList.add('show');
			drop.classList.add('show');
		}
		
		
		for(const item of dropdownlist.children)
		{
			item.addEventListener('click', function () {
				dropdownlist.parentNode.getElementsByClassName('kr2-selectbox-selected')[0].innerHTML = this.innerHTML;
				drop.getElementsByClassName('field')[0].value = this.id;
/*				document.getElementById('privacy').value = this.id;
				document.getElementById('level').value = item.innerHTML;*/
			});
		}
}




function closeDropdown(drop, e)
{
	let dropdownlist = drop.getElementsByClassName('kr2-selectbox-dropdown')[0];
	if(!drop.contains(e.target))
	{
			dropdownlist.classList.remove('show');
			drop.classList.remove('show');
	}
}

modalQuizDetail.addEventListener('click', function(e){
	lisDropdown.forEach( item => closeDropdown(item,e));
});


btnAddAnswer.addEventListener('click', function () {
    let newNode = document.createElement('div');
    let index = ++optionContainer.getElementsByClassName('option').length
    newNode.innerHTML += 
    ' <div class="or hidden">OR</div>'
    +'<div class="option option-'+index+'-container edit-container">'
    +'<div class="editor-toolbar option-toolbar " data-src="create" data-id="option'+index+'" kr-inert="true" kr-inerted="true" aria-hidden="true">'
        +'<ul class="toolbar">'
            +'<li class="tool main" data-src="create" data-id="option'+index+'" data-key="italic"><i class="fas fa-italic" aria-hidden="true"></i></li>'
            +'<li class="tool main" data-src="create" data-id="option'+index+'" data-key="underline"><i class="fas fa-underline" aria-hidden="true"></i></li>'
            +'<li class="menu main" data-src="create" data-id="option'+index+'" data-key="color"><img src="https://cf.quizizz.com/img/editor/text-color-icon-big.png" class="icon"></li><span class="seperator"></span>'
            +'<li class="tool main" data-src="create" data-id="option'+index+'" data-key="superscript"><i class="fas fa-superscript" aria-hidden="true"></i></li>'
            +'<li class="tool main" data-src="create" data-id="option'+index+'" data-key="subscript"><i class="fas fa-subscript" aria-hidden="true"></i></li><span class="seperator"></span>'
            +'<li class="tool main" data-src="create" data-id="option'+index+'" data-key="symbol"><img src="https://cf.quizizz.com/img/editor/symbol-icon.png" class="icon"></li>'
        +'</ul>'
        +'<ul class="color-menu">'
            +'<li class="menu-item tool black" data-src="create" data-id="option'+index+'" data-key="color" data-val="#000000"><img src="https://cf.quizizz.com/img/editor/text-color-icon-big.png" class="icon"></li>'
            +'<li class="menu-item tool red" data-src="create" data-id="option'+index+'" data-key="color" data-val="#f1'+index+'d76"><img src="https://cf.quizizz.com/img/editor/text-color-icon-big-red.png" class="icon"></li>'
            +'<li class="menu-item tool green" data-src="create" data-id="option'+index+'" data-key="color" data-val="#5de2a5"><img src="https://cf.quizizz.com/img/editor/text-color-icon-big-green.png" class="icon"></li>'
            +'<li class="menu-item tool blue" data-src="create" data-id="option'+index+'" data-key="color" data-val="#'+index+'990e2"><img src="https://cf.quizizz.com/img/editor/text-color-icon-big-blue.png" class="icon"></li>'
        +'</ul>'
        +'<div class="expand-btn"><i class="fas fa-ellipsis-h" aria-hidden="true"></i><i class="fas fa-minus" aria-hidden="true"></i></div>'
    +'</div>'
    +'<div class="fib-matcher-dropdown hidden">'
        +'<div class="fib-matcher-value" tabindex="0" role="listbox">is exactly<i class="fa fa-caret-down" aria-hidden="true"></i></div>'
        +'<div class="fib-matcher-dropdown-list ">'
            +'<div class="fib-matcher-dropdown-list-item" data-idx="3" data-val="exact" id="3" role="option">is exactly</div>'
            +'<div class="divider"></div>'
            +'<div class="super-list">'
                +'<div class="fib-matcher-dropdown-list-item" data-idx="3" data-val="contains" id="3" role="option">contains<span class="fib-super-icon "><i class="fas fa-bolt" aria-hidden="true"></i></span></div>'
                +'<div class="fib-matcher-dropdown-list-item" data-idx="3" data-val="exact_num" id="3" role="option">equals (number)<span class="fib-super-icon "><i class="fas fa-bolt" aria-hidden="true"></i></span></div>'
            +'</div>'
        +'</div>'
    +'</div>'
    +'<div class="numeric-input hidden"><input id="numeric-input" class="numeric-input-textbox" type="number" lang="en-US" placeholder="Alternative" data-idx="3"></div>'
    +'<button type="button" aria-label="Mark option '+index+' as correct" class="option-state   classic option-'+index+'-state  " data-idx="3"><i class="fas fa-check " aria-hidden="true"></i></button>'
    +'<div class="option-inner  " style="margin-left: 5px;">'
        +'<div class="option-editor-container  ">'
            +'<div class="option-3 ql-container">'
                +'<input id="option-3" type="text" class="ql-editor" placeholder="Answer option '+index+'">'
            +'<button type="button" tabindex="-1" aria-label="Delete option '+index+'" class="delete-option-btn " value="'+(index-1)+'">'
                    +'<i class="fas fa-trash-alt" aria-hidden="true"></i>'
                +'</button>'
                +'<div class="ql-clipboard" contenteditable="true" tabindex="-1"></div>'
            +'</div>'
        +'</div>'
        +'<div class="option-math-editor  hidden" id="option-'+index+'">'
            +'<div class="math-input-container">'
                +'<div class="krafty-container-31ea6f61-069b-'+index+'09d-9a5e-f59f18b5b066">'
                    +'<div class="kr-math-input">'
                        +'<div class="input" contenteditable="true" data-gramm="false"></div>'
                        +'<div class="placeholder">Answer option '+index+'</div>'
                    +'</div>'
                +'</div>'
            +'</div>'
        +'</div>'
        +'<div class="image-option hidden" id="option-'+index+'">'
            +'<div class="upload" data-id="option-'+index+'"><img src="https://cf.quizizz.com/img/editor/image-icon.png"><span class="text ">Upload Image</span></div>'
        +'</div>'
        
    +'</div><button kr-inert="true" style="margin-left: 5px;" tabindex="-1" class="math-btn  " data-id="optionTextMath'+index+'" data-src="create" kr-inerted="true" aria-hidden="true">'
    +'<i class="fas fa-square-root-alt" aria-hidden="true"></i></button>'
    +'<button kr-inert="true" tabindex="-1" class="option-image-btn   option-image-btn-3 " data-qtest="option-image-upload-btn" data-id="option-'+index+'" kr-inerted="true" aria-hidden="true">'
    +'<img src="https://cf.quizizz.com/img/editor/image_icon_v2.png"></button>'
    +'</div>';
    optionContainer.insertBefore(newNode, btnAddAnswer);
    btnDeleteOptions = document.getElementsByClassName('delete-option-btn');
    setEventForOption(btnDeleteOptions);
});

cancelBtnAddQuestion.addEventListener('click', function () {
	document.getElementsByClassName('kr-modal-body add')[0].reset();
	document.getElementsByClassName('kr-modal-body add')[0].getElementsByClassName('ql-editor')[0].value = "";
	document.getElementsByClassName('kr-modal-body add')[0].getElementsByClassName('ql-editor')[1].value = "";
	document.getElementsByClassName('kr-modal-body add')[0].getElementsByClassName('ql-editor')[2].value = "";
	document.getElementsByClassName('kr-modal-body add')[0].getElementsByClassName('ql-editor')[3].value = "";
	document.getElementsByClassName('kr-modal-body add')[0].getElementsByClassName('ql-editor')[4].value = "";
	document.getElementsByClassName('kr-modal-body add')[0].getElementsByClassName('title')[0].innerHTML = "New Question";
	document.getElementById('idQuestion').value = -1;
	uncheckedAll(checkedList);
	imageContainer.getElementsByClassName('image-question')[0].classList.remove('active');
	document.getElementsByClassName('questionImage')[0].src = "";
	inpitImportImageQuestion.value = "";
	document.getElementById('isRemoveImage').value = 0;
    modalAddQuestion.classList.remove('show');
});


window.addEventListener('load', function (e) {
	if(typeVisible.value > 0)
	{
		listNoQuestions.forEach( item => item.classList.remove('no-questions'));
		noQuestionsPlaceholder.classList.add('hidden');
		newQuestionBtn.classList.remove('hidden');
	}
	else
	{
		listNoQuestions.forEach( item => item.classList.add('no-questions'));
		noQuestionsPlaceholder.classList.remove('hidden');
		newQuestionBtn.classList.add('hidden');
	}
    setEventForOption(btnDeleteOptions);
	lisDropdown.forEach( item => item.addEventListener('click', function (e) {
		dropdownClick(this, e)}));
		
	selectboxDuration[0].addEventListener('click', function(){
		let container = selectboxDuration[0].parentNode.getElementsByClassName('kr-selectbox-list-container ')[0];
		if(container.classList.contains('closed'))
		{
			container.classList.replace('closed', 'open');
		}
		else
		{
			container.classList.replace('open', 'closed');
		} 
	});
	
	selectboxDuration[1].addEventListener('click', function(){
		let container = selectboxDuration[1].parentNode.getElementsByClassName('kr-selectbox-list-container ')[0];
		if(container.classList.contains('closed'))
		{
			container.classList.replace('closed', 'open');
		}
		else
		{
			container.classList.replace('open', 'closed');
		} 
	});
	
	addClickBtnEditQuestion();
	
	for(const item of durationQuestionItem)
	{
		for(const item1 of durationItem)
		{
			if(item1.value == item.value)
			{
				item.parentNode.getElementsByClassName('selectbox-label')[0].innerHTML	= item1.getElementsByClassName('kr-selectbox-list-item-text')[0].innerHTML;
			}
		}
	}
	
	

		for(const item1 of leveItem)
		{
			if(item1.value == levelQuestionItem[0].value)
			{
				levelQuestionItem[0].parentNode.getElementsByClassName('selectbox-label')[0].innerHTML	= item1.getElementsByClassName('kr-selectbox-list-item-text')[0].innerHTML;
			}
		}
	
});

/*document.addEventListener('click', function(e){
	for(const item of selectboxDuration)
	{
		if(!item.contains(e.target))
		{
			item.classList.replace('open', 'closed');
		}
	}
});*/
modalAddQuestion.addEventListener('click', function (e) {
    var isClickInsideElement = selectboxDuration[0].contains(e.target);
    if(!isClickInsideElement)
    {
        selectboxDuration[0].parentNode.getElementsByClassName('kr-selectbox-list-container ')[0].classList.replace('open', 'closed');
    }
	isClickInsideElement = selectboxDuration[1].contains(e.target);
    if(!isClickInsideElement)
    {
        selectboxDuration[1].parentNode.getElementsByClassName('kr-selectbox-list-container ')[0].classList.replace('open', 'closed');
    }
	
});

for (const item of buttonCreateQuestion) {
    item.addEventListener('click', function () {
        modalAddQuestion.classList.add('show');
    });
}

function uncheckedAll(list) {
    for (const item of list) {
        item.classList.remove('checked');
    }
}
function checkedOption() {
    for (const checkedItem of checkedList) {
        checkedItem.addEventListener('click', function(){
            uncheckedAll(checkedList);
            if(checkedItem.classList.contains('checked'))
			{
				checkedItem.classList.remove('checked');
			} 
			else
			{
				checkedItem.classList.add('checked');
				checkedItem.parentNode.parentNode.parentNode.getElementsByClassName('numeric-input-textbox')[0].value = checkedItem.value;
			}
			
        });
    }
}

function setClickDelete(list) {
    for (const deleteItem of list) {
        deleteItem.addEventListener('click', function(){
            let indexDeleted = parseInt(deleteItem.value);

            for (let index = indexDeleted; index < optionContainer.getElementsByClassName('option').length; index++) {
                let element = list[index-2];
                element.parentNode.getElementsByClassName('ql-editor')[0].placeholder = 'Answer option '+ (index+1);
                element.value = index;
            }
            deleteItem.parentNode.parentNode.parentNode.parentNode.remove();
        });
    }
}
function setEventForOption(list)
{
    setClickDelete(list);
    checkedOption();
}
imageUpload.addEventListener("change", function (){

    let fileReader = new FileReader();

    fileReader.addEventListener("load", function () {
		let uploadMsg = imageUpload.parentNode.getElementsByClassName('image-upload-msg')[0];
		let noImage = imageUpload.parentNode.getElementsByClassName('image-preview quiz-image')[0];
		
		if(imageUpload.files.length < 1)
			{
				noImage.classList.remove('has-image');
				uploadMsg.classList.remove('hidden');
			}		
			else
			{
				noImage.classList.add('has-image');
				uploadMsg.classList.add('hidden');
				noImage.children[0].children[0].src = fileReader.result;
			}
		
    })

    fileReader.readAsDataURL(this.files[0]);
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
    
});


//btn close modal SetNameQuiz
btnCancel.addEventListener('click', function(){
    resetFormSetNameQuiz(modalSetNameQuiz.children[0].children[0]);
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
	else if(nameInput.value.toString().length < 15)
	{
		quizNameError.innerHTML = 'Quiz name must contains at least 15 characters';
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
	else if(descriptionInput.value.toString().length < 30)
	{
		quizDescriptionError.innerHTML = 'Quiz description must contains at least 30 characters';
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
/*var obj;
// show modal edit quiz
for (const item of soloQuiz) {
    item.addEventListener('click', function(){
		
		$.ajax({
	        type: "POST",
	        contentType: "application/json",
	        url: "/api/search",
	        data: search="1",
	        dataType: 'json',
	        cache: false,
	        timeout: 600000,
	        success: function(response){
				obj = response;
	        },
	        error: function(e){    
			console.log(e);  
	         alert('Error while request..');
	        }
       });

        modal.classList.add('active');

    });
}*/
const btnImportImageQuestion = document.getElementsByClassName('media-image-btn question-image')[0];
const inpitImportImageQuestion = document.getElementById('button_upload_image_question');
const imageContainer = document.getElementsByClassName('image-question-container-modal')[0];
const questionImage = document.getElementsByClassName('questionImage')[0];

btnImportImageQuestion.addEventListener('click', function()
{
	inpitImportImageQuestion.click();
});

inpitImportImageQuestion.addEventListener("change", function (){

    let fileReader = new FileReader();

    fileReader.addEventListener("load", function () {
		
		if(inpitImportImageQuestion.files.length < 1)
			{
				imageContainer.getElementsByClassName('image-question')[0].classList.remove('active');
				questionImage.src = "";
			}		
			else
			{
				document.getElementById('isRemoveImage').value = 0;
				imageContainer.getElementsByClassName('image-question')[0].classList.add('active');
				questionImage.src = fileReader.result;
			}
		
    })

    fileReader.readAsDataURL(this.files[0]);
});

imageContainer.getElementsByClassName('fas fa-times-circle')[0].addEventListener('click', function()
{
	imageContainer.getElementsByClassName('image-question')[0].classList.remove('active');
	questionImage.src = "";
	inpitImportImageQuestion.value = "";
	document.getElementById('isRemoveImage').value = 1;
});

