const button_dropdown = document.getElementById('button_dropdown');
var dropdownMenu = document.getElementById('dropdown');
var modalid = document.getElementById('modal_id');
var buttonmodal = document.getElementById('button_modal');
var buttonclosemodal = document.getElementById('button_close_modal');

button_dropdown.addEventListener('click', function(){
    if(dropdownMenu.classList.contains('active'))
    {
        dropdownMenu.classList.remove("active");
    }
    else
    {
        dropdownMenu.classList.add("active");
    }
   
});

buttonmodal.addEventListener("click", function(){
    modalid.classList.add("active");
});
buttonclosemodal.addEventListener("click",function(){
    modalid.classList.remove("active");
});