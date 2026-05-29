/* PARTICLES */

const particles = document.getElementById("particles");

for(let i=0;i<120;i++){

    let span = document.createElement("span");

    span.style.left = Math.random()*100 + "%";

    span.style.animationDuration = (5 + Math.random()*10) + "s";

    particles.appendChild(span);
}

/* FLOATING HEARTS */

const hearts = document.getElementById("hearts");

for(let i=0;i<40;i++){

    let heart = document.createElement("span");

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "%";

    heart.style.animationDuration = (5 + Math.random()*10) + "s";

    heart.style.fontSize = (15 + Math.random()*30) + "px";

    hearts.appendChild(heart);
}

/* YEAR VALIDATION */

const yearInput = document.getElementById("yearInput");
const openBtn = document.getElementById("openBtn");
const errorText = document.getElementById("errorText");

yearInput.addEventListener("input",()=>{

    if(yearInput.value === "2003"){

        openBtn.disabled = false;
        errorText.innerHTML = "";

    }else{

        openBtn.disabled = true;

        if(yearInput.value.length > 0){

            errorText.innerHTML =
            "Enter correct year using the hint.";

        }else{

            errorText.innerHTML = "";
        }
    }
});

/* OPEN SURPRISE */

const intro = document.getElementById("intro");
const loading = document.getElementById("loading");
const reveal = document.getElementById("reveal");

openBtn.addEventListener("click",()=>{

    intro.style.display = "none";

    loading.style.display = "flex";

    /* MUSIC */

    const music = document.getElementById("bgMusic");

    music.play().catch(()=>{
        console.log("Autoplay blocked.");
    });

    setTimeout(()=>{

        loading.style.display = "none";

        reveal.style.display = "flex";

        reveal.style.flexDirection = "column";

        animateCards();

        typeLoveText();

    },4000);

});

/* GALLERY ANIMATION */

function animateCards(){

    const cards = document.querySelectorAll(".card");

    cards.forEach((card,index)=>{

        setTimeout(()=>{

            card.classList.add("show");

        },index * 700);
    });
}

/* LOVE MESSAGE */

const message = `
Happy Birthday to the most precious person in my life ❤️

You are the reason behind my smile,
my happiness,
and my peace.

Every moment with you feels magical,
beautiful,
and unforgettable.

I promise to always stay beside you,
and support you...

Happy Birthday Meghudi 🫂
`;

function typeLoveText(){

    let i = 0;

    const loveText = document.getElementById("loveText");

    function typing(){

        if(i < message.length){

            loveText.innerHTML += message.charAt(i);

            i++;

            setTimeout(typing,35);
        }
    }

    typing();
}

/* BALLOONS */

const balloonBtn = document.getElementById("balloonBtn");

balloonBtn.addEventListener("click",()=>{

    setInterval(createBalloon,700);
});

function createBalloon(){

    let balloon = document.createElement("div");

    balloon.classList.add("balloon");

    balloon.style.left = Math.random()*100 + "%";

    balloon.style.background =
    `hsl(${Math.random()*360},100%,70%)`;

    balloon.style.animationDuration =
    (6 + Math.random()*5) + "s";

    document.body.appendChild(balloon);

    setTimeout(()=>{
        balloon.remove();
    },12000);
}
//////////////////////////////

/////////////////////////////
/* SPARKLE CURSOR */

document.addEventListener("mousemove",(e)=>{

    let sparkle = document.createElement("div");

    sparkle.style.position = "fixed";

    sparkle.style.left = e.clientX + "px";

    sparkle.style.top = e.clientY + "px";

    sparkle.style.width = "8px";

    sparkle.style.height = "8px";

    sparkle.style.borderRadius = "50%";

    sparkle.style.background = "#fff";

    sparkle.style.pointerEvents = "none";

    sparkle.style.boxShadow =
    "0 0 10px #fff,0 0 20px #ff4d88";

    sparkle.style.zIndex = "9999";

    sparkle.style.transition = "all 0.8s ease";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.style.opacity = "0";

        sparkle.style.transform = "scale(0)";

    },50);

    setTimeout(()=>{
        sparkle.remove();
    },800);

});

// video wrapper

const videoWrapper =
document.getElementById("videoWrapper");

const birthdayVideo =
document.getElementById("birthdayVideo");

/* BUTTON CLICK */

balloonBtn.addEventListener("click",()=>{

    /* SHOW VIDEO ONLY AFTER CLICK */

    videoWrapper.classList.add("show-video");

    /* PLAY VIDEO */

    birthdayVideo.play();

    /* SCROLL TO VIDEO */

    videoWrapper.scrollIntoView({

        behavior:"smooth",

        block:"center"
    });

});
