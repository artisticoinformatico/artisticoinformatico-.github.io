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
    let popup = document.getElementById("popup");
    popup.className = "popup enable";
}

let zamknij = document.getElementById("zamknij");
/*let x = 0;
let y = 0;
function getCursor(event) {
    let x = event.clientX;
    let y = event.clientY;

}*/


function run(ile=10) {
    zamknij.style.left = Math.random(window.innerWidth)*700+"px";
    zamknij.style.top = Math.random(window.innerHeight)*700+"px";
}

//window.setInterval(run, 10);