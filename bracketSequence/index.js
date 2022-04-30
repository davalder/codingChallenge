const data = document.querySelector('.input');
const buttonSequence = document.querySelector('.button');

const sequence = (data) => {
    let array = data.split('');
    if (array.length % 2) {
        return false;
    }

    let arrayHalf = array.length / 2;

    let arrayFirstHalf = array.slice(0, arrayHalf);
    let arraySecondHalf = array.slice(arrayHalf, array.length);

    let compare = (array1, array2) => {
        console.log('on function',  array1)
        if (array1[array1.length -1] === '('){
            if (array2[0] === ')') {
                console.log(array1)
                array1.pop();
                array2.shift();
                console.log(array1)
                if (array1.length) {
                    return compare(array1, array2);
                } else {
                    return true;
                }
            } else {
                return false;
            }
        } else if (array1[array1.length - 1] === '[') {
            if (array2[0] === ']') {
                array1.pop();
                array2.shift();
                if (array1.length) {
                    return compare(array1, array2);
                } else {
                    return true;
                }
            } else {
                return false;
            }
        } else if (array1[array1.length - 1] === '{') {
            if (array2[0] === '}') {
                array1.pop();
                array2.shift();
                if (array1.length) {
                    return compare(array1, array2);
                } else {
                    return true;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    console.log(arrayFirstHalf);
    console.log(arraySecondHalf);

    return compare(arrayFirstHalf, arraySecondHalf)
};

const eventClick = () => {
    let rest = sequence(data.value);

    let response = document.createElement('p');
    response.className = 'out'
    response.textContent = rest

    let container = document.querySelector('.container')
    container.appendChild(response);

    console.log(rest)
}


buttonSequence.addEventListener('click', eventClick)