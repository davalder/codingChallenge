const data = document.querySelector('.input');
const buttonValidation = document.querySelector('.button');

const arrayWords = ['is', 'valid', 'right'];

const solution = (data, words) => {
    // let arrayData = data.split(/[A-Z]/)
    // return arrayData
   
    let arrayData = data.map(item => {

        let buildWord = (letter) => {
            let word;
            if (letter === /[A-Z]/) {
                word = word + ',';
            }
        }
        return buildWord(item);
        })

    return arrayData;
};

const eventClick = () => {
    let rest = solution(data.value, arrayWords);

    if (!document.querySelector('.out')) {
        let response = document.createElement('p');
        response.className = 'out'
        response.textContent = `This sequence "${data.value}" is ${rest}`

        let container = document.querySelector('.container')
        container.appendChild(response);
    } else {
        let response = document.querySelector('.out');
        response.textContent = `This sequence "${data.value}" is ${rest}`
    }

    console.log(rest)
}


buttonValidation.addEventListener('click', eventClick)