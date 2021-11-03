

var btnshare = document.getElementsByClassName('share-button')[0];
btnshare.onclick = function(){
	var id = btnshare.getAttribute("value");
    btnshare.style.display = "none";
    var linkshare = document.getElementById('quiz-info-share-input');
    linkshare.style.display = "inline";
    linkshare.value= `http://localhost:8081/quiz/${id}`
    
}

var linkshare = document.getElementById('quiz-info-share-input');
linkshare.onclick = function() {
    linkshare.select();
    linkshare.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(linkshare.value);

    var box = document.getElementsByClassName('snackbar-container')[0];
    box.style.display='block';
    
    setTimeout(function(){
        box.style.display='none';
    },5000)
    
  }

var btnthemes = document.getElementsByClassName('theme-item');
for(let i = 0; i< btnthemes.length;i++){
    btnthemes[i].addEventListener('click', function(e){
        clearChoice();
        var btninner = btnthemes[i].querySelector(".theme-item-inner");
        btninner.classList.add('active');
        btnthemes[i].setAttribute('aria-checked', true);
    })
    
}

var btnunchecks = document.getElementsByClassName('toggle-button text-unselectable');
for(let i = 0; i< btnunchecks.length;i++){
    btnunchecks[i].addEventListener('click', function(e){
        var btn = e.target;
        if(btn.getAttribute('aria-checked') == "true")
        {
            btn.classList.remove('on')
            btn.removeAttribute('aria-checked');
        }else{
            btn.classList.add('on')
            btn.setAttribute('aria-checked',true);
        }
    })
}


function clearChoice(){
    for(let i = 0; i< btnthemes.length;i++){
        var btninner = btnthemes[i].querySelector(".theme-item-inner");
        btninner.setAttribute('class','theme-item-inner');
        btnthemes[i].removeAttribute('aria-checked');
    }
}


var btnmems = document.getElementsByClassName('memeset-card-wrapper');
for(let i =0 ;i <btnmems.length; i++){
    btnmems[i].addEventListener('click', function(e){
        clearmems();
        var btn = btnmems[i].firstElementChild;
        btn.setAttribute('class','memeset-card memeset-card-selected medium');
        btnmems[i].setAttribute('aria-checked',true)
        var icon = document.createElement("div")
        icon.classList.add('memeset-selection-check')
        icon.setAttribute('data-v-18ba7b0e',"");
        icon.innerHTML=`<span data-v-18ba7b0e="" class="icon-fas-check"></span>`
        btn.prepend(icon)
    })
}

function clearmems(){
    for(let i = 0; i< btnmems.length;i++){
        var btn = btnmems[i].firstElementChild;
        btnmems[i].removeAttribute('aria-checked')
        btn.setAttribute('class','memeset-card medium')
        if(btn.firstElementChild.className=='memeset-selection-check')
        {
            btn.removeChild(btn.firstElementChild);
        }
    }
}


var showmeme = document.getElementById('checkmeme');
showmeme.addEventListener('click', function(){
    if(showmeme.getAttribute('aria-checked')=="true"){
        document.getElementsByClassName('settings-card memes-section default-card-styles hidden')[0].classList.remove('hidden');
    }else{
        document.getElementsByClassName('settings-card memes-section default-card-styles')[0].classList.add('hidden');
    }
})


var btnStart = document.getElementById("btnStart");
var idquiz = btnStart.getAttribute("value");
var startForm = document.forms["start-quiz-form"];
btnStart.addEventListener("click", function(){
	startForm.action='/start/' + idquiz;
	startForm.submit();
})
