const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomSign = (list) => {
    let min = 0;
    let max = list.length;
    let s = list[getRandomInt(min, max)];
    
    return s;
}

const getRandomProgression = (progressionLength) => {
    let step = getRandomInt(2, 6);
    let arr = [];
    let x = getRandomInt(0, 20);
    for (let i = 0; i < progressionLength; i++) {
        arr.push(x);
        x += step;
    }

    return arr;
}

export { getRandomInt, getRandomSign, getRandomProgression };
