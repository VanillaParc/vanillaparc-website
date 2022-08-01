let lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30,
    wrap = document.getElementById("wrap"),
    bg = document.getElementById("bg");

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = "translate(" + x + "px, " + y + "px) scale(1.1)";

    bg.style.transform = translate;

    window.requestAnimationFrame(moveBackground);
}

wrap.addEventListener("mousemove", function (e) {
    let lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    let lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));

    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;
});

moveBackground();
//
setInterval(fall, 10);

function fall() {
    const dropI = document.createElement("i");

    const drop = wrap.appendChild(dropI);

    drop.classList.add("drop");
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = Math.random() * 8 + "s";
    drop.style.opacity = Math.random() + 0.4;
    drop.style.transform = "scale(" + Math.random() * 1 + ")";

    document.body.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 6000);
}
