/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {
    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })


    // 마이크 권한 
    // var AudioContext;
    // var audioContext;

    // window.onload = function() {
    //     navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
    //         AudioContext = window.AudioContext || window.webkitAudioContext;
    //         audioContext = new AudioContext();
    //         document.getElementById("player").play();
    //     }).catch(e => {
    //         console.error(`Audio permissions denied: ${e}`);
    //     });
    // }

})

// 메뉴리스트 클릭 시 숨김
function fn_hide() {
    const sidebar = document.getElementById('sidebar-wrapper');
    const menu = document.body.querySelector('.menu-toggle');
    const toggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
    sidebar.classList.remove('active');
    menu.classList.remove('active');

    toggleTimes.classList.add('fa-bars');
    toggleTimes.classList.remove('fa-xmark');
}

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};


function copy_to_clipboard(event) {    
    var copyText = event.target.parentNode.previousElementSibling;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("Copy");
    alert('감삼다 감삼다');
};

function fn_audio() {
    var audio = document.getElementById("player");
    if(audio.volume > 0.0) {
        audio.volume = 0.0;
    } else {
        audio.volume = 0.5;
    }
}
