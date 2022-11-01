const getS = selector => document.querySelector(selector)
setInterval(() => {
    let data = new Date()
    let mm = data.getMinutes()
    let ss = data.getSeconds()
    if (ss < 10) ss = '0' + ss
    if (mm < 10) mm = '0' + mm
})

let min = '00'
let sec = '00'
let time
let leftNum = getS('.big-num').innerHTML;
let rightNum = 0;
let timer_down;

getS('.minus').addEventListener('click', () => {
    let m = +getS('.big-num').innerHTML - 1
    if (getS('.big-num').innerHTML <= 10 && getS('.big-num').innerHTML > 0) {
        getS('.big-num').innerHTML = '0' + m
    } else {
        getS('.big-num').innerHTML = m
    }
    getS('.plus').classList.remove('hover')
    getS('.minus').classList.add('hover')
})

getS('.plus').addEventListener('click', () => {
    let p = +getS('.big-num').innerHTML + 1
    if (getS('.big-num').innerHTML < 9 && getS('.big-num').innerHTML >= 0) {
        getS('.big-num').innerHTML = '0' + p
    } else {
        getS('.big-num').innerHTML = p
    }
    getS('.plus').classList.add('hover')
    getS('.minus').classList.remove('hover')
})

getS('.startT').addEventListener('click', function () {
    if (getS('.big-num').innerHTML < 10) {
        getS('.left').innerHTML = '0' + (getS('.big-num').innerHTML)
    } else {
        getS('.left').innerHTML = getS('.big-num').innerHTML
    }
    getS('.left').innerHTML = getS('.big-num').innerHTML
    start2Timer();
    getS('.startT').disabled = true;
    getS('.stopT').disabled = false;
    getS('.resetT').disabled = true;
    getS('.startT').classList.add('hover')
    getS('.resetT').classList.remove('hover')
    getS('.stopT').classList.remove('hover')
});

getS('.stopT').addEventListener('click', function () {
    clearTimeout(timer_down);
    getS('.startT').disabled = false;
    getS('.stopT').disabled = true;
    getS('.resetT').disabled = false;
    getS('.startT').classList.remove('hover')
    getS('.resetT').classList.remove('hover')
    getS('.stopT').classList.add('hover')
});

getS('.resetT').addEventListener('click', function () {
    leftNum = 0;
    rightNum = 0;
    document.querySelector('.left').innerHTML = '00';
    document.querySelector('.right', ).innerHTML = '00';
    getS('.startT').classList.remove('hover')
    getS('.resetT').classList.add('hover')
    getS('.stopT').classList.remove('hover')
});

function start2Timer() {
    leftNum = getS('.left').innerHTML;
    timer_down = setTimeout(function () {
        rightNum--;
        if (rightNum < 0) {
            rightNum = 59
            leftNum--;
            if (leftNum < 10) {
                leftNum = "0" + leftNum;
            }
            getS('.left').innerHTML = leftNum;
            if (leftNum == 0) {
                location.reload()
            }
        }
        if (rightNum < 10) {
            rightNum = "0" + rightNum;
        }
        getS('.right').innerHTML = rightNum;
        start2Timer();
    }, 1000);
}