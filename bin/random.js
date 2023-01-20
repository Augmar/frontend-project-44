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

export { getRandomInt, getRandomSign }