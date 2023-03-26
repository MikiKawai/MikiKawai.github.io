//根据当前时间设置页面为暗黑和白色
var hour = new Date().getHours();
var body = document.getElementById('body');
// var body = document.getElementsByTagName('body')
// alert(hour)
window.onload = function () {
    if (18 > hour && hour >= 8) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else {
        body.style.backgroundColor = 'rgb(7, 7, 29)';
        body.style.color = 'white';
    }
}

//屏蔽F12和右键
setInterval(function () {
    check();
}, 2000);
var check = function () {
    function doCheck(a) {
        if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
            (function () {
            }['constructor']('debugger')());
        } else {
            (function () {
            }['constructor']('debugger')());
        }
        doCheck(++a);
    }

    try {
        doCheck(0);
    } catch (err) {
    }
};
check();
