const data = document.querySelector('.input');
const buttonSequence = document.querySelector('.button');

const sequence = (data) => {
    let array = data.split('');
    if (array.length % 2) {
        return false;
    }

    let compare = (array) => {
        if (array[0] === '('){
            if (array[array.length - 1] === ')') {
                array.pop();
                array.shift();
                if (array.length) {
                    return compare(array);
                } else {
                    return true;
                }
            } else {
                return false;
            }
        } else if (array[0] === ')') {
            if (array[array.length - 1] === '(') {
                array.pop();
                array.shift();
                if (array.length) {
                    return compare(array);
                } else {
                    return true;
                }
            } else {
                return false;
            }
        } else if (array[0] === '[') {
            if (array[array.length - 1] === ']') {
                array.pop();
                array.shift();
                if (array.length) {
                    return compare(array);
                } else {
                    return true;
                }
            } else {
                return false;
            }
        } else if (array[0] === ']') {
            if (array[array.length - 1] === '[') {
                array.pop();
                array.shift();
                if (array.length) {
                    return compare(array);
                } else {
                    return true;
                }
            } else {
                return false;
            }
        } else if (array[0] === '{') {
            if (array[array.length - 1] === '}') {
                array.pop();
                array.shift();
                if (array.length) {
                    return compare(array);
                } else {
                    return true;
                }
            } else {
                return false;
            }
        } else if (array[0] === '}') {
            if (array[array.length - 1] === '{') {
                array.pop();
                array.shift();
                if (array.length) {
                    return compare(array);
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
    return compare(array)
};

const eventClick = () => {
    let rest = sequence(data.value);

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


buttonSequence.addEventListener('click', eventClick)