//modal avatar
var btnAvata = document.getElementById("btnAvata");
var modalavatar = document.getElementById("modal-avatar");
var btnCancelAvt = document.getElementById("button_close_login");
btnAvata.addEventListener("click",function(){
    modalavatar.classList.add("active");
});
btnCancelAvt.addEventListener("click",function(){
    modalavatar.classList.remove("active");
});

//xử lí đổi ảnh
const preview_image_avatar = document.getElementById('preview_image_avatar');
var button_upload_image_real = document.getElementById('button_upload_image_real');
var avatar_user= document.getElementById('avatar_user');
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
                avatar_user.setAttribute("value", this.result)
                //preview_image_crop.setAttribute("src", this.result);
            }
            reader.readAsDataURL(file);
            //set_user_avatar.classList.remove("active");
            //show_user_avatar.classList.add("active");
        }
    });

}

//modal username
var btnUsername = document.getElementById("btnUsername");
var modalUsername = document.getElementById("modalusername");
var btnCancelUsername = document.getElementById("btn-cancel-user");
btnUsername.addEventListener("click",function(){
    modalUsername.classList.add("active");
});
btnCancelUsername.addEventListener("click",function(){
    modalUsername.classList.remove("active");
});


//modal birthday
var btnBirthday = document.getElementById("btnBirthday");
var modalBirthday = document.getElementById("modalbirthday");
var btnCancelBirthday = document.getElementById("btn-cancel-birthday");
btnBirthday.addEventListener("click",function(){
    modalBirthday.classList.add("active");
});
btnCancelBirthday.addEventListener("click",function(){
    modalBirthday.classList.remove("active");
});

//modal update password
var btnUpPass = document.getElementById("btnUpPass");
var modalUpPass = document.getElementById("modalupPass");
var btnCancelUpPass = document.getElementById("btn-cancel-UpPass");
btnUpPass.addEventListener("click",function(){
    modalUpPass.classList.add("active");
});
btnCancelUpPass.addEventListener("click",function(){
    modalUpPass.classList.remove("active");
});
//modal delete account
//

var snackbar = document.getElementById("snackbar");
setTimeout(function(){
	if(snackbar!= null)
	{
		snackbar.classList.remove("active");
	}
}, 2000);
