const btnModals = document.querySelectorAll("[data-trigger='modal-container']");

// Hàm xử lý bật, tắt modal thông qua class cung cấp
function onActiveOrNot(buttonTargetModal, modal, open) {
    if (!modal.classList.contains("active") && open) {
        modal.classList.add("active")
    } else {
        modal.classList.remove("active");
    }

    // đặt lại trạng thái cho nút button khi modal active | !active
    buttonTargetModal.setAttribute("aria-open", open);
}

// Dựa vào data-trigger='modal' truy xuất toàn bộ nút bật modal
btnModals.forEach(btnModal => {
    // lấy thông tin modal
    const modal = document.querySelector(btnModal.getAttribute("data-target"));
    // lấy trạng thái modal
    const open = btnModal.getAttribute("aria-open") === "true" ? true : false;

    // Khởi động trạng thái mặc định của modal được set từ aria-open của button
    onActiveOrNot(btnModal, modal, open);

    // Bật modal thông qua button
    btnModal.addEventListener("click", () => {
        onActiveOrNot(btnModal, modal, !open);
    });

    // Tắt modal thông qua nút close
    modal.querySelector(".default").addEventListener("click", () => {
        onActiveOrNot(btnModal, modal, !open);
    })
 
})

//avatar
const preview_image_avatar = document.getElementById('preview_image_avatar');
var button_upload_image_real = document.getElementById('button_upload_image_real');
var button_save_avatar = document.getElementById('button_save_avatar');
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

button_save_avatar.addEventListener("click", function(){
    alert("create new avatar successfully!");
});