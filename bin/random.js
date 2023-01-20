const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomSign = (list) => {
    let min = 0;
    let max = list.length;
    return list[getRandomInt(min, max)];
}

export { getRandomInt, getRandomSign }