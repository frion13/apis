// Отслеживание изменения ориентации экрана:
// Напишите код, который отслеживает изменение ориентации экрана 
// устройства (с портретной на ландшафтную и наоборот) и выводит сообщение 
// об этом на веб-странице.


orientationMessage = document.querySelector('.orientation')
window.addEventListener('resize', (event) => {
    if (window.matchMedia("(orientation: portrait)").matches) {
        orientationMessage.textContent = "Ориентация экрана: Портретная";
    } else {
        orientationMessage.textContent = "Ориентация экрана: Ландшафтная";
    }
}, true);