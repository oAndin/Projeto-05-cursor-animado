console.log("Hello World!");

const evCursor = document.querySelector(".cursor");

var timeout;

document.addEventListener("mousemove", mover);

function mover(e){
    console.log("movendo");
        let x = e.pageX;
        let y = e.pageY;
        evCursor.style.left = x + "px";
        evCursor.style.top = y + "px";
        evCursor.style.display = "block";

        clearTimeout(timeout)
        timeout = setTimeout(() => {evCursor.computedStyleMap.displau="none",2000});
}

document.addEventListener("mouseout", () => {
    evCursor.computedStyleMap.display = "none"
});