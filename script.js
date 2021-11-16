let btnRandom = document.querySelector('button')
let result = document.querySelector('h1')

let clubs = ['Driver', '3 Wood', 'Rescue or Five wood', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'PW', 'Gap wedge', 'SW', 'LW'];


function getRandomClub(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnRandom.addEventListener('click', () => {
    let index = getRandomClub(0, clubs.length - 1);
    result.innerText = clubs[index];
});