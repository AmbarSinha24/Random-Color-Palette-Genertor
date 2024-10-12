function getRandomHexColor() {
    let hexCode = '#';
    const hexChars = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
        hexCode += hexChars[Math.floor(Math.random() * 16)];
    }

    return hexCode;
}

const palettes = document.querySelectorAll('.element');
let btn = document.querySelector('button');
const all = document.querySelectorAll('.element-color')
let element = document.querySelector('.element-color')
function changeColor() {
    for (let i of palettes) {
        let temp = getRandomHexColor();
        let child = i.children;
        child[0].style.backgroundColor = temp;
        child[1].innerHTML = temp;
    }
}

for (let i of all) {
    i.addEventListener('click', function (e) {
        let elem = e.target;
        console.log(elem)
        const bgcolor = window.getComputedStyle(elem).backgroundColor;
        console.log(bgcolor)

        //navigator.clipboard API Call which returns a Promise
        navigator.clipboard.writeText(bgcolor)
            .then(() => {
                alert("Copied to Clipboard");
            })

    })
}
btn.addEventListener('click', changeColor);





