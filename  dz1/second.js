// Предупреждение о несохраненных данных:
// Создайте веб-форму с текстовым полем. Реализуйте функционал,
//  при котором при попытке закрыть вкладку браузера появляется диалоговое окно с предупреждением 
//  о возможности потери введенных, но несохраненных данных.


const form = document.querySelector(".form");
let unsavedChanges = false;

form.addEventListener('input', () => {
    unsavedChanges = true;
});

window.addEventListener('beforeunload', (event) => {
    if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = '';
    }
});