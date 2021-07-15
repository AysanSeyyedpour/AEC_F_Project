document.querySelector('.icon_h');
let hiddin = document.querySelector('.icon_h');
hiddin.onclick = function(event) {
    event.target.style.transition = '.5s ease-in-out';
    event.target.style.transform = 'rotate(-180deg)';
}