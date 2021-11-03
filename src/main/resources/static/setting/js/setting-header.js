const button_dropdown = document.getElementsByClassName('user-dropdown-action')[0];
const dropdownMenu = document.getElementById('dropdown');
const tab = document.getElementsByClassName('tab');
const navMenuItem = document.getElementsByClassName('navigation-menu-item');

button_dropdown.addEventListener('click', function(){
    if(dropdownMenu.classList.contains('active'))
    {
        button_dropdown.firstElementChild.classList.replace('icon-far-times','icon-far-bars');
        dropdownMenu.classList.remove("active");
    }
    else
    {
        button_dropdown.firstElementChild.classList.replace('icon-far-bars','icon-far-times');
        dropdownMenu.classList.add("active");
    }
});

document.addEventListener('click', function (event) {
    var isClickInsideElement = button_dropdown.contains(event.target);
    if(!isClickInsideElement)
    {
        button_dropdown.firstElementChild.classList.replace('icon-far-times','icon-far-bars');
        dropdownMenu.classList.remove("active");
    }
});
for (let iterator of tab) {
    iterator.addEventListener('click', function(){
        // let index = tab.indexOf(iterator);
        for (const iterator1 of tab) {
            iterator1 === iterator ? iterator1.classList.add('active') : iterator1.classList.remove('active');
        }
    });
}

for (let iterator3 of navMenuItem) {
    iterator3.addEventListener('click', function(){
        // let index = tab.indexOf(iterator);
        for (const iterator4 of navMenuItem) {
            iterator4 === iterator3 ? iterator4.classList.add('link-is-active') : iterator4.classList.remove('link-is-active');
        }
    });
}