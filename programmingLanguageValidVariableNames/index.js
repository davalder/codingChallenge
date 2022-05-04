const data = document.querySelector('.input');
const buttonValidation = document.querySelector('.button');

const arrayWords = ['is', 'valid', 'right'];

const solution = (data, words) => {
    let array = [];
    let word
    for (let i = 0; data.length > i; i++) {
        console.log(`entro al ciclo con ${data[i]}`)

        if (data[i].match(/[A-Z]/) && array.length === 0){
            return false;
        } else if (!data[i].match(/[A-Z]/)) {
            console.log('paso2')
            if (!word) {
                word = data[i];
            } else {
                word = word + data[i];
                if (data[i + 1]) {
                    if (data[i + 1].match(/[A-Z]/)) {
                        array.push(word)
                        word = '';
                    }
                } else if (!data[i + 1] && !array.length) {
                    return false
                } else if (!data[i + 1]) {
                    array.push(word)
                    word = '';
                }
            }
        } else if (data[i].match(/[A-Z]/)) {
            console.log('paso3')
            word = word + data[i];
            if (!data[i + 1]) {
                array.push(word)
                word = '';
            }
        }
    }

    array = array.map(item => item.toLowerCase());
    console.log(array);
    let falseAndTrue = array.map(item => words.some(element => element === item));

    return falseAndTrue.every(item => item === true);
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