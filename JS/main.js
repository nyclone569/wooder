//write function
function addActive(item) {
    item.classList.add('active');
};

function removeActive(item) {
    item.classList.remove('active');
};

function toggleActive(item) {
    item.classList.toggle('active');
};

//Bt 1: header background color
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


//Bt2: back to top button
function displayBtt() {
    window.addEventListener('scroll', function () {
        let btt = document.querySelector('.backtotop');

        // let body = document.querySelector('body');

        let slideSc = document.querySelector('.scbanner');
        let furniSc = document.querySelector('.scfurniture');
        let wiqSc = document.querySelector('.scwiq');
        if (window.pageYOffset > ((slideSc.offsetHeight + furniSc.offsetHeight + wiqSc.offsetHeight) / 2)) {
            addActive(btt);
        }
        else {
            removeActive(btt);
        }
    })
}

function btt() {
    let btn = document.querySelector('.btn-btt');
    btn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
}


//Bt 3: lang switch

function langSwitch() {
    let langMenu = document.querySelector('.header__lang'),
        langCurrent = document.querySelector('.header__lang-current'),
        langSelect = document.querySelectorAll('.header__lang .lang');

    langMenu.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleActive(langMenu);
    });

    window.addEventListener('click', function () {

        removeActive(langMenu);
    });

    langSelect.forEach(function (item) {
        item.addEventListener('click', function () {
            let text = this.textContent;
            let langCurrentSpan = langCurrent.textContent;
            langCurrent.innerHTML = text;
            this.innerHTML = langCurrentSpan;
        })
    })
}


//nav mobile menu
function navMenu() {
    let nav = document.querySelector('.nav'),
        btnMenu = document.querySelector('.header .header__btnmenu');
    btnMenu.addEventListener('click', function () {
        toggleActive(this)
        toggleActive(nav)
    })

    function hideNav() {
        removeActive(btnMenu)
        removeActive(nav)
    }

    window.addEventListener('resize', function () {
        let wWindow = window.innerWidth;
        if (wWindow > 992) {
            hideNav();
        }
    })
}


//video
function videoPopUp() {
    let box = document.querySelector('.videobox'),
        video = document.querySelectorAll('.video'),
        close = document.querySelector('.close-btn');

    video.forEach(function (item) {
        item.addEventListener('click', function (event) {
            let iframe = document.querySelector('.iframe')
            data = this.dataset.src;
            iframe.setAttribute('src', data);
            addActive(box)
        })
    });

    function unactive() {
        removeActive(box)
    }
    close.addEventListener('click', function () {
        unactive()
    });
}


//slider
function slide() {
    var controls = document.querySelectorAll('.btn-slide');
    var slides = document.querySelectorAll('ul .scbanner__list-item');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 2000);

    function nextSlide() {
        slides[currentSlide].style.opacity = 0;
        goToSlide(currentSlide + 1);
    }

    function previousSlide() {
        slides[currentSlide].style.opacity = 0;
        goToSlide(currentSlide - 1);
    }

    function goToSlide(n) {
        slides[currentSlide].style.opacity = 1;
    }

    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    next.onclick = function () {
        nextSlide();
    };
    previous.onclick = function () {
        previousSlide();
    };
}

//scroll to 

function menu() {
    let menu = document.querySelectorAll('.header__menu li a'),
        heightHeader = document.querySelector('.header').offsetHeight;

    function removeActiveMenu() {
        menu.forEach(function (item) {
            removeActive(item);
        });
    };
    menu.forEach(function (item) {


        item.addEventListener('click', function (e) {
            e.preventDefault();
            let href = item.getAttribute('href'),
                classname = href.replace('#', ''),
                section = document.querySelector('.' + classname),
                scroll = section.offsetTop;

            window.scrollTo({
                top: scroll - heightHeader + 1,
                behavior: "smooth"
            });
        });

        window.addEventListener('scroll', function () {
            let positionScroll = window.pageYOffset;
            let href = item.getAttribute('href'),
                classname = href.replace('#', ''),
                section = document.querySelector('.' + classname),
                scroll = section.offsetTop;

            if (positionScroll > scroll - heightHeader - 1 && positionScroll < section.offsetTop + section.offsetHeight) {
                removeActiveMenu();
                addActive(item);
            }
            else {
                removeActive(item);
            }
        })
    });


};



//test flikity
function slider() {
    //call flkty
    var heroBanner = document.querySelector('.scbanner__list'),
        flkty = new Flickity(
            heroBanner,
            {
                draggable: false,
                freeScroll: false,
                contain: true,
                prevNextButtons: false,
                pageDots: true,
                wrapAround: true
            }
        );
    //set variables
    var number = document.querySelector('.scbanner__stay .number');

    //set number for page
    flkty.on('change', function (index) {
        number.innerHTML = '0' + (index + 1);
    });

    // previous
    var previousButton = document.getElementById('previous');
    previousButton.addEventListener('click', function () {
        flkty.previous(true);
    });
    //next
    var nextButton = document.getElementById('next');
    nextButton.addEventListener('click', function () {
        flkty.next(true);
    });

}


//gallery
function galleryShow() {
    Fancybox.bind('[data-fancybox]', {
        caption: function (fancybox, carousel, slide) {
            return (
                `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
            );
        },
    });
}


//slider gallery
function imgSlide() {
    //khoi tao
    var img = document.querySelector('.scimgs'),
        flkty = new Flickity(
            img,
            {
                cellAlign: 'left',
                contain: true,
                draggable: '>1',
                freeScroll: true,
                contain: true,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                lazyLoad: 3
            }
        );
}


window.addEventListener('load', function () {
    activeBg();
    displayBtt();
    btt(); langSwitch(); navMenu(); videoPopUp(); slide(); menu(); slider(); galleryShow(); imgSlide();
})