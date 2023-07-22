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

//屏蔽F12 debug
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
/*==========禁止右键和f12==========*/
document.addEventListener('keydown', function () {
    if (event.keyCode === 123) {
        alert("yo!");
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        alert("ayo!");
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
        alert("heyo!");
        return false;
    } else if (event.ctrlKey && event.keyCode === 85) {
        alert("o!");
        return false;
    }
}, false);

if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
        alert("sounds like a L php user trying to right-click eeh!");
        e.preventDefault();
    }, false);
} else {
    //attachEvent方法是IE浏览器所独有的
    document.attachEvent('oncontextmenu', function () {
        alert("e!");
        window.event.returnValue = false;
    });
}

function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(function () {
    $('.btn').click(function () {
        $(this).toggleClass('active');
        return $('.box').toggleClass('open');
    });

}).call(this);


