let zamknij = document.getElementById("zamknij");
let popup = document.getElementById("popup");

function przejdz() {
    window.open("https://www.facebook.com/profile.php?id=100018630578075", "_blank");
}

function nieprzejdz() {
    let bubus = document.getElementById('bubus');
    bubus.remove();
    let okno = document.getElementById('okno');
    okno.innerHTML+= '<iframe src="https://www.pornhub.com/embed/6638bc6a7ef29" sandbox=" allow-same-origin allow-scripts" frameborder="0" width="100%" height="100%" scrolling="no" allowfullscreen allow="autoplay"></iframe>';
}

function sprawdz() {
    popup.className = "popup enable";
    zamknij.style.opacity = 1;
    run();
}



function run() {
    zamknij.style.left = Math.random(window.innerWidth)*700+"px";
    zamknij.style.top = Math.random(window.innerHeight)*700+"px";
}

function seriozamknij()
{
    popup.className = "popup";
}