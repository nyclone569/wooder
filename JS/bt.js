//bt 1
function activeBg() {
    window.addEventListener('scroll', function () {
        let headerbg = document.querySelector('header');
        if (window.pageYOffset > 200) {
            headerbg.style.background = 'black';
        }
        else {
            headerbg.style.background = 'none';
        }
    })
}
activeBg()
//bt 2



function displayBtt() {
    window.addEventListener('scroll', function () {
        let btt = document.querySelector('.backtotop');
        if (window.pageYOffset > (body.pageYOffset / 2)) {
            btt.classList.add('active');
        }
        else {
            btt.classList.remove('active');
        }
    })
}

function btt() {
    let btn = document.querySelector('.btn-btt');
    btn.addEventListener('click', function () {
        window.scrollTo(0, 0);
    })
}
btt()