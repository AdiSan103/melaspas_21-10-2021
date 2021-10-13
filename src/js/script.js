// play music
function OpenLetter() {
    // variabel
    var audio = document.getElementById("audio");
    // action
    audio.play();
    // call function system
    system();
}

function audio() {
    let audio = document.getElementsByTagName('audio')[0];
    let icon = document.querySelector('.audio-control i');
    if(audio.classList != "play") {
        audio.play();
        audio.classList.add('play');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    } else {
        audio.pause();
        audio.classList.remove('play');
        icon.classList.add('fa-pause');
        icon.classList.remove('fa-play');
    }
}


// system
function system() {
    // variabel
    let i = document.querySelector('.loadingIcon2');
    let j = document.querySelector('.body');
    // action
    i.classList.add('true');
    j.classList.remove('d-none');
    // wait
    setTimeout(() => {
        // action
        i.classList.add('d-none');
        // call function system2
        system2();
    },1000)
}

// system2 
function system2() {
    // banner
    gsap.to("h1.title", { duration: 1.5, text: 'Melaspas' });
    setTimeout(() => {
        remove('.banner h4.h4-2','fade1');
    }, 200);

    // when scroll
    window.addEventListener("scroll", () => {

        let thisScroll = this.scrollY;
        console.log(thisScroll);

        if(thisScroll > document.getElementsByClassName('content1')[0].offsetTop - 200) {
            remove('.content1 .hero-text', 'toUp');
        }

        if(thisScroll > document.getElementsByClassName('content2')[0].offsetTop - 300) {
            remove('.col-part1 .slider', 'toLeft');
            remove('.col-part2', 'toRight');
            setTimeout(() => {
                remove('.col-part1 .box', 'toLeft');
            },200)
        }

        if(thisScroll > document.getElementsByClassName('content3')[0].offsetTop + 100) {
            remove('.deskripsi', 'toUp');
        }

        if(thisScroll > document.getElementsByClassName('content7')[0].offsetTop - 200) {
            remove('.content7 h2', 'toUp');
            remove('.content7 p.p-content7', 'toUp');
            foreachLoopRemove('.content7 .col', 'fade1', 200);
        }

    });
}

// foreach loops Remove
function foreachLoopRemove(x, classRemove, time) {
    // variabel
    let i = 0;
    let j = document.querySelectorAll(x);
    // action
    for(let k = 0; k < j.length; k++){
        setTimeout(() => {
            j[k].classList.remove(classRemove);
        }, time * i);
        i++;
    }
}

// remove class
function remove(x, classRemove) {
    document.querySelector(x).classList.remove(classRemove);
}

// add class
function add(x, classAdd) {
    document.querySelector(x).classList.add(classAdd);
}