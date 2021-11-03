const settingThemeBtn = document.getElementsByClassName('settings-theme-btn');

for (let theme1 of settingThemeBtn) {
    theme1.addEventListener('click', function(){
        for (const theme2 of settingThemeBtn) {
            theme2 === theme1 ? theme2.classList.add('selected') : theme2.classList.remove('selected');
        }
    });
}